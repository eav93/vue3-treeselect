import { ref, watch } from 'vue'
import { createMap } from '@/utils'
import type {
  RemoteSearchState,
  RemoteSearchEntry,
  TreeselectProps,
  TriggerState,
  RawNode,
} from '@/types'

// Constants - will be imported from constants.ts later
const ASYNC_SEARCH = 'ASYNC_SEARCH'

/**
 * Get error message from error object
 */
function getErrorMessage(err: any): string {
  return err.message || String(err)
}

/**
 * Helper to create async options states
 */
function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: '',
  }
}

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
  callLoadOptionsProp: (params: any) => void,
  initialize: () => void,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
) {
  /**
   * Remote search state: map of search queries to search results
   */
  const remoteSearch = ref<RemoteSearchState>(createMap())

  /**
   * Key for triggering re-renders
   */
  const key = ref(0)

  /**
   * Get remote search entry for current search query
   */
  const getRemoteSearchEntry = (): RemoteSearchEntry => {
    const { searchQuery } = trigger
    const entry: RemoteSearchEntry = remoteSearch.value[searchQuery] || {
      ...createAsyncOptionsStates(),
      options: [],
    }

    // Watch for changes to entry.options
    watch(
      () => entry.options,
      () => {
        // Potential redundant re-initialization
        if (trigger.searchQuery === searchQuery) {
          initialize()
        }
      },
      { deep: true }
    )

    // Handle empty search query
    if (searchQuery === '') {
      if (Array.isArray(props.defaultOptions)) {
        entry.options = props.defaultOptions
        entry.isLoaded = true
        return entry
      } else if (props.defaultOptions !== true) {
        entry.isLoaded = true
        return entry
      }
    }

    // Create entry if it doesn't exist
    if (!remoteSearch.value[searchQuery]) {
      remoteSearch.value[searchQuery] = entry
    }

    return entry
  }

  /**
   * Handle remote search
   * Calls loadOptions prop with search query
   */
  const handleRemoteSearch = (): void => {
    const { searchQuery } = trigger
    const entry = getRemoteSearchEntry()
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
        entry.options = options
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
        key.value += 1
        entry.isLoading = false
      },
    })
  }

  return {
    remoteSearch,
    key,
    getRemoteSearchEntry,
    handleRemoteSearch,
  }
}
