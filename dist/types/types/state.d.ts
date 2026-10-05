import { NodeId, NodeMap, NormalizedNode, AsyncOptionsStates, CountMap } from './node';
export type { AsyncOptionsStates };
/**
 * Checked state for multi-select mode
 * 0 = UNCHECKED, 1 = INDETERMINATE, 2 = CHECKED
 */
export type CheckedState = 0 | 1 | 2;
/**
 * Forest state - manages the tree structure and selection.
 *
 * The object itself is `shallowReactive`; `nodeMap` is a plain object
 * (replaced on re-initialization), `selectedNodeIds` is replaced immutably,
 * and `checkedStateMap` / `selectedNodeMap` are `shallowReactive` objects that are
 * updated per key, so that only affected options re-render.
 */
export interface ForestState {
    /** Normalized root nodes */
    normalizedOptions: NormalizedNode[];
    /** Map of node ID to normalized node for quick lookup */
    nodeMap: NodeMap;
    /** Map of node ID to checked state (multi-select only) */
    checkedStateMap: Record<NodeId, CheckedState>;
    /** Array of selected node IDs (in selection order) */
    selectedNodeIds: NodeId[];
    /** Map of selected node IDs for O(1) lookup */
    selectedNodeMap: Record<NodeId, true>;
}
/**
 * Menu state - manages menu visibility and interaction
 */
export interface MenuState {
    /** Whether the menu is currently open */
    isOpen: boolean;
    /** ID of the currently highlighted option */
    current: NodeId | null;
    /** Scroll position before menu was closed (for restoration) */
    lastScrollPosition: number;
    /** Vertical placement of the menu */
    placement: 'top' | 'bottom';
}
/**
 * Trigger state - manages input focus and search
 */
export interface TriggerState {
    /** Whether the input is currently focused */
    isFocused: boolean;
    /** Current search query entered by user */
    searchQuery: string;
}
/**
 * Local search state - for synchronous searching
 */
export interface LocalSearchState {
    /** Whether local search is currently active */
    active: boolean;
    /** Whether the search returned no results */
    noResults: boolean;
    /** Map of branch node ID to count of matched children/descendants */
    countMap: Record<NodeId, CountMap>;
}
/**
 * Remote search entry - for a single search query
 */
export interface RemoteSearchEntry extends AsyncOptionsStates {
    /** Options returned for this search query */
    options: any[];
}
/**
 * Remote search state - map of search queries to their results
 */
export type RemoteSearchState = Record<string, RemoteSearchEntry>;
/**
 * A row of the menu: an option or a tip of an expanded branch
 */
export interface MenuRow {
    type: 'option' | 'no-children' | 'loading' | 'error';
    /** Unique key of the row */
    key: string;
    /** The option, or the branch the tip belongs to */
    node: NormalizedNode;
    /** Indentation level */
    level: number;
}
