import { reactive, computed, nextTick } from 'vue'
import { scrollIntoView, cssEscape } from '@/utils'
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
  /** The selected node in single-select mode */
  getSelectedNode: () => NormalizedNode | null
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
    getSelectedNode,
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
  // Row objects are reused between computations (keyed by node and row type), so that
  // unchanged rows keep their identity and renderers can skip them
  const rowCache = new WeakMap<NormalizedNode, Partial<Record<MenuRow['type'], MenuRow>>>()
  const getRow = (type: MenuRow['type'], node: NormalizedNode, level: number, index: number): MenuRow => {
    let rows = rowCache.get(node)
    if (!rows) rowCache.set(node, rows = {})
    let row = rows[type]
    if (!row || row.level !== level) {
      row = rows[type] = { type, key: `${type}-${node.id}`, node, level, index }
    }
    row.index = index
    return row
  }

  const menuRows = computed<MenuRow[]>(() => {
    const rows: MenuRow[] = []
    const searching = localSearch.active
    const flatten = searching && !!props.flattenSearchResults

    const walk = (nodes: NormalizedNode[]): void => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!searching || shouldOptionBeIncludedInSearchResult(node)) {
          rows.push(getRow('option', node, flatten ? 0 : node.level, rows.length))
        }
        if (!node.isBranch || !shouldExpand(node)) continue

        const states = node.childrenStates
        const tipLevel = flatten ? 0 : node.level
        if (!states || states.isLoaded) {
          const children = node.children || []
          walk(children)
          if (states && !children.length) {
            rows.push(getRow('no-children', node, tipLevel, rows.length))
          }
        }
        if (states?.isLoading) {
          rows.push(getRow('loading', node, tipLevel, rows.length))
        }
        if (states?.loadingError) {
          rows.push(getRow('error', node, tipLevel, rows.length))
        }
      }
    }

    walk(forest.normalizedOptions)
    return rows
  })

  /**
   * Row of an option in the current rows, if it is shown
   */
  const getOptionRow = (node: NormalizedNode): MenuRow | null => {
    const row = rowCache.get(node)?.option
    return row && menuRows.value[row.index] === row ? row : null
  }

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
  // Navigation scans the rows from the current one: O(distance), no index of all options needed
  const findOptionRow = (from: number, step: 1 | -1): MenuRow | null => {
    const rows = menuRows.value
    for (let i = from; i >= 0 && i < rows.length; i += step) {
      if (rows[i].type === 'option') return rows[i]
    }
    return null
  }

  const currentRow = (): MenuRow | null => {
    if (menu.current == null) return null
    const node = forest.nodeMap[menu.current]
    return node ? getOptionRow(node) : null
  }

  const highlightFirstOption = (): void => {
    const row = findOptionRow(0, 1)
    if (row) setCurrentHighlightedOption(row.node)
  }

  /**
   * Highlight previous option (wraps around)
   */
  const highlightPrevOption = (): void => {
    const current = currentRow()
    const row = (current && findOptionRow(current.index - 1, -1)) || findOptionRow(menuRows.value.length - 1, -1)
    if (row) setCurrentHighlightedOption(row.node)
  }

  /**
   * Highlight next option (wraps around)
   */
  const highlightNextOption = (): void => {
    const current = currentRow()
    const row = (current && findOptionRow(current.index + 1, 1)) || findOptionRow(0, 1)
    if (row) setCurrentHighlightedOption(row.node)
  }

  /**
   * Highlight last option
   */
  const highlightLastOption = (): void => {
    const row = findOptionRow(menuRows.value.length - 1, -1)
    if (row) setCurrentHighlightedOption(row.node)
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
      // During a search, prefer the first match over ancestors shown only because of their matches
      if (localSearch.active) {
        const firstMatch = menuRows.value.find(row => row.type === 'option' && row.node.isMatched)
        if (firstMatch) return setCurrentHighlightedOption(firstMatch.node)
      }
      highlightFirstOption()
    }
  }

  /**
   * Highlight the selected option (single-select) when the menu opens, otherwise the first one
   */
  const highlightOnOpen = (): void => {
    const selected = getSelectedNode()
    if (selected && getOptionRow(selected)) {
      setCurrentHighlightedOption(selected, false)
    } else {
      resetHighlightedOptionWhenNecessary()
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
   * @param force - Also close a menu that is always open (e.g. when deactivated by <KeepAlive>)
   */
  const closeMenu = (force = false): void => {
    // `=== true`: the method may be bound as an event handler and receive an event
    if (!menu.isOpen || (force !== true && !props.disabled && props.alwaysOpen)) return

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
    void nextTick(highlightOnOpen)
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
      // A branch without matches shows all its children when expanded during a search;
      // a branch with matches keeps showing only those
      if (nextState && !node.hasMatchedDescendants) {
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
    getOptionRow,
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
