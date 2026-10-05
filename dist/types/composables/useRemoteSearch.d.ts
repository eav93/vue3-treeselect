import { CallLoadOptionsProp } from './useAsyncOptions';
import { RemoteSearchState, RemoteSearchEntry, TreeselectProps, TriggerState } from '../types';
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
export declare function useRemoteSearch(props: TreeselectProps, trigger: TriggerState, callLoadOptionsProp: CallLoadOptionsProp, initialize: () => void, resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void): {
    remoteSearch: import('vue').ShallowReactive<RemoteSearchState>;
    getRemoteSearchEntry: () => RemoteSearchEntry;
    handleRemoteSearch: () => void;
};
