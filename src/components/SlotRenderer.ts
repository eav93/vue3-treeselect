import type { FunctionalComponent, Slot } from 'vue'

/**
 * Renders a slot of the root Treeselect component inside a child component
 */
const SlotRenderer: FunctionalComponent<{ renderSlot: Slot, scope?: Record<string, any> }> =
  props => props.renderSlot(props.scope)

SlotRenderer.props = ['renderSlot', 'scope']

export default SlotRenderer
