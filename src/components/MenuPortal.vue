<template>
  <Teleport to="body">
    <div
      ref="portalRef"
      :class="['vue-treeselect__portal-target', treeselect.wrapperClass.value]"
      :style="{ zIndex: props.zIndex }"
      :data-instance-id="treeselect.getInstanceId()"
      :dir="direction"
    >
      <Menu ref="menuRef" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { watchSize, setupResizeAndScrollEventListeners } from '@/utils'
import { useTreeselectContext } from '@/context'
import Menu from '@/components/Menu.vue'

const treeselect = useTreeselectContext()
const props = treeselect.props

const portalRef = ref<HTMLElement | null>(null)
// The menu is outside of the component, so it doesn't inherit `dir` from its ancestors (#495)
const direction = ref<string | undefined>(undefined)

const updateDirection = (): void => {
  const $control = treeselect.getControl()
  if (!$control) return
  // An explicit `dir` attribute first, then the computed CSS direction
  direction.value = $control.closest('[dir]')?.getAttribute('dir') || getComputedStyle($control).direction || undefined
}
const menuRef = ref<InstanceType<typeof Menu> | null>(null)

let controlResizeAndScrollEventListeners: { remove: () => void } | null = null
let controlSizeWatcher: { remove: () => void } | null = null

const updateWidth = (): void => {
  const $portal = portalRef.value
  const $control = treeselect.getControl()
  if (!$portal || !$control) return

  $portal.style.width = $control.getBoundingClientRect().width + 'px'
}

const updateMenuContainerOffset = (): void => {
  const $portal = portalRef.value
  const $control = treeselect.getControl()
  const $menuContainer = menuRef.value?.menuContainerElement
  if (!$portal || !$control || !$menuContainer) return

  const controlRect = $control.getBoundingClientRect()
  const portalTargetRect = $portal.getBoundingClientRect()
  const offsetY = treeselect.menu.placement === 'bottom' ? controlRect.height : 0
  const left = Math.round(controlRect.left - portalTargetRect.left) + 'px'
  const top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px'

  $menuContainer.style.transform = `translate(${left}, ${top})`
}

const setupHandlers = (): void => {
  updateDirection()
  updateWidth()
  updateMenuContainerOffset()

  const $control = treeselect.getControl()
  if (!$control) return

  if (!controlResizeAndScrollEventListeners) {
    controlResizeAndScrollEventListeners = {
      remove: setupResizeAndScrollEventListeners($control, updateMenuContainerOffset),
    }
  }
  if (!controlSizeWatcher) {
    controlSizeWatcher = {
      remove: watchSize($control, () => {
        updateWidth()
        updateMenuContainerOffset()
      }),
    }
  }
}

const removeHandlers = (): void => {
  controlResizeAndScrollEventListeners?.remove()
  controlResizeAndScrollEventListeners = null
  controlSizeWatcher?.remove()
  controlSizeWatcher = null
}

// Listeners are only attached while the menu is open
watch(() => treeselect.menu.isOpen, (isOpen) => {
  if (isOpen) {
    void nextTick(setupHandlers)
  } else {
    removeHandlers()
  }
})

watch(() => treeselect.menu.placement, updateMenuContainerOffset)

onMounted(() => {
  updateDirection()
  if (treeselect.menu.isOpen) void nextTick(setupHandlers)
})

onBeforeUnmount(removeHandlers)
</script>
