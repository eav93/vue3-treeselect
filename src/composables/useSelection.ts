import { nextTick } from 'vue'
import { removeFromArray, getLast } from '@/utils'
import { NO_PARENT_NODE, UNCHECKED } from '@/constants'
import type {
  NormalizedNode,
  ForestState,
  TreeselectProps,
  TreeselectEmits,
  NodeId,
  LocalSearchState,
} from '@/types'

/**
 * Composable for managing node selection
 *
 * @param props - Component props
 * @param emit - Emit function
 * @param forest - Forest state
 * @param getNode - Function to get node by ID
 * @param isSelected - Function to check if node is selected
 * @param traverseDescendantsBFS - Function to traverse descendants breadth-first
 * @param traverseDescendantsDFS - Function to traverse descendants depth-first
 * @param buildForestState - Function to rebuild forest state maps
 * @param resetSearchQuery - Function to reset search query
 * @param closeMenu - Function to close the menu
 * @param hasValue - Computed for whether any value is selected
 * @param internalValue - Computed for internal value
 * @param single - Computed for single mode
 * @param instanceId - Instance ID
 * @param localSearch - Local search state
 * @returns Selection methods
 */
export function useSelection(
  props: TreeselectProps,
  emit: TreeselectEmits,
  forest: ForestState,
  getNode: (id: NodeId) => NormalizedNode | null,
  isSelected: (node: NormalizedNode) => boolean,
  traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void,
  traverseDescendantsDFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void,
  buildForestState: () => void,
  resetSearchQuery: () => void,
  closeMenu: () => void,
  hasValue: () => boolean,
  internalValue: () => NodeId[],
  single: () => boolean,
  instanceId: string | number,
  localSearch: LocalSearchState
) {
  /**
   * Flags for internal state
   */
  let _blurOnSelect = false

  /**
   * Reset internal flags and return blur flag
   * @returns Whether blur should happen on select
   */
  const resetFlags = (): boolean => {
    const shouldBlur = _blurOnSelect
    _blurOnSelect = false
    return shouldBlur
  }

  /**
   * Add a node to selection
   */
  const addValue = (node: NormalizedNode): void => {
    forest.selectedNodeIds.push(node.id)
    forest.selectedNodeMap[node.id] = true
  }

  /**
   * Remove a node from selection
   */
  const removeValue = (node: NormalizedNode): void => {
    removeFromArray(forest.selectedNodeIds, node.id)
    delete forest.selectedNodeMap[node.id]
  }

  /**
   * Clear all selected values
   */
  const clear = (): void => {
    if (!hasValue()) return

    if (single() || props.allowClearingDisabled) {
      forest.selectedNodeIds = []
    } else {
      // Multi mode: keep disabled nodes
      forest.selectedNodeIds = forest.selectedNodeIds.filter(nodeId => {
        const node = getNode(nodeId)
        return node ? node.isDisabled : false
      })
    }

    buildForestState()
  }

  /**
   * Select a node (private - called by select())
   * Handles cascading selection logic
   */
  const _selectNode = (node: NormalizedNode): void => {
    // Single mode or disableBranchNodes: just add value
    if (single() || props.disableBranchNodes) {
      return addValue(node)
    }

    // Flat mode
    if (props.flat) {
      addValue(node)

      if (props.autoSelectAncestors) {
        node.ancestors.forEach(ancestor => {
          if (!isSelected(ancestor) && !ancestor.isDisabled) {
            addValue(ancestor)
          }
        })
      } else if (props.autoSelectDescendants) {
        traverseDescendantsBFS(node, descendant => {
          if (!isSelected(descendant) && !descendant.isDisabled) {
            addValue(descendant)
          }
        })
      }

      return
    }

    // Nested mode: check if fully checkable
    const isFullyChecked = (
      node.isLeaf ||
      !node.hasDisabledDescendants ||
      props.allowSelectingDisabledDescendants
    )

    if (isFullyChecked) {
      addValue(node)
    }

    // Select all descendants if branch
    if (node.isBranch) {
      traverseDescendantsBFS(node, descendant => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          addValue(descendant)
        }
      })
    }

    // Auto-select ancestors if all siblings are selected
    if (isFullyChecked) {
      let curr: NormalizedNode | null = node
      while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
        if (curr && curr.children!.every(isSelected)) {
          addValue(curr)
        } else {
          break
        }
      }
    }
  }

  /**
   * Deselect a node (private - called by select())
   * Handles cascading deselection logic
   */
  const _deselectNode = (node: NormalizedNode): void => {
    // disableBranchNodes mode
    if (props.disableBranchNodes) {
      return removeValue(node)
    }

    // Flat mode
    if (props.flat) {
      removeValue(node)

      if (props.autoDeselectAncestors) {
        node.ancestors.forEach(ancestor => {
          if (isSelected(ancestor) && !ancestor.isDisabled) {
            removeValue(ancestor)
          }
        })
      } else if (props.autoDeselectDescendants) {
        traverseDescendantsBFS(node, descendant => {
          if (isSelected(descendant) && !descendant.isDisabled) {
            removeValue(descendant)
          }
        })
      }

      return
    }

    // Nested mode: deselect all descendants
    let hasUncheckedSomeDescendants = false
    if (node.isBranch) {
      traverseDescendantsDFS(node, descendant => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          removeValue(descendant)
          hasUncheckedSomeDescendants = true
        }
      })
    }

    // Remove this node and ancestors if needed
    if (
      node.isLeaf ||
      hasUncheckedSomeDescendants ||
      (node.isBranch && node.children!.length === 0)
    ) {
      removeValue(node)

      // Auto-deselect ancestors
      let curr: NormalizedNode | null = node
      while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
        if (curr && isSelected(curr)) {
          removeValue(curr)
        } else {
          break
        }
      }
    }
  }

  /**
   * Toggle selection state of a node
   * Main public API for selection
   */
  const select = (node: NormalizedNode): void => {
    if (props.disabled || node.isDisabled) {
      return
    }

    // Single mode: clear first
    if (single()) {
      clear()
    }

    // Determine next state
    const nextState = props.multiple && !props.flat
      ? forest.checkedStateMap[node.id] === UNCHECKED
      : !isSelected(node)

    // Apply selection/deselection
    if (nextState) {
      _selectNode(node)
    } else {
      _deselectNode(node)
    }

    buildForestState()

    // Emit events
    void nextTick(() => {
      if (nextState) {
        emit('select', node.raw, instanceId)
      } else {
        emit('deselect', node.raw, instanceId)
      }
    })

    // Reset search if needed
    if (localSearch.active && nextState && (single() || props.clearOnSelect)) {
      resetSearchQuery()
    }

    // Close the menu if single select
    if (single() && props.closeOnSelect) {
      closeMenu()

      if (props.searchable) {
        _blurOnSelect = true
      }
    }
  }

  /**
   * Remove the last selected value (for backspace key)
   */
  const removeLastValue = (): void => {
    if (!hasValue()) return
    if (single()) return clear()

    const lastValue = getLast(internalValue())
    if (!lastValue) return
    const lastSelectedNode = getNode(lastValue)
    if (lastSelectedNode) {
      select(lastSelectedNode) // This will deselect it
    }
  }

  return {
    select,
    clear,
    addValue,
    removeValue,
    removeLastValue,
    resetFlags,
  }
}
