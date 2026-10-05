import { FunctionalComponent, Slot } from 'vue';
/**
 * Renders a slot of the root Treeselect component inside a child component
 */
declare const SlotRenderer: FunctionalComponent<{
    renderSlot: Slot;
    scope?: Record<string, any>;
}>;
export default SlotRenderer;
