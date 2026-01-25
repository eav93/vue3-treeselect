// Magic value that indicates a root level node.
export const NO_PARENT_NODE = null

// Types of checked state.
export const UNCHECKED = 0 as const
export const INDETERMINATE = 1 as const
export const CHECKED = 2 as const

// Types of count number.
export const ALL_CHILDREN = 'ALL_CHILDREN' as const
export const ALL_DESCENDANTS = 'ALL_DESCENDANTS' as const
export const LEAF_CHILDREN = 'LEAF_CHILDREN' as const
export const LEAF_DESCENDANTS = 'LEAF_DESCENDANTS' as const

// Action types of delayed loading.
export const LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS' as const
export const LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS' as const
export const ASYNC_SEARCH = 'ASYNC_SEARCH' as const

// Acceptable values of `valueConsistsOf` prop.
export const ALL = 'ALL' as const
export const BRANCH_PRIORITY = 'BRANCH_PRIORITY' as const
export const LEAF_PRIORITY = 'LEAF_PRIORITY' as const
export const ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE' as const

// Keyboard keys (modern evt.key values)
export const KEYS = {
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  DELETE: 'Delete',
} as const

// Other constants.
export const INPUT_DEBOUNCE_DELAY = process.env.NODE_ENV === 'testing'
  ? /* to speed up unit testing */ 10
  : /* istanbul ignore next */ 200
export const MIN_INPUT_WIDTH = 5
export const MENU_BUFFER = 40
