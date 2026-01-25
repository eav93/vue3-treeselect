import type { RawNode } from './node'

/**
 * Function type for loading options asynchronously
 */
export type LoadOptionsFunction = (params: {
  /** The action being performed */
  action: string
  /** Parent node when loading children */
  parentNode?: any
  /** Search query for async search */
  searchQuery?: string
  /** Callback to call when loading is complete */
  callback: (error?: Error | string) => void
  /** Instance ID */
  instanceId: string | number
}) => void | Promise<void>

/**
 * Function type for normalizing raw nodes
 */
export type NormalizerFunction = (node: any, instanceId: string | number) => any

/**
 * Value format type
 */
export type ValueFormat = 'id' | 'object'

/**
 * Value consists of mode
 */
export type ValueConsistsOf = 'ALL' | 'BRANCH_PRIORITY' | 'LEAF_PRIORITY' | 'ALL_WITH_INDETERMINATE'

/**
 * Sort value by mode
 */
export type SortValueBy = 'ORDER_SELECTED' | 'LEVEL' | 'INDEX'

/**
 * Show count of mode
 */
export type ShowCountOf = 'ALL_CHILDREN' | 'ALL_DESCENDANTS' | 'LEAF_CHILDREN' | 'LEAF_DESCENDANTS'

/**
 * Open direction type
 */
export type OpenDirection = 'auto' | 'top' | 'bottom' | 'above' | 'below'

/**
 * Treeselect component props
 */
export interface TreeselectProps {
  // Selection behavior
  /** Allow resetting value even if there are disabled selected nodes */
  allowClearingDisabled?: boolean
  /** When selecting/deselecting ancestor, should disabled descendants be affected */
  allowSelectingDisabledDescendants?: boolean
  /** Whether the menu should be always open */
  alwaysOpen?: boolean
  /** Append menu to body */
  appendToBody?: boolean
  /** Enable async search mode */
  async?: boolean
  /** Automatically focus on mount */
  autoFocus?: boolean
  /** Automatically load root options on mount */
  autoLoadRootOptions?: boolean
  /** Auto deselect ancestors when deselecting (flat mode only) */
  autoDeselectAncestors?: boolean
  /** Auto deselect descendants when deselecting (flat mode only) */
  autoDeselectDescendants?: boolean
  /** Auto select ancestors when selecting (flat mode only) */
  autoSelectAncestors?: boolean
  /** Auto select descendants when selecting (flat mode only) */
  autoSelectDescendants?: boolean
  /** Allow backspace key to remove last item */
  backspaceRemoves?: boolean
  /** Function to call before clearing all */
  beforeClearAll?: () => boolean | Promise<boolean>
  /** Show branch nodes before leaf nodes */
  branchNodesFirst?: boolean
  /** Cache async search results */
  cacheOptions?: boolean
  /** Show clear button */
  clearable?: boolean
  /** Title for clear all button */
  clearAllText?: string
  /** Clear search input after selecting */
  clearOnSelect?: boolean
  /** Title for clear value button */
  clearValueText?: string
  /** Close the menu after selecting (multi-select) */
  closeOnSelect?: boolean
  /** How many levels of branch nodes to expand by default */
  defaultExpandLevel?: number
  /** Default options for async search */
  defaultOptions?: boolean | RawNode[]
  /** Allow delete key to remove last item */
  deleteRemoves?: boolean
  /** Delimiter for joining multiple values */
  delimiter?: string
  /** Flatten search results (hide ancestors) */
  flattenSearchResults?: boolean
  /** Disable branch nodes from being selected */
  disableBranchNodes?: boolean
  /** Disable the control */
  disabled?: boolean
  /** Disable fuzzy matching */
  disableFuzzyMatching?: boolean
  /** Enable flat mode (no cascading) */
  flat?: boolean
  /** Instance ID for identifying events */
  instanceId?: string | number
  /** Join multiple values into single field */
  joinValues?: boolean
  /** Limit number of displayed selected items */
  limit?: number
  /** Function to generate limit text */
  limitText?: (count: number) => string
  /** Loading text */
  loadingText?: string
  /** Function for loading options */
  loadOptions?: LoadOptionsFunction
  /** Keys to match when searching */
  matchKeys?: string[]
  /** Max height of menu */
  maxHeight?: number
  /** Enable multi-select mode */
  multiple?: boolean
  /** Name attribute for form field */
  name?: string
  /** Text for no children tip */
  noChildrenText?: string
  /** Text for no options tip */
  noOptionsText?: string
  /** Text for no results tip */
  noResultsText?: string
  /** Normalizer function */
  normalizer?: NormalizerFunction
  /** Menu open direction */
  openDirection?: OpenDirection
  /** Open the menu on click */
  openOnClick?: boolean
  /** Open the menu on focus */
  openOnFocus?: boolean
  /** Options array */
  options?: RawNode[]
  /** Placeholder text */
  placeholder?: string
  /** HTML5 required attribute */
  required?: boolean
  /** Retry text for loading errors */
  retryText?: string
  /** Retry button title */
  retryTitle?: string
  /** Enable search */
  searchable?: boolean
  /** Search in nested labels */
  searchNested?: boolean
  /** Search prompt text */
  searchPromptText?: string
  /** Show count next to labels */
  showCount?: boolean
  /** What type of count to show */
  showCountOf?: ShowCountOf
  /** Show count when searching */
  showCountOnSearch?: boolean | null
  /** How to sort selected values */
  sortValueBy?: SortValueBy
  /** Tab index */
  tabIndex?: number
  /** Model value (v-model) */
  modelValue?: any
  /** What to include in value array */
  valueConsistsOf?: ValueConsistsOf
  /** Format of value */
  valueFormat?: ValueFormat
  /** Z-index of menu */
  zIndex?: number | string
}

/**
 * Treeselect component emits
 */
export interface TreeselectEmits {
  (e: 'update:modelValue', value: any, instanceId: string | number): void
  (e: 'select', node: any, instanceId: string | number): void
  (e: 'deselect', node: any, instanceId: string | number): void
  (e: 'search-change', query: string, instanceId: string | number): void
  (e: 'open', instanceId: string | number): void
  (e: 'close', value: any, instanceId: string | number): void
}
