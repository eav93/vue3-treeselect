<template>
  <div
    ref="menu-container"
    class="vue-treeselect__menu-container"
    :style="menuContainerStyle"
  >
    <Transition name="vue-treeselect__menu--transition">
      <div
        v-if="treeselect.menu.value.isOpen"
        ref="menu"
        class="vue-treeselect__menu"
        :style="menuStyle"
        @mousedown="treeselect.handleMouseDown"
      >
        <!-- Before list slot -->
        <slot name="before-list" />

        <!-- Async search menu -->
        <template v-if="treeselect.async">
          <Tip v-if="showSearchPrompt" type="search-prompt" icon="warning">
            {{ treeselect.searchPromptText }}
          </Tip>
          <Tip v-else-if="asyncEntry.isLoading" type="loading" icon="loader">
            {{ treeselect.loadingText }}
          </Tip>
          <Tip v-else-if="asyncEntry.loadingError" type="error" icon="error">
            {{ asyncEntry.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="treeselect.retryTitle"
              @click="treeselect.handleRemoteSearch"
            >
              {{ treeselect.retryText }}
            </a>
          </Tip>
          <Tip v-else-if="showAsyncNoResults" type="no-results" icon="warning">
            {{ treeselect.noResultsText }}
          </Tip>
          <div v-else class="vue-treeselect__list">
            <Option
              v-for="rootNode in treeselect.forest.value.normalizedOptions"
              :key="rootNode.id"
              :node="rootNode"
            />
          </div>
        </template>

        <!-- Local search / normal menu -->
        <template v-else>
          <Tip v-if="treeselect.rootOptionsStates.isLoading" type="loading" icon="loader">
            {{ treeselect.loadingText }}
          </Tip>
          <Tip v-else-if="treeselect.rootOptionsStates.loadingError" type="error" icon="error">
            {{ treeselect.rootOptionsStates.loadingError }}
            <a
              class="vue-treeselect__retry"
              :title="treeselect.retryTitle"
              @click="treeselect.loadRootOptions"
            >
              {{ treeselect.retryText }}
            </a>
          </Tip>
          <Tip
            v-else-if="showNoOptions"
            type="no-options"
            icon="warning"
          >
            {{ treeselect.noOptionsText }}
          </Tip>
          <Tip
            v-else-if="treeselect.localSearch.value.active && treeselect.localSearch.value.noResults"
            type="no-results"
            icon="warning"
          >
            {{ treeselect.noResultsText }}
          </Tip>
          <div v-else class="vue-treeselect__list">
            <Option
              v-for="rootNode in treeselect.forest.value.normalizedOptions"
              :key="rootNode.id"
              :node="rootNode"
            />
          </div>
        </template>

        <!-- After list slot -->
        <slot name="after-list" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted, nextTick, inject } from 'vue'
import { MENU_BUFFER } from '@/constants'
import { watchSize, setupResizeAndScrollEventListeners } from '@/utils'
import Option from '@/components/Option.vue'
import Tip from '@/components/Tip.vue'
import type { TreeselectInstance } from '@/types'

// ============================================================================
// Constants
// ============================================================================

const directionMap = {
  top: 'top',
  bottom: 'bottom',
  above: 'top',
  below: 'bottom',
} as const

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<TreeselectInstance>('treeselect')!

// ============================================================================
// State
// ============================================================================

let menuSizeWatcher: { remove: () => void } | null = null
let menuResizeAndScrollEventListeners: { remove: () => void } | null = null

// ============================================================================
// Computed - Styles
// ============================================================================

const menuStyle = computed(() => ({
  maxHeight: treeselect.maxHeight + 'px',
}))

const menuContainerStyle = computed(() => ({
  zIndex: treeselect.appendToBody ? null : treeselect.zIndex,
}))

// ============================================================================
// Computed - Menu content states
// ============================================================================

const showNoOptions = computed(() => {
  return (
    treeselect.rootOptionsStates.isLoaded &&
    treeselect.forest.value.normalizedOptions.length === 0
  )
})

const asyncEntry = computed(() => treeselect.getRemoteSearchEntry())

const showSearchPrompt = computed(() => {
  return treeselect.trigger.searchQuery === '' && !treeselect.defaultOptions
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
  if (!treeselect.menu.value.isOpen) return

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
  } else if (treeselect.openDirection !== 'auto') {
    treeselect.menu.value.placement = directionMap[treeselect.openDirection as keyof typeof directionMap]
  } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
    treeselect.menu.value.placement = 'bottom'
  } else {
    treeselect.menu.value.placement = 'top'
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
  () => treeselect.menu.value.isOpen,
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
  if (treeselect.menu.value.isOpen) {
    void nextTick(onMenuOpen)
  }
})

onUnmounted(() => {
  onMenuClose()
})
</script>
