import { NormalizedNode, ForestState, TreeselectProps, TreeselectEmits, NodeId, LocalSearchState, MenuRow } from '../types';
/**
 * Composable for managing menu state and highlighting
 */
export declare function useMenu(options: {
    props: TreeselectProps;
    emit: TreeselectEmits;
    forest: ForestState;
    localSearch: LocalSearchState;
    getNode: (id: NodeId) => NormalizedNode | null;
    getValue: () => any;
    getInstanceId: () => NodeId;
    resetSearchQuery: () => void;
    loadRootOptions: () => void;
    loadChildrenOptions: (node: NormalizedNode) => void;
    getMenuElement: () => HTMLElement | null;
    toggleClickOutsideEvent: (enabled: boolean) => void;
}): {
    menu: {
        isOpen: boolean;
        current: NodeId | null;
        lastScrollPosition: number;
        placement: "top" | "bottom";
    };
    setScrollToOptionHandler: (handler: ((node: NormalizedNode) => void) | null) => void;
    shouldOptionBeIncludedInSearchResult: (node: NormalizedNode) => boolean;
    menuRows: import('vue').ComputedRef<MenuRow[]>;
    visibleOptionIds: import('vue').ComputedRef<NodeId[]>;
    hasVisibleOptions: import('vue').ComputedRef<boolean>;
    shouldExpand: (node: NormalizedNode) => boolean;
    shouldShowOptionInMenu: (node: NormalizedNode) => boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    toggleExpanded: (node: NormalizedNode) => void;
    setCurrentHighlightedOption: (node: NormalizedNode | null, scroll?: boolean) => void;
    resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void;
    highlightFirstOption: () => void;
    highlightPrevOption: () => void;
    highlightNextOption: () => void;
    highlightLastOption: () => void;
    saveMenuScrollPosition: () => void;
    restoreMenuScrollPosition: () => void;
};
