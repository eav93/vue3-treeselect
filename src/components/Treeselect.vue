<template>
  <div ref="wrapper" :class="wrapperClass">
    <HiddenFields />
    <Control ref="control" />
    <MenuPortal v-if="appendToBody" ref="portal" />
    <Menu v-else ref="menu" />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { onLeftClick } from '@/utils'
import { useTreeselect } from '@/composables'
import HiddenFields from '@/components/HiddenFields.vue'
import Control from '@/components/Control.vue'
import Menu from '@/components/Menu.vue'
import MenuPortal from '@/components/MenuPortal.vue'
import type { TreeselectProps } from '@/types'

// ============================================================================
// Props
// ============================================================================

const props = withDefaults(defineProps<TreeselectProps>(), {
  allowClearingDisabled: false,
  allowSelectingDisabledDescendants: false,
  alwaysOpen: false,
  appendToBody: false,
  async: false,
  autoFocus: false,
  autoLoadRootOptions: true,
  autoSelectAncestors: false,
  autoSelectDescendants: false,
  autoDeselectAncestors: false,
  autoDeselectDescendants: false,
  backspaceRemoves: true,
  beforeClearAll: () => true,
  branchNodesFirst: false,
  cacheOptions: true,
  clearable: true,
  clearAllText: 'Clear all',
  clearOnSelect: false,
  clearValueText: 'Clear value',
  closeOnSelect: true,
  defaultExpandLevel: 0,
  deleteRemoves: true,
  delimiter: ',',
  flattenSearchResults: false,
  disableBranchNodes: false,
  disableFuzzyMatching: false,
  disabled: false,
  flat: false,
  instanceId: undefined,
  joinValues: false,
  limit: Infinity,
  limitText: (count: number) => `and ${count} more`,
  loading: false,
  loadingText: 'Loading...',
  matchKeys: () => ['label'],
  maxHeight: 300,
  multiple: false,
  name: undefined,
  noChildrenText: 'No sub-options.',
  noOptionsText: 'No options available.',
  noResultsText: 'No results found...',
  normalizer: (node: any) => node,
  openDirection: 'auto',
  openOnClick: true,
  openOnFocus: false,
  options: undefined,
  placeholder: 'Select...',
  required: false,
  retryText: 'Retry?',
  retryTitle: 'Click to retry',
  searchable: true,
  searchNested: false,
  searchPromptText: 'Type to search...',
  showCount: false,
  showCountOf: 'ALL_CHILDREN',
  showCountOnSearch: undefined,
  sortValueBy: 'ORDER_SELECTED',
  tabIndex: 0,
  valueConsistsOf: 'BRANCH_PRIORITY',
  valueFormat: 'id',
  zIndex: 999,
})

// ============================================================================
// Emits
// ============================================================================

const emit = defineEmits<{
  'update:modelValue': [value: any, instanceId: string | number]
  'select': [node: any, instanceId: string | number]
  'deselect': [node: any, instanceId: string | number]
  'open': [instanceId: string | number]
  'close': [value: any, instanceId: string | number]
  'search-change': [searchQuery: string, instanceId: string | number]
}>()

// ============================================================================
// Template refs
// ============================================================================

const wrapper = ref<HTMLElement>()
const control = ref<InstanceType<typeof Control>>()
const menu = ref<InstanceType<typeof Menu>>()
const portal = ref<InstanceType<typeof MenuPortal>>()

// ============================================================================
// Instance ID
// ============================================================================

const instanceId = computed({
  get: () => props.instanceId ?? `vue-treeselect-${Math.random().toString(36).slice(2, 11)}`,
  set: () => {
    // Read-only, set does nothing
  }
})

// ============================================================================
// Helper functions for getting DOM elements
// ============================================================================

