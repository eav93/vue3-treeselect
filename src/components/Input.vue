<template>
  <div
    v-if="searchable"
    class="vue-treeselect__input-container"
  >
    <template v-if="!disabled">
      <input
        ref="inputRef"
        class="vue-treeselect__input"
        type="text"
        autocomplete="off"
        :tabindex="props.tabIndex"
        :required="props.required && !treeselect.hasValue.value"
        :value="value"
        :style="inputStyle"
        @focus="onFocus"
        @input="onInput"
        @compositionstart="onCompositionStart"
        @compositionend="onCompositionEnd"
        @blur="onBlur"
        @keydown="onKeyDown"
        @mousedown="onMouseDown"
      />
      <div
        v-if="needAutoSize"
        ref="sizerRef"
        class="vue-treeselect__sizer"
      >
        {{ value }}
      </div>
    </template>
  </div>
  <div
    v-else
    ref="inputRef"
    class="vue-treeselect__input-container"
    :tabindex="!disabled ? props.tabIndex : undefined"
    @focus="onFocus"
    @blur="onBlur"
    @keydown="onKeyDown"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'
import { debounce } from '@/utils'
import { useTreeselectContext } from '@/context'
import { MIN_INPUT_WIDTH, KEYS, INPUT_DEBOUNCE_DELAY } from '@/constants'

const treeselect = useTreeselectContext()
const props = treeselect.props

// ============================================================================
// Refs
// ============================================================================

const inputRef = ref<HTMLElement | null>(null)
const sizerRef = ref<HTMLDivElement>()
const inputWidth = ref(MIN_INPUT_WIDTH)
const value = ref(treeselect.trigger.searchQuery)
let isComposing = false

// Register the focusable element with the root component
watch(inputRef, (el, prevEl) => {
  if (el) {
    treeselect.setInputElement(el)
  } else if (prevEl && treeselect.getInput() === prevEl) {
    treeselect.setInputElement(null)
  }
}, { flush: 'sync' })

// ============================================================================
// Computed
// ============================================================================

const searchable = computed(() => props.searchable)
const disabled = computed(() => props.disabled)

const needAutoSize = computed(() => {
  return searchable.value && !disabled.value && props.multiple
})

const inputStyle = computed(() => ({
  width: needAutoSize.value ? `${inputWidth.value}px` : undefined,
}))

// ============================================================================
// Keyboard navigation helpers
// ============================================================================

const keysThatRequireMenuBeingOpen: string[] = [
  KEYS.ENTER,
  KEYS.END,
  KEYS.HOME,
  KEYS.ARROW_LEFT,
  KEYS.ARROW_UP,
  KEYS.ARROW_RIGHT,
  KEYS.ARROW_DOWN,
]

const keysThatMoveTheCaret: string[] = [
  KEYS.HOME,
  KEYS.END,
  KEYS.ARROW_LEFT,
  KEYS.ARROW_RIGHT,
]

// ============================================================================
// Methods
// ============================================================================

const updateInputWidth = (): void => {
  if (sizerRef.value) {
    inputWidth.value = Math.max(
      MIN_INPUT_WIDTH,
      sizerRef.value.scrollWidth + 15
    )
  }
}

const updateSearchQuery = (): void => {
  treeselect.trigger.searchQuery = value.value
}

const clear = (): void => {
  value.value = ''
  debouncedCallback.cancel()
  updateSearchQuery()
}

const focus = (): void => {
  if (!disabled.value && inputRef.value) {
    inputRef.value.focus()
  }
}

const blur = (): void => {
  inputRef.value?.blur()
}

// ============================================================================
// Event handlers
// ============================================================================

const onFocus = (): void => {
  treeselect.trigger.isFocused = true
  if (props.openOnFocus) {
    treeselect.openMenu()
  }
}

const onBlur = (evt: FocusEvent): void => {
  const menu = treeselect.getMenu()

  // Prevent blur if a menu has focus
  if (menu && document.activeElement === menu) {
    return focus()
  }

  // The focus moved to a form control in the menu (e.g. in the `before-list` slot):
  // keep the menu open, it's closed by a click outside
  const nextFocused = evt.relatedTarget as Node | null
  if (menu && nextFocused && menu.contains(nextFocused)) {
    treeselect.trigger.isFocused = false
    return
  }

  treeselect.trigger.isFocused = false
  treeselect.closeMenu()
}

