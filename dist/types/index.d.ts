import { default as Treeselect } from './components/Treeselect.vue';
export { Treeselect };
export default Treeselect;
export * from './types';
export type { TreeselectContext } from './context';
/** @deprecated Use `TreeselectContext` */
export type { TreeselectContext as TreeselectInstance } from './context';
export type { TreeselectApi } from './composables/useTreeselect';
export { LOAD_ROOT_OPTIONS, LOAD_CHILDREN_OPTIONS, ASYNC_SEARCH, UNCHECKED, INDETERMINATE, CHECKED, ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE, } from './constants';
