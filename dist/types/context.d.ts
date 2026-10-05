import { ComputedRef, InjectionKey, Slots } from 'vue';
import { TreeselectApi } from './composables/useTreeselect';
import { TreeselectProps } from './types';
/**
 * Everything child components need from the root Treeselect component
 */
export interface TreeselectContext extends TreeselectApi {
    /** Root component props (with defaults applied) */
    props: TreeselectProps;
    /** Root component slots (option-label, value-label, before-list, after-list) */
    slots: Slots;
    /** Classes of the root element (also applied to the portal target) */
    wrapperClass: ComputedRef<Record<string, boolean>>;
    /** Input element registration (the input lives in SingleValue / MultiValue) */
    setInputElement: (el: HTMLElement | null) => void;
    /** Menu element registration (the menu may live in a portal) */
    setMenuElement: (el: HTMLElement | null) => void;
    /** Value container element registration */
    setValueContainerElement: (el: HTMLElement | null) => void;
    /** Control element registration */
    setControlElement: (el: HTMLElement | null) => void;
    getInput: () => HTMLElement | null;
    focusInput: () => void;
    blurInput: () => void;
    handleMouseDown: (evt: MouseEvent) => void;
}
export declare const TREESELECT_CONTEXT: InjectionKey<TreeselectContext>;
/**
 * Inject the Treeselect context (for components rendered inside Treeselect)
 */
export declare function useTreeselectContext(): TreeselectContext;
