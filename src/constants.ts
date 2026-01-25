// Magic value that indicates a root level node.
export const NO_PARENT_NODE = null

// Types of checked state.
export const UNCHECKED = 0 as const
export const INDETERMINATE = 1 as const
export const CHECKED = 2 as const

export type CheckedState = typeof UNCHECKED | typeof INDETERMINATE | typeof CHECKED

// Types of count number.
export const ALL_CHILDREN = 'ALL_CHILDREN' as const
export const ALL_DESCENDANTS = 'ALL_DESCENDANTS' as const
export const LEAF_CHILDREN = 'LEAF_CHILDREN' as const
export const LEAF_DESCENDANTS = 'LEAF_DESCENDANTS' as const

export type CountType =
  | typeof ALL_CHILDREN
  | typeof ALL_DESCENDANTS
  | typeof LEAF_CHILDREN
  | typeof LEAF_DESCENDANTS

// Action types of delayed loading.
export const LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS' as const
export const LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS' as const
export const ASYNC_SEARCH = 'ASYNC_SEARCH' as const

export type LoadOptionsAction =
  | typeof LOAD_ROOT_OPTIONS
  | typeof LOAD_CHILDREN_OPTIONS
  | typeof ASYNC_SEARCH

// Acceptable values of `valueConsistsOf` prop.
export const ALL = 'ALL' as const
export const BRANCH_PRIORITY = 'BRANCH_PRIORITY' as const
export const LEAF_PRIORITY = 'LEAF_PRIORITY' as const
export const ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE' as const

export type ValueConsistsOf =
  | typeof ALL
  | typeof BRANCH_PRIORITY
  | typeof LEAF_PRIORITY
  | typeof ALL_WITH_INDETERMINATE

// Acceptable values of `sortValueBy` prop.
export const ORDER_SELECTED = 'ORDER_SELECTED' as const
export const LEVEL = 'LEVEL' as const
export const INDEX = 'INDEX' as const

export type SortValueBy = typeof ORDER_SELECTED | typeof LEVEL | typeof INDEX

// Key codes look-up table.
export const KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
} as const

export type KeyCode = typeof KEY_CODES[keyof typeof KEY_CODES]

// Other constants.
export const INPUT_DEBOUNCE_DELAY = process.env.NODE_ENV === 'testing'
  ? /* to speed up unit testing */ 10
  : /* istanbul ignore next */ 200
export const MIN_INPUT_WIDTH = 5
export const MENU_BUFFER = 40
