import type { ComputedRef } from 'vue'
import { warning, createMap } from '@/utils'
import type {
  RawNode,
  NormalizedNode,
  NodeMap,
  TreeselectProps,
  NodeId,
  ForestState,
} from '@/types'

// Constants - will be imported from constants.ts later
const NO_PARENT_NODE = null
const ALL_CHILDREN = 'ALL_CHILDREN'
const ALL_DESCENDANTS = 'ALL_DESCENDANTS'
const LEAF_CHILDREN = 'LEAF_CHILDREN'
const LEAF_DESCENDANTS = 'LEAF_DESCENDANTS'

/**
 * Helper to create async options states
 */
function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: '',
  }
}

/**
 * Helper to stringify option property value for search
 */
function stringifyOptionPropValue(value: any): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' && !isNaN(value)) return value + ''
  return ''
}

/**
 * Composable for normalizing raw nodes into the internal tree structure
 *
 * @param props - Component props
 * @param forest - Forest state ref
 * @param instanceId - Instance ID ref
 * @param loadChildrenOptions - Function to load children options
 * @returns Normalization methods
 */
export function useNodeNormalization(
  props: TreeselectProps,
  forest: ForestState,
  instanceId: ComputedRef<string | number>,
  loadChildrenOptions: (node: NormalizedNode) => void
) {
  /**
   * Enhanced normalizer that applies user's normalizer
   */
  const enhancedNormalizer = (raw: RawNode): any => {
    return {
      ...raw,
      ...(props.normalizer ? props.normalizer(raw, instanceId.value) : {}),
    }
  }

  /**
   * Check for duplicate node IDs
   */
  const checkDuplication = (node: any): void => {
    warning(
      () => !((node.id in forest.nodeMap) && !forest.nodeMap[node.id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(node.id)}. ` +
        `Their labels are "${forest.nodeMap[node.id].label}" and "${node.label}" respectively.`
    )
  }

  /**
   * Verify node shape is correct
   */
  const verifyNodeShape = (node: any): void => {
    warning(
      () => !(node.children === undefined && node.isBranch === true),
      () => 'Are you meant to declare an unloaded branch node? ' +
        '`isBranch: true` is no longer supported, please use `children: null` instead.'
    )
  }

  /**
   * Normalize raw nodes into internal tree structure
   *
   * @param parentNode - Parent node (null for root nodes)
   * @param nodes - Raw nodes to normalize
   * @param prevNodeMap - Previous node map to preserve states
   * @returns Normalized nodes
   */
  const normalize = (
    parentNode: NormalizedNode | null,
    nodes: RawNode[],
    prevNodeMap?: NodeMap
  ): NormalizedNode[] => {
    let normalizedOptions = nodes
      .map(node => [enhancedNormalizer(node), node] as const)
      .map(([node, raw], index) => {
        checkDuplication(node)
        verifyNodeShape(node)

        const { id, label, children, isDefaultExpanded } = node
        const isRootNode = parentNode === NO_PARENT_NODE
        const level = isRootNode ? 0 : parentNode!.level + 1
        const isBranch = Array.isArray(children) || children === null
        const isLeaf = !isBranch
        const isDisabled = !!node.isDisabled || (!props.flat && !isRootNode && parentNode!.isDisabled)
        const isNew = !!node.isNew

        // Create lowerCased map for search matching
        const lowerCased = (props.matchKeys || ['label']).reduce((prev, key) => ({
          ...prev,
          [key]: stringifyOptionPropValue(node[key]).toLocaleLowerCase(),
        }), {} as Record<string, string>)

        // Create nested search label (includes all ancestor labels)
        const nestedSearchLabel = isRootNode
          ? lowerCased.label
          : parentNode!.nestedSearchLabel + ' ' + lowerCased.label

        // Create node in map
        forest.nodeMap[id] = createMap() as any
        const normalized = forest.nodeMap[id]

        // Set basic properties
        Object.assign(normalized, {
          id,
          label,
          level,
          ancestors: isRootNode ? [] : [parentNode].concat(parentNode!.ancestors),
          index: (isRootNode ? [] : parentNode!.index).concat(index),
          parentNode: parentNode,
          lowerCased,
          nestedSearchLabel,
          isDisabled,
          isNew,
          isMatched: false,
          isHighlighted: false,
          isBranch,
          isLeaf,
          isRootNode,
          raw,
        })

        // Branch-specific properties
        if (isBranch) {
          const isLoaded = Array.isArray(children)

          Object.assign(normalized, {
            childrenStates: { ...createAsyncOptionsStates(), isLoaded },
            isExpanded: typeof isDefaultExpanded === 'boolean'
              ? isDefaultExpanded
              : level < (props.defaultExpandLevel || 0),
            hasMatchedDescendants: false,
            hasDisabledDescendants: false,
            isExpandedOnSearch: false,
            showAllChildrenOnSearch: false,
            count: {
              [ALL_CHILDREN]: 0,
              [ALL_DESCENDANTS]: 0,
              [LEAF_CHILDREN]: 0,
              [LEAF_DESCENDANTS]: 0,
            },
            children: isLoaded ? normalize(normalized, children!, prevNodeMap) : [],
          })

          // Expand all ancestors if defaultExpanded is true
          if (isDefaultExpanded === true) {
            normalized.ancestors.forEach(ancestor => {
              ancestor.isExpanded = true
            })
          }

          // Warn if children not loaded and no loadOptions provided
          if (!isLoaded && typeof props.loadOptions !== 'function') {
            warning(
              () => false,
              () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
            )
          } else if (!isLoaded && normalized.isExpanded) {
            // Load children if expanded but not loaded
            loadChildrenOptions(normalized)
          }
        }

        // Update ancestor counts
        normalized.ancestors.forEach(ancestor => ancestor.count![ALL_DESCENDANTS]++)
        if (isLeaf) {
          normalized.ancestors.forEach(ancestor => ancestor.count![LEAF_DESCENDANTS]++)
        }

        // Update parent counts
        if (!isRootNode) {
          parentNode!.count![ALL_CHILDREN] += 1
          if (isLeaf) parentNode!.count![LEAF_CHILDREN] += 1
          if (isDisabled) parentNode!.hasDisabledDescendants = true
        }

        // Preserve previous states if re-initializing
        if (prevNodeMap && prevNodeMap[id]) {
          const prev = prevNodeMap[id]

          normalized.isMatched = prev.isMatched
          normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch
          normalized.isHighlighted = prev.isHighlighted

          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch

            // Handle reset to unloaded state
            if (prev.childrenStates!.isLoaded && !normalized.childrenStates!.isLoaded) {
              normalized.isExpanded = false
            } else {
              normalized.childrenStates = { ...prev.childrenStates! }
            }
          }
        }

        return normalized
      })

    // Sort: branch nodes first if requested
    if (props.branchNodesFirst) {
      const branchNodes = normalizedOptions.filter(option => option.isBranch)
      const leafNodes = normalizedOptions.filter(option => option.isLeaf)
      normalizedOptions = branchNodes.concat(leafNodes)
    }

    return normalizedOptions
  }

  return {
    normalize,
    enhancedNormalizer,
    checkDuplication,
    verifyNodeShape,
  }
}
