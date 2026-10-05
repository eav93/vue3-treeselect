import { nextTick } from 'vue'
import { createMap } from '@/utils'
import { UNCHECKED } from '@/constants'
import type {
  NormalizedNode,
  ForestState,
  TreeselectProps,
  TreeselectEmits,
  NodeId,
  LocalSearchState,
  CheckedState,
} from '@/types'

/**
 * Mutable working copy of the selection.
 * All changes of one operation are collected here and committed at once,
 * which keeps every operation O(changes) instead of O(changes * selected).
 */
interface SelectionDraft {
  has: (node: NormalizedNode) => boolean
  add: (node: NormalizedNode) => void
  remove: (node: NormalizedNode) => void
  commit: () => void
}

/**
 * Composable for managing node selection
 */
export function useSelection(options: {
  props: TreeselectProps
  emit: TreeselectEmits
  forest: ForestState
  getNode: (id: NodeId) => NormalizedNode | null
  getCheckedState: (node: NormalizedNode) => CheckedState | undefined
  setSelectedNodeIds: (ids: NodeId[]) => void
  traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void
  traverseDescendantsDFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void
  resetSearchQuery: () => void
  closeMenu: () => void
  hasValue: () => boolean
  internalValue: () => NodeId[]
  single: () => boolean
  getInstanceId: () => NodeId
  localSearch: LocalSearchState
}) {
  const {
    props,
    emit,
    forest,
    getNode,
    getCheckedState,
    setSelectedNodeIds,
    traverseDescendantsBFS,
    traverseDescendantsDFS,
    resetSearchQuery,
    closeMenu,
    hasValue,
    internalValue,
    single,
    getInstanceId,
    localSearch,
  } = options

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

  const createDraft = (initialIds: NodeId[] = forest.selectedNodeIds): SelectionDraft => {
    const prevIds = initialIds
    const set = createMap<true>()
    for (let i = 0; i < prevIds.length; i++) set[prevIds[i]] = true
    const added: NodeId[] = []
    const addedSet = createMap<true>()

    return {
      has: node => set[node.id] === true,
      add: node => {
        if (set[node.id]) return
        set[node.id] = true
        if (!addedSet[node.id]) {
          addedSet[node.id] = true
          added.push(node.id)
        }
      },
      remove: node => {
        delete set[node.id]
      },
      commit: () => {
        const next: NodeId[] = []
        for (let i = 0; i < prevIds.length; i++) {
          const id = prevIds[i]
          if (set[id] && !addedSet[id]) next.push(id)
        }
        for (let i = 0; i < added.length; i++) {
          if (set[added[i]]) next.push(added[i])
        }
        setSelectedNodeIds(next)
      },
    }
  }

  /**
   * Clear all selected values
   */
  const clear = (): void => {
    if (!hasValue()) return

    if (single() || props.allowClearingDisabled) {
      setSelectedNodeIds([])
    } else {
      // Multi mode: keep disabled nodes
      setSelectedNodeIds(forest.selectedNodeIds.filter(nodeId => {
        const node = getNode(nodeId)
        return node ? node.isDisabled : false
      }))
    }
  }

  /**
   * Select a node, handling cascading selection logic
   */
  const selectNode = (draft: SelectionDraft, node: NormalizedNode): void => {
    // Single mode or disableBranchNodes: just add value
    if (single() || props.disableBranchNodes) {
      return draft.add(node)
    }

    // Flat mode
    if (props.flat) {
      draft.add(node)

      if (props.autoSelectAncestors) {
        node.ancestors.forEach(ancestor => {
          if (!draft.has(ancestor) && !ancestor.isDisabled) draft.add(ancestor)
        })
      } else if (props.autoSelectDescendants) {
        traverseDescendantsBFS(node, descendant => {
          if (!draft.has(descendant) && !descendant.isDisabled) draft.add(descendant)
        })
      }

      return
    }

    // Nested mode: check if fully checkable
    const isFullyChecked = (
      node.isLeaf ||
      !node.hasDisabledDescendants ||
      !!props.allowSelectingDisabledDescendants
    )

    if (isFullyChecked) {
      draft.add(node)
    }

    // Select all descendants if branch
    if (node.isBranch) {
      traverseDescendantsBFS(node, descendant => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          // A branch containing disabled descendants can't become fully checked
          if (descendant.isBranch && descendant.hasDisabledDescendants &&
            !props.allowSelectingDisabledDescendants) return
          draft.add(descendant)
        }
      })
    }

    // Auto-select ancestors if all siblings are selected
    if (isFullyChecked) {
      let curr: NormalizedNode | null = node
      while ((curr = curr.parentNode) !== null) {
        if (curr.children!.every(draft.has)) {
          draft.add(curr)
        } else {
          break
        }
      }
    }
  }

  /**
   * Deselect a node, handling cascading deselection logic
   */
  const deselectNode = (draft: SelectionDraft, node: NormalizedNode): void => {
    // disableBranchNodes mode
    if (props.disableBranchNodes) {
      return draft.remove(node)
    }

    // Flat mode
    if (props.flat) {
      draft.remove(node)

      if (props.autoDeselectAncestors) {
        node.ancestors.forEach(ancestor => {
          if (draft.has(ancestor) && !ancestor.isDisabled) draft.remove(ancestor)
        })
      } else if (props.autoDeselectDescendants) {
        traverseDescendantsBFS(node, descendant => {
          if (draft.has(descendant) && !descendant.isDisabled) draft.remove(descendant)
        })
      }

      return
    }

    // Nested mode: deselect all descendants
    let hasUncheckedSomeDescendants = false
    if (node.isBranch) {
      traverseDescendantsDFS(node, descendant => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          draft.remove(descendant)
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
      draft.remove(node)

      // Auto-deselect ancestors
      let curr: NormalizedNode | null = node
      while ((curr = curr.parentNode) !== null) {
        if (draft.has(curr)) {
          draft.remove(curr)
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

    // Single mode: start from an empty selection
    const draft = createDraft(single() ? [] : forest.selectedNodeIds)

    // Determine next state
    const nextState = props.multiple && !props.flat
      ? getCheckedState(node) === UNCHECKED
      : !draft.has(node)

    // Apply selection/deselection
    if (nextState) {
      selectNode(draft, node)
    } else {
      deselectNode(draft, node)
    }

    draft.commit()

    // Emit events
    const instanceId = getInstanceId()
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

    const value = internalValue()
    const lastValue = value[value.length - 1]
    if (lastValue == null) return
    const lastSelectedNode = getNode(lastValue)
    if (lastSelectedNode) {
      select(lastSelectedNode) // This will deselect it
    }
  }

  return {
    select,
    clear,
    removeLastValue,
    resetFlags,
  }
}