const debouncedCallback = debounce(
  updateSearchQuery,
  props.searchDebounceDelay ?? INPUT_DEBOUNCE_DELAY,
  { leading: true, trailing: true }
)

const handleValueChange = (): void => {
  if (value.value) {
    debouncedCallback()
  } else {
    debouncedCallback.cancel()
    updateSearchQuery()
  }
}

const onInput = (evt: Event): void => {
  value.value = (evt.target as HTMLInputElement).value
  // Don't search with incomplete IME input (Chinese, Japanese, Korean...)
  if (isComposing) return
  handleValueChange()
}

const onCompositionStart = (): void => {
  isComposing = true
}

const onCompositionEnd = (evt: CompositionEvent): void => {
  isComposing = false
  value.value = (evt.target as HTMLInputElement).value
  handleValueChange()
}

const onKeyDown = (evt: KeyboardEvent): void => {
  const key = evt.key

  if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey || isComposing) {
    return
  }

  // With text in the search input these keys move the caret
  if (value.value.length && keysThatMoveTheCaret.includes(key) && treeselect.menu.isOpen) {
    return
  }

  if (!treeselect.menu.isOpen && keysThatRequireMenuBeingOpen.includes(key)) {
    evt.preventDefault()
    return treeselect.openMenu()
  }

  switch (key) {
    case KEYS.BACKSPACE: {
      if (props.backspaceRemoves && !value.value.length) {
        treeselect.removeLastValue()
      }
      break
    }
    case KEYS.ENTER: {
      evt.preventDefault()
      if (treeselect.menu.current === null) return
      const current = treeselect.getNode(treeselect.menu.current)
      if (!current) return
      // The highlighted option may be hidden by the current search
      if (!treeselect.shouldShowOptionInMenu(current)) return
      if (current.isBranch && props.disableBranchNodes) return
      treeselect.select(current)
      break
    }
    case KEYS.ESCAPE: {
      if (value.value.length) {
        clear()
      } else if (treeselect.menu.isOpen) {
        treeselect.closeMenu()
      }
      break
    }
    case KEYS.END: {
      evt.preventDefault()
      treeselect.highlightLastOption()
      break
    }
    case KEYS.HOME: {
      evt.preventDefault()
      treeselect.highlightFirstOption()
      break
    }
    case KEYS.ARROW_LEFT: {
      const currentId = treeselect.menu.current
      if (currentId === null) break
      const current = treeselect.getNode(currentId)
      if (current) {
        if (current.isBranch && treeselect.shouldExpand(current)) {
          evt.preventDefault()
          treeselect.toggleExpanded(current)
        } else if (!current.isRootNode && current.parentNode) {
          evt.preventDefault()
          treeselect.setCurrentHighlightedOption(current.parentNode)
        }
      }
      break
    }
    case KEYS.ARROW_UP: {
      evt.preventDefault()
      treeselect.highlightPrevOption()
      break
    }
    case KEYS.ARROW_RIGHT: {
      const currentId = treeselect.menu.current
      if (currentId === null) break
      const current = treeselect.getNode(currentId)
      if (current && current.isBranch && !treeselect.shouldExpand(current)) {
        evt.preventDefault()
        treeselect.toggleExpanded(current)
      }
      break
    }
    case KEYS.ARROW_DOWN: {
      evt.preventDefault()
      treeselect.highlightNextOption()
      break
    }
    case KEYS.DELETE: {
      if (props.deleteRemoves && !value.value.length) {
        treeselect.removeLastValue()
      }
      break
    }
    default: {
      treeselect.openMenu()
    }
  }
}

const onMouseDown = (evt: MouseEvent): void => {
  if (value.value.length) {
    // Prevent bubbling to prevent triggering preventDefault
    evt.stopPropagation()
  }
}

// ============================================================================
// Watchers & lifecycle
// ============================================================================

watch(() => treeselect.trigger.searchQuery, (newValue: string) => {
  value.value = newValue
})

watch(value, () => {
  if (needAutoSize.value) {
    void nextTick(updateInputWidth)
  }
})

onBeforeUnmount(() => {
  debouncedCallback.cancel()
  if (inputRef.value && treeselect.getInput() === inputRef.value) {
    treeselect.setInputElement(null)
  }
})

defineExpose({
  clear,
  focus,
  blur,
})
</script>
