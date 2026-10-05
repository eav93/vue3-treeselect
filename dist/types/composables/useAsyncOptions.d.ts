import { LOAD_ROOT_OPTIONS, LOAD_CHILDREN_OPTIONS } from '../constants';
import { TreeselectProps, NormalizedNode, NodeId } from '../types';
/**
 * Get error message from error object
 */
export declare function getErrorMessage(err: any): string;
export interface LoadOptionsCall {
    action: typeof LOAD_ROOT_OPTIONS | typeof LOAD_CHILDREN_OPTIONS | 'ASYNC_SEARCH';
    args?: Record<string, any>;
    isPending: () => boolean;
    start: () => void;
    succeed: (result?: any) => void;
    fail: (err: any) => void;
    end: () => void;
}
export type CallLoadOptionsProp = (params: LoadOptionsCall) => void;
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
export declare function useAsyncOptions(props: TreeselectProps, getNode: (id: NodeId) => NormalizedNode | null, getInstanceId: () => NodeId, resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void, onChildrenLoaded: () => void): {
    rootOptionsStates: {
        isLoaded: boolean;
        isLoading: boolean;
        loadingError: string;
    };
    callLoadOptionsProp: CallLoadOptionsProp;
    loadRootOptions: () => void;
    loadChildrenOptions: (parentNode: NormalizedNode) => void;
};
