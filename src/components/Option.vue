<template>
  <!-- `--level` drives the indentation in CSS; the class is kept for custom styles -->
  <div :class="`vue-treeselect__list-item vue-treeselect__indent-level-${level}`" :style="{ '--level': level }">
    <div
      :class="{
        'vue-treeselect__option': true,
        'vue-treeselect__option--disabled': node.isDisabled,
        'vue-treeselect__option--selected': treeselect.isSelected(node),
        'vue-treeselect__option--highlight': node.isHighlighted,
        'vue-treeselect__option--matched': treeselect.localSearch.active && node.isMatched,
      }"
      :data-id="node.id"
    >
      <!-- Arrow for branch nodes (no arrows in flattened search results) -->
      <div
        v-if="node.isBranch && !treeselect.shouldFlattenOptions.value"
        class="vue-treeselect__option-arrow-container"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 292.362 292.362"
          :class="{
            'vue-treeselect__option-arrow': true,
            'vue-treeselect__option-arrow--rotated': treeselect.shouldExpand(node),
          }"
        >
          <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" />
        </svg>
      </div>

      <!-- Arrow placeholder for leaf nodes in trees -->
      <div
        v-else-if="treeselect.hasBranchNodes.value && !treeselect.shouldFlattenOptions.value"
        class="vue-treeselect__option-arrow-placeholder"
      >
        &nbsp;
      </div>

      <!-- Label container -->
      <div class="vue-treeselect__label-container">
        <!-- Checkbox (multi-select only) -->
        <div
          v-if="!treeselect.single.value && !(props.disableBranchNodes && node.isBranch)"
          class="vue-treeselect__checkbox-container"
        >
          <span :class="checkboxClass()">
            <span class="vue-treeselect__check-mark" />
            <span class="vue-treeselect__minus-mark" />
          </span>
        </div>

        <!-- Custom label renderer -->
        <SlotRenderer
          v-if="treeselect.slots['option-label']"
          :render-slot="treeselect.slots['option-label']"
          :scope="{
            node,
            shouldShowCount: shouldShowCount(),
            count: count(),
            labelClassName: 'vue-treeselect__label',
            countClassName: 'vue-treeselect__count',
          }"
        />

        <!-- Default label -->
        <label v-else class="vue-treeselect__label">
          {{ node.label }}
          <span v-if="shouldShowCount()" class="vue-treeselect__count">({{ count() }})</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UNCHECKED, INDETERMINATE, CHECKED } from '@/constants'
import { useTreeselectContext } from '@/context'
import SlotRenderer from '@/components/SlotRenderer'
import type { NormalizedNode } from '@/types'

/**
 * A row of the menu.
 *
 * There can be tens of thousands of these, so this component is kept as light as possible:
 * no computed properties (the render effect of each row already tracks its own dependencies,
 * so only the affected rows re-render), no event listeners (events are delegated to
 * the list, see OptionList.vue) and no child components.
 */
defineOptions({ name: 'vue-treeselect--option' })

const optionProps = defineProps<{
  node: NormalizedNode
  /** Indentation level */
  level: number
}>()

const treeselect = useTreeselectContext()
const props = treeselect.props

const checkboxClass = () => {
  const checkedState = treeselect.getCheckedState(optionProps.node)
  return {
    'vue-treeselect__checkbox': true,
    'vue-treeselect__checkbox--checked': checkedState === CHECKED,
    'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
    'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
    'vue-treeselect__checkbox--disabled': optionProps.node.isDisabled,
  }
}

const shouldShowCount = (): boolean => {
  return (
    optionProps.node.isBranch &&
    (treeselect.localSearch.active
      ? treeselect.showCountOnSearchComputed.value
      : !!props.showCount)
  )
}

const count = (): number => {
  if (!shouldShowCount()) return NaN
  const { node } = optionProps
  const showCountOf = props.showCountOf || 'ALL_CHILDREN'

  if (treeselect.localSearch.active) {
    const countMap = treeselect.localSearch.countMap[node.id]
    return countMap ? countMap[showCountOf] : 0
  }
  return node.count ? node.count[showCountOf] : 0
}
</script>
