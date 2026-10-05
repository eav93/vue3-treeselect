import { NormalizedNode } from '../types';
/**
 * Traverse descendants in breadth-first order
 * @param parentNode - The parent node to start from
 * @param callback - Function to call for each descendant
 */
export declare function traverseDescendantsBFS(parentNode: NormalizedNode, callback: (node: NormalizedNode) => void): void;
/**
 * Traverse descendants in depth-first (post-order) order
 * @param parentNode - The parent node to start from
 * @param callback - Function to call for each descendant
 */
export declare function traverseDescendantsDFS(parentNode: NormalizedNode, callback: (node: NormalizedNode) => void): void;
/**
 * Traverse all nodes in depth-first (post-order) order
 * @param normalizedOptions - Root nodes to traverse
 * @param callback - Function to call for each node
 */
export declare function traverseAllNodesDFS(normalizedOptions: NormalizedNode[], callback: (node: NormalizedNode) => void): void;
/**
 * Traverse all nodes in index (pre-) order
 * @param normalizedOptions - Root nodes to traverse
 * @param callback - Function to call for each node. Return false to skip children.
 */
export declare function traverseAllNodesByIndex(normalizedOptions: NormalizedNode[], callback: (node: NormalizedNode) => boolean | void): void;
/**
 * Composable for tree traversal operations
 *
 * Provides utility functions for traversing the tree structure
 * in different orders (BFS, DFS, by index).
 */
export declare function useNodeTraversal(): {
    traverseDescendantsBFS: typeof traverseDescendantsBFS;
    traverseDescendantsDFS: typeof traverseDescendantsDFS;
    traverseAllNodesDFS: typeof traverseAllNodesDFS;
    traverseAllNodesByIndex: typeof traverseAllNodesByIndex;
};
