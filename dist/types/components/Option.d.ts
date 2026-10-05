import { PropType } from 'vue';
import { NormalizedNode } from '../types';
/**
 * A row of the menu.
 *
 * There can be tens of thousands of these, so this component is kept as light as possible:
 * a render function (no `v-if` comment nodes or fragments), no computed properties (the render
 * effect of each row tracks its own dependencies, so only the affected rows re-render), no event
 * listeners (events are delegated to the list, see OptionList.vue) and no child components.
 */
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    node: {
        type: PropType<NormalizedNode>;
        required: true;
    };
    /** Indentation level */
    level: {
        type: NumberConstructor;
        required: true;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    node: {
        type: PropType<NormalizedNode>;
        required: true;
    };
    /** Indentation level */
    level: {
        type: NumberConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
