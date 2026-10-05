import { ForestState, TreeselectProps, NodeId, NormalizedNode, CheckedState } from '../types';
/**
 * Composable for managing forest state (tree structure and selection)
 *
 * Selection state is maintained incrementally: changing the selection only
 * touches the changed nodes and their ancestors instead of the whole tree.
 *
 * @param props - Component props
 * @param initialSelectedNodeIds - Initially selected IDs (from modelValue)
 * @returns Forest state and related methods
 */
export declare function useForestState(props: TreeselectProps, initialSelectedNodeIds: NodeId[]): {
    forest: import('vue').ShallowReactive<ForestState>;
    buildForestState: () => void;
    setSelectedNodeIds: (nextSelectedNodeIds: NodeId[]) => void;
    isSelected: (node: NormalizedNode | null) => boolean;
    getCheckedState: (node: NormalizedNode) => CheckedState | undefined;
};
