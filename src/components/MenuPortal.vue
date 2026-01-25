<template>
  <div class="vue-treeselect__menu-placeholder" />
</template>

<script setup lang="ts">
import { createApp, onMounted, onUnmounted, inject, watch, nextTick, h, defineComponent } from 'vue'
import { watchSize, setupResizeAndScrollEventListeners, find } from '@/utils'
import Menu from '@/components/Menu.vue'
import type { TreeselectInstance } from '@/types'
import type { App as VueApp } from 'vue'

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<TreeselectInstance>('treeselect')!
const instance = inject<any>('instance')!

// ============================================================================
// Portal Target Component (modern Composition API)
// ============================================================================

const createPortalTargetComponent = (treeselectInstance: TreeselectInstance) => {
  return defineComponent({
    name: 'vue-treeselect--portal-target',

    setup() {
      let controlResizeAndScrollEventListeners: { remove: () => void } | null = null
      let controlSizeWatcher: { remove: () => void } | null = null
      let portalElement: HTMLElement | null = null

      // Inject menu element getter provided by parent
      const getMenuElement = inject<() => HTMLElement | null>('menuElementInPortal')!

      const updateWidth = (): void => {
        if (!portalElement) return
        const $control = treeselectInstance.getControl()
        if (!$control) return

        const controlRect = $control.getBoundingClientRect()
        portalElement.style.width = controlRect.width + 'px'
      }

      const updateMenuContainerOffset = (): void => {
        const menuElement = getMenuElement()
        if (!portalElement || !menuElement) return
        const $control = treeselectInstance.getControl()
        if (!$control) return

        const menuContainer = menuElement.parentElement as HTMLElement
        if (!menuContainer) return

        const controlRect = $control.getBoundingClientRect()
        const portalTargetRect = portalElement.getBoundingClientRect()
        const offsetY = treeselectInstance.menu.value.placement === 'bottom' ? controlRect.height : 0
        const left = Math.round(controlRect.left - portalTargetRect.left) + 'px'
        const top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px'
        const transformVariations = ['transform', 'webkitTransform', 'MozTransform', 'msTransform']
        const transform = find(transformVariations, (t: string) => t in document.body.style)

        if (transform) {
          (menuContainer.style as any)[transform] = `translate(${left}, ${top})`
        }
      }

      const setupControlResizeAndScrollEventListeners = (): void => {
        const $control = treeselectInstance.getControl()
        if (controlResizeAndScrollEventListeners || !$control) return

        controlResizeAndScrollEventListeners = {
          remove: setupResizeAndScrollEventListeners($control, updateMenuContainerOffset),
        }
      }

      const setupControlSizeWatcher = (): void => {
        const $control = treeselectInstance.getControl()
        if (controlSizeWatcher || !$control) return

        controlSizeWatcher = {
          remove: watchSize($control, () => {
            updateWidth()
            updateMenuContainerOffset()
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

      const setupHandlers = (): void => {
        updateWidth()
        updateMenuContainerOffset()
        setupControlResizeAndScrollEventListeners()
        setupControlSizeWatcher()
      }

      const removeHandlers = (): void => {
        removeControlResizeAndScrollEventListeners()
        removeControlSizeWatcher()
      }

      // Watchers
      watch(
        () => treeselectInstance.menu.value.isOpen,
        (newValue) => {
          if (newValue) {
            void nextTick(setupHandlers)
          } else {
            removeHandlers()
          }
        }
      )

      watch(
        () => treeselectInstance.menu.value.placement,
        () => {
          updateMenuContainerOffset()
        }
      )

      // Lifecycle
      onMounted(() => {
        portalElement = document.body.lastElementChild as HTMLElement
        if (treeselectInstance.menu.value.isOpen) {
          void nextTick(setupHandlers)
        }
      })

      onUnmounted(() => {
        removeHandlers()
      })

      return () => h('div', {
        class: ['vue-treeselect__portal-target', treeselectInstance.wrapperClass],
        style: { zIndex: treeselectInstance.zIndex },
        'data-instance-id': treeselectInstance.getInstanceId(),
      }, [
        h(Menu)
      ])
    }
  })
}

// ============================================================================
// MenuPortal Component
// ============================================================================

let portalApp: VueApp | null = null
let portalElement: HTMLElement | null = null
let menuElementInPortal: HTMLElement | null = null

const setupPortal = (): void => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  portalElement = el

  const PortalTargetComponent = createPortalTargetComponent(treeselect)

  portalApp = createApp(PortalTargetComponent)
  portalApp.provide('treeselect', treeselect)
  portalApp.provide('instance', instance)

  // Register callback to receive menu element from Menu component
  portalApp.provide('registerMenuElement', (el: HTMLElement) => {
    menuElementInPortal = el
  })

  // Provide reactive access to menu element for PortalTargetComponent
  portalApp.provide('menuElementInPortal', () => menuElementInPortal)

  portalApp.mount(el)
}

const teardownPortal = (): void => {
  if (portalApp && portalElement) {
    portalElement.parentNode?.removeChild(portalElement)
    portalApp.unmount()
    portalApp = null
    portalElement = null
    menuElementInPortal = null
  }
}

// ============================================================================
// Expose methods for parent component
// ============================================================================

const getMenuInPortal = (): HTMLElement | null => {
  return menuElementInPortal
}

defineExpose({
  getMenuInPortal,
})

onMounted(() => {
  setupPortal()
})

onUnmounted(() => {
  teardownPortal()
})
</script>
