import { PropType, VNode } from 'vue';
import { TreeselectContext } from '../context';
import { MenuRow } from '../types';
/**
 * Render a row of the menu: an option, or a tip of an expanded branch
 */
export declare function renderRow(row: MenuRow, treeselect: TreeselectContext): VNode;
/**
 * A block of consecutive rows. Blocks, not rows, are the unit of `content-visibility: auto`:
 * with one element per row the browser re-checks the visibility of every row on each scroll
 * or layout. A block whose `rows` array is unchanged is skipped entirely by Vue.
 */
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    rows: {
        type: PropType<MenuRow[]>;
        required: true;
    };
    /** Estimated row height, for the intrinsic size of the block before it is rendered */
    rowHeight: {
        type: NumberConstructor;
        required: true;
    };
}>, () => VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    rows: {
        type: PropType<MenuRow[]>;
        required: true;
    };
    /** Estimated row height, for the intrinsic size of the block before it is rendered */
    rowHeight: {
        type: NumberConstructor;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
