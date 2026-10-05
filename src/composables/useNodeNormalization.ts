import { reactive, shallowReactive, toRaw } from 'vue'
import { warning } from '@/utils'
import { NODE_ENV } from '@/utils/env'
import {
  NO_PARENT_NODE,
  ALL_CHILDREN,
  ALL_DESCENDANTS,
  LEAF_CHILDREN,
  LEAF_DESCENDANTS,
} from '@/constants'
import type {
  RawNode,
  NormalizedNode,
  NodeMap,
  NodeId,
  TreeselectProps,
  ForestState,
  AsyncOptionsStates,
} from '@/types'

const IS_DEV = NODE_ENV !== 'production'

const hasOwn = (obj: object, key: string): boolean => Object.prototype.hasOwnProperty.call(obj, key)

/**
 * Helper to create async options states
 */
export function createAsyncOptionsStates(): AsyncOptionsStates {
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
 * @param forest - Forest state
 * @param getInstanceId - Instance ID getter
 * @param loadChildrenOptions - Function to load children options
 * @returns Normalization methods
 */
export function useNodeNormalization(
  props: TreeselectProps,
  forest: ForestState,
  getInstanceId: () => NodeId,
  loadChildrenOptions: (node: NormalizedNode) => void
) {
  /**
   * Apply the user's normalizer. Returns an accessor instead of a merged copy,
   * so that the default identity normalizer doesn't copy every node.
   */
  const createFieldGetter = (raw: RawNode): ((key: string) => any) => {
    const normalized = props.normalizer ? props.normalizer(raw, getInstanceId()) : raw
    if (!normalized || normalized === raw) return key => raw[key]
    return key => (hasOwn(normalized, key) ? normalized[key] : raw[key])
  }

  /**
   * Enhanced normalizer that applies user's normalizer (returns a merged copy)
   */
  const enhancedNormalizer = (raw: RawNode): any => {
    return {
      ...raw,
      ...(props.normalizer ? props.normalizer(raw, getInstanceId()) : {}),
    }
  }

  /**
   * Check for duplicate node IDs
   */
  const checkDuplication = (id: NodeId, label: string): void => {
    warning(
      () => !((id in forest.nodeMap) && !forest.nodeMap[id].isFallbackNode),
      () => `Detected duplicate node id ${JSON.stringify(id)}. ` +
        `Their labels are "${forest.nodeMap[id].label}" and "${label}" respectively.`
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
    const nodeMap = forest.nodeMap
    const matchKeys = props.matchKeys || ['label']
    const isRootNode = parentNode === NO_PARENT_NODE
    const level = isRootNode ? 0 : parentNode!.level + 1
    const ancestors: NormalizedNode[] = isRootNode ? [] : [parentNode!, ...parentNode!.ancestors]
    const parentIndex = isRootNode ? [] : parentNode!.index
    const shouldBuildNestedSearchLabel = !!props.searchNested

    let normalizedOptions: NormalizedNode[] = new Array(nodes.length)

    for (let index = 0; index < nodes.length; index++) {
      const raw = nodes[index]
      const get = createFieldGetter(raw)

      const id: NodeId = get('id')
      const label: string = get('label')
      const children: RawNode[] | null | undefined = get('children')
      const isDefaultExpanded: boolean | undefined = get('isDefaultExpanded')

      // Dev-only checks (skipped in production: they allocate closures for every node)
      if (IS_DEV) checkDuplication(id, label)
      if (IS_DEV) warning(
        () => !(children === undefined && get('isBranch') === true),
        () => 'Are you meant to declare an unloaded branch node? ' +
          '`isBranch: true` is no longer supported, please use `children: null` instead.'
      )

      const isBranch = Array.isArray(children) || children === null
      const isLeaf = !isBranch
      const isDisabled = !!get('isDisabled') || (!props.flat && !isRootNode && !!parentNode!.isDisabled)
      const isNew = !!get('isNew')

      // Create lowerCased map for search matching
      const lowerCased: Record<string, string> = {}
      for (let i = 0; i < matchKeys.length; i++) {
        const key = matchKeys[i]
        lowerCased[key] = stringifyOptionPropValue(get(key)).toLocaleLowerCase()
      }
      if (!('label' in lowerCased)) {
        lowerCased.label = stringifyOptionPropValue(label).toLocaleLowerCase()
      }

      // Nested search label (includes all ancestor labels), only needed for `searchNested`
      const nestedSearchLabel = !shouldBuildNestedSearchLabel
        ? ''
        : isRootNode
          ? lowerCased.label
          : parentNode!.nestedSearchLabel + ' ' + lowerCased.label

      const plain: NormalizedNode = {
        id,
        label,
        level,
        ancestors,
        index: parentIndex.concat(index),
        parentNode,
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
      }

      if (isBranch) {
        plain.childrenStates = reactive({ ...createAsyncOptionsStates(), isLoaded: Array.isArray(children) })
        plain.isExpanded = typeof isDefaultExpanded === 'boolean'
          ? isDefaultExpanded
          : level < (props.defaultExpandLevel || 0)
        plain.hasMatchedDescendants = false
        plain.hasDisabledDescendants = false
        plain.isExpandedOnSearch = false
        plain.showAllChildrenOnSearch = false
        plain.count = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0,
        }
        plain.children = []
      }

      // Only top-level fields are reactive: children/ancestors/count/raw stay plain
      const normalized = shallowReactive(plain) as NormalizedNode
      nodeMap[id] = normalized

      if (isBranch) {
        const isLoaded = Array.isArray(children)

        // Must happen after all fields (count, isExpanded...) exist on this node
        if (isLoaded) normalized.children = normalize(normalized, children!, prevNodeMap)

        // Expand all ancestors if defaultExpanded is true
        if (isDefaultExpanded === true) {
          for (let i = 0; i < ancestors.length; i++) ancestors[i].isExpanded = true
        }

        if (!isLoaded && typeof props.loadOptions !== 'function') {
          warning(
            () => false,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          )
        }
      }

      // Update parent counts (descendant counts are aggregated bottom-up)
      if (!isRootNode) {
        const parentCount = parentNode!.count!
        parentCount[ALL_CHILDREN] += 1
        parentCount[ALL_DESCENDANTS] += 1 + (isBranch ? plain.count![ALL_DESCENDANTS] : 0)
        if (isLeaf) {
          parentCount[LEAF_CHILDREN] += 1
          parentCount[LEAF_DESCENDANTS] += 1
        } else {
          parentCount[LEAF_DESCENDANTS] += plain.count![LEAF_DESCENDANTS]
        }
        if (isDisabled || plain.hasDisabledDescendants) {
          parentNode!.hasDisabledDescendants = true
        }
      }

      // Preserve previous states if re-initializing
      // (fallback copies of selected nodes keep the data of the original nodes)
      const prev = prevNodeMap && prevNodeMap[id]
      if (prev) {
        normalized.isMatched = !!prev.isMatched
        normalized.showAllChildrenOnSearch = !!prev.showAllChildrenOnSearch
        normalized.isHighlighted = !!prev.isHighlighted

        if (prev.isBranch && isBranch) {
          normalized.isExpanded = prev.isExpanded
          normalized.isExpandedOnSearch = prev.isExpandedOnSearch
          normalized.hasMatchedDescendants = prev.hasMatchedDescendants

          // Handle reset to unloaded state
          if (prev.childrenStates!.isLoaded && !normalized.childrenStates!.isLoaded) {
            normalized.isExpanded = false
          } else {
            normalized.childrenStates = reactive({ ...toRaw(prev.childrenStates!) })
          }
        }
      }

      // Load children if expanded but not loaded
      // (not after a failed load: that is retried by the user)
      if (isBranch && !normalized.childrenStates!.isLoaded && !normalized.childrenStates!.loadingError &&
        normalized.isExpanded && typeof props.loadOptions === 'function') {
        loadChildrenOptions(normalized)
      }

      normalizedOptions[index] = normalized
    }

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
  }
}
