import { shallowReactive } from 'vue'
import { createMap } from '@/utils'
import { ASYNC_SEARCH } from '@/constants'
import { createAsyncOptionsStates } from './useNodeNormalization'
import { getErrorMessage, type CallLoadOptionsProp } from './useAsyncOptions'
import type {
  RemoteSearchState,
  RemoteSearchEntry,
  TreeselectProps,
  TriggerState,
  RawNode,
} from '@/types'

const createEntry = (): RemoteSearchEntry => shallowReactive({
  ...createAsyncOptionsStates(),
  options: [],
})

// Returned for queries that have no entry yet (never mutated)
const EMPTY_ENTRY: RemoteSearchEntry = Object.freeze({
  ...createAsyncOptionsStates(),
  options: [],
}) as RemoteSearchEntry

/**
 * Composable for remote (async) search functionality
 *
 * @param props - Component props
 * @param trigger - Trigger state
 * @param callLoadOptionsProp - Function to call loadOptions prop
 * @param initialize - Function to re-initialize options
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @returns Remote search state and methods
 */
export function useRemoteSearch(
  props: TreeselectProps,
  trigger: TriggerState,
  callLoadOptionsProp: CallLoadOptionsProp,
  initialize: () => void,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
) {
  /**
   * Remote search state: map of search queries to search results
   */
  const remoteSearch = shallowReactive<RemoteSearchState>(createMap())

  /**
   * Get remote search entry for the current search query.
   * Side-effect free, so it can be used from computed properties and render.
   */
  const getRemoteSearchEntry = (): RemoteSearchEntry => {
    return remoteSearch[trigger.searchQuery] || EMPTY_ENTRY
  }

  /**
   * Get or create the entry for a search query
   */
  const ensureRemoteSearchEntry = (searchQuery: string): RemoteSearchEntry => {
    let entry = remoteSearch[searchQuery]
    if (!entry) {
      entry = createEntry()
      remoteSearch[searchQuery] = entry
    }

    // Default options are always taken from the current prop value
    if (searchQuery === '') {
      if (Array.isArray(props.defaultOptions)) {
        entry.options = props.defaultOptions
        entry.isLoaded = true
      } else if (props.defaultOptions !== true) {
        entry.isLoaded = true
      }
    }

    return entry
  }

  /**
   * Handle remote search
   * Calls loadOptions prop with search query
   */
  const handleRemoteSearch = (): void => {
    const { searchQuery } = trigger
    const entry = ensureRemoteSearchEntry(searchQuery)
    const done = () => {
      initialize()
      resetHighlightedOptionWhenNecessary(true)
    }

    // If caching is enabled and options are already loaded, just re-initialize
    if ((searchQuery === '' || props.cacheOptions) && entry.isLoaded) {
      return done()
    }

    // Load options via loadOptions prop
    callLoadOptionsProp({
      action: ASYNC_SEARCH,
      args: { searchQuery },
      isPending: () => entry.isLoading,
      start: () => {
        entry.isLoading = true
        entry.isLoaded = false
        entry.loadingError = ''
      },
      succeed: (options: RawNode[]) => {
        entry.isLoaded = true
        entry.options = Array.isArray(options) ? options : []
        // When the request completes, the search query may have changed
        // Only show these options if they are for the current search query
        if (trigger.searchQuery === searchQuery) {
          done()
        }
      },
      fail: (err: any) => {
        entry.loadingError = getErrorMessage(err)
      },
      end: () => {
        entry.isLoading = false
      },
    })
  }

  return {
    remoteSearch,
    getRemoteSearchEntry,
    handleRemoteSearch,
  }
}
