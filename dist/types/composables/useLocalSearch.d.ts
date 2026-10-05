import { LocalSearchState, NormalizedNode, TreeselectProps, TriggerState } from '../types';
/**
 * Composable for local search functionality
 *
 * @param props - Component props
 * @param trigger - Trigger state
 * @param getNormalizedOptions - Getter for the root nodes
 * @param resetHighlightedOptionWhenNecessary - Function to reset highlighted option
 * @returns Local search state and methods
 */
export declare function useLocalSearch(props: TreeselectProps, trigger: TriggerState, getNormalizedOptions: () => NormalizedNode[], resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void): {
    localSearch: import('vue').ShallowReactive<LocalSearchState>;
    handleLocalSearch: () => void;
};
