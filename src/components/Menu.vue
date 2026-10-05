<template>
  <div
    ref="menuContainerRef"
    class="vue-treeselect__menu-container"
    :style="menuContainerStyle"
  >
    <Transition name="vue-treeselect__menu--transition">
      <div
        v-if="treeselect.menu.isOpen"
        ref="menuRef"
        class="vue-treeselect__menu"
        :style="menuStyle"
        @mousedown="treeselect.handleMouseDown"
        @scroll.passive="handleScroll"
      >
        <!-- Before list slot -->
        <SlotRenderer v-if="treeselect.slots['before-list']" :render-slot="treeselect.slots['before-list']" />

        <!-- Async search menu -->
        <template v-if="props.async">
          <Tip v-if="showSearchPrompt" type="search-prompt" icon="warning">
            {{ props.searchPromptText }}
          </Tip>
          <Tip v-else-if="asyncEntry.isLoading" type="loading" icon="loader">
            {{ props.loadingText }}
          </Tip>
          <Tip v-else-if="asyncEntry.loadingError" type="error" icon="error">
            {{ asyncEntry.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="props.retryTitle"
              @click="treeselect.handleRemoteSearch"
            >
              {{ props.retryText }}
            </a>
          </Tip>
          <Tip v-else-if="showAsyncNoResults" type="no-results" icon="warning">
            {{ props.noResultsText }}
          </Tip>
          <OptionList v-else ref="optionListRef" :key="props.virtualScroll ? 'virtual' : 'list'" :virtual="props.virtualScroll" />
        </template>

        <!-- Local search / normal menu -->
        <template v-else>
          <Tip v-if="treeselect.rootOptionsStates.isLoading" type="loading" icon="loader">
            {{ props.loadingText }}
          </Tip>
          <Tip v-else-if="treeselect.rootOptionsStates.loadingError" type="error" icon="error">
            {{ treeselect.rootOptionsStates.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="props.retryTitle"
              @click="treeselect.loadRootOptions"
            >
              {{ props.retryText }}
            </a>
          </Tip>
          <Tip
            v-else-if="showNoOptions"
            type="no-options"
            icon="warning"
          >
            {{ props.noOptionsText }}
          </Tip>
          <Tip
            v-else-if="treeselect.localSearch.active && treeselect.localSearch.noResults"
            type="no-results"
            icon="warning"
          >
            {{ props.noResultsText }}
          </Tip>
          <OptionList v-else ref="optionListRef" :key="props.virtualScroll ? 'virtual' : 'list'" :virtual="props.virtualScroll" />
        </template>

        <!-- After list slot -->
        <SlotRenderer v-if="treeselect.slots['after-list']" :render-slot="treeselect.slots['after-list']" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onBeforeUnmount, nextTick, ref } from 'vue'
import { MENU_BUFFER } from '@/constants'
import { watchSize, setupResizeAndScrollEventListeners } from '@/utils'
import { useTreeselectContext } from '@/context'
import Tip from '@/components/Tip.vue'
import OptionList from '@/components/OptionList.vue'
import SlotRenderer from '@/components/SlotRenderer'

const directionMap = {
  top: 'top',
  bottom: 'bottom',
  above: 'top',
  below: 'bottom',
} as const

const treeselect = useTreeselectContext()
const props = treeselect.props

// ============================================================================
// Template refs
// ============================================================================

const menuRef = ref<HTMLElement | null>(null)
const menuContainerRef = ref<HTMLElement | null>(null)
const optionListRef = ref<InstanceType<typeof OptionList> | null>(null)

// Register the menu element with the root component (also works inside the portal)
watch(menuRef, (el, prevEl) => {
  if (el) {
    treeselect.setMenuElement(el)
  } else if (prevEl && treeselect.getMenu() === prevEl) {
    treeselect.setMenuElement(null)
  }
}, { flush: 'sync' })

const handleScroll = (): void => {
  optionListRef.value?.handleScroll()
}

// ============================================================================
// State
// ============================================================================

let menuSizeWatcher: { remove: () => void } | null = null
let menuResizeAndScrollEventListeners: { remove: () => void } | null = null

// ============================================================================
// Computed - Styles
// ============================================================================

const menuStyle = computed(() => ({
  maxHeight: props.maxHeight + 'px',
}))

const menuContainerStyle = computed(() => ({
  zIndex: props.appendToBody ? undefined : props.zIndex,
}))

// ============================================================================
// Computed - Menu content states
// ============================================================================

const showNoOptions = computed(() => {
  return (
    treeselect.rootOptionsStates.isLoaded &&
    treeselect.forest.normalizedOptions.length === 0
  )
})

const asyncEntry = computed(() => treeselect.getRemoteSearchEntry())

const showSearchPrompt = computed(() => {
  return treeselect.trigger.searchQuery === '' && !props.defaultOptions
})

const showAsyncNoResults = computed(() => {
  if (showSearchPrompt.value) return false
  const entry = asyncEntry.value
  return entry.isLoaded && entry.options.length === 0
})

// ============================================================================
// Methods - Menu positioning
// ============================================================================

const adjustMenuOpenDirection = (): void => {
  if (!treeselect.menu.isOpen) return

  const $menu = treeselect.getMenu()
  const $control = treeselect.getControl()
  if (!$menu || !$control) return

  const menuRect = $menu.getBoundingClientRect()
  const controlRect = $control.getBoundingClientRect()
  const menuHeight = menuRect.height
  const viewportHeight = window.innerHeight
  const spaceAbove = controlRect.top
  const spaceBelow = window.innerHeight - controlRect.bottom
  const isControlInViewport =
    (controlRect.top >= 0 && controlRect.top <= viewportHeight) ||
    (controlRect.top < 0 && controlRect.bottom > 0)
  const hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER
  const hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER

  if (!isControlInViewport) {
    treeselect.closeMenu()
  } else if (props.openDirection && props.openDirection !== 'auto') {
    treeselect.menu.placement = directionMap[props.openDirection]
  } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
    treeselect.menu.placement = 'bottom'
  } else {
    treeselect.menu.placement = 'top'
  }
}

// ============================================================================
// Methods - Watchers setup/cleanup
// ============================================================================

const setupMenuSizeWatcher = (): void => {
  const $menu = treeselect.getMenu()
  if (menuSizeWatcher || !$menu) return

  menuSizeWatcher = {
    remove: watchSize($menu, adjustMenuOpenDirection),
  }
}

const setupMenuResizeAndScrollEventListeners = (): void => {
  const $control = treeselect.getControl()
  if (menuResizeAndScrollEventListeners || !$control) return

  menuResizeAndScrollEventListeners = {
    remove: setupResizeAndScrollEventListeners($control, adjustMenuOpenDirection),
  }
}

const removeMenuSizeWatcher = (): void => {
  if (!menuSizeWatcher) return
  menuSizeWatcher.remove()
  menuSizeWatcher = null
}

const removeMenuResizeAndScrollEventListeners = (): void => {
  if (!menuResizeAndScrollEventListeners) return
  menuResizeAndScrollEventListeners.remove()
  menuResizeAndScrollEventListeners = null
}

// ============================================================================
// Methods - Menu lifecycle
// ============================================================================

const onMenuOpen = (): void => {
  adjustMenuOpenDirection()
  setupMenuSizeWatcher()
  setupMenuResizeAndScrollEventListeners()
}

const onMenuClose = (): void => {
  removeMenuSizeWatcher()
  removeMenuResizeAndScrollEventListeners()
}

// ============================================================================
// Watchers
// ============================================================================

watch(
  () => treeselect.menu.isOpen,
  (newValue) => {
    if (newValue) {
      void nextTick(onMenuOpen)
    } else {
      onMenuClose()
    }
  }
)

// ============================================================================
// Lifecycle
// ============================================================================

onMounted(() => {
  if (treeselect.menu.isOpen) {
    void nextTick(onMenuOpen)
  }
})

onBeforeUnmount(() => {
  onMenuClose()
  if (menuRef.value && treeselect.getMenu() === menuRef.value) {
    treeselect.setMenuElement(null)
  }
})

defineExpose({
  menuElement: menuRef,
  menuContainerElement: menuContainerRef,
})
</script>
