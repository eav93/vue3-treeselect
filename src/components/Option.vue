<template>
  <div :class="listItemClass">
    <!-- Option -->
    <div
      :class="optionClass"
      :data-id="node.id"
      @mouseenter="handleMouseEnterOption"
    >
      <!-- Arrow for branch nodes -->
      <div
        v-if="node.isBranch && shouldShowArrowOrPlaceholder"
        class="vue-treeselect__option-arrow-container"
        @mousedown="handleMouseDownOnArrow"
      >
        <Transition name="vue-treeselect__option-arrow--prepare" appear>
          <ArrowIcon :class="arrowClass" />
        </Transition>
      </div>

      <!-- Arrow placeholder for leaf nodes in trees -->
      <div
        v-else-if="treeselect.hasBranchNodes && shouldShowArrowOrPlaceholder"
        class="vue-treeselect__option-arrow-placeholder"
      >
        &nbsp;
      </div>

      <!-- Label container -->
      <div
        class="vue-treeselect__label-container"
        @mousedown="handleMouseDownOnLabelContainer"
      >
        <!-- Checkbox (multi-select only) -->
        <div v-if="shouldShowCheckbox" class="vue-treeselect__checkbox-container">
          <span :class="checkboxClass">
            <span class="vue-treeselect__check-mark" />
            <span class="vue-treeselect__minus-mark" />
          </span>
        </div>

        <!-- Custom label renderer -->
        <component
          v-if="customLabelRenderer"
          :is="customLabelRenderer"
          :node="node"
          :shouldShowCount="shouldShowCount"
          :count="count"
          :labelClassName="labelClassName"
          :countClassName="countClassName"
        />

        <!-- Default label -->
        <label v-else :class="labelClassName">
          {{ node.label }}
          <span v-if="shouldShowCount" :class="countClassName">
            ({{ count }})
          </span>
        </label>
      </div>
    </div>

    <!-- Sub-options list (recursive) -->
    <Transition v-if="node.isBranch" name="vue-treeselect__list--transition">
      <div v-if="shouldExpand" class="vue-treeselect__list">
        <!-- Child options (recursive) -->
        <Option
          v-for="childNode in childNodes"
          :key="childNode.id"
          :node="childNode"
        />

        <!-- No children tip -->
        <Tip v-if="showNoChildrenTip" type="no-children" icon="warning">
          {{ treeselect.noChildrenText }}
        </Tip>

        <!-- Loading tip -->
        <Tip v-if="showLoadingTip" type="loading" icon="loader">
          {{ treeselect.loadingText }}
        </Tip>

        <!-- Error tip -->
        <Tip v-if="showErrorTip" type="error" icon="error">
          {{ node.childrenStates?.loadingError }}
          <a
            class="vue-treeselect__retry"
            :title="treeselect.retryTitle"
            @mousedown="handleMouseDownOnRetry"
          >
            {{ treeselect.retryText }}
          </a>
        </Tip>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { UNCHECKED, INDETERMINATE, CHECKED } from '@/constants'
import { onLeftClick } from '@/utils'
import Tip from '@/components/Tip.vue'
import ArrowIcon from '@/components/icons/Arrow.vue'
import type { TreeselectInstance, NormalizedNode } from '@/types'

// ============================================================================
// Props
// ============================================================================

interface Props {
  node: NormalizedNode
}

const props = defineProps<Props>()
const slots = useSlots()

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<TreeselectInstance>('treeselect')!

// ============================================================================
// Computed - Layout
// ============================================================================

const listItemClass = computed(() => {
  const indentLevel = treeselect.shouldFlattenOptions ? 0 : props.node.level
  return {
    'vue-treeselect__list-item': true,
    [`vue-treeselect__indent-level-${indentLevel}`]: true,
  }
})

const shouldExpand = computed(() => {
  return props.node.isBranch && treeselect.shouldExpand(props.node)
})

const shouldShow = computed(() => {
  return treeselect.shouldShowOptionInMenu(props.node)
})

const shouldShowArrowOrPlaceholder = computed(() => {
  return !treeselect.shouldFlattenOptions || !shouldShow.value
})

const optionClass = computed(() => ({
  'vue-treeselect__option': true,
  'vue-treeselect__option--disabled': props.node.isDisabled,
  'vue-treeselect__option--selected': treeselect.isSelected(props.node),
  'vue-treeselect__option--highlight': props.node.isHighlighted,
  'vue-treeselect__option--matched': treeselect.localSearch.value.active && props.node.isMatched,
  'vue-treeselect__option--hide': !shouldShow.value,
}))

const arrowClass = computed(() => ({
  'vue-treeselect__option-arrow': true,
  'vue-treeselect__option-arrow--rotated': shouldExpand.value,
}))

// ============================================================================
// Computed - Checkbox
// ============================================================================

const shouldShowCheckbox = computed(() => {
  if (treeselect.single) return false
  return !(treeselect.disableBranchNodes && props.node.isBranch);

})

const checkboxClass = computed(() => {
  const checkedState = treeselect.forest.value.checkedStateMap[props.node.id]
  return {
    'vue-treeselect__checkbox': true,
    'vue-treeselect__checkbox--checked': checkedState === CHECKED,
    'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
    'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
    'vue-treeselect__checkbox--disabled': props.node.isDisabled,
  }
})

// ============================================================================
// Computed - Label
// ============================================================================

const shouldShowCount = computed(() => {
  return (
    props.node.isBranch &&
    (treeselect.localSearch.value.active
      ? treeselect.showCountOnSearchComputed
      : treeselect.showCount)
  )
})

const count = computed(() => {
  if (!shouldShowCount.value) return NaN

  return treeselect.localSearch.value.active
    ? (treeselect.localSearch.value.countMap[props.node.id as any] as any)[treeselect.showCountOf]
    : (props.node.count as any)![treeselect.showCountOf]
})

const labelClassName = 'vue-treeselect__label'
const countClassName = 'vue-treeselect__count'

const customLabelRenderer = computed(() => {
  return slots['option-label']
})

// ============================================================================
// Computed - Sub-options
// ============================================================================

const childNodes = computed(() => {
  if (!props.node.childrenStates || !props.node.childrenStates.isLoaded) {
    return []
  }
  return props.node.children || []
})

const showNoChildrenTip = computed(() => {
  return (
    props.node.childrenStates?.isLoaded &&
    (!props.node.children || props.node.children.length === 0)
  )
})

const showLoadingTip = computed(() => {
  return props.node.childrenStates?.isLoading || false
})

const showErrorTip = computed(() => {
  return !!props.node.childrenStates?.loadingError
})

// ============================================================================
// Event handlers
// ============================================================================

const handleMouseEnterOption = (evt: MouseEvent): void => {
  // Equivalent to `self` modifier
  if (evt.target !== evt.currentTarget) return

  treeselect.setCurrentHighlightedOption(props.node, false)
}

const handleMouseDownOnArrow = onLeftClick(function (evt: MouseEvent) {
  evt.preventDefault()
  evt.stopPropagation()
  treeselect.toggleExpanded(props.node)
})

const handleMouseDownOnLabelContainer = onLeftClick(function (evt: MouseEvent) {
  evt.preventDefault()
  evt.stopPropagation()

  if (props.node.isBranch && treeselect.disableBranchNodes) {
    treeselect.toggleExpanded(props.node)
  } else {
    treeselect.select(props.node)
  }
})

const handleMouseDownOnRetry = onLeftClick(function () {
  treeselect.loadChildrenOptions(props.node)
})
</script>
