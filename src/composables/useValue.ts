import { computed } from 'vue'
import { quickDiff, find, createMap } from '@/utils'
import type { NodeId, NormalizedNode, ForestState, TreeselectProps } from '@/types'

// Constants - will be imported from constants.ts later
const ALL = 'ALL'
const BRANCH_PRIORITY = 'BRANCH_PRIORITY'
const LEAF_PRIORITY = 'LEAF_PRIORITY'
const ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE'

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
 * Composable for managing selected values
 *
 * @param props - Component props
 * @param forest - Forest state
 * @param getNode - Function to get node by ID
 * @param isSelected - Function to check if node is selected
 * @param traverseDescendantsBFS - Function to traverse descendants
 * @param enhancedNormalizer - Function to normalize raw nodes
 * @returns Value management methods and computed properties
 */
export function useValue(
  props: TreeselectProps,
  forest: ForestState,
  getNode: (id: NodeId) => NormalizedNode | null,
  isSelected: (node: NormalizedNode) => boolean,
  traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void,
  enhancedNormalizer: (raw: any) => any
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
        if (node.isRootNode) return true
        return !isSelected(node.parentNode!)
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
      const indeterminateNodeIds: NodeId[] = []
      internalValue = forest.selectedNodeIds.slice()
      selectedNodes.value.forEach(selectedNode => {
        selectedNode.ancestors.forEach(ancestor => {
          if (indeterminateNodeIds.includes(ancestor.id)) return
          if (internalValue.includes(ancestor.id)) return
          indeterminateNodeIds.push(ancestor.id)
        })
      })
      internalValue.push(...indeterminateNodeIds)
    } else {
      internalValue = []
    }

    // Apply sorting
    if (props.sortValueBy === 'LEVEL') {
      internalValue.sort((a, b) => sortValueByLevel(getNode(a)!, getNode(b)!))
    } else if (props.sortValueBy === 'INDEX') {
      internalValue.sort((a, b) => sortValueByIndex(getNode(a)!, getNode(b)!))
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
   * Extract node IDs from modelValue prop
   */
  const extractCheckedNodeIdsFromValue = (): NodeId[] => {
    if (props.modelValue == null) return []

    if (props.valueFormat === 'id') {
      return props.multiple
        ? props.modelValue.slice()
        : [props.modelValue]
    }

    return (props.multiple ? props.modelValue : [props.modelValue])
      .map((node: any) => enhancedNormalizer(node))
      .map((node: any) => node.id)
  }

  /**
   * Extract raw node from modelValue by ID
   */
  const extractNodeFromValue = (id: NodeId): any => {
    const defaultNode = { id }

    if (props.valueFormat === 'id') {
      return defaultNode
    }

    const valueArray = props.multiple
      ? Array.isArray(props.modelValue) ? props.modelValue : []
      : props.modelValue ? [props.modelValue] : []

    const matched = find(
      valueArray,
      (node: any) => node && enhancedNormalizer(node).id === id
    )

    return matched || defaultNode
  }

  /**
   * Fix selectedNodeIds based on valueConsistsOf mode
   * This expands/contracts the selection based on the mode
   *
   * @param nodeIdListOfPrevValue - Previous value node IDs
   * @param buildForestState - Function to rebuild forest state
   */
  const fixSelectedNodeIds = (
    nodeIdListOfPrevValue: NodeId[],
    buildForestState: () => void
  ): void => {
    let nextSelectedNodeIds: NodeId[] = []

    if (single.value || props.flat || props.disableBranchNodes || props.valueConsistsOf === ALL) {
      nextSelectedNodeIds = nodeIdListOfPrevValue
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
      const map = createMap<number>()
      const queue = nodeIdListOfPrevValue.slice()
      while (queue.length) {
        const nodeId = queue.shift()!
        const node = getNode(nodeId)
        if (!node) continue

        nextSelectedNodeIds.push(nodeId)
        if (node.isRootNode) continue

        if (!(node.parentNode!.id in map)) {
          map[node.parentNode!.id] = node.parentNode!.children!.length
        }
        if (--map[node.parentNode!.id] === 0) {
          queue.push(node.parentNode!.id)
        }
      }
    } else if (props.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      // Expand from leaves/empty branches up to roots
      const map = createMap<number>()
      const queue = nodeIdListOfPrevValue.filter(nodeId => {
        const node = getNode(nodeId)
        return node && (node.isLeaf || node.children!.length === 0)
      })
      while (queue.length) {
        const nodeId = queue.shift()!
        const node = getNode(nodeId)
        if (!node) continue

        nextSelectedNodeIds.push(nodeId)
        if (node.isRootNode) continue

        if (!(node.parentNode!.id in map)) {
          map[node.parentNode!.id] = node.parentNode!.children!.length
        }
        if (--map[node.parentNode!.id] === 0) {
          queue.push(node.parentNode!.id)
        }
      }
    }

    const hasChanged = quickDiff(forest.selectedNodeIds, nextSelectedNodeIds)
    if (hasChanged) {
      forest.selectedNodeIds = nextSelectedNodeIds
    }

    buildForestState()
  }

  return {
    selectedNodes,
    single,
    internalValue,
    hasValue,
    getValue,
    extractCheckedNodeIdsFromValue,
    extractNodeFromValue,
    fixSelectedNodeIds,
  }
}
