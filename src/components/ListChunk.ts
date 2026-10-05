import { defineComponent, h } from 'vue'
import type { PropType, VNode } from 'vue'
import { useTreeselectContext } from '@/context'
import type { TreeselectContext } from '@/context'
import Option from '@/components/Option'
import Tip from '@/components/Tip.vue'
import type { MenuRow } from '@/types'

/**
 * Render a row of the menu: an option, or a tip of an expanded branch
 */
export function renderRow(row: MenuRow, treeselect: TreeselectContext): VNode {
  if (row.type === 'option') {
    return h(Option, { key: row.key, node: row.node, level: row.level })
  }

  const texts = treeselect.texts.value
  const tip = row.type === 'no-children'
    ? h(Tip, { type: 'no-children', icon: 'warning' }, () => texts.noChildrenText)
    : row.type === 'loading'
      ? h(Tip, { type: 'loading', icon: 'loader' }, () => texts.loadingText)
      : h(Tip, { type: 'error', icon: 'error' }, () => [
        `${row.node.childrenStates?.loadingError || ''} `,
        h('a', { class: 'vue-treeselect__retry', title: texts.retryTitle, 'data-id': row.node.id }, texts.retryText),
      ])

  return h('div', {
    key: row.key,
    class: `vue-treeselect__list-item vue-treeselect__indent-level-${row.level}`,
    style: { '--level': row.level },
  }, [tip])
}

/**
 * A block of consecutive rows. Blocks, not rows, are the unit of `content-visibility: auto`:
 * with one element per row the browser re-checks the visibility of every row on each scroll
 * or layout. A block whose `rows` array is unchanged is skipped entirely by Vue.
 */
export default defineComponent({
  name: 'vue-treeselect--list-chunk',

  props: {
    rows: { type: Array as PropType<MenuRow[]>, required: true },
    /** Estimated row height, for the intrinsic size of the block before it is rendered */
    rowHeight: { type: Number, required: true },
  },

  setup(props) {
    const treeselect = useTreeselectContext()

    return () => h('div', {
      class: 'vue-treeselect__list-chunk',
      style: { containIntrinsicSize: `auto ${props.rows.length * props.rowHeight}px` },
    }, props.rows.map(row => renderRow(row, treeselect)))
  },
})
