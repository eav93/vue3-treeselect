import { RawNode, NormalizedNode, NodeMap, NodeId, TreeselectProps, ForestState, AsyncOptionsStates } from '../types';
/**
 * Helper to create async options states
 */
export declare function createAsyncOptionsStates(): AsyncOptionsStates;
/**
 * Composable for normalizing raw nodes into the internal tree structure
 *
 * @param props - Component props
 * @param forest - Forest state
 * @param getInstanceId - Instance ID getter
 * @param loadChildrenOptions - Function to load children options
 * @returns Normalization methods
 */
export declare function useNodeNormalization(props: TreeselectProps, forest: ForestState, getInstanceId: () => NodeId, loadChildrenOptions: (node: NormalizedNode) => void): {
    normalize: (parentNode: NormalizedNode | null, nodes: RawNode[], prevNodeMap?: NodeMap) => NormalizedNode[];
    enhancedNormalizer: (raw: RawNode) => any;
};