const getMenuElement = (): HTMLElement | null => {
  const ref = props.appendToBody ? portal : menu
  const $menu = ref.value?.$refs?.menu || (ref.value?.$refs?.['menu-container'] as HTMLElement | undefined)?.querySelector('.vue-treeselect__menu')
  return $menu && ($menu as any).nodeName !== '#comment' ? ($menu as HTMLElement) : null
}

const getValueContainer = (): any => {
  return control.value?.$refs?.['value-container']
}

const getInput = (): any => {
  const container = getValueContainer()
  return container?.$refs?.input
}

const focusInput = () => {
  getInput()?.focus()
}

const blurInput = () => {
  getInput()?.blur()
}

// ============================================================================
// Click outside handler
// ============================================================================

const toggleClickOutsideEvent = (enabled: boolean): void => {
  if (enabled) {
    document.addEventListener('mousedown', handleClickOutside, false)
  } else {
    document.removeEventListener('mousedown', handleClickOutside, false)
  }
}

const handleClickOutside = (evt: MouseEvent): void => {
  if (wrapper.value && !wrapper.value.contains(evt.target as Node)) {
    blurInput()
    treeselect.closeMenu()
  }
}

// ============================================================================
// Mouse down handler
// ============================================================================

const handleMouseDown = onLeftClick(function (evt: MouseEvent) {
  evt.preventDefault()
  evt.stopPropagation()

  if (props.disabled) return

  const $valueContainer = getValueContainer()
  const isClickedOnValueContainer = $valueContainer?.$el?.contains(evt.target as Node)

  if (isClickedOnValueContainer && !treeselect.menu.value.isOpen && (props.openOnClick || treeselect.trigger.isFocused)) {
    treeselect.openMenu()
  }

  const blurOnSelectFlag = treeselect.resetFlags ? treeselect.resetFlags() : false
  if (blurOnSelectFlag) {
    blurInput()
  } else {
    // Focus the input or prevent blurring
    focusInput()
  }

  if (treeselect.resetFlags) {
    treeselect.resetFlags()
  }
})

// ============================================================================
// Initialize useTreeselect composable
// ============================================================================

const treeselect = useTreeselect(
  props,
  emit,
  instanceId,
  getMenuElement,
  toggleClickOutsideEvent
)

// ============================================================================
// Provide treeselect instance to child components
// ============================================================================

provide('treeselect', treeselect)
provide('instance', {
  getInput,
  focusInput,
  blurInput,
  getValueContainer,
  handleMouseDown,
})

// ============================================================================
// Computed
// ============================================================================

const wrapperClass = computed(() => ({
  'vue-treeselect': true,
  'vue-treeselect--single': treeselect.single.value,
  'vue-treeselect--multi': props.multiple,
  'vue-treeselect--searchable': props.searchable,
  'vue-treeselect--disabled': props.disabled,
  'vue-treeselect--focused': treeselect.trigger.isFocused,
  'vue-treeselect--has-value': treeselect.hasValue.value,
  'vue-treeselect--open': treeselect.menu.value.isOpen,
  'vue-treeselect--open-above': treeselect.menu.value.placement === 'top',
  'vue-treeselect--open-below': treeselect.menu.value.placement === 'bottom',
  'vue-treeselect--branch-nodes-disabled': props.disableBranchNodes,
  'vue-treeselect--append-to-body': props.appendToBody,
}))

// ============================================================================
// Expose public API
// ============================================================================

defineExpose({
  // Node methods
  getNode: treeselect.getNode,

  // Traversal
  traverseAllNodesDFS: treeselect.traverseAllNodesDFS,
  traverseAllNodesByIndex: treeselect.traverseAllNodesByIndex,

  // Menu
  openMenu: treeselect.openMenu,
  closeMenu: treeselect.closeMenu,
  toggleMenu: treeselect.toggleMenu,

  // Selection
  select: treeselect.select,
  clear: treeselect.clear,

  // Value
  getValue: treeselect.getValue,

  // Focus
  focusInput,
  blurInput,
})
</script>
