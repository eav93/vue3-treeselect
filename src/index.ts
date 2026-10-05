import "../sass/style.scss";
import Treeselect from "@/components/Treeselect.vue";

// Component
export { Treeselect };
export default Treeselect;

// Locales
// Other languages: import { ru } from "@eav93/vue3-treeselect/locales/ru"
export { en, TREESELECT_LOCALE, registerLocale, resolveLocale } from "@/locales";
export type { TreeselectTexts, TreeselectLocale } from "@/locales";

// Types
export * from "@/types";
export type { TreeselectContext } from "@/context";
/** @deprecated Use `TreeselectContext` */
export type { TreeselectContext as TreeselectInstance } from "@/context";
export type { TreeselectApi } from "@/composables/useTreeselect";

// Constants
export {
    LOAD_ROOT_OPTIONS,
    LOAD_CHILDREN_OPTIONS,
    ASYNC_SEARCH,
    UNCHECKED,
    INDETERMINATE,
    CHECKED,
    ALL,
    BRANCH_PRIORITY,
    LEAF_PRIORITY,
    ALL_WITH_INDETERMINATE,
} from "@/constants";
