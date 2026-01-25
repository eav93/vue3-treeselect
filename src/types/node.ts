/**
 * Raw node data structure as provided by the user
 */
export interface RawNode {
  /** Unique identifier for the node */
  id: string | number
  /** Display label for the node */
  label: string
  /** Child nodes (null for unloaded branches, undefined for leaves) */
  children?: RawNode[] | null
  /** Whether the node is disabled */
  isDisabled?: boolean
  /** Whether the node is marked as new */
  isNew?: boolean
  /** Whether the node should be expanded by default */
  isDefaultExpanded?: boolean
  /** Any additional custom properties */
  [key: string]: any
}

/**
 * Count types for branch nodes
 */
export interface CountMap {
  ALL_CHILDREN: number
  ALL_DESCENDANTS: number
  LEAF_CHILDREN: number
  LEAF_DESCENDANTS: number
}

/**
 * States for async loading of options
 */
export interface AsyncOptionsStates {
  isLoaded: boolean
  isLoading: boolean
  loadingError: string
}

/**
 * Normalized node structure used internally
 */
export interface NormalizedNode {
  // Basic properties
  id: string | number
  label: string
  level: number
  ancestors: NormalizedNode[]
  index: number[]
  parentNode: NormalizedNode | null

  // Computed properties for search
  lowerCased: Record<string, string>
  nestedSearchLabel: string

  // State flags
  isDisabled: boolean
  isNew: boolean
  isMatched: boolean
  isHighlighted: boolean
  isBranch: boolean
  isLeaf: boolean
  isRootNode: boolean
  isFallbackNode?: boolean

  // Original data
  raw: RawNode

  // Branch-specific properties
  children?: NormalizedNode[]
  childrenStates?: AsyncOptionsStates
  isExpanded?: boolean
  hasMatchedDescendants?: boolean
  hasDisabledDescendants?: boolean
  isExpandedOnSearch?: boolean
  showAllChildrenOnSearch?: boolean
  count?: CountMap
}

/**
 * Node identifier type
 */
export type NodeId = string | number

/**
 * Map of node IDs to normalized nodes
 */
export type NodeMap = Record<NodeId, NormalizedNode>
