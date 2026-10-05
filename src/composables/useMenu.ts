import { reactive, computed, nextTick } from 'vue'
import { scrollIntoView, createMap, cssEscape } from '@/utils'
import type {
  MenuState,
  NormalizedNode,
  ForestState,
  TreeselectProps,
  TreeselectEmits,
  NodeId,
  LocalSearchState,
  MenuRow,
} from '@/types'

/**
 * Composable for managing menu state and highlighting
 */
export function useMenu(options: {
  props: TreeselectProps
  emit: TreeselectEmits
  forest: ForestState
  localSearch: LocalSearchState
  getNode: (id: NodeId) => NormalizedNode | null
  getValue: () => any
  getInstanceId: () => NodeId
  resetSearchQuery: () => void
  loadRootOptions: () => void
  loadChildrenOptions: (node: NormalizedNode) => void
  getMenuElement: () => HTMLElement | null
  toggleClickOutsideEvent: (enabled: boolean) => void
}) {
  const {
    props,
    emit,
    forest,
    localSearch,
    getNode,
    getValue,
    getInstanceId,
    resetSearchQuery,
    loadRootOptions,
    loadChildrenOptions,
    getMenuElement,
    toggleClickOutsideEvent,
  } = options

  /**
   * Menu state
   */
  const menu = reactive<MenuState>({
    isOpen: false,
    current: null,
    lastScrollPosition: 0,
    placement: 'bottom',
  })

  /**
   * Should a branch node be expanded?
   */
  const shouldExpand = (node: NormalizedNode): boolean => {
    return localSearch.active ? (node.isExpandedOnSearch || false) : (node.isExpanded || false)
  }

  /**
   * Should an option be included in search results?
   */
  const shouldOptionBeIncludedInSearchResult = (node: NormalizedNode): boolean => {
    // 1) This option is matched
    if (node.isMatched) return true
    // 2) This option is not matched, but has matched descendant(s)
    if (node.isBranch && node.hasMatchedDescendants && !props.flattenSearchResults) return true
    // 3) This option's parent has no matched descendants,
    //    but after being expanded, all its children should be shown
    if (!node.isRootNode && node.parentNode!.showAllChildrenOnSearch) return true
    // 4) Default case
    return false
  }

  /**
   * Should an option be shown in menu?
   */
  const shouldShowOptionInMenu = (node: NormalizedNode): boolean => {
    return !(localSearch.active && !shouldOptionBeIncludedInSearchResult(node))
  }

  /**
   * All rows of the menu in display order: shown options and the tips
   * (no children / loading / error) of expanded branches.
   * The menu renders these as a flat list; keyboard navigation uses them as well.
   */
  const menuRows = computed<MenuRow[]>(() => {
    const rows: MenuRow[] = []
    const searching = localSearch.active
    const flatten = searching && !!props.flattenSearchResults

    const walk = (nodes: NormalizedNode[]): void => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!searching || shouldOptionBeIncludedInSearchResult(node)) {
          rows.push({ type: 'option', key: `option-${node.id}`, node, level: flatten ? 0 : node.level })
        }
        if (!node.isBranch || !shouldExpand(node)) continue

        const states = node.childrenStates
        const tipLevel = flatten ? 0 : node.level
        if (!states || states.isLoaded) {
          const children = node.children || []
          walk(children)
          if (states && !children.length) {
            rows.push({ type: 'no-children', key: `no-children-${node.id}`, node, level: tipLevel })
          }
        }
        if (states?.isLoading) {
          rows.push({ type: 'loading', key: `loading-${node.id}`, node, level: tipLevel })
        }
        if (states?.loadingError) {
          rows.push({ type: 'error', key: `error-${node.id}`, node, level: tipLevel })
        }
      }
    }

    walk(forest.normalizedOptions)
    return rows
  })

  /**
   * IDs of all options shown in the menu (for highlighting navigation)
   */
  const visibleOptionIds = computed<NodeId[]>(() => {
    const ids: NodeId[] = []
    const rows = menuRows.value
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].type === 'option') ids.push(rows[i].node.id)
    }
    return ids
  })

  /**
   * Position of each visible option (for O(1) keyboard navigation)
   */
  const visibleOptionIndex = computed(() => {
    const map = createMap<number>()
    visibleOptionIds.value.forEach((id, index) => {
      map[id] = index
    })
    return map
  })

  const getCurrentVisibleIndex = (): number => {
    if (menu.current == null) return -1
    const index = visibleOptionIndex.value[menu.current]
    return index === undefined ? -1 : index
  }

  /**
   * Has any visible options?
   */
  const hasVisibleOptions = computed(() => visibleOptionIds.value.length !== 0)

  /**
   * Hook used by the option list to scroll to an option (it may not be rendered yet)
   */
  let onScrollToOption: ((node: NormalizedNode) => void) | null = null
  const setScrollToOptionHandler = (handler: ((node: NormalizedNode) => void) | null): void => {
    onScrollToOption = handler
  }

  /**
   * Set currently highlighted option
   */
  const setCurrentHighlightedOption = (node: NormalizedNode | null, scroll = true): void => {
    const prev = menu.current
    if (prev != null && prev in forest.nodeMap) {
      forest.nodeMap[prev].isHighlighted = false
    }

    if (!node) {
      menu.current = null
      return
    }

    menu.current = node.id
    node.isHighlighted = true

    if (menu.isOpen && scroll) {
      const scrollToOption = () => {
        const $menu = getMenuElement()
        if (!$menu) return

        // The option list knows how to reach rows that are not rendered yet
        if (onScrollToOption) return onScrollToOption(node)

        const $option = $menu.querySelector(`.vue-treeselect__option[data-id="${cssEscape(String(node.id))}"]`)
        if ($option) scrollIntoView($menu, $option as HTMLElement)
      }

      // In case openMenu() was just called and menu is not rendered yet
      const $menu = getMenuElement()
      if ($menu) {
        scrollToOption()
      } else {
        void nextTick(scrollToOption)
      }
    }
  }

  /**
   * Highlight first option
   */
  const highlightFirstOption = (): void => {
    if (!hasVisibleOptions.value) return

    const first = visibleOptionIds.value[0]
    const node = getNode(first)
    if (node) setCurrentHighlightedOption(node)
  }

  /**
   * Highlight previous option
   */
  const highlightPrevOption = (): void => {
    if (!hasVisibleOptions.value) return

    const currentIndex = getCurrentVisibleIndex()
    const prev = currentIndex - 1
    if (prev === -1) return highlightLastOption()

    const node = getNode(visibleOptionIds.value[prev])
    if (node) setCurrentHighlightedOption(node)
  }

  /**
   * Highlight next option
   */
  const highlightNextOption = (): void => {
    if (!hasVisibleOptions.value) return

    const currentIndex = getCurrentVisibleIndex()
    const next = currentIndex + 1
    if (next === visibleOptionIds.value.length) return highlightFirstOption()

    const node = getNode(visibleOptionIds.value[next])
    if (node) setCurrentHighlightedOption(node)
  }

  /**
   * Highlight last option
   */
  const highlightLastOption = (): void => {
    if (!hasVisibleOptions.value) return

    const ids = visibleOptionIds.value
    const node = getNode(ids[ids.length - 1])
    if (node) setCurrentHighlightedOption(node)
  }

  /**
   * Reset highlighted option when necessary
   */
  const resetHighlightedOptionWhenNecessary = (forceReset = false): void => {
    const { current } = menu

    if (
      forceReset ||
      current == null ||
      !(current in forest.nodeMap) ||
      !shouldShowOptionInMenu(getNode(current)!)
    ) {
      highlightFirstOption()
    }
  }

  /**
   * Save menu scroll position before closing
   */
  const saveMenuScrollPosition = (): void => {
    const $menu = getMenuElement()
    if ($menu) {
      menu.lastScrollPosition = $menu.scrollTop
    }
  }

  /**
   * Restore menu scroll position after opening
   */
  const restoreMenuScrollPosition = (): void => {
    const $menu = getMenuElement()
    if ($menu) {
      $menu.scrollTop = menu.lastScrollPosition
    }
  }

  /**
   * Close the menu
   */
  const closeMenu = (): void => {
    if (!menu.isOpen || (!props.disabled && props.alwaysOpen)) return

    saveMenuScrollPosition()
    menu.isOpen = false
    toggleClickOutsideEvent(false)
    resetSearchQuery()
    emit('close', getValue(), getInstanceId())
  }

  /**
   * Open the menu
   */
  const openMenu = (): void => {
    if (props.disabled || menu.isOpen) return

    menu.isOpen = true
    void nextTick(resetHighlightedOptionWhenNecessary)
    void nextTick(restoreMenuScrollPosition)

    if (!props.options && !props.async) {
      loadRootOptions()
    }

    toggleClickOutsideEvent(true)
    emit('open', getInstanceId())
  }

  /**
   * Toggle the menu open/close
   */
  const toggleMenu = (): void => {
    if (menu.isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  /**
   * Toggle expanded state of a branch node
   */
  const toggleExpanded = (node: NormalizedNode): void => {
    let nextState: boolean

    if (localSearch.active) {
      nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch
      if (nextState) {
        node.showAllChildrenOnSearch = true
      }
    } else {
      nextState = node.isExpanded = !node.isExpanded
    }

    // Load children if expanded and not loaded yet
    if (nextState && node.childrenStates && !node.childrenStates.isLoaded) {
      loadChildrenOptions(node)
    }
  }

  return {
    menu,
    setScrollToOptionHandler,
    shouldOptionBeIncludedInSearchResult,
    menuRows,
    visibleOptionIds,
    hasVisibleOptions,
    shouldExpand,
    shouldShowOptionInMenu,
    openMenu,
    closeMenu,
    toggleMenu,
    toggleExpanded,
    setCurrentHighlightedOption,
    resetHighlightedOptionWhenNecessary,
    highlightFirstOption,
    highlightPrevOption,
    highlightNextOption,
    highlightLastOption,
    saveMenuScrollPosition,
    restoreMenuScrollPosition,
  }
}
