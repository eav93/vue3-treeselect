import { traverseDescendantsBFS, traverseDescendantsDFS } from './useNodeTraversal';
import { NodeId, NormalizedNode, RawNode, TreeselectEmits, TreeselectProps } from '../types';
export interface UseTreeselectOptions {
    /** Instance ID getter */
    getInstanceId: () => NodeId;
    /** Function to get menu DOM element */
    getMenuElement: () => HTMLElement | null;
    /** Function to get control DOM element */
    getControlElement: () => HTMLElement | null;
    /** Function to toggle click outside listener */
    toggleClickOutsideEvent: (enabled: boolean) => void;
    /** Focus the input (used by `autoFocus`) */
    focusInput: () => void;
}
/**
 * Main composable for Treeselect functionality
 * Integrates all sub-composables and provides the complete API
 *
 * @param props - Component props
 * @param emit - Emit function
 * @param options - DOM helpers provided by the component
 * @returns Complete Treeselect instance API
 */
export declare function useTreeselect(props: TreeselectProps, emit: TreeselectEmits, options: UseTreeselectOptions): {
    forest: import('vue').ShallowReactive<import('../types').ForestState>;
    trigger: {
        isFocused: boolean;
        searchQuery: string;
    };
    menu: {
        isOpen: boolean;
        current: NodeId | null;
        lastScrollPosition: number;
        placement: "top" | "bottom";
    };
    localSearch: import('vue').ShallowReactive<import('../types').LocalSearchState>;
    remoteSearch: import('vue').ShallowReactive<import('../types').RemoteSearchState>;
    rootOptionsStates: {
        isLoaded: boolean;
        isLoading: boolean;
        loadingError: string;
    };
    selectedNodes: import('vue').ComputedRef<NormalizedNode[]>;
    single: import('vue').ComputedRef<boolean>;
    internalValue: import('vue').ComputedRef<NodeId[]>;
    hasValue: import('vue').ComputedRef<boolean>;
    menuRows: import('vue').ComputedRef<import('../types').MenuRow[]>;
    visibleOptionIds: import('vue').ComputedRef<NodeId[]>;
    hasVisibleOptions: import('vue').ComputedRef<boolean>;
    showCountOnSearchComputed: import('vue').ComputedRef<boolean>;
    hasBranchNodes: import('vue').ComputedRef<boolean>;
    shouldFlattenOptions: import('vue').ComputedRef<boolean>;
    getNode: (nodeId: NodeId) => NormalizedNode | null;
    isSelected: (node: NormalizedNode | null) => boolean;
    getCheckedState: (node: NormalizedNode) => import('../types').CheckedState | undefined;
    traverseDescendantsBFS: typeof traverseDescendantsBFS;
    traverseDescendantsDFS: typeof traverseDescendantsDFS;
    traverseAllNodesDFS: (callback: (node: NormalizedNode) => void) => void;
    traverseAllNodesByIndex: (callback: (node: NormalizedNode) => boolean | void) => void;
    getValue: () => any;
    extractCheckedNodeIdsFromValue: () => NodeId[];
    extractNodeFromValue: (id: NodeId) => RawNode;
    fixSelectedNodeIds: (nodeIdListOfPrevValue: NodeId[], rebuild?: boolean) => void;
    select: (node: NormalizedNode) => void;
    clear: () => void;
    removeLastValue: () => void;
    openMenu: () => void;
    closeMenu: (force?: boolean) => void;
    toggleMenu: () => void;
    toggleExpanded: (node: NormalizedNode) => void;
    shouldExpand: (node: NormalizedNode) => boolean;
    shouldShowOptionInMenu: (node: NormalizedNode) => boolean;
    setScrollToOptionHandler: (handler: ((node: NormalizedNode) => void) | null) => void;
    setCurrentHighlightedOption: (node: NormalizedNode | null, scroll?: boolean) => void;
    resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void;
    highlightFirstOption: () => void;
    highlightPrevOption: () => void;
    highlightNextOption: () => void;
    highlightLastOption: () => void;
    handleLocalSearch: (keepExpanded?: boolean) => void;
    handleRemoteSearch: () => void;
    getRemoteSearchEntry: () => import('../types').RemoteSearchEntry;
    resetSearchQuery: () => void;
    loadRootOptions: () => void;
    loadChildrenOptions: (parentNode: NormalizedNode) => void;
    initialize: () => void;
    buildForestState: () => void;
    resetFlags: () => boolean;
    getMenu: () => HTMLElement | null;
    getControl: () => HTMLElement | null;
    getInstanceId: () => NodeId;
};
export type TreeselectApi = ReturnType<typeof useTreeselect>;
