import { reactive, computed, nextTick } from 'vue'
import { scrollIntoView, getLast } from '@/utils'
import type {
  MenuState,
  NormalizedNode,
  ForestState,
  TreeselectProps,
  TreeselectEmits,
  NodeId,
  LocalSearchState,
} from '@/types'

/**
 * Composable for managing menu state and highlighting
 *
 * @param props - Component props
 * @param emit - Emit function
 * @param forest - Forest state
 * @param localSearch - Local search state
 * @param getNode - Function to get node by ID
 * @param traverseAllNodesByIndex - Function to traverse all nodes by index
 * @param getValue - Function to get current value
 * @param instanceId - Instance ID
 * @param resetSearchQuery - Function to reset search query
 * @param loadRootOptions - Function to load root options
 * @param loadChildrenOptions - Function to load children options
 * @param getMenuElement - Function to get menu DOM element
 * @param toggleClickOutsideEvent - Function to toggle click outside listener
 * @returns Menu state and methods
 */
export function useMenu(
  props: TreeselectProps,
  emit: TreeselectEmits,
  forest: ForestState,
  localSearch: LocalSearchState,
  getNode: (id: NodeId) => NormalizedNode | null,
  traverseAllNodesByIndex: (callback: (node: NormalizedNode) => boolean | void) => void,
  getValue: () => any,
  instanceId: string | number,
  resetSearchQuery: () => void,
  loadRootOptions: () => void,
  loadChildrenOptions: (node: NormalizedNode) => void,
  getMenuElement: () => HTMLElement | null,
  toggleClickOutsideEvent: (enabled: boolean) => void
) {
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
    return !(localSearch.active && !shouldOptionBeIncludedInSearchResult(node));

  }

  /**
   * Get all visible option IDs (for highlighting navigation)
   */
  const visibleOptionIds = computed<NodeId[]>(() => {
    const ids: NodeId[] = []

    traverseAllNodesByIndex(node => {
      if (!localSearch.active || shouldOptionBeIncludedInSearchResult(node)) {
        ids.push(node.id)
      }
      // Skip descendants if branch is not expanded
      if (node.isBranch && !shouldExpand(node)) {
        return false
      }
      return undefined
    })

    return ids
  })

  /**
   * Has any visible options?
   */
  const hasVisibleOptions = computed(() => visibleOptionIds.value.length !== 0)

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

        const $option = $menu.querySelector(`.vue-treeselect__option[data-id="${node.id}"]`)
        if ($option) {
          scrollIntoView($menu, $option as HTMLElement)
        }
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

    const currentIndex = visibleOptionIds.value.indexOf(menu.current!)
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

    const currentIndex = visibleOptionIds.value.indexOf(menu.current!)
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

    const last = getLast(visibleOptionIds.value)
    if (!last) return
    const node = getNode(last)
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
    emit('close', getValue(), instanceId)
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
    emit('open', instanceId)
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
    if (nextState && !node.childrenStates!.isLoaded) {
      loadChildrenOptions(node)
    }
  }

  return {
    menu,
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
