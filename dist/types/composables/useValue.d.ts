import { NodeId, NormalizedNode, ForestState, TreeselectProps } from '../types';
/**
 * Composable for managing selected values
 *
 * @param props - Component props
 * @param forest - Forest state
 * @param getNode - Function to get node by ID
 * @param isSelected - Function to check if node is selected
 * @param traverseDescendantsBFS - Function to traverse descendants
 * @returns Value management methods and computed properties
 */
export declare function useValue(props: TreeselectProps, forest: ForestState, getNode: (id: NodeId) => NormalizedNode | null, isSelected: (node: NormalizedNode) => boolean, traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void): {
    selectedNodes: import('vue').ComputedRef<NormalizedNode[]>;
    single: import('vue').ComputedRef<boolean>;
    internalValue: import('vue').ComputedRef<NodeId[]>;
    hasValue: import('vue').ComputedRef<boolean>;
    getValue: () => any;
    computeSelectedNodeIds: (nodeIdListOfPrevValue: NodeId[]) => NodeId[];
};
