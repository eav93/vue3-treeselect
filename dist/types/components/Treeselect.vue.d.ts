import { NodeId, NormalizedNode, TreeselectProps } from '../types';
type __VLS_Slots = {
    /** Label of an option in the menu */
    'option-label'?: (scope: {
        node: NormalizedNode;
        shouldShowCount: boolean;
        count: number;
        labelClassName: string;
        countClassName: string;
    }) => any;
    /** Label of a selected value */
    'value-label'?: (scope: {
        node: NormalizedNode;
    }) => any;
    /** Content above the options */
    'before-list'?: () => any;
    /** Content below the options */
    'after-list'?: () => any;
};
declare const __VLS_base: import('vue').DefineComponent<TreeselectProps, {
    forest: import('vue').ShallowReactive<import('../types').ForestState>;
    menu: {
        isOpen: boolean;
        current: NodeId | null;
        lastScrollPosition: number;
        placement: "top" | "bottom";
    };
    trigger: {
        isFocused: boolean;
        searchQuery: string;
    };
    localSearch: import('vue').ShallowReactive<import('../types').LocalSearchState>;
    selectedNodes: import('vue').ComputedRef<NormalizedNode[]>;
    internalValue: import('vue').ComputedRef<NodeId[]>;
    getNode: (nodeId: NodeId) => NormalizedNode | null;
    isSelected: (node: NormalizedNode | null) => boolean;
    traverseAllNodesDFS: (callback: (node: NormalizedNode) => void) => void;
    traverseAllNodesByIndex: (callback: (node: NormalizedNode) => boolean | void) => void;
    traverseDescendantsBFS: typeof import('../composables/useNodeTraversal').traverseDescendantsBFS;
    traverseDescendantsDFS: typeof import('../composables/useNodeTraversal').traverseDescendantsDFS;
    openMenu: () => void;
    closeMenu: (force?: boolean) => void;
    toggleMenu: () => void;
    toggleExpanded: (node: NormalizedNode) => void;
    getMenu: () => HTMLElement | null;
    getControl: () => HTMLElement | null;
    select: (node: NormalizedNode) => void;
    clear: () => void;
    removeLastValue: () => void;
    getValue: () => any;
    initialize: () => void;
    loadRootOptions: () => void;
    focusInput: () => void;
    blurInput: () => void;
    getInput: () => HTMLElement | null;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (value: any, instanceId: string | number) => any;
    select: (node: any, instanceId: string | number) => any;
    "update:modelValue": (value: any, instanceId: string | number) => any;
    deselect: (node: any, instanceId: string | number) => any;
    "search-change": (searchQuery: string, instanceId: string | number) => any;
    open: (instanceId: string | number) => any;
}, string, import('vue').PublicProps, Readonly<TreeselectProps> & Readonly<{
    onClose?: ((value: any, instanceId: string | number) => any) | undefined;
    onSelect?: ((node: any, instanceId: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any, instanceId: string | number) => any) | undefined;
    onDeselect?: ((node: any, instanceId: string | number) => any) | undefined;
    "onSearch-change"?: ((searchQuery: string, instanceId: string | number) => any) | undefined;
    onOpen?: ((instanceId: string | number) => any) | undefined;
}>, {
    flat: boolean;
    options: import('../types').TreeselectOptions;
    autoSelectAncestors: boolean;
    autoSelectDescendants: boolean;
    autoDeselectAncestors: boolean;
    autoDeselectDescendants: boolean;
    name: string;
    required: boolean;
    placeholder: string;
    zIndex: string | number;
    maxHeight: number;
    disabled: boolean;
    allowClearingDisabled: boolean;
    allowSelectingDisabledDescendants: boolean;
    alwaysOpen: boolean;
    appendToBody: boolean;
    async: boolean;
    autoFocus: boolean;
    autoLoadRootOptions: boolean;
    backspaceRemoves: boolean;
    beforeClearAll: () => boolean | Promise<boolean>;
    branchNodesFirst: boolean;
    cacheOptions: boolean;
    clearable: boolean;
    clearAllText: string;
    clearOnSelect: boolean;
    clearValueText: string;
    closeOnSelect: boolean;
    defaultExpandLevel: number;
    defaultOptions: boolean | import('../types').TreeselectOptions;
    deleteRemoves: boolean;
    delimiter: string;
    flattenSearchResults: boolean;
    disableBranchNodes: boolean;
    disableFuzzyMatching: boolean;
    instanceId: string | number;
    joinValues: boolean;
    limit: number;
    limitText: (count: number) => string;
    loadingText: string;
    matchKeys: string[];
    multiple: boolean;
    noChildrenText: string;
    noOptionsText: string;
    noResultsText: string;
    normalizer: import('../types').NormalizerFunction;
    openDirection: import('../types').OpenDirection;
    openOnClick: boolean;
    openOnFocus: boolean;
    retryText: string;
    retryTitle: string;
    searchable: boolean;
    searchNested: boolean;
    searchPromptText: string;
    searchDebounceDelay: number;
    showCount: boolean;
    showCountOf: import('../types').ShowCountOf;
    showCountOnSearch: boolean | null;
    sortValueBy: import('../types').SortValueBy;
    tabIndex: number;
    valueConsistsOf: import('../types').ValueConsistsOf;
    valueFormat: import('../types').ValueFormat;
    virtualScroll: boolean;
    optionHeight: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
