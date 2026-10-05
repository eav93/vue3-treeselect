import { shallowReactive } from 'vue'
import { createMap } from '@/utils'
import { UNCHECKED, INDETERMINATE, CHECKED } from '@/constants'
import type { ForestState, TreeselectProps, NodeId, NormalizedNode, CheckedState } from '@/types'

/**
 * Composable for managing forest state (tree structure and selection)
 *
 * Selection state is maintained incrementally: changing the selection only
 * touches the changed nodes and their ancestors instead of the whole tree.
 *
 * @param props - Component props
 * @param initialSelectedNodeIds - Initially selected IDs (from modelValue)
 * @returns Forest state and related methods
 */
export function useForestState(
  props: TreeselectProps,
  initialSelectedNodeIds: NodeId[]
) {
  const forest = shallowReactive<ForestState>({
    normalizedOptions: [],
    nodeMap: createMap(),
    checkedStateMap: shallowReactive(createMap<CheckedState>()),
    selectedNodeIds: initialSelectedNodeIds,
    selectedNodeMap: shallowReactive(createMap<true>()),
  })

  // Non-reactive bookkeeping mirrors of the reactive maps above
  let selectedSet = createMap<true>()
  // Number of selected descendants per branch node (for the indeterminate state)
  let selectedDescendantsCount = createMap<number>()

  const shouldTrackIndeterminate = (): boolean =>
    !!props.multiple && !props.flat && !props.disableBranchNodes

  const computeCheckedState = (id: NodeId): CheckedState => {
    if (selectedSet[id]) return CHECKED
    if (shouldTrackIndeterminate() && selectedDescendantsCount[id] > 0) return INDETERMINATE
    return UNCHECKED
  }

  const countAncestors = (id: NodeId, delta: number, touched?: Record<NodeId, NodeId>): void => {
    const node = forest.nodeMap[id]
    if (!node) return
    const ancestors = node.ancestors
    for (let i = 0; i < ancestors.length; i++) {
      const ancestorId = ancestors[i].id
      selectedDescendantsCount[ancestorId] = (selectedDescendantsCount[ancestorId] || 0) + delta
      if (touched) touched[ancestorId] = ancestorId
    }
  }

  /**
   * Rebuild selection maps from scratch.
   * Needed after (re)initialization of options or when the mode props change.
   */
  const buildForestState = (): void => {
    selectedSet = createMap()
    selectedDescendantsCount = createMap()

    const selectedNodeMap = createMap<true>()
    const ids = forest.selectedNodeIds
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      if (selectedSet[id]) continue
      selectedSet[id] = true
      selectedNodeMap[id] = true
      if (shouldTrackIndeterminate()) countAncestors(id, 1)
    }
    forest.selectedNodeMap = shallowReactive(selectedNodeMap)

    const checkedStateMap = createMap<CheckedState>()
    if (props.multiple) {
      const { nodeMap } = forest
      for (const key in nodeMap) {
        const id = nodeMap[key].id
        checkedStateMap[id] = computeCheckedState(id)
      }
    }
    forest.checkedStateMap = shallowReactive(checkedStateMap)
  }

  /**
   * Replace the selection, updating only the nodes that changed.
   * @param nextSelectedNodeIds - New list of selected node IDs
   */
  const setSelectedNodeIds = (nextSelectedNodeIds: NodeId[]): void => {
    const prevSelectedNodeIds = forest.selectedNodeIds
    const nextSet = createMap<true>()
    for (let i = 0; i < nextSelectedNodeIds.length; i++) nextSet[nextSelectedNodeIds[i]] = true

    const added: NodeId[] = []
    const removed: NodeId[] = []
    const seen = createMap<true>()
    for (let i = 0; i < nextSelectedNodeIds.length; i++) {
      const id = nextSelectedNodeIds[i]
      if (!selectedSet[id] && !seen[id]) {
        seen[id] = true
        added.push(id)
      }
    }
    for (let i = 0; i < prevSelectedNodeIds.length; i++) {
      const id = prevSelectedNodeIds[i]
      if (!nextSet[id] && !seen[id]) {
        seen[id] = true
        removed.push(id)
      }
    }

    forest.selectedNodeIds = nextSelectedNodeIds
    if (!added.length && !removed.length) return

    const { selectedNodeMap, checkedStateMap } = forest
    const trackIndeterminate = shouldTrackIndeterminate()
    const touched = createMap<NodeId>()

    for (let i = 0; i < removed.length; i++) {
      const id = removed[i]
      delete selectedSet[id]
      delete selectedNodeMap[id]
      touched[id] = id
      if (trackIndeterminate) countAncestors(id, -1, touched)
    }
    for (let i = 0; i < added.length; i++) {
      const id = added[i]
      selectedSet[id] = true
      selectedNodeMap[id] = true
      touched[id] = id
      if (trackIndeterminate) countAncestors(id, 1, touched)
    }

    if (props.multiple) {
      for (const key in touched) {
        const id = touched[key]
        checkedStateMap[id] = computeCheckedState(id)
      }
    }
  }

  /**
   * Check if a node is selected
   * @param node - Node to check
   * @returns True if node is selected
   */
  const isSelected = (node: NormalizedNode | null): boolean => {
    return !!node && forest.selectedNodeMap[node.id] === true
  }

  /**
   * Get the checked state of a node (multi-select mode)
   */
  const getCheckedState = (node: NormalizedNode): CheckedState | undefined => {
    return forest.checkedStateMap[node.id]
  }

  return {
    forest,
    buildForestState,
    setSelectedNodeIds,
    isSelected,
    getCheckedState,
  }
}
