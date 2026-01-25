import type { ComputedRef, Ref } from 'vue'

// Re-export all types
export * from './node'
export * from './state'
export * from './props'

import type {
  NodeId,
  NormalizedNode,
} from './node'

import type {
  ForestState,
  MenuState,
  TriggerState,
  LocalSearchState,
  RemoteSearchState,
  AsyncOptionsStates,
} from './state'

/**
 * Public API interface for TreeselectInstance
 * This is what gets provided via inject('treeselect')
 */
export interface TreeselectInstance {
  // ===== State (readonly refs) =====
  /** Forest state containing tree structure and selection */
  forest: Readonly<Ref<ForestState>>
  /** Menu state */
  menu: Readonly<Ref<MenuState>>
  /** Trigger state (focus and search) */
  trigger: TriggerState
  /** Local search state */
  localSearch: Readonly<Ref<LocalSearchState>>
  /** Remote search state */
  remoteSearch: Readonly<Ref<RemoteSearchState>>
  /** Root options loading states */
  rootOptionsStates: AsyncOptionsStates

  // ===== Computed Properties =====
  /** Whether any value is selected */
  hasValue: ComputedRef<boolean>
  /** Array of selected normalized nodes */
  selectedNodes: ComputedRef<NormalizedNode[]>
  /** Internal value (selected node IDs with sorting applied) */
  internalValue: ComputedRef<NodeId[]>
  /** Single select mode */
  single: ComputedRef<boolean>
  /** IDs of visible options in menu */
  visibleOptionIds: ComputedRef<NodeId[]>
  /** Whether there are visible options */
  hasVisibleOptions: ComputedRef<boolean>
  /** Whether to show count on search */
  showCountOnSearchComputed: ComputedRef<boolean>
  /** Whether tree has branch nodes */
  hasBranchNodes: ComputedRef<boolean>
  /** Whether to flatten options display */
  shouldFlattenOptions: ComputedRef<boolean>

  // ===== Methods =====

  // Node operations
  /** Get node by ID */
  getNode: (id: NodeId) => NormalizedNode | null
  /** Check if node is selected */
  isSelected: (node: NormalizedNode) => boolean

  // Selection
  /** Select or deselect a node */
  select: (node: NormalizedNode) => void
  /** Clear all selections */
  clear: () => void
  /** Remove last selected value */
  removeLastValue: () => void

  // Menu
  /** Open the menu */
  openMenu: () => void
  /** Close the menu */
  closeMenu: () => void
  /** Toggle the menu open/close */
  toggleMenu: () => void
  /** Toggle expanded state of a branch node */
  toggleExpanded: (node: NormalizedNode) => void

  // Highlight
  /** Set currently highlighted option */
  setCurrentHighlightedOption: (node: NormalizedNode | null, scroll?: boolean) => void
  /** Highlight first option */
  highlightFirstOption: () => void
  /** Highlight previous option */
  highlightPrevOption: () => void
  /** Highlight next option */
  highlightNextOption: () => void
  /** Highlight last option */
  highlightLastOption: () => void

  // Search
  /** Handle local search */
  handleLocalSearch: () => void
  /** Handle remote search */
  handleRemoteSearch: () => void
  /** Reset search query */
  resetSearchQuery: () => void

  // Loading
  /** Load root options */
  loadRootOptions: () => void
  /** Load children options for a node */
  loadChildrenOptions: (node: NormalizedNode) => void

  // Tree traversal
  /** Traverse descendants in breadth-first order */
  traverseDescendantsBFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void
  /** Traverse descendants in depth-first order */
  traverseDescendantsDFS: (node: NormalizedNode, callback: (node: NormalizedNode) => void) => void
  /** Traverse all nodes in depth-first order */
  traverseAllNodesDFS: (callback: (node: NormalizedNode) => void) => void
  /** Traverse all nodes by index */
  traverseAllNodesByIndex: (callback: (node: NormalizedNode) => boolean | void) => void

  // Utilities
  /** Get the value in the format specified by valueFormat prop */
  getValue: () => any
  /** Initialize/reinitialize options */
  initialize: () => void
  /** Get control element */
  getControl: () => HTMLElement | null
  /** Get menu element */
  getMenu: () => HTMLElement | null
  /** Get value container element */
  getValueContainer: () => any
  /** Get input element */
  getInput: () => HTMLInputElement | null
  /** Focus the input */
  focusInput: () => void
  /** Blur the input */
  blurInput: () => void
  /** Handle mouse down event */
  handleMouseDown: (evt: MouseEvent) => void
  /** Handle click outside */
  handleClickOutside: (evt: MouseEvent) => void
  /** Check if option should be shown in menu */
  shouldShowOptionInMenu: (node: NormalizedNode) => boolean
  /** Check if node should be expanded */
  shouldExpand: (node: NormalizedNode) => boolean

  // Props (readonly access to common props)
  /** All props passthrough */
  [key: string]: any
}
