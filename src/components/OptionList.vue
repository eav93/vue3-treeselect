<template>
  <div
    ref="listRef"
    :class="virtual ? 'vue-treeselect__list vue-treeselect__list--virtual' : 'vue-treeselect__list'"
    :style="listStyle"
    @mousedown="handleMouseDown"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <!-- Rows are wrapped only in virtual mode (the wrapper is moved with a transform) -->
    <div v-if="virtual" :style="windowStyle">
      <template v-for="row in renderedRows" :key="row.key">
        <Option v-if="row.type === 'option'" :node="row.node" :level="row.level" />
        <div
          v-else
          :class="`vue-treeselect__list-item vue-treeselect__indent-level-${row.level}`"
        >
          <Tip v-if="row.type === 'no-children'" type="no-children" icon="warning">
            {{ treeselect.texts.value.noChildrenText }}
          </Tip>
          <Tip v-else-if="row.type === 'loading'" type="loading" icon="loader">
            {{ treeselect.texts.value.loadingText }}
          </Tip>
          <Tip v-else type="error" icon="error">
            {{ row.node.childrenStates!.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="treeselect.texts.value.retryTitle"
              :data-id="row.node.id"
            >
              {{ treeselect.texts.value.retryText }}
            </a>
          </Tip>
        </div>
      </template>
    </div>
    <template v-else>
      <template v-for="row in renderedRows" :key="row.key">
        <Option v-if="row.type === 'option'" :node="row.node" :level="row.level" />
        <div
          v-else
          :class="`vue-treeselect__list-item vue-treeselect__indent-level-${row.level}`"
        >
          <Tip v-if="row.type === 'no-children'" type="no-children" icon="warning">
            {{ treeselect.texts.value.noChildrenText }}
          </Tip>
          <Tip v-else-if="row.type === 'loading'" type="loading" icon="loader">
            {{ treeselect.texts.value.loadingText }}
          </Tip>
          <Tip v-else type="error" icon="error">
            {{ row.node.childrenStates!.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="treeselect.texts.value.retryTitle"
              :data-id="row.node.id"
            >
              {{ treeselect.texts.value.retryText }}
            </a>
          </Tip>
        </div>
      </template>
      <!-- Keeps the scroll height stable while the remaining rows are being rendered -->
      <div v-if="pendingRowsHeight" :style="{ height: `${pendingRowsHeight}px` }" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { cssEscape, scrollIntoView } from '@/utils'
import { useTreeselectContext } from '@/context'
import Option from '@/components/Option.vue'
import Tip from '@/components/Tip.vue'
import type { NormalizedNode } from '@/types'

/**
 * The options of the menu, rendered as a flat list of rows (indentation is done with
 * `vue-treeselect__indent-level-N` classes).
 *
 * - With `virtual`, only the rows inside the visible part of the menu are rendered.
 * - Otherwise all rows are rendered, but large lists are rendered progressively: the first
 *   screens synchronously, the rest in small chunks between frames, so that opening the menu
 *   or clearing a search doesn't block the page.
 *
 * Mouse events of all rows are handled here (event delegation), so that rows don't need
 * listeners of their own.
 */

// Rows rendered above and below the visible area
const OVERSCAN = 8
// Used until the real row height has been measured
const DEFAULT_ROW_HEIGHT = 32
// Progressive rendering: rows rendered synchronously (in screens of the menu), target time per chunk
const INITIAL_SCREENS = 3
const MIN_INITIAL_ROWS = 100
const CHUNK_BUDGET_MS = 25
// A fully rendered list growing by up to this many rows (or its own length) is rendered at once
const SYNC_INSERT_LIMIT = 1000

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
let chunkSize = 200
let fillTimer: ReturnType<typeof setTimeout> | null = null
let isUnmounted = false

const isComplete = (): boolean => renderLimit.value >= rows.value.length

const scheduleFill = (): void => {
  if (fillTimer || isUnmounted || isComplete()) return
  fillTimer = setTimeout(fillStep, 0)
}

async function fillStep(): Promise<void> {
  fillTimer = null
  if (isUnmounted || isComplete()) return
  const start = performance.now()
  renderLimit.value = Math.min(rows.value.length, renderLimit.value + chunkSize)
  await nextTick()
  // Adapt the chunk size to the time it took to render
  const elapsed = Math.max(1, performance.now() - start)
  chunkSize = Math.min(2000, Math.max(50, Math.round(chunkSize * CHUNK_BUDGET_MS / elapsed)))
  scheduleFill()
}

/**
 * Make sure that the rows up to `index` are rendered
 */
const ensureRendered = (index: number): void => {
  if (index < renderLimit.value) return
  renderLimit.value = Math.min(rows.value.length, index + 1 + chunkSize)
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
 * Scroll the menu so that an option becomes visible (rendered or not)
 */
const scrollToNode = (node: NormalizedNode): void => {
  const $menu = treeselect.getMenu()
  if (!$menu) return

  if (!listProps.virtual) {
    const findOption = () => listRef.value?.querySelector(`.vue-treeselect__option[data-id="${cssEscape(String(node.id))}"]`)
    const $option = findOption()
    // Scroll synchronously when the option is rendered (keeps the order with restoring the scroll position)
    if ($option) return scrollIntoView($menu, $option as HTMLElement)

    const index = rows.value.findIndex(row => row.type === 'option' && row.node === node)
    if (index === -1) return
    ensureRendered(index)
    void nextTick(() => {
      const $rendered = findOption()
      if ($rendered) scrollIntoView($menu, $rendered as HTMLElement)
    })
    return
  }

  const index = rows.value.findIndex(row => row.type === 'option' && row.node === node)
  if (index === -1) return

  // Rows are positioned with a transform, so scroll by the index of the row
  const height = rowHeight.value
  const top = listOffsetTop.value + index * height
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
  scheduleFill()
})

onBeforeUnmount(() => {
  isUnmounted = true
  if (fillTimer) clearTimeout(fillTimer)
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
