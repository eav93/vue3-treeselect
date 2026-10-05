import { computed, isReactive, onMounted, onUnmounted, reactive, shallowReactive, watch } from 'vue'
import { createMap, quickDiff, warning } from '@/utils'
import { NO_PARENT_NODE } from '@/constants'
import {
  traverseAllNodesByIndex,
  traverseAllNodesDFS,
  traverseDescendantsBFS,
  traverseDescendantsDFS,
} from './useNodeTraversal'
import { useForestState } from './useForestState'
import { useNodeNormalization } from './useNodeNormalization'
import { useValue } from './useValue'
import { useSelection } from './useSelection'
import { useMenu } from './useMenu'
import { useLocalSearch } from './useLocalSearch'
import { useRemoteSearch } from './useRemoteSearch'
import { useAsyncOptions } from './useAsyncOptions'
import type {
  NodeId,
  NodeMap,
  NormalizedNode,
  RawNode,
  TreeselectEmits,
  TreeselectProps,
  TriggerState,
} from '@/types'

/**
 * Warn about invalid combinations of props
 */
function verifyProps(props: TreeselectProps): void {
  warning(
    () => props.async ? !!props.searchable : true,
    () => 'For async search mode, the value of "searchable" prop must be true.'
  )

  if (props.options == null && !props.loadOptions) {
    warning(
      () => false,
      () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
    )
  }

  if (props.flat) {
    warning(
      () => !!props.multiple,
      () => 'You are using flat mode. But you forgot to add "multiple=true"?'
    )
  }

  if (!props.flat) {
    const propNames = [
      'autoSelectAncestors',
      'autoSelectDescendants',
      'autoDeselectAncestors',
      'autoDeselectDescendants',
    ] as const

    propNames.forEach(propName => {
      warning(
        () => !props[propName],
        () => `"${propName}" only applies to flat mode.`
      )
    })
  }
}

export interface UseTreeselectOptions {
  /** Instance ID getter */
  getInstanceId: () => NodeId
  /** Function to get menu DOM element */
  getMenuElement: () => HTMLElement | null
  /** Function to get control DOM element */
  getControlElement: () => HTMLElement | null
  /** Function to toggle click outside listener */
  toggleClickOutsideEvent: (enabled: boolean) => void
  /** Focus the input (used by `autoFocus`) */
  focusInput: () => void
}

/**
 * Main composable for Treeselect functionality
 * Integrates all sub-composables and provides the complete API
 *
 * @param props - Component props
 * @param emit - Emit function
 * @param options - DOM helpers provided by the component
 * @returns Complete Treeselect instance API
 */
