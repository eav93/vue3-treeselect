<template>
  <div
    ref="listRef"
    :class="virtual ? 'vue-treeselect__list vue-treeselect__list--virtual' : 'vue-treeselect__list'"
    :style="listStyle"
    @mousedown="handleMouseDown"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <!-- Virtual: the rendered window is moved with a transform -->
    <div v-if="virtual" :style="windowStyle">
      <ListChunk :rows="renderedRows" :row-height="rowHeight" />
    </div>
    <template v-else>
      <ListChunk v-for="block in blocks" :key="block.id" :rows="block.rows" :row-height="rowHeight" />
      <!-- Keeps the scroll height stable while the remaining rows are being rendered -->
      <div v-if="pendingRowsHeight" :style="{ height: `${pendingRowsHeight}px` }" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { scrollIntoView } from '@/utils'
import { useTreeselectContext } from '@/context'
import ListChunk from '@/components/ListChunk'
import type { MenuRow, NormalizedNode } from '@/types'

/**
 * The options of the menu, rendered as a flat list of rows (indentation is done with
 * the `--level` custom property / `vue-treeselect__indent-level-N` classes).
 *
 * - Rows are grouped in blocks (ListChunk): blocks are the unit of `content-visibility: auto`
 *   and of Vue's patching, so the browser and Vue skip the blocks that didn't change.
 * - Large lists are rendered progressively: the first screens synchronously, the rest in
 *   chunks between frames, so that opening the menu or clearing a search doesn't block the page.
 * - With `virtual`, only the rows inside the visible part of the menu are rendered.
 *
 * Mouse events of all rows are handled here (event delegation), so that rows don't need
 * listeners of their own.
 */

// Rows per block; a block that grows (progressive fill, expanded branch) is split above the max
const BLOCK_SIZE = 100
const BLOCK_MAX_SIZE = 150
// Rows rendered above and below the visible area (virtual mode)
const OVERSCAN = 8
// Used until the real row height has been measured
const DEFAULT_ROW_HEIGHT = 32
// Progressive rendering: rows rendered synchronously (in screens of the menu), target time per step
const INITIAL_SCREENS = 3
const MIN_INITIAL_ROWS = 100
const STEP_BUDGET_MS = 25
const MIN_STEP_ROWS = 200
const MAX_STEP_ROWS = 3000
// A fully rendered list growing by up to this many rows (or its own length) is rendered at once
const SYNC_INSERT_LIMIT = 1000

interface Block {
  id: number
  rows: MenuRow[]
}

const listProps = defineProps<{
  virtual?: boolean
}>()

const treeselect = useTreeselectContext()
const props = treeselect.props

const listRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const listOffsetTop = ref(0)
const measuredRowHeight = ref<number | null>(null)

const rows = treeselect.menuRows

// Row height of the virtual list, also used to estimate the height of rows not rendered yet
const rowHeight = computed(() => props.optionHeight || measuredRowHeight.value || DEFAULT_ROW_HEIGHT)

// ============================================================================
// Progressive rendering (non-virtual mode)
// ============================================================================

const initialRowCount = (): number =>
  Math.max(MIN_INITIAL_ROWS, Math.ceil((props.maxHeight || 300) / 20) * INITIAL_SCREENS)

// Number of rows rendered so far
const renderLimit = ref(listProps.virtual ? Infinity : initialRowCount())
let stepRows = 500
let fillTimer: ReturnType<typeof setTimeout> | null = null
let fillFrame: number | null = null
let isUnmounted = false

const isComplete = (): boolean => renderLimit.value >= rows.value.length

const scheduleFill = (): void => {
  if (fillTimer || fillFrame !== null || isUnmounted || isComplete()) return
  fillTimer = setTimeout(fillStep, 0)
}

// The first step waits for the first frame, so that the initial rows are painted first
const scheduleFillAfterPaint = (): void => {
  if (fillFrame !== null || isComplete()) return
  if (typeof requestAnimationFrame === 'undefined') return scheduleFill()
  fillFrame = requestAnimationFrame(() => {
    fillFrame = null
    scheduleFill()
  })
}

async function fillStep(): Promise<void> {
  fillTimer = null
  if (isUnmounted || isComplete()) return
  const start = performance.now()
  renderLimit.value = Math.min(rows.value.length, renderLimit.value + stepRows)
  await nextTick()
  // Adapt the step to the time it took to render
  const elapsed = Math.max(1, performance.now() - start)
  stepRows = Math.min(MAX_STEP_ROWS, Math.max(MIN_STEP_ROWS, Math.round(stepRows * STEP_BUDGET_MS / elapsed)))
  scheduleFill()
}

/**
 * Make sure that the rows up to `index` are rendered
 */
