import { shallowReactive } from 'vue'
import fuzzysearch from 'fuzzysearch'
import { createMap } from '@/utils'
import {
  ALL_CHILDREN,
  ALL_DESCENDANTS,
  LEAF_CHILDREN,
  LEAF_DESCENDANTS,
} from '@/constants'
import type {
  CountMap,
  LocalSearchState,
  NodeId,
  NormalizedNode,
  TreeselectProps,
  TriggerState,
} from '@/types'

/**
 * Composable for local search functionality
 *
 * @param props - Component props
 * @param trigger - Trigger state
 * @param getNormalizedOptions - Getter for the root nodes
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @returns Local search state and methods
 */
export function useLocalSearch(
  props: TreeselectProps,
  trigger: TriggerState,
  getNormalizedOptions: () => NormalizedNode[],
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
) {
  /**
   * Local search state
   */
  const localSearch = shallowReactive<LocalSearchState>({
    active: false,
    noResults: true,
    countMap: createMap(),
  })

  /**
   * Handle local search
   * Searches through options and updates match states in a single post-order pass
   */
  /**
   * @param keepExpanded - Re-run the same search after the options have changed:
   *   keep the branches the user has expanded and the highlighted option
   */
  const handleLocalSearch = (keepExpanded = false): void => {
    const { searchQuery } = trigger
    const done = () => resetHighlightedOptionWhenNecessary(!keepExpanded)

    if (!searchQuery) {
      // Exit local search mode
      localSearch.active = false
      return done()
    }

    // Enter local search mode
    localSearch.active = true

    const lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase()
    const splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ')
    const useNestedSearch = !!props.searchNested && splitSearchQuery.length > 1
    const matchKeys = props.matchKeys || ['label']
    const enableFuzzyMatch = !props.disableFuzzyMatching

    const countMap = createMap<CountMap>()
    let noResults = true

    const isMatched = (node: NormalizedNode): boolean => {
      if (useNestedSearch) {
        // Multi-word nested search
        for (let i = 0; i < splitSearchQuery.length; i++) {
          if (node.nestedSearchLabel.indexOf(splitSearchQuery[i]) === -1) return false
        }
        return true
      }
      // Single-word search across match keys
      for (let i = 0; i < matchKeys.length; i++) {
        const haystack = node.lowerCased[matchKeys[i]]
        if (haystack == null) continue
        if (enableFuzzyMatch
          ? fuzzysearch(lowerCasedSearchQuery, haystack)
          : haystack.indexOf(lowerCasedSearchQuery) !== -1) return true
      }
      return false
    }

    // Returns whether this node is matched or expanded on search
    // (that's what makes its parent expanded on search)
    const visit = (node: NormalizedNode): boolean => {
      const matched = isMatched(node)
      if (matched) noResults = false

      if (node.isBranch) {
        const count: CountMap = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0,
        }
        let expandedOnSearch = false
        const children = node.children || []

        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          if (visit(child)) expandedOnSearch = true

          const childMatched = child.isMatched
          if (child.isLeaf) {
            if (childMatched) {
              count[ALL_CHILDREN]++
              count[ALL_DESCENDANTS]++
              count[LEAF_CHILDREN]++
              count[LEAF_DESCENDANTS]++
            }
          } else {
            const childCount = countMap[child.id]
            if (childMatched) {
              count[ALL_CHILDREN]++
              count[ALL_DESCENDANTS]++
            }
            count[ALL_DESCENDANTS] += childCount[ALL_DESCENDANTS]
            count[LEAF_DESCENDANTS] += childCount[LEAF_DESCENDANTS]
          }
        }

        countMap[node.id] = count
        node.isExpandedOnSearch = expandedOnSearch || (keepExpanded && !!node.isExpandedOnSearch)
        node.hasMatchedDescendants = expandedOnSearch
        if (!keepExpanded) node.showAllChildrenOnSearch = false
      }

      node.isMatched = matched
      return matched || (node.isBranch && !!node.isExpandedOnSearch)
    }

    const roots = getNormalizedOptions()
    for (let i = 0; i < roots.length; i++) visit(roots[i])

    localSearch.countMap = countMap as Record<NodeId, CountMap>
    localSearch.noResults = noResults

    done()
  }

  return {
    localSearch,
    handleLocalSearch,
  }
}
