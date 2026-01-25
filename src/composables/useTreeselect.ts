import {computed, onMounted, onUnmounted, reactive, readonly, toRef, watch} from 'vue'
import {createMap, find, quickDiff, warning} from '@/utils'
import { NO_PARENT_NODE } from '@/constants'
import {useNodeTraversal} from './useNodeTraversal'
import {useForestState} from './useForestState'
import {useNodeNormalization} from './useNodeNormalization'
import {useValue} from './useValue'
import {useSelection} from './useSelection'
import {useMenu} from './useMenu'
import {useLocalSearch} from './useLocalSearch'
import {useRemoteSearch} from './useRemoteSearch'
import {useAsyncOptions} from './useAsyncOptions'
import type {NodeId, NormalizedNode, RawNode, TreeselectEmits, TreeselectProps, TriggerState,} from '@/types'

/**
 * Main composable for Treeselect functionality
 * Integrates all sub-composables and provides the complete API
 *
 * @param props - Component props
 * @param emit - Emit function
 * @param instanceId - Computed instance ID
 * @param getMenuElement - Function to get menu DOM element
 * @param toggleClickOutsideEvent - Function to toggle click outside listener
 * @returns Complete Treeselect instance API
 */
export function useTreeselect(
  props: TreeselectProps,
  emit: TreeselectEmits,
  instanceId: ReturnType<typeof computed<string | number>>,
  getMenuElement: () => HTMLElement | null,
  toggleClickOutsideEvent: (enabled: boolean) => void
) {
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
  // Extract node IDs from modelValue (needed for forest initialization)
  // ============================================================================

  /**
   * Enhanced normalizer that applies user's normalizer
   */
  const enhancedNormalizerPreInit = (raw: RawNode): any => {
    return {
      ...raw,
      ...(props.normalizer ? props.normalizer(raw, instanceId.value) : {}),
    }
  }

  /**
   * Extract checked node IDs from modelValue
   */
  const extractCheckedNodeIdsFromValue = (): NodeId[] => {
    if (props.modelValue == null) return []

    if (props.valueFormat === 'id') {
      return props.multiple
        ? props.modelValue.slice()
        : [props.modelValue]
    }

    return (props.multiple ? props.modelValue : [props.modelValue])
      .map((node: any) => enhancedNormalizerPreInit(node))
      .map((node: any) => node.id)
  }

  // ============================================================================
  // Initialize composables
  // ============================================================================

  // 1. Node traversal utilities (no dependencies)
  const traversal = useNodeTraversal()

  // 2. Forest state (needs extractCheckedNodeIdsFromValue)
  const forestState = useForestState(extractCheckedNodeIdsFromValue)
  const { forest, isSelected } = forestState

  // 3. Get node function (accesses forest.nodeMap)
  const getNode = (nodeId: NodeId): NormalizedNode | null => {
    warning(
      () => nodeId != null,
      () => `Invalid node id: ${nodeId}`
    )

    if (nodeId == null) return null

    return nodeId in forest.nodeMap
      ? forest.nodeMap[nodeId]
      : createFallbackNode(nodeId)
  }

  /**
   * Create fallback node for nodes not yet loaded
   */
  const createFallbackNode = (id: NodeId): NormalizedNode => {
    const raw = extractNodeFromValue(id)
    const label = enhancedNormalizerPreInit(raw).label || `${id} (unknown)`
    const fallbackNode: any = {
      id,
      label,
      ancestors: [],
      parentNode: NO_PARENT_NODE,
      isFallbackNode: true,
      isRootNode: true,
      isLeaf: true,
      isBranch: false,
      isDisabled: false,
      isNew: false,
      index: [-1],
      level: 0,
      raw,
    }

    forest.nodeMap[id] = fallbackNode
    return fallbackNode
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
      (node: any) => node && enhancedNormalizerPreInit(node).id === id
    )

    return matched || defaultNode
  }

  // Forward declarations for circular dependencies
  let loadChildrenOptions: (node: NormalizedNode) => void
  let resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
  let loadRootOptions: () => void
  let callLoadOptionsProp: (params: any) => void
  let initialize: () => void
  let buildForestState: () => void

  // 4. Async options (needs getNode, instanceId, resetHighlightedOptionWhenNecessary placeholder)
  const asyncOptions = useAsyncOptions(
    props,
    getNode,
    instanceId.value,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset)
  )
  loadRootOptions = asyncOptions.loadRootOptions
  loadChildrenOptions = asyncOptions.loadChildrenOptions
  callLoadOptionsProp = asyncOptions.callLoadOptionsProp
  const { rootOptionsStates } = asyncOptions

  // 5. Node normalization (needs forest, instanceId, loadChildrenOptions)
  const normalization = useNodeNormalization(
    props,
    forest,
    instanceId,
    loadChildrenOptions
  )
  const { normalize, enhancedNormalizer } = normalization

  // 6. Value management (needs forest, getNode, isSelected, traverseDescendantsBFS, enhancedNormalizer)
  const value = useValue(
    props,
    forest,
    getNode,
    isSelected,
    traversal.traverseDescendantsBFS,
    enhancedNormalizer
  )
  const { selectedNodes, single, internalValue, hasValue, getValue, fixSelectedNodeIds } = value

  // 7. Build forest state helper
  buildForestState = () => {
    // Wrap traverseAllNodesByIndex to match expected signature
    const wrappedTraverse = (callback: (node: NormalizedNode) => void) => {
      traversal.traverseAllNodesByIndex(forest.normalizedOptions, callback)
    }

    forestState.buildForestState(
      props,
      selectedNodes.value,
      wrappedTraverse,
      isSelected
    )
  }

  // 8. Initialize function
  const keepDataOfSelectedNodes = (prevNodeMap: any): void => {
    // Keep data of selected nodes that are not in new options
    forest.selectedNodeIds.forEach(id => {
      if (!prevNodeMap[id]) return
      forest.nodeMap[id] = {
        ...prevNodeMap[id],
        isFallbackNode: true,
      }
    })
  }

  const getRemoteSearchOptions = (): RawNode[] | null => {
    if (!props.async) return null
    // Will be implemented by useRemoteSearch
    return null
  }

  initialize = () => {
    const options = props.async
      ? getRemoteSearchOptions() || []
      : props.options || []

    if (Array.isArray(options)) {
      const prevNodeMap = forest.nodeMap
      forest.nodeMap = createMap()
      keepDataOfSelectedNodes(prevNodeMap)
      forest.normalizedOptions = normalize(NO_PARENT_NODE, options, prevNodeMap)
      fixSelectedNodeIds(internalValue.value, buildForestState)
    } else {
      forest.normalizedOptions = []
    }
  }

  // 9. Remote search (needs trigger, callLoadOptionsProp, initialize, resetHighlightedOptionWhenNecessary placeholder)
  const remoteSearch = useRemoteSearch(
    props,
    trigger,
    callLoadOptionsProp,
    initialize,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset)
  )
  const { handleRemoteSearch } = remoteSearch

  // 10. Local search (needs trigger, traverseAllNodesDFS, resetHighlightedOptionWhenNecessary placeholder)
  const wrappedTraverseAllNodesDFS = (callback: (node: NormalizedNode) => void) => {
    traversal.traverseAllNodesDFS(forest.normalizedOptions, callback)
  }

  const localSearch = useLocalSearch(
    props,
    trigger,
    wrappedTraverseAllNodesDFS,
    (forceReset) => resetHighlightedOptionWhenNecessary(forceReset)
  )
  const { handleLocalSearch } = localSearch

  // 11. Menu (needs many things)
  const wrappedTraverseAllNodesByIndex = (callback: (node: NormalizedNode) => boolean | void) => {
    traversal.traverseAllNodesByIndex(forest.normalizedOptions, callback)
  }

  const menu = useMenu(
    props,
    emit,
    forest,
    localSearch.localSearch,
    getNode,
    wrappedTraverseAllNodesByIndex,
    getValue,
    instanceId.value,
    resetSearchQuery,
    loadRootOptions,
    loadChildrenOptions,
    getMenuElement,
    toggleClickOutsideEvent
  )
  resetHighlightedOptionWhenNecessary = menu.resetHighlightedOptionWhenNecessary

  // 12. Selection (needs many things)
  const selection = useSelection(
    props,
    emit,
    forest,
    getNode,
    isSelected,
    traversal.traverseDescendantsBFS,
    traversal.traverseDescendantsDFS,
    buildForestState,
    resetSearchQuery,
    menu.closeMenu,
    () => hasValue.value,
    () => internalValue.value,
    () => single.value,
    instanceId.value,
    localSearch.localSearch
  )

  // ============================================================================
  // Watchers
  // ============================================================================

  watch(() => props.alwaysOpen, (newValue) => {
    if (newValue) menu.openMenu()
    else menu.closeMenu()
  })

  watch(() => props.branchNodesFirst, () => {
    initialize()
  })

  watch(() => props.disabled, (newValue) => {
    if (newValue && menu.menu.value.isOpen) menu.closeMenu()
    else if (!newValue && !menu.menu.value.isOpen && props.alwaysOpen) menu.openMenu()
  })

  watch(() => props.flat, () => {
    initialize()
  })

  watch(internalValue, (newValue, oldValue) => {
    const hasChanged = quickDiff(newValue, oldValue)
    if (hasChanged) {
      emit('update:modelValue', getValue(), instanceId.value)
    }
  })

  watch(() => props.matchKeys, () => {
    initialize()
  })

  watch(() => props.multiple, (newValue) => {
    if (newValue) buildForestState()
  })

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
    emit('search-change', trigger.searchQuery, instanceId.value)
  })

  watch(() => props.modelValue, () => {
    const nodeIdsFromValue = extractCheckedNodeIdsFromValue()
    const hasChanged = quickDiff(nodeIdsFromValue, internalValue.value)
    if (hasChanged) {
      fixSelectedNodeIds(nodeIdsFromValue, buildForestState)
    }
  })

  // ============================================================================
  // Lifecycle
  // ============================================================================

  onMounted(() => {
    if (props.autoFocus) {
      // focusInput() - will be implemented by parent component
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
    forest: readonly(toRef(() => forest)),
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
    visibleOptionIds: menu.visibleOptionIds,
    hasVisibleOptions: menu.hasVisibleOptions,

    // Node methods
    getNode,
    isSelected,

    // Traversal
    traverseDescendantsBFS: traversal.traverseDescendantsBFS,
    traverseDescendantsDFS: traversal.traverseDescendantsDFS,
    traverseAllNodesDFS: traversal.traverseAllNodesDFS,
    traverseAllNodesByIndex: traversal.traverseAllNodesByIndex,

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
    resetSearchQuery,

    // Async
    loadRootOptions,
    loadChildrenOptions,

    // Helpers
    initialize,
    buildForestState,
    resetFlags: selection.resetFlags,
  }
}