export function useTreeselect(
  props: TreeselectProps,
  emit: TreeselectEmits,
  options: UseTreeselectOptions
) {
  const {
    getInstanceId,
    getMenuElement,
    getControlElement,
    toggleClickOutsideEvent,
    focusInput,
  } = options

  verifyProps(props)

  /**
   * Trigger state (focus and search)
   */
  const trigger = reactive<TriggerState>({
    isFocused: false,
    searchQuery: '',
  })

  /**
   * Reset search query
   */
  const resetSearchQuery = (): void => {
    trigger.searchQuery = ''
  }

  // ============================================================================
  // modelValue helpers
  // ============================================================================

  /**
   * Apply the user's normalizer and return the merged node
   */
  const normalizeRawNode = (raw: RawNode): any => {
    return {
      ...raw,
      ...(props.normalizer ? props.normalizer(raw, getInstanceId()) : {}),
    }
  }

  const getValueArray = (): any[] => {
    if (props.modelValue == null) return []
    if (props.multiple) return Array.isArray(props.modelValue) ? props.modelValue : []
    return [props.modelValue]
  }

  /**
   * Extract checked node IDs from modelValue
   */
  const extractCheckedNodeIdsFromValue = (): NodeId[] => {
    const valueArray = getValueArray()
    if (props.valueFormat === 'id') return valueArray.slice()
    return valueArray.map((node: any) => normalizeRawNode(node).id)
  }

  /**
   * Raw nodes from modelValue indexed by ID (only for valueFormat: 'object')
   */
  const rawNodesFromValue = computed(() => {
    const map = createMap<RawNode>()
    if (props.valueFormat === 'id') return map
    getValueArray().forEach((node: any) => {
      if (!node) return
      const id = normalizeRawNode(node).id
      if (!(id in map)) map[id] = node
    })
    return map
  })

  /**
   * Extract raw node from modelValue by ID
   */
  const extractNodeFromValue = (id: NodeId): RawNode => {
    return rawNodesFromValue.value[id] || ({ id } as RawNode)
  }

  // ============================================================================
  // Forest
  // ============================================================================

  const forestState = useForestState(props, extractCheckedNodeIdsFromValue())
  const { forest, isSelected, getCheckedState, buildForestState, setSelectedNodeIds } = forestState

  /**
   * Create fallback node for nodes not (yet) present in options
   */
  const createFallbackNode = (id: NodeId): NormalizedNode => {
    const raw = extractNodeFromValue(id)
    const label = normalizeRawNode(raw).label || `${id} (unknown)`
    const fallbackNode = shallowReactive<NormalizedNode>({
      id,
      label,
      level: 0,
      ancestors: [],
      index: [-1],
      parentNode: NO_PARENT_NODE,
      lowerCased: {},
      nestedSearchLabel: '',
      isFallbackNode: true,
      isRootNode: true,
      isLeaf: true,
      isBranch: false,
      isDisabled: false,
      isNew: false,
      isMatched: false,
      isHighlighted: false,
      raw,
    })

    // nodeMap is a plain (non-reactive) object: caching here doesn't trigger effects
    forest.nodeMap[id] = fallbackNode
    return fallbackNode
  }

  /**
   * Get node by ID
   */
  const getNode = (nodeId: NodeId): NormalizedNode | null => {
    if (nodeId == null) {
      warning(() => false, () => `Invalid node id: ${nodeId}`)
      return null
    }

    const { nodeMap } = forest
    return nodeId in nodeMap ? nodeMap[nodeId] : createFallbackNode(nodeId)
  }

  // Forward declarations for circular dependencies
  let resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void = () => {}

  // ============================================================================
  // Async options
  // ============================================================================

  /**
   * Children of a node have been loaded into the raw options.
   * Reactive options passed to the component are re-initialized by the deep
   * `options` watcher. Non-reactive options (plain arrays, `shallowRef`, `markRaw`)
   * and async search results need an explicit re-initialization.
   */
  const handleChildrenLoaded = (): void => {
    if (props.async || !isReactive(props.options)) initialize()
  }

  const asyncOptions = useAsyncOptions(
    props,
    getNode,
    getInstanceId,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset),
    handleChildrenLoaded
  )
  const { rootOptionsStates, loadRootOptions, loadChildrenOptions, callLoadOptionsProp } = asyncOptions

  // ============================================================================
  // Normalization, value and initialization
  // ============================================================================

  const { normalize } = useNodeNormalization(props, forest, getInstanceId, loadChildrenOptions)

  const value = useValue(props, forest, getNode, isSelected, traverseDescendantsBFS)
  const { selectedNodes, single, internalValue, hasValue, getValue, computeSelectedNodeIds } = value

  /**
   * Fix selectedNodeIds based on valueConsistsOf mode
   * @param nodeIdListOfPrevValue - Node IDs of the value
   * @param rebuild - Rebuild all selection state (after options have changed)
   */
  const fixSelectedNodeIds = (nodeIdListOfPrevValue: NodeId[], rebuild = false): void => {
    const nextSelectedNodeIds = computeSelectedNodeIds(nodeIdListOfPrevValue)

    if (rebuild) {
      if (quickDiff(forest.selectedNodeIds, nextSelectedNodeIds)) {
        forest.selectedNodeIds = nextSelectedNodeIds
      }
      buildForestState()
    } else if (quickDiff(forest.selectedNodeIds, nextSelectedNodeIds)) {
      setSelectedNodeIds(nextSelectedNodeIds)
    }
  }

  /**
   * Keep data of selected nodes that are not in the new options
   */
  const keepDataOfSelectedNodes = (prevNodeMap: NodeMap): void => {
    forest.selectedNodeIds.forEach(id => {
      const prev = prevNodeMap[id]
      if (!prev) return
      forest.nodeMap[id] = shallowReactive({
        ...prev,
        isFallbackNode: true,
      })
    })
  }

  // Assigned below, after remote search has been set up
  let getRemoteSearchEntry: () => { options: RawNode[] }

  /**
   * (Re)initialize the normalized tree from the options
   */
  const initialize = (): void => {
    const options = props.async
      ? getRemoteSearchEntry().options
      : props.options

    if (Array.isArray(options)) {
      // In case we are re-initializing options, keep the old state tree temporarily
      const prevNodeMap = forest.nodeMap
      forest.nodeMap = createMap()
      keepDataOfSelectedNodes(prevNodeMap)
      forest.normalizedOptions = normalize(NO_PARENT_NODE, options, prevNodeMap)
      // Cases that need fixing `selectedNodeIds`:
      //   1) Children options of a checked node have been delayed loaded,
      //      we should also mark these children as checked. (multi-select mode)
      //   2) Root options have been delayed loaded, we need to initialize states
      //      of these nodes. (multi-select mode)
      //   3) Async search mode.
      fixSelectedNodeIds(internalValue.value, true)
    } else {
      forest.normalizedOptions = []
    }
  }

  // ============================================================================
  // Search
  // ============================================================================

  const remoteSearch = useRemoteSearch(
    props,
    trigger,
    callLoadOptionsProp,
    initialize,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset)
  )
  getRemoteSearchEntry = remoteSearch.getRemoteSearchEntry
  const { handleRemoteSearch } = remoteSearch

  const localSearch = useLocalSearch(
    props,
    trigger,
    () => forest.normalizedOptions,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset)
  )
  const { handleLocalSearch } = localSearch

  // ============================================================================
  // Menu & selection
  // ============================================================================

  const menu = useMenu({
    props,
    emit,
    forest,
    localSearch: localSearch.localSearch,
    getNode,
    getValue,
    getInstanceId,
    resetSearchQuery,
    loadRootOptions,
    loadChildrenOptions,
    getMenuElement,
    toggleClickOutsideEvent,
  })
  resetHighlightedOptionWhenNecessary = menu.resetHighlightedOptionWhenNecessary

  const selection = useSelection({
    props,
    emit,
    forest,
    getNode,
    getCheckedState,
    setSelectedNodeIds,
    traverseDescendantsBFS,
    traverseDescendantsDFS,
    resetSearchQuery,
    closeMenu: menu.closeMenu,
    hasValue: () => hasValue.value,
    internalValue: () => internalValue.value,
    single: () => single.value,
    getInstanceId,
    localSearch: localSearch.localSearch,
  })

  // ============================================================================
  // Derived state used by the components
  // ============================================================================

  /**
   * Should show children count when searching?
   */
  const showCountOnSearchComputed = computed(() => {
    return typeof props.showCountOnSearch === 'boolean'
      ? props.showCountOnSearch
      : !!props.showCount
  })

  /**
   * Is there any branch node?
   */
  const hasBranchNodes = computed(() => {
    return forest.normalizedOptions.some(rootNode => rootNode.isBranch)
  })

  /**
   * Should the options be displayed without indentation?
   */
  const shouldFlattenOptions = computed(() => {
    return localSearch.localSearch.active && !!props.flattenSearchResults
  })

  // ============================================================================
  // Watchers
  // ============================================================================

  watch(() => props.alwaysOpen, (newValue) => {
    if (newValue) menu.openMenu()
    else menu.closeMenu()
  })

  watch(() => props.disabled, (newValue) => {
    if (newValue && menu.menu.isOpen) menu.closeMenu()
    else if (!newValue && !menu.menu.isOpen && props.alwaysOpen) menu.openMenu()
  })

  watch(
    [
      () => props.branchNodesFirst,
      () => props.flat,
      // Compare by content: inline arrays in templates are recreated on every render
      () => (props.matchKeys || []).join('\u0000'),
      () => props.searchNested,
    ],
    () => initialize()
  )

  watch(internalValue, (newValue, oldValue) => {
    const hasChanged = quickDiff(newValue, oldValue)
    if (hasChanged) {
      emit('update:modelValue', getValue(), getInstanceId())
    }
  })

  watch([() => props.multiple, () => props.disableBranchNodes], () => {
    buildForestState()
  })

  // Note: for large trees prefer non-reactive options (`shallowRef` / `markRaw`)
  // and replace the array to update them. Deep watching is kept for compatibility
  // with code that mutates reactive options in place.
  watch(() => props.options, () => {
    if (props.async) return
    initialize()
    rootOptionsStates.isLoaded = Array.isArray(props.options)
  }, { deep: true, immediate: true })

  watch(() => trigger.searchQuery, () => {
    if (props.async) {
      handleRemoteSearch()
    } else {
      handleLocalSearch()
    }
    emit('search-change', trigger.searchQuery, getInstanceId())
  })

  watch(() => props.modelValue, () => {
    const nodeIdsFromValue = extractCheckedNodeIdsFromValue()
    const hasChanged = quickDiff(nodeIdsFromValue, internalValue.value)
    if (hasChanged) {
      fixSelectedNodeIds(nodeIdsFromValue)
    }
  })

  // ============================================================================
  // Lifecycle
  // ============================================================================

  onMounted(() => {
    if (props.autoFocus) {
      focusInput()
    }
    if (!props.options && !props.async && props.autoLoadRootOptions) {
      loadRootOptions()
    }
    if (props.alwaysOpen) {
      menu.openMenu()
    }
    if (props.async && props.defaultOptions) {
      handleRemoteSearch()
    }
  })

  onUnmounted(() => {
    toggleClickOutsideEvent(false)
  })

  // ============================================================================
  // Public API
  // ============================================================================

  return {
    // State
    forest,
    trigger,
    menu: menu.menu,
    localSearch: localSearch.localSearch,
    remoteSearch: remoteSearch.remoteSearch,
    rootOptionsStates,

    // Computed
    selectedNodes,
    single,
    internalValue,
    hasValue,
    menuRows: menu.menuRows,
    visibleOptionIds: menu.visibleOptionIds,
    hasVisibleOptions: menu.hasVisibleOptions,
    showCountOnSearchComputed,
    hasBranchNodes,
    shouldFlattenOptions,

    // Node methods
    getNode,
    isSelected,
    getCheckedState,

    // Traversal
    traverseDescendantsBFS,
    traverseDescendantsDFS,
    traverseAllNodesDFS: (callback: (node: NormalizedNode) => void) =>
      traverseAllNodesDFS(forest.normalizedOptions, callback),
    traverseAllNodesByIndex: (callback: (node: NormalizedNode) => boolean | void) =>
      traverseAllNodesByIndex(forest.normalizedOptions, callback),

    // Value
    getValue,
    extractCheckedNodeIdsFromValue,
    extractNodeFromValue,
    fixSelectedNodeIds,

    // Selection
    select: selection.select,
    clear: selection.clear,
    removeLastValue: selection.removeLastValue,

    // Menu
    openMenu: menu.openMenu,
    closeMenu: menu.closeMenu,
    toggleMenu: menu.toggleMenu,
    toggleExpanded: menu.toggleExpanded,
    shouldExpand: menu.shouldExpand,
    shouldShowOptionInMenu: menu.shouldShowOptionInMenu,
    setScrollToOptionHandler: menu.setScrollToOptionHandler,

    // Highlighting
    setCurrentHighlightedOption: menu.setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary: menu.resetHighlightedOptionWhenNecessary,
    highlightFirstOption: menu.highlightFirstOption,
    highlightPrevOption: menu.highlightPrevOption,
    highlightNextOption: menu.highlightNextOption,
    highlightLastOption: menu.highlightLastOption,

    // Search
    handleLocalSearch,
    handleRemoteSearch,
    getRemoteSearchEntry: remoteSearch.getRemoteSearchEntry,
    resetSearchQuery,

    // Async
    loadRootOptions,
    loadChildrenOptions,

    // Helpers
    initialize,
    buildForestState,
    resetFlags: selection.resetFlags,

    // DOM helpers
    getMenu: getMenuElement,
    getControl: getControlElement,
    getInstanceId,
  }
}

export type TreeselectApi = ReturnType<typeof useTreeselect>
