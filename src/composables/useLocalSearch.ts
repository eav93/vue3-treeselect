import { reactive } from 'vue'
import fuzzysearch from 'fuzzysearch'
import { createMap, includes } from '@/utils'
import type {
  LocalSearchState,
  NormalizedNode,
  TreeselectProps,
  TriggerState,
} from '@/types'

// Constants - will be imported from constants.ts later
const NO_PARENT_NODE = null
const ALL_CHILDREN = 'ALL_CHILDREN'
const ALL_DESCENDANTS = 'ALL_DESCENDANTS'
const LEAF_CHILDREN = 'LEAF_CHILDREN'
const LEAF_DESCENDANTS = 'LEAF_DESCENDANTS'

/**
 * Match a search query against a string
 * @param enableFuzzyMatch - Whether to use fuzzy matching
 * @param needle - Search query
 * @param haystack - String to search in
 * @returns True if matched
 */
function match(enableFuzzyMatch: boolean, needle: string, haystack: string): boolean {
  return enableFuzzyMatch
    ? fuzzysearch(needle, haystack)
    : includes(haystack, needle)
}

/**
 * Composable for local search functionality
 *
 * @param props - Component props
 * @param trigger - Trigger state
 * @param traverseAllNodesDFS - Function to traverse all nodes in DFS order
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @returns Local search state and methods
 */
export function useLocalSearch(
  props: TreeselectProps,
  trigger: TriggerState,
  traverseAllNodesDFS: (callback: (node: NormalizedNode) => void) => void,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
) {
  /**
   * Local search state
   */
  const localSearch = reactive<LocalSearchState>({
    active: false,
    noResults: true,
    countMap: createMap(),
  })

  /**
   * Handle local search
   * Searches through options and updates match states
   */
  const handleLocalSearch = (): void => {
    const { searchQuery } = trigger
    const done = () => resetHighlightedOptionWhenNecessary(true)

    if (!searchQuery) {
      // Exit local search mode
      localSearch.active = false
      return done()
    }

    // Enter local search mode
    localSearch.active = true

    // Reset states
    localSearch.noResults = true
    traverseAllNodesDFS(node => {
      if (node.isBranch) {
        node.isExpandedOnSearch = false
        node.showAllChildrenOnSearch = false
        node.isMatched = false
        node.hasMatchedDescendants = false

        localSearch.countMap[node.id] = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0,
        }
      }
    })

    // Perform search
    const lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase()
    const splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ')

    traverseAllNodesDFS(node => {
      if (props.searchNested && splitSearchQuery.length > 1) {
        // Multi-word nested search
        node.isMatched = splitSearchQuery.every(filterValue =>
          match(false, filterValue, node.nestedSearchLabel)
        )
      } else {
        // Single-word search across match keys
        node.isMatched = (props.matchKeys || ['label']).some(matchKey =>
          match(!props.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey])
        )
      }

      if (node.isMatched) {
        localSearch.noResults = false

        // Update ancestor counts
        node.ancestors.forEach(ancestor => {
          localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++
        })
        if (node.isLeaf) {
          node.ancestors.forEach(ancestor => {
            localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++
          })
        }

        // Update parent counts
        if (node.parentNode !== NO_PARENT_NODE) {
          localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1
          if (node.isLeaf) {
            localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1
          }
        }
      }

      // Expand ancestors if this node is matched or expanded on search
      if (
        (node.isMatched || (node.isBranch && node.isExpandedOnSearch)) &&
        node.parentNode !== NO_PARENT_NODE
      ) {
        node.parentNode.isExpandedOnSearch = true
        node.parentNode.hasMatchedDescendants = true
      }
    })

    done()
  }

  return {
    localSearch,
    handleLocalSearch,
  }
}
