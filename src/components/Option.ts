import { defineComponent, h } from 'vue'
import type { PropType, VNodeChild } from 'vue'
import { UNCHECKED, INDETERMINATE, CHECKED } from '@/constants'
import { useTreeselectContext } from '@/context'
import type { NormalizedNode } from '@/types'

const ARROW_PATH = 'M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z'

/**
 * A row of the menu.
 *
 * There can be tens of thousands of these, so this component is kept as light as possible:
 * a render function (no `v-if` comment nodes or fragments), no computed properties (the render
 * effect of each row tracks its own dependencies, so only the affected rows re-render), no event
 * listeners (events are delegated to the list, see OptionList.vue) and no child components.
 */
export default defineComponent({
  name: 'vue-treeselect--option',

  props: {
    node: { type: Object as PropType<NormalizedNode>, required: true },
    /** Indentation level */
    level: { type: Number, required: true },
  },

  setup(optionProps) {
    const treeselect = useTreeselectContext()
    const props = treeselect.props

    const renderArrow = (node: NormalizedNode): VNodeChild => {
      if (treeselect.shouldFlattenOptions.value) return null
      if (node.isBranch) {
        return h('div', { class: 'vue-treeselect__option-arrow-container' }, [
          h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 292.362 292.362',
            class: {
              'vue-treeselect__option-arrow': true,
              'vue-treeselect__option-arrow--rotated': treeselect.shouldExpand(node),
            },
          }, [h('path', { d: ARROW_PATH })]),
        ])
      }
      if (treeselect.hasBranchNodes.value) {
        return h('div', { class: 'vue-treeselect__option-arrow-placeholder' }, ' ')
      }
      return null
    }

    const renderCheckbox = (node: NormalizedNode): VNodeChild => {
      if (treeselect.single.value || (props.disableBranchNodes && node.isBranch)) return null
      const checkedState = treeselect.getCheckedState(node)
      return h('div', { class: 'vue-treeselect__checkbox-container' }, [
        h('span', {
          class: {
            'vue-treeselect__checkbox': true,
            'vue-treeselect__checkbox--checked': checkedState === CHECKED,
            'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
            'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
            'vue-treeselect__checkbox--disabled': node.isDisabled,
          },
        }, [
          h('span', { class: 'vue-treeselect__check-mark' }),
          h('span', { class: 'vue-treeselect__minus-mark' }),
        ]),
      ])
    }

    const getCount = (node: NormalizedNode): number => {
      const showCountOf = props.showCountOf || 'ALL_CHILDREN'
      if (treeselect.localSearch.active) {
        const countMap = treeselect.localSearch.countMap[node.id]
        return countMap ? countMap[showCountOf] : 0
      }
      return node.count ? node.count[showCountOf] : 0
    }

    const renderLabel = (node: NormalizedNode): VNodeChild => {
      const shouldShowCount = node.isBranch && (treeselect.localSearch.active
        ? treeselect.showCountOnSearchComputed.value
        : !!props.showCount)
      const count = shouldShowCount ? getCount(node) : NaN

      const customLabel = treeselect.slots['option-label']
      if (customLabel) {
        return customLabel({
          node,
          shouldShowCount,
          count,
          labelClassName: 'vue-treeselect__label',
          countClassName: 'vue-treeselect__count',
        })
      }
      return h('label', { class: 'vue-treeselect__label' }, shouldShowCount
        ? [`${node.label} `, h('span', { class: 'vue-treeselect__count' }, `(${count})`)]
        : node.label)
    }

    return () => {
      const { node, level } = optionProps
      // (`null` children would become comment nodes: only push what is rendered)
      const labelContainerChildren: VNodeChild[] = []
      const checkbox = renderCheckbox(node)
      if (checkbox) labelContainerChildren.push(checkbox)
      labelContainerChildren.push(renderLabel(node))

      const optionChildren: VNodeChild[] = []
      const arrow = renderArrow(node)
      if (arrow) optionChildren.push(arrow)
      optionChildren.push(h('div', { class: 'vue-treeselect__label-container' }, labelContainerChildren))

      return h('div', {
        // `--level` drives the indentation in CSS; the class is kept for custom styles
        class: `vue-treeselect__list-item vue-treeselect__indent-level-${level}`,
        style: { '--level': level },
      }, [
        h('div', {
          class: {
            'vue-treeselect__option': true,
            'vue-treeselect__option--disabled': node.isDisabled,
            'vue-treeselect__option--selected': treeselect.isSelected(node),
            'vue-treeselect__option--highlight': node.isHighlighted,
            'vue-treeselect__option--matched': treeselect.localSearch.active && node.isMatched,
          },
          'data-id': node.id,
        }, optionChildren),
      ])
    }
  },
})
