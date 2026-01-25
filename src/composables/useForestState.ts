import { reactive } from 'vue'
import { createMap } from '@/utils'
import type { ForestState, TreeselectProps, NodeId, NormalizedNode, CheckedState } from '@/types'

// Import constants
const UNCHECKED = 0 as CheckedState
const INDETERMINATE = 1 as CheckedState
const CHECKED = 2 as CheckedState

/**
 * Composable for managing forest state (tree structure and selection)
 *
 * @param extractCheckedNodeIdsFromValue - Function to extract initial selected IDs from modelValue
 * @returns Forest state and related methods
 */
export function useForestState(
  extractCheckedNodeIdsFromValue: () => NodeId[]
) {
  const forest = reactive<ForestState>({
    normalizedOptions: [],
    nodeMap: createMap(),
    checkedStateMap: createMap(),
    selectedNodeIds: extractCheckedNodeIdsFromValue(),
    selectedNodeMap: createMap(),
  })

  /**
   * Build/rebuild forest state maps (selectedNodeMap and checkedStateMap)
   *
   * This is called after:
   * - Initial load
   * - Selection changes
   * - Options reinitialization
   *
   * @param props - Component props
   * @param selectedNodes - Array of selected nodes
   * @param traverseAllNodesByIndex - Function to traverse all nodes
   */
  const buildForestState = (
    props: TreeselectProps,
    selectedNodes: NormalizedNode[],
    traverseAllNodesByIndex: (callback: (node: NormalizedNode) => void) => void,
    isSelected: (node: NormalizedNode) => boolean
  ): void => {
    // Build selectedNodeMap for O(1) lookup
    const selectedNodeMap = createMap<true>()
    forest.selectedNodeIds.forEach(selectedNodeId => {
      selectedNodeMap[selectedNodeId] = true
    })
    forest.selectedNodeMap = selectedNodeMap

    // Build checkedStateMap for multi-select mode
    const checkedStateMap = createMap<CheckedState>()
    if (props.multiple) {
      // Initialize all nodes as UNCHECKED
      traverseAllNodesByIndex(node => {
        checkedStateMap[node.id] = UNCHECKED
      })

      // Mark selected nodes as CHECKED and their ancestors as INDETERMINATE
      selectedNodes.forEach(selectedNode => {
        checkedStateMap[selectedNode.id] = CHECKED

        if (!props.flat && !props.disableBranchNodes) {
          selectedNode.ancestors.forEach(ancestorNode => {
            if (!isSelected(ancestorNode)) {
              checkedStateMap[ancestorNode.id] = INDETERMINATE
            }
          })
        }
      })
    }
    forest.checkedStateMap = checkedStateMap
  }

  /**
   * Check if a node is selected
   * @param node - Node to check
   * @returns True if node is selected
   */
  const isSelected = (node: NormalizedNode | null): boolean => {
    return !!node && forest.selectedNodeMap[node.id] === true
  }

  return {
    forest,
    buildForestState,
    isSelected,
  }
}