const ensureRendered = (index: number): void => {
  if (index < renderLimit.value) return
  renderLimit.value = Math.min(rows.value.length, index + 1 + stepRows)
  scheduleFill()
}

if (!listProps.virtual) {
  watch(rows, (newRows, oldRows) => {
    const wasComplete = renderLimit.value >= oldRows.length
    const growth = newRows.length - oldRows.length
    // Changes of a fully rendered list (expanding a branch, narrowing a search) are rendered
    // at once. Rendering a large insertion progressively would push the rows below it out
    // of the rendered range, so only growth from a small list (e.g. clearing a search) is
    // rendered progressively.
    if (wasComplete && growth <= Math.max(SYNC_INSERT_LIMIT, oldRows.length)) {
      renderLimit.value = newRows.length
    } else {
      renderLimit.value = Math.max(initialRowCount(), Math.min(renderLimit.value, oldRows.length))
    }
    scheduleFill()
  })
}

// ============================================================================
// Blocks (non-virtual mode)
// ============================================================================

let previousBlocks: Block[] = []
let nextBlockId = 0

const sameRows = (a: MenuRow[], b: MenuRow[]): boolean => {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false
  return true
}

/**
 * Group the rendered rows in blocks, keeping rows in the block they were in before:
 * a block whose rows didn't change keeps its identity and is skipped by Vue and
 * (thanks to `content-visibility`) by the browser.
 */
const blocks = computed<Block[]>(() => {
  const rendered = rows.value.length <= renderLimit.value ? rows.value : rows.value.slice(0, renderLimit.value)

  const blockOfRow = new Map<MenuRow, Block>()
  const orderOfBlock = new Map<Block, number>()
  previousBlocks.forEach((block, order) => {
    orderOfBlock.set(block, order)
    for (const row of block.rows) blockOfRow.set(row, block)
  })

  const result: Block[] = []
  // The block being built (`source`: the previous block its rows come from)
  const state: { current: { id: number, rows: MenuRow[], source: Block | null } | null } = { current: null }
  let lastSourceOrder = -1

  const close = (): void => {
    const current = state.current
    if (!current) return
    if (current.rows.length) {
      // Reuse the previous block object when nothing changed
      result.push(current.source && sameRows(current.source.rows, current.rows)
        ? current.source
        : { id: current.id, rows: current.rows })
    }
    state.current = null
  }

  for (let i = 0; i < rendered.length; i++) {
    const row = rendered[i]
    const source = blockOfRow.get(row)
    const sourceOrder = source ? orderOfBlock.get(source)! : -1
    let current = state.current

    if (source && (current?.source === source || sourceOrder > lastSourceOrder)) {
      // A row of a previous block, still in order: keep it there
      if (current?.source !== source) {
        close()
        current = state.current = { id: source.id, rows: [], source }
        lastSourceOrder = sourceOrder
      }
      current!.rows.push(row)
    } else {
      // A new row: append to the current block, start a new one when it is full
      const full = current && current.rows.length >= (current.source ? BLOCK_MAX_SIZE : BLOCK_SIZE)
      if (!current || full) {
        close()
        current = state.current = { id: nextBlockId++, rows: [], source: null }
      }
      current.rows.push(row)
    }
  }
  close()

  previousBlocks = result
  return result
})

// ============================================================================
// Virtual scrolling
// ============================================================================

const range = computed(() => {
  const total = rows.value.length
  if (!listProps.virtual) return { start: 0, end: Math.min(total, renderLimit.value) }

  const height = rowHeight.value
  const viewportHeight = treeselect.getMenu()?.clientHeight || props.maxHeight || 300
  const relativeScrollTop = Math.max(0, scrollTop.value - listOffsetTop.value)
  // Clamp: scrollTop may still be past the end after the list has shrunk
  const start = Math.max(0, Math.min(Math.floor(relativeScrollTop / height), total) - OVERSCAN)
  const end = Math.min(total, Math.ceil((relativeScrollTop + viewportHeight) / height) + OVERSCAN)
  return { start, end }
})

const renderedRows = computed(() => {
  const { start, end } = range.value
  return start === 0 && end === rows.value.length ? rows.value : rows.value.slice(start, end)
})

const pendingRowsHeight = computed(() => {
  if (listProps.virtual) return 0
  return Math.max(0, rows.value.length - renderLimit.value) * rowHeight.value
})

const listStyle = computed(() => listProps.virtual
  ? { position: 'relative' as const, height: `${rows.value.length * rowHeight.value}px` }
  : undefined)

const windowStyle = computed(() => listProps.virtual
  ? { transform: `translateY(${range.value.start * rowHeight.value}px)` }
  : undefined)

