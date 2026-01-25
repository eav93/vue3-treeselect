<template>
  <div
    v-if="searchable && !disabled"
    class="vue-treeselect__input-container"
  >
    <input
      ref="inputRef"
      class="vue-treeselect__input"
      type="text"
      autocomplete="off"
      :tabindex="tabIndex"
      :required="required && !hasValue"
      v-model="value"
      :style="inputStyle"
      @focus="onFocus"
      @input="onInput"
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
  </div>
  <div
    v-else
    ref="inputRef"
    class="vue-treeselect__input-container"
    :tabindex="!disabled ? tabIndex : undefined"
    @focus="onFocus"
    @blur="onBlur"
    @keydown="onKeyDown"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch, inject, nextTick } from 'vue'
import { debounce, includes } from '@/utils'
import { MIN_INPUT_WIDTH, KEY_CODES, INPUT_DEBOUNCE_DELAY } from '@/constants'

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<any>('treeselect')!

// ============================================================================
// Refs
// ============================================================================

const inputRef = ref<HTMLInputElement>()
const sizerRef = ref<HTMLDivElement>()
const inputWidth = ref(MIN_INPUT_WIDTH)
const value = ref('')

// ============================================================================
// Computed
// ============================================================================

const searchable = computed(() => treeselect.searchable)
const disabled = computed(() => treeselect.disabled)
const multiple = computed(() => treeselect.multiple)
const tabIndex = computed(() => treeselect.tabIndex)
const required = computed(() => treeselect.required)
const hasValue = computed(() => treeselect.hasValue.value)

const needAutoSize = computed(() => {
  return searchable.value && !disabled.value && multiple.value
})

const inputStyle = computed(() => ({
  width: needAutoSize.value ? `${inputWidth.value}px` : undefined,
}))

// ============================================================================
// Keyboard navigation helpers
// ============================================================================

const keysThatRequireMenuBeingOpen = [
  KEY_CODES.ENTER,
  KEY_CODES.END,
  KEY_CODES.HOME,
  KEY_CODES.ARROW_LEFT,
  KEY_CODES.ARROW_UP,
  KEY_CODES.ARROW_RIGHT,
  KEY_CODES.ARROW_DOWN,
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
  updateSearchQuery()
}

const focus = (): void => {
  if (!disabled.value && inputRef.value) {
    inputRef.value.focus()
  }
}

const blur = (): void => {
  if (inputRef.value) {
    inputRef.value.blur()
  }
}

// ============================================================================
// Event handlers
// ============================================================================

const onFocus = (): void => {
  treeselect.trigger.isFocused = true
  if (treeselect.openOnFocus) {
    treeselect.openMenu()
  }
}

const onBlur = (): void => {
  const menu = treeselect.getMenu?.()

  // Prevent blur if menu has focus
  if (menu && document.activeElement === menu) {
    return focus()
  }

  treeselect.trigger.isFocused = false
  treeselect.closeMenu()
}

const debouncedCallback = debounce(
  updateSearchQuery,
  INPUT_DEBOUNCE_DELAY,
  { leading: true, trailing: true }
)

const onInput = (): void => {
  if (value.value) {
    debouncedCallback()
  } else {
    debouncedCallback.cancel()
    updateSearchQuery()
  }
}

const onKeyDown = (evt: KeyboardEvent): void => {
  const key = evt.which || evt.keyCode

  if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) {
    return
  }

  if (!treeselect.menu.isOpen && includes(keysThatRequireMenuBeingOpen, key)) {
    evt.preventDefault()
    return treeselect.openMenu()
  }

  switch (key) {
    case KEY_CODES.BACKSPACE: {
      if (treeselect.backspaceRemoves && !value.value.length) {
        treeselect.removeLastValue()
      }
      break
    }
    case KEY_CODES.ENTER: {
      evt.preventDefault()
      if (treeselect.menu.current === null) return
      const current = treeselect.getNode(treeselect.menu.current)
      if (!current) return
      if (current.isBranch && treeselect.disableBranchNodes) return
      treeselect.select(current)
      break
    }
    case KEY_CODES.ESCAPE: {
      if (value.value.length) {
        clear()
      } else if (treeselect.menu.isOpen) {
        treeselect.closeMenu()
      }
      break
    }
    case KEY_CODES.END: {
      evt.preventDefault()
      treeselect.highlightLastOption()
      break
    }
    case KEY_CODES.HOME: {
      evt.preventDefault()
      treeselect.highlightFirstOption()
      break
    }
    case KEY_CODES.ARROW_LEFT: {
      const current = treeselect.getNode(treeselect.menu.current)
      if (current) {
        if (current.isBranch && treeselect.shouldExpand(current)) {
          evt.preventDefault()
          treeselect.toggleExpanded(current)
        } else if (
          !current.isRootNode &&
          (current.isLeaf || (current.isBranch && !treeselect.shouldExpand(current)))
        ) {
          evt.preventDefault()
          treeselect.setCurrentHighlightedOption(current.parentNode)
        }
      }
      break
    }
    case KEY_CODES.ARROW_UP: {
      evt.preventDefault()
      treeselect.highlightPrevOption()
      break
    }
    case KEY_CODES.ARROW_RIGHT: {
      const current = treeselect.getNode(treeselect.menu.current)
      if (current) {
        if (current.isBranch && !treeselect.shouldExpand(current)) {
          evt.preventDefault()
          treeselect.toggleExpanded(current)
        }
      }
      break
    }
    case KEY_CODES.ARROW_DOWN: {
      evt.preventDefault()
      treeselect.highlightNextOption()
      break
    }
    case KEY_CODES.DELETE: {
      if (treeselect.deleteRemoves && !value.value.length) {
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
// Watchers
// ============================================================================

watch(() => treeselect.trigger.searchQuery, (newValue: string) => {
  value.value = newValue
})

watch(value, () => {
  if (needAutoSize.value) {
    nextTick(updateInputWidth)
  }
})

// ============================================================================
// Expose methods for parent
// ============================================================================

defineExpose({
  clear,
  focus,
  blur,
})
</script>
