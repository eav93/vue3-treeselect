<template>
  <div
    ref="controlRef"
    class="vue-treeselect__control"
    @mousedown="treeselect.handleMouseDown"
  >
    <div ref="valueContainerRef" class="vue-treeselect__value-container">
      <SingleValue v-if="treeselect.single.value" />
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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { onLeftClick, isPromise } from '@/utils'
import { useTreeselectContext } from '@/context'
import SingleValue from '@/components/SingleValue.vue'
import MultiValue from '@/components/MultiValue.vue'
import DeleteIcon from '@/components/icons/Delete.vue'
import ArrowIcon from '@/components/icons/Arrow.vue'

const treeselect = useTreeselectContext()
const props = treeselect.props

const controlRef = ref<HTMLElement>()
const valueContainerRef = ref<HTMLElement>()

onMounted(() => {
  treeselect.setControlElement(controlRef.value || null)
  treeselect.setValueContainerElement(valueContainerRef.value || null)
})

let isUnmounted = false

onBeforeUnmount(() => {
  isUnmounted = true
  treeselect.setControlElement(null)
  treeselect.setValueContainerElement(null)
})

// ============================================================================
// Computed
// ============================================================================

/**
 * Has any undisabled option been selected?
 */
const hasUndisabledValue = computed(() => {
  return (
    treeselect.hasValue.value &&
    treeselect.internalValue.value.some(id => {
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
    props.clearable &&
    !props.disabled &&
    treeselect.hasValue.value &&
    (hasUndisabledValue.value || props.allowClearingDisabled)
  )
})

/**
 * Should show the arrow button that toggles menu?
 */
const shouldShowArrow = computed(() => {
  if (!props.alwaysOpen) return true
  // Even with alwaysOpen: true, sometimes the menu is still closed
  // e.g. when the control is disabled
  return !treeselect.menu.isOpen
})

const xTitle = computed(() => {
  return props.multiple
    ? props.clearAllText
    : props.clearValueText
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

  const result = props.beforeClearAll ? props.beforeClearAll() : true
  const handler = (shouldClear: boolean) => {
    if (shouldClear && !isUnmounted) treeselect.clear()
  }

  if (isPromise(result)) {
    // Handle async beforeClearAll
    void (result as Promise<boolean>).then(handler)
  } else {
    // Keep same behavior - call async
    setTimeout(() => handler(result as boolean), 0)
  }
})

/**
 * Handle mouse down on arrow button (toggle the menu)
 */
const handleMouseDownOnArrow = onLeftClick(function (evt: MouseEvent) {
  evt.preventDefault()
  evt.stopPropagation()

  // Focus the input or prevent blurring
  treeselect.focusInput()
  treeselect.toggleMenu()
})
</script>
