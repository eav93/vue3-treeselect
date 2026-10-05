import { NormalizedNode, ForestState, TreeselectProps, TreeselectEmits, NodeId, LocalSearchState, CheckedState } from '../types';
/**
 * Composable for managing node selection
 */
export declare function useSelection(options: {
    props: TreeselectProps;
    emit: TreeselectEmits;
    forest: ForestState;
    getNode: (id: NodeId) => NormalizedNode | null;
    getCheckedState: (node: NormalizedNode) => CheckedState | undefined;
    setSelectedNodeIds: (ids: NodeId[]) => void;
    traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void;
    traverseDescendantsDFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void;
    resetSearchQuery: () => void;
    closeMenu: () => void;
    hasValue: () => boolean;
    internalValue: () => NodeId[];
    single: () => boolean;
    getInstanceId: () => NodeId;
    localSearch: LocalSearchState;
}): {
    select: (node: NormalizedNode) => void;
    clear: () => void;
    removeLastValue: () => void;
    resetFlags: () => boolean;
};
