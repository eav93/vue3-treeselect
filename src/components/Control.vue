<template>
  <div
    ref="control"
    class="vue-treeselect__control"
    @mousedown="instance.handleMouseDown"
  >
    <div ref="value-container" class="vue-treeselect__value-container">
      <SingleValue v-if="single" />
      <MultiValue v-else />
    </div>

    <div
      v-if="shouldShowX"
      class="vue-treeselect__x-container"
      :title="xTitle"
      @mousedown="handleMouseDownOnX"
    >
      <DeleteIcon class="vue-treeselect__x" />
    </div>

    <div
      v-if="shouldShowArrow"
      class="vue-treeselect__control-arrow-container"
      @mousedown="handleMouseDownOnArrow"
    >
      <ArrowIcon :class="arrowClass" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { onLeftClick, isPromise } from '@/utils'
import SingleValue from '@/components/SingleValue.vue'
import MultiValue from '@/components/MultiValue.vue'
import DeleteIcon from '@/components/icons/Delete.vue'
import ArrowIcon from '@/components/icons/Arrow.vue'

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<any>('treeselect')!
// Used in template @mousedown="instance.handleMouseDown"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const instance = inject<any>('instance')!

// ============================================================================
// Computed
// ============================================================================

const single = computed(() => treeselect.single.value)

/**
 * Has any undisabled option been selected?
 */
const hasUndisabledValue = computed(() => {
  return (
    treeselect.hasValue.value &&
    treeselect.internalValue.value.some((id: any) => {
      const node = treeselect.getNode(id)
      return node && !node.isDisabled
    })
  )
})

/**
 * Should show the "×" button that resets value?
 */
const shouldShowX = computed(() => {
  return (
    treeselect.clearable &&
    !treeselect.disabled &&
    treeselect.hasValue.value &&
    (hasUndisabledValue.value || treeselect.allowClearingDisabled)
  )
})

/**
 * Should show the arrow button that toggles menu?
 */
const shouldShowArrow = computed(() => {
  if (!treeselect.alwaysOpen) return true
  // Even with alwaysOpen: true, sometimes the menu is still closed
  // e.g. when the control is disabled
  return !treeselect.menu.isOpen
})

const xTitle = computed(() => {
  return treeselect.multiple
    ? treeselect.clearAllText
    : treeselect.clearValueText
})

const arrowClass = computed(() => ({
  'vue-treeselect__control-arrow': true,
  'vue-treeselect__control-arrow--rotated': treeselect.menu.isOpen,
}))

// ============================================================================
// Event handlers
// ============================================================================

/**
 * Handle mouse down on X button (clear)
 */
const handleMouseDownOnX = onLeftClick(function (evt: MouseEvent) {
  evt.stopPropagation()
  evt.preventDefault()

  const result = treeselect.beforeClearAll()
  const handler = (shouldClear: boolean) => {
    if (shouldClear) treeselect.clear()
  }

  if (isPromise(result)) {
    // Handle async beforeClearAll
    result.then((value) => handler(value as boolean))
  } else {
    // Keep same behavior - call async
    setTimeout(() => handler(result as boolean), 0)
  }
})

/**
 * Handle mouse down on arrow button (toggle menu)
 */
const handleMouseDownOnArrow = onLeftClick(function (evt: MouseEvent) {
  evt.preventDefault()
  evt.stopPropagation()

  // Focus the input or prevent blurring
  instance.focusInput()
  treeselect.toggleMenu()
})
</script>
