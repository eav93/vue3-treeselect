import { reactive, nextTick } from 'vue'
import { isPromise, once } from '@/utils'
import { LOAD_ROOT_OPTIONS, LOAD_CHILDREN_OPTIONS } from '@/constants'
import { createAsyncOptionsStates } from './useNodeNormalization'
import type {
  AsyncOptionsStates,
  TreeselectProps,
  NormalizedNode,
  NodeId,
} from '@/types'

/**
 * Get error message from error object
 */
export function getErrorMessage(err: any): string {
  return err.message || String(err)
}

export interface LoadOptionsCall {
  action: typeof LOAD_ROOT_OPTIONS | typeof LOAD_CHILDREN_OPTIONS | 'ASYNC_SEARCH'
  args?: Record<string, any>
  isPending: () => boolean
  start: () => void
  succeed: (result?: any) => void
  fail: (err: any) => void
  end: () => void
}

export type CallLoadOptionsProp = (params: LoadOptionsCall) => void

/**
 * Composable for async options loading
 *
 * @param props - Component props
 * @param getNode - Function to get node by ID
 * @param getInstanceId - Instance ID getter
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @param onChildrenLoaded - Called after children of a node have been loaded
 * @returns Async options methods and state
 */
export function useAsyncOptions(
  props: TreeselectProps,
  getNode: (id: NodeId) => NormalizedNode | null,
  getInstanceId: () => NodeId,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void,
  onChildrenLoaded: () => void
) {
  /**
   * Root options loading state
   */
  const rootOptionsStates = reactive<AsyncOptionsStates>(createAsyncOptionsStates())

  /**
   * Call loadOptions prop with proper lifecycle handling
   */
  const callLoadOptionsProp: CallLoadOptionsProp = (params) => {
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

    const instanceId = getInstanceId()
    const loadResult = props.loadOptions({
      id: instanceId,
      instanceId,
      action,
      ...args,
      callback,
    })

    // Handle promise-based loadOptions
    if (isPromise(loadResult)) {
      (loadResult as Promise<any>)
        .then(
          // The resolved value is used as the result (e.g. options for ASYNC_SEARCH)
          (result: any) => callback(null, result),
          (err: any) => callback(err || new Error('Failed to load options'))
        )
        .catch((err: any) => {
          // Errors thrown by our own success handlers
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
        void nextTick(() => {
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
        return node?.childrenStates ? node.childrenStates.isLoading : false
      },
      start: () => {
        const node = getNode(id)
        if (node?.childrenStates) {
          node.childrenStates.isLoading = true
          node.childrenStates.loadingError = ''
        }
      },
      succeed: () => {
        const node = getNode(id)
        if (node?.childrenStates) {
          node.childrenStates.isLoaded = true
        }
        onChildrenLoaded()
      },
      fail: (err: any) => {
        const node = getNode(id)
        if (node?.childrenStates) {
          node.childrenStates.loadingError = getErrorMessage(err)
        }
      },
      end: () => {
        const node = getNode(id)
        if (node?.childrenStates) {
          node.childrenStates.isLoading = false
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
