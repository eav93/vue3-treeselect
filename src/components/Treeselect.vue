<template>
  <div ref="wrapper" :class="wrapperClass">
    <HiddenFields />
    <Control />
    <!-- Teleported after mount only: nothing to hydrate on the client (SSR) -->
    <MenuPortal v-if="appendToBody && isMounted" />
    <Menu v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, shallowRef, useId, useSlots } from 'vue'
import { onLeftClick } from '@/utils'
import { useTreeselect } from '@/composables/useTreeselect'
import { TREESELECT_CONTEXT } from '@/context'
import type { TreeselectContext } from '@/context'
import HiddenFields from '@/components/HiddenFields.vue'
import Control from '@/components/Control.vue'
import Menu from '@/components/Menu.vue'
import MenuPortal from '@/components/MenuPortal.vue'
import type { NodeId, NormalizedNode, TreeselectProps } from '@/types'

defineOptions({ name: 'vue-treeselect' })

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
  defaultOptions: false,
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
  searchDebounceDelay: undefined,
  showCount: false,
  showCountOf: 'ALL_CHILDREN',
  showCountOnSearch: undefined,
  sortValueBy: 'ORDER_SELECTED',
  tabIndex: 0,
  valueConsistsOf: 'BRANCH_PRIORITY',
  valueFormat: 'id',
  zIndex: 999,
  virtualScroll: false,
  optionHeight: undefined,
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

defineSlots<{
  /** Label of an option in the menu */
  'option-label'?: (scope: {
    node: NormalizedNode
    shouldShowCount: boolean
    count: number
    labelClassName: string
    countClassName: string
  }) => any
  /** Label of a selected value */
  'value-label'?: (scope: { node: NormalizedNode }) => any
  /** Content above the options */
  'before-list'?: () => any
  /** Content below the options */
  'after-list'?: () => any
}>()

const slots = useSlots()

// ============================================================================
// Elements
// ============================================================================

const wrapper = ref<HTMLElement>()
// Registered by child components (the menu may be teleported to <body>)
const inputElement = shallowRef<HTMLElement | null>(null)
const menuElement = shallowRef<HTMLElement | null>(null)
const valueContainerElement = shallowRef<HTMLElement | null>(null)
const controlElement = shallowRef<HTMLElement | null>(null)

// useId() is stable between server and client rendering
const defaultInstanceId = `${useId()}$$`

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
const getInstanceId = (): NodeId => props.instanceId ?? defaultInstanceId

const getMenuElement = (): HTMLElement | null => menuElement.value
const getControlElement = (): HTMLElement | null => controlElement.value
const getInput = (): HTMLElement | null => inputElement.value

const focusInput = (): void => {
  getInput()?.focus()
}

const blurInput = (): void => {
  getInput()?.blur()
}

// ============================================================================
// Click outside handler
// ============================================================================

const handleClickOutside = (evt: MouseEvent): void => {
  const target = evt.target as Node
  if (!wrapper.value || wrapper.value.contains(target)) return
  // The menu is outside of the wrapper in appendToBody mode
  if (getMenuElement()?.contains(target)) return

  blurInput()
  treeselect.closeMenu()
}

const toggleClickOutsideEvent = (enabled: boolean): void => {
  if (enabled) {
    document.addEventListener('mousedown', handleClickOutside, false)
  } else {
    document.removeEventListener('mousedown', handleClickOutside, false)
  }
}

// ============================================================================
// Initialize useTreeselect composable
// ============================================================================

const treeselect = useTreeselect(props, emit, {
  getInstanceId,
  getMenuElement,
  getControlElement,
  toggleClickOutsideEvent,
  focusInput,
})

// ============================================================================
// Mouse down handler (control and menu)
// ============================================================================

// Form controls rendered in slots (e.g. a filter input in `before-list`) must get the focus
const isFormControlInSlot = (target: Element): boolean =>
  !!target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])') &&
  !target.closest('.vue-treeselect__input, .vue-treeselect__input-container')

const handleMouseDown = onLeftClick(function (evt: MouseEvent) {
  const target = evt.target as Element
  if (isFormControlInSlot(target)) return

  // Keep the focus in the input. (No stopPropagation: parent elements may need the event, #454)
  evt.preventDefault()

  if (props.disabled) return

  const isClickedOnValueContainer = !!valueContainerElement.value?.contains(target)

  if (isClickedOnValueContainer) {
    if (!treeselect.menu.isOpen && (props.openOnClick || treeselect.trigger.isFocused)) {
      treeselect.openMenu()
    } else if (treeselect.menu.isOpen && !props.searchable) {
      // Without a search input, clicking the control toggles the menu (#497)
      treeselect.closeMenu()
    }
  }

  if (treeselect.resetFlags()) {
    blurInput()
  } else {
    // Focus the input or prevent blurring
    focusInput()
  }
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
  'vue-treeselect--open': treeselect.menu.isOpen,
  'vue-treeselect--open-above': treeselect.menu.placement === 'top',
  'vue-treeselect--open-below': treeselect.menu.placement === 'bottom',
  'vue-treeselect--branch-nodes-disabled': props.disableBranchNodes,
  'vue-treeselect--append-to-body': props.appendToBody,
}))

// ============================================================================
// Provide context to child components
// ============================================================================

const context: TreeselectContext = {
  ...treeselect,
  props,
  slots,
  wrapperClass,
  setInputElement: el => { inputElement.value = el },
  setMenuElement: el => { menuElement.value = el },
  setValueContainerElement: el => { valueContainerElement.value = el },
  setControlElement: el => { controlElement.value = el },
  getInput,
  focusInput,
  blurInput,
  handleMouseDown,
}

provide(TREESELECT_CONTEXT, context)

// ============================================================================
// Expose public API
// ============================================================================

defineExpose({
  // State
  forest: treeselect.forest,
  menu: treeselect.menu,
  trigger: treeselect.trigger,
  localSearch: treeselect.localSearch,
  selectedNodes: treeselect.selectedNodes,
  internalValue: treeselect.internalValue,

  // Node methods
  getNode: treeselect.getNode,
  isSelected: treeselect.isSelected,

  // Traversal
  traverseAllNodesDFS: treeselect.traverseAllNodesDFS,
  traverseAllNodesByIndex: treeselect.traverseAllNodesByIndex,
  traverseDescendantsBFS: treeselect.traverseDescendantsBFS,
  traverseDescendantsDFS: treeselect.traverseDescendantsDFS,

  // Menu
  openMenu: treeselect.openMenu,
  closeMenu: treeselect.closeMenu,
  toggleMenu: treeselect.toggleMenu,
  toggleExpanded: treeselect.toggleExpanded,
  getMenu: treeselect.getMenu,
  getControl: treeselect.getControl,

  // Selection
  select: treeselect.select,
  clear: treeselect.clear,
  removeLastValue: treeselect.removeLastValue,

  // Value
  getValue: treeselect.getValue,

  // Options
  initialize: treeselect.initialize,
  loadRootOptions: treeselect.loadRootOptions,

  // Focus
  focusInput,
  blurInput,
  getInput,
})
</script>
