import { reactive, nextTick } from 'vue'
import { isPromise, once } from '@/utils'
import type {
  AsyncOptionsStates,
  TreeselectProps,
  NormalizedNode,
} from '@/types'

// Constants - will be imported from constants.ts later
const LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS'
const LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS'

/**
 * Get error message from error object
 */
function getErrorMessage(err: any): string {
  return err.message || String(err)
}

/**
 * Helper to create async options states
 */
function createAsyncOptionsStates(): AsyncOptionsStates {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: '',
  }
}

/**
 * Composable for async options loading
 *
 * @param props - Component props
 * @param getNode - Function to get node by ID
 * @param instanceId - Instance ID
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @returns Async options methods and state
 */
export function useAsyncOptions(
  props: TreeselectProps,
  getNode: (id: string | number) => NormalizedNode | null,
  instanceId: string | number,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void
) {
  /**
   * Root options loading state
   */
  const rootOptionsStates = reactive<AsyncOptionsStates>(createAsyncOptionsStates())

  /**
   * Call loadOptions prop with proper lifecycle handling
   */
  const callLoadOptionsProp = (params: {
    action: string
    args?: any
    isPending: () => boolean
    start: () => void
    succeed: (result?: any) => void
    fail: (err: any) => void
    end: () => void
  }): void => {
    const { action, args, isPending, start, succeed, fail, end } = params

    // Don't load if already pending or loadOptions is not provided
    if (!props.loadOptions || isPending()) {
      return
    }

    start()

    const callback = once((err?: any, result?: any) => {
      if (err) {
        fail(err)
      } else {
        succeed(result)
      }
      end()
    })

    const loadResult = props.loadOptions({
      id: instanceId,
      instanceId: instanceId,
      action,
      ...args,
      callback,
    })

    // Handle promise-based loadOptions
    if (isPromise(loadResult)) {
      void loadResult
        .then(() => {
          callback()
        })
        .catch((err: any) => {
          callback(err)
        })
        .catch((err: any) => {
          // istanbul ignore next
          console.error(err)
        })
    }
  }

  /**
   * Load root options
   */
  const loadRootOptions = (): void => {
    callLoadOptionsProp({
      action: LOAD_ROOT_OPTIONS,
      isPending: () => rootOptionsStates.isLoading,
      start: () => {
        rootOptionsStates.isLoading = true
        rootOptionsStates.loadingError = ''
      },
      succeed: () => {
        rootOptionsStates.isLoaded = true
        // Wait for options being re-initialized
        nextTick(() => {
          resetHighlightedOptionWhenNecessary(true)
        })
      },
      fail: (err: any) => {
        rootOptionsStates.loadingError = getErrorMessage(err)
      },
      end: () => {
        rootOptionsStates.isLoading = false
      },
    })
  }

  /**
   * Load children options for a branch node
   * @param parentNode - The branch node to load children for
   */
  const loadChildrenOptions = (parentNode: NormalizedNode): void => {
    // The options may be re-initialized anytime during the loading process
    // So parentNode can be stale and we use getNode() to avoid that
    const { id, raw } = parentNode

    callLoadOptionsProp({
      action: LOAD_CHILDREN_OPTIONS,
      args: {
        // We always pass the raw node instead of the normalized node
        // Because the shape of the raw node is more likely to be close to
        // what the back-end API service needs
        parentNode: raw,
      },
      isPending: () => {
        const node = getNode(id)
        return node ? node.childrenStates!.isLoading : false
      },
      start: () => {
        const node = getNode(id)
        if (node) {
          node.childrenStates!.isLoading = true
          node.childrenStates!.loadingError = ''
        }
      },
      succeed: () => {
        const node = getNode(id)
        if (node) {
          node.childrenStates!.isLoaded = true
        }
      },
      fail: (err: any) => {
        const node = getNode(id)
        if (node) {
          node.childrenStates!.loadingError = getErrorMessage(err)
        }
      },
      end: () => {
        const node = getNode(id)
        if (node) {
          node.childrenStates!.isLoading = false
        }
      },
    })
  }

  return {
    rootOptionsStates,
    callLoadOptionsProp,
    loadRootOptions,
    loadChildrenOptions,
  }
}
