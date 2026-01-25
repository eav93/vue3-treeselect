import Treeselect from '@/components/Treeselect.vue'
import '../styles/style.scss'

// Export both default and named
export default Treeselect
export { Treeselect }

// Export types
export * from '@/types'

// Export constants
export {
  // Delayed loading
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
  // Checked states
  UNCHECKED,
  INDETERMINATE,
  CHECKED,
  // Value formats
  ALL,
  BRANCH_PRIORITY,
  LEAF_PRIORITY,
  ALL_WITH_INDETERMINATE,
} from '@/constants'

// Export composables for advanced usage
export * from '@/composables'
