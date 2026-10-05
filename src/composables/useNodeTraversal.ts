import type { NormalizedNode } from '@/types'

/**
 * Traverse descendants in breadth-first order
 * @param parentNode - The parent node to start from
 * @param callback - Function to call for each descendant
 */
export function traverseDescendantsBFS(
  parentNode: NormalizedNode,
  callback: (node: NormalizedNode) => void
): void {
  if (!parentNode.isBranch || !parentNode.children) return

  // Index-based queue: `shift()` and `push(...spread)` are O(n) / stack-bound
  const queue: NormalizedNode[] = parentNode.children.slice()
  for (let head = 0; head < queue.length; head++) {
    const currNode = queue[head]
    const children = currNode.children
    if (currNode.isBranch && children) {
      for (let i = 0; i < children.length; i++) queue.push(children[i])
    }
    callback(currNode)
  }
}

/**
 * Traverse descendants in depth-first (post-order) order
 * @param parentNode - The parent node to start from
 * @param callback - Function to call for each descendant
 */
export function traverseDescendantsDFS(
  parentNode: NormalizedNode,
  callback: (node: NormalizedNode) => void
): void {
  const children = parentNode.children
  if (!parentNode.isBranch || !children) return

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    // Deep-level nodes first
    traverseDescendantsDFS(child, callback)
    callback(child)
  }
}

/**
 * Traverse all nodes in depth-first (post-order) order
 * @param normalizedOptions - Root nodes to traverse
 * @param callback - Function to call for each node
 */
export function traverseAllNodesDFS(
  normalizedOptions: NormalizedNode[],
  callback: (node: NormalizedNode) => void
): void {
  for (let i = 0; i < normalizedOptions.length; i++) {
    const rootNode = normalizedOptions[i]
    // Deep-level nodes first
    traverseDescendantsDFS(rootNode, callback)
    callback(rootNode)
  }
}

/**
 * Traverse all nodes in index (pre-) order
 * @param normalizedOptions - Root nodes to traverse
 * @param callback - Function to call for each node. Return false to skip children.
 */
export function traverseAllNodesByIndex(
  normalizedOptions: NormalizedNode[],
  callback: (node: NormalizedNode) => boolean | void
): void {
  const walk = (nodes: NormalizedNode[]): void => {
    for (let i = 0; i < nodes.length; i++) {
      const child = nodes[i]
      if (callback(child) !== false && child.isBranch && child.children) {
        walk(child.children)
      }
    }
  }

  walk(normalizedOptions)
}

/**
 * Composable for tree traversal operations
 *
 * Provides utility functions for traversing the tree structure
 * in different orders (BFS, DFS, by index).
 */
export function useNodeTraversal() {
  return {
    traverseDescendantsBFS,
    traverseDescendantsDFS,
    traverseAllNodesDFS,
    traverseAllNodesByIndex,
  }
}
