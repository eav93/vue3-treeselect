import { computed } from 'vue'
import { createMap } from '@/utils'
import {
  ALL,
  BRANCH_PRIORITY,
  LEAF_PRIORITY,
  ALL_WITH_INDETERMINATE,
} from '@/constants'
import type { NodeId, NormalizedNode, ForestState, TreeselectProps } from '@/types'

/**
 * Sort nodes by index order
 */
function sortValueByIndex(a: NormalizedNode, b: NormalizedNode): number {
  let i = 0
  do {
    if (a.level < i) return -1
    if (b.level < i) return 1
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i]
    i++
  } while (true)
}

/**
 * Sort nodes by level, then by index
 */
function sortValueByLevel(a: NormalizedNode, b: NormalizedNode): number {
  return a.level === b.level
    ? sortValueByIndex(a, b)
    : a.level - b.level
}

/**
 * Expand nodes up to parents when all siblings are selected
 */
function expandNodesUpToParents(
  queue: NodeId[],
  result: NodeId[],
  getNode: (id: NodeId) => NormalizedNode | null
): void {
  const map = createMap<number>()
  for (let head = 0; head < queue.length; head++) {
    const nodeId = queue[head]
    const node = getNode(nodeId)
    if (!node) continue

    result.push(nodeId)
    if (node.isRootNode || !node.parentNode) continue

    const parentNode = node.parentNode
    if (!(parentNode.id in map)) {
      map[parentNode.id] = parentNode.children!.length
    }
    if (--map[parentNode.id] === 0) {
      queue.push(parentNode.id)
    }
  }
}

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
export function useValue(
  props: TreeselectProps,
  forest: ForestState,
  getNode: (id: NodeId) => NormalizedNode | null,
  isSelected: (node: NormalizedNode) => boolean,
  traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void
) {
  /**
   * Selected nodes (full objects)
   */
  const selectedNodes = computed(() => {
    return forest.selectedNodeIds.map(id => getNode(id)!)
  })

  /**
   * Single select mode
   */
  const single = computed(() => !props.multiple)

  /**
   * Internal value - selected node IDs with sorting and filtering applied
   * This is what gets converted to modelValue
   */
  const internalValue = computed<NodeId[]>(() => {
    let internalValue: NodeId[]

    if (single.value || props.flat || props.disableBranchNodes || props.valueConsistsOf === ALL) {
      internalValue = forest.selectedNodeIds.slice()
    } else if (props.valueConsistsOf === BRANCH_PRIORITY) {
      // Exclude descendants if parent is selected
      internalValue = forest.selectedNodeIds.filter(id => {
        const node = getNode(id)
        if (!node) return false
        if (node.isRootNode || !node.parentNode) return true
        return !isSelected(node.parentNode)
      })
    } else if (props.valueConsistsOf === LEAF_PRIORITY) {
      // Only include leaves or empty branches
      internalValue = forest.selectedNodeIds.filter(id => {
        const node = getNode(id)
        if (!node) return false
        if (node.isLeaf) return true
        return node.children!.length === 0
      })
    } else if (props.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      // Include all selected + indeterminate ancestors
      internalValue = forest.selectedNodeIds.slice()
      const seen = createMap<true>()
      for (let i = 0; i < internalValue.length; i++) seen[internalValue[i]] = true
      const indeterminateNodeIds: NodeId[] = []
      selectedNodes.value.forEach(selectedNode => {
        const ancestors = selectedNode.ancestors
        for (let i = 0; i < ancestors.length; i++) {
          const ancestorId = ancestors[i].id
          if (seen[ancestorId]) continue
          seen[ancestorId] = true
          indeterminateNodeIds.push(ancestorId)
        }
      })
      internalValue.push(...indeterminateNodeIds)
    } else {
      internalValue = []
    }

    // Apply sorting
    if (props.sortValueBy === 'LEVEL' || props.sortValueBy === 'INDEX') {
      const compare = props.sortValueBy === 'LEVEL' ? sortValueByLevel : sortValueByIndex
      internalValue = internalValue
        .map(id => getNode(id)!)
        .sort(compare)
        .map(node => node.id)
    }

    return internalValue
  })

  /**
   * Has any value been selected
   */
  const hasValue = computed(() => internalValue.value.length > 0)

  /**
   * Get value in the format specified by valueFormat prop
   */
  const getValue = (): any => {
    if (props.valueFormat === 'id') {
      return props.multiple
        ? internalValue.value.slice()
        : internalValue.value[0]
    }

    const rawNodes = internalValue.value.map(id => getNode(id)!.raw)
    return props.multiple ? rawNodes : rawNodes[0]
  }

  /**
   * Compute selectedNodeIds based on valueConsistsOf mode
   * This expands/contracts the selection based on the mode
   *
   * @param nodeIdListOfPrevValue - Previous value node IDs
   */
  const computeSelectedNodeIds = (nodeIdListOfPrevValue: NodeId[]): NodeId[] => {
    const nextSelectedNodeIds: NodeId[] = []

    if (single.value || props.flat || props.disableBranchNodes || props.valueConsistsOf === ALL) {
      return nodeIdListOfPrevValue
    } else if (props.valueConsistsOf === BRANCH_PRIORITY) {
      // Expand to include all descendants of selected branches
      nodeIdListOfPrevValue.forEach(nodeId => {
        nextSelectedNodeIds.push(nodeId)
        const node = getNode(nodeId)
        if (node?.isBranch) {
          traverseDescendantsBFS(node, descendant => {
            nextSelectedNodeIds.push(descendant.id)
          })
        }
      })
    } else if (props.valueConsistsOf === LEAF_PRIORITY) {
      // Expand leaves up to fully selected branches
      expandNodesUpToParents(nodeIdListOfPrevValue.slice(), nextSelectedNodeIds, getNode)
    } else if (props.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      // Expand from leaves/empty branches up to roots
      const initialQueue = nodeIdListOfPrevValue.filter(nodeId => {
        const node = getNode(nodeId)
        return node && (node.isLeaf || node.children!.length === 0)
      })
      expandNodesUpToParents(initialQueue, nextSelectedNodeIds, getNode)
    }

    return nextSelectedNodeIds
  }

  return {
    selectedNodes,
    single,
    internalValue,
    hasValue,
    getValue,
    computeSelectedNodeIds,
  }
}