const measure = (): void => {
  const $list = listRef.value
  if (!$list) return
  listOffsetTop.value = $list.offsetTop
  if (!props.optionHeight) {
    const $row = $list.querySelector('.vue-treeselect__list-item') as HTMLElement | null
    if ($row && $row.offsetHeight > 0) measuredRowHeight.value = $row.offsetHeight
  }
}

const handleScroll = (): void => {
  const $menu = treeselect.getMenu()
  if (!$menu) return
  // Content above the list (e.g. the before-list slot) may change its height
  if (listRef.value) listOffsetTop.value = listRef.value.offsetTop

  if (listProps.virtual) {
    scrollTop.value = $menu.scrollTop
  } else if (!isComplete()) {
    // Scrolled into rows that haven't been rendered yet
    const bottom = $menu.scrollTop + $menu.clientHeight - listOffsetTop.value
    ensureRendered(Math.ceil(bottom / rowHeight.value))
  }
}

/**
 * DOM element of a rendered row (non-virtual mode): block element → child at the offset
 */
const getRowElement = (index: number): HTMLElement | null => {
  const $list = listRef.value
  if (!$list) return null
  let offset = index
  const blockList = blocks.value
  for (let i = 0; i < blockList.length; i++) {
    const size = blockList[i].rows.length
    if (offset < size) {
      const $block = $list.children[i] as HTMLElement | undefined
      return ($block?.children[offset] as HTMLElement | undefined)?.querySelector('.vue-treeselect__option') ?? null
    }
    offset -= size
  }
  return null
}

/**
 * Scroll the menu so that an option becomes visible (rendered or not)
 */
const scrollToNode = (node: NormalizedNode): void => {
  const $menu = treeselect.getMenu()
  if (!$menu) return
  const row = treeselect.getOptionRow(node)
  if (!row) return

  if (!listProps.virtual) {
    const $option = getRowElement(row.index)
    // Scroll synchronously when the option is rendered (keeps the order with restoring the scroll position)
    if ($option) return scrollIntoView($menu, $option)

    ensureRendered(row.index)
    void nextTick(() => {
      const $rendered = getRowElement(row.index)
      if ($rendered) scrollIntoView($menu, $rendered)
    })
    return
  }

  // Rows are positioned with a transform, so scroll by the index of the row
  const height = rowHeight.value
  const top = listOffsetTop.value + row.index * height
  if (top < $menu.scrollTop) {
    $menu.scrollTop = top
  } else if (top + height > $menu.scrollTop + $menu.clientHeight) {
    $menu.scrollTop = top + height - $menu.clientHeight
  }
  scrollTop.value = $menu.scrollTop
}

onMounted(() => {
  treeselect.setScrollToOptionHandler(scrollToNode)
  handleScroll()
  void nextTick(measure)
  scheduleFillAfterPaint()
})

onBeforeUnmount(() => {
  isUnmounted = true
  if (fillTimer) clearTimeout(fillTimer)
  if (fillFrame !== null && typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(fillFrame)
  treeselect.setScrollToOptionHandler(null)
})

// ============================================================================
// Delegated mouse events
// ============================================================================

const getNodeOf = (el: Element | null): NormalizedNode | null => {
  const id = el?.getAttribute('data-id')
  return id == null ? null : treeselect.forest.nodeMap[id] || null
}

const handleMouseDown = (evt: MouseEvent): void => {
  if (evt.button !== 0) return
  const target = evt.target as Element

  const $retry = target.closest('.vue-treeselect__retry')
  if ($retry) {
    const node = getNodeOf($retry)
    if (node) treeselect.loadChildrenOptions(node)
    return
  }

  const $option = target.closest('.vue-treeselect__option')
  const node = getNodeOf($option)
  if (!node) return

  if (target.closest('.vue-treeselect__option-arrow-container')) {
    treeselect.toggleExpanded(node)
  } else if (target.closest('.vue-treeselect__label-container')) {
    if (node.isBranch && props.disableBranchNodes) {
      treeselect.toggleExpanded(node)
    } else {
      treeselect.select(node)
    }
  }
}

// Same as `mouseenter` on each option: only react when the pointer enters another option
let $hoveredOption: Element | null = null

const handleMouseOver = (evt: MouseEvent): void => {
  const $option = (evt.target as Element).closest('.vue-treeselect__option')
  if (!$option) {
    // Over a tip or the list padding: entering an option again highlights it again
    $hoveredOption = null
    return
  }
  if ($option === $hoveredOption) return
  $hoveredOption = $option
  const node = getNodeOf($option)
  if (node) treeselect.setCurrentHighlightedOption(node, false)
}

const handleMouseLeave = (): void => {
  $hoveredOption = null
}

defineExpose({
  handleScroll,
})
</script>
