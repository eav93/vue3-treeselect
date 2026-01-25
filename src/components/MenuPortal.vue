<template>
  <div class="vue-treeselect__menu-placeholder" />
</template>

<script setup lang="ts">
import { createApp, onMounted, onUnmounted, inject, watch, nextTick, ref, computed } from 'vue'
import { watchSize, setupResizeAndScrollEventListeners, find } from '@/utils'
import Menu from '@/components/Menu.vue'
import type { TreeselectInstance } from '@/types'
import type { App } from 'vue'

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<TreeselectInstance>('treeselect')!

// ============================================================================
// Portal Target Component (will be mounted to body)
// ============================================================================

const PortalTarget = {
  name: 'vue-treeselect--portal-target',

  setup() {
    const menuRef = ref()
    let controlResizeAndScrollEventListeners: { remove: () => void } | null = null
    let controlSizeWatcher: { remove: () => void } | null = null

    const portalTargetClass = computed(() => [
      'vue-treeselect__portal-target',
      treeselect.wrapperClass,
    ])

    const portalTargetStyle = computed(() => ({
      zIndex: treeselect.zIndex,
    }))

    const updateWidth = (el: HTMLElement): void => {
      const $control = treeselect.getControl()
      if (!$control) return

      const controlRect = $control.getBoundingClientRect()
      el.style.width = controlRect.width + 'px'
    }

    const updateMenuContainerOffset = (el: HTMLElement): void => {
      const $control = treeselect.getControl()
      if (!$control || !menuRef.value) return

      const $menuContainer = menuRef.value.$refs?.['menu-container']
      if (!$menuContainer) return

      const controlRect = $control.getBoundingClientRect()
      const portalTargetRect = el.getBoundingClientRect()
      const offsetY = treeselect.menu.placement === 'bottom' ? controlRect.height : 0
      const left = Math.round(controlRect.left - portalTargetRect.left) + 'px'
      const top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px'
      const menuContainerStyle = $menuContainer.style
      const transformVariations = ['transform', 'webkitTransform', 'MozTransform', 'msTransform']
      const transform = find(transformVariations, (t: string) => t in document.body.style)

      if (menuContainerStyle && transform) {
        menuContainerStyle[transform as any] = `translate(${left}, ${top})`
      }
    }

    const setupControlResizeAndScrollEventListeners = (el: HTMLElement): void => {
      const $control = treeselect.getControl()
      if (controlResizeAndScrollEventListeners || !$control) return

      controlResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, () => updateMenuContainerOffset(el)),
      }
    }

    const setupControlSizeWatcher = (el: HTMLElement): void => {
      const $control = treeselect.getControl()
      if (controlSizeWatcher || !$control) return

      controlSizeWatcher = {
        remove: watchSize($control, () => {
          updateWidth(el)
          updateMenuContainerOffset(el)
        }),
      }
    }

    const removeControlResizeAndScrollEventListeners = (): void => {
      if (!controlResizeAndScrollEventListeners) return
      controlResizeAndScrollEventListeners.remove()
      controlResizeAndScrollEventListeners = null
    }

    const removeControlSizeWatcher = (): void => {
      if (!controlSizeWatcher) return
      controlSizeWatcher.remove()
      controlSizeWatcher = null
    }

    const setupHandlers = (el: HTMLElement): void => {
      updateWidth(el)
      updateMenuContainerOffset(el)
      setupControlResizeAndScrollEventListeners(el)
      setupControlSizeWatcher(el)
    }

    const removeHandlers = (): void => {
      removeControlResizeAndScrollEventListeners()
      removeControlSizeWatcher()
    }

    return {
      menuRef,
      portalTargetClass,
      portalTargetStyle,
      setupHandlers,
      removeHandlers,
      updateMenuContainerOffset,
    }
  },

  template: `
    <div :class="portalTargetClass" :style="portalTargetStyle" :data-instance-id="treeselect.getInstanceId()">
      <Menu ref="menuRef" />
    </div>
  `,
}

// ============================================================================
// MenuPortal Component
// ============================================================================

let portalTarget: App | null = null
let portalElement: HTMLElement | null = null

const setup = (): void => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  portalElement = el

  portalTarget = createApp({
    ...PortalTarget,
    setup() {
      const result = PortalTarget.setup()

      watch(
        () => treeselect.menu.isOpen,
        (newValue) => {
          if (newValue) {
            nextTick(() => result.setupHandlers(el))
          } else {
            result.removeHandlers()
          }
        }
      )

      watch(
        () => treeselect.menu.placement,
        () => {
          result.updateMenuContainerOffset(el)
        }
      )

      onMounted(() => {
        if (treeselect.menu.isOpen) {
          nextTick(() => result.setupHandlers(el))
        }
      })

      onUnmounted(() => {
        result.removeHandlers()
      })

      return result
    },
  })

  portalTarget.provide('treeselect', treeselect)
  portalTarget.mount(el)
}

const teardown = (): void => {
  if (portalTarget && portalElement) {
    portalElement.parentNode?.removeChild(portalElement)
    portalElement.innerHTML = ''
    portalTarget.unmount()
    portalTarget = null
    portalElement = null
  }
}

onMounted(() => {
  setup()
})

onUnmounted(() => {
  teardown()
})
</script>
