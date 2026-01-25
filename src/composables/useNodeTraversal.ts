import type { NormalizedNode } from '@/types'

/**
 * Composable for tree traversal operations
 *
 * Provides utility functions for traversing the tree structure
 * in different orders (BFS, DFS, by index).
 */
export function useNodeTraversal() {
  /**
   * Traverse descendants in breadth-first order
   * @param parentNode - The parent node to start from
   * @param callback - Function to call for each descendant
   */
  const traverseDescendantsBFS = (
    parentNode: NormalizedNode,
    callback: (node: NormalizedNode) => void
  ): void => {
    if (!parentNode.isBranch) return

    const queue = parentNode.children!.slice()
    while (queue.length) {
      const currNode = queue[0]
      if (currNode.isBranch) {
        queue.push(...currNode.children!)
      }
      callback(currNode)
      queue.shift()
    }
  }

  /**
   * Traverse descendants in depth-first order
   * @param parentNode - The parent node to start from
   * @param callback - Function to call for each descendant
   */
  const traverseDescendantsDFS = (
    parentNode: NormalizedNode,
    callback: (node: NormalizedNode) => void
  ): void => {
    if (!parentNode.isBranch) return

    parentNode.children!.forEach(child => {
      // Deep-level nodes first
      traverseDescendantsDFS(child, callback)
      callback(child)
    })
  }

  /**
   * Traverse all nodes in depth-first order
   * @param normalizedOptions - Root nodes to traverse
   * @param callback - Function to call for each node
   */
  const traverseAllNodesDFS = (
    normalizedOptions: NormalizedNode[],
    callback: (node: NormalizedNode) => void
  ): void => {
    normalizedOptions.forEach(rootNode => {
      // Deep-level nodes first
      traverseDescendantsDFS(rootNode, callback)
      callback(rootNode)
    })
  }

  /**
   * Traverse all nodes by index order
   * @param normalizedOptions - Root nodes to traverse
   * @param callback - Function to call for each node. Return false to skip children.
   */
  const traverseAllNodesByIndex = (
    normalizedOptions: NormalizedNode[],
    callback: (node: NormalizedNode) => boolean | void
  ): void => {
    const walk = (parentNode: { children?: NormalizedNode[] }): void => {
      if (!parentNode.children) return
      parentNode.children.forEach(child => {
        if (callback(child) !== false && child.isBranch && child.children) {
          walk(child)
        }
      })
    }

    // Create a fake root node to simplify traversal logic
    walk({ children: normalizedOptions })
  }

  return {
    traverseDescendantsBFS,
    traverseDescendantsDFS,
    traverseAllNodesDFS,
    traverseAllNodesByIndex,
  }
}
