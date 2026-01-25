<template>
  <div class="vue-treeselect__multi-value-item-container">
    <div :class="itemClass" @mousedown="handleMouseDown">
      <!-- Custom value label renderer -->
      <component
        v-if="customValueLabelRenderer"
        :is="customValueLabelRenderer"
        :node="node"
        class="vue-treeselect__multi-value-label"
      />
      <!-- Default label -->
      <span v-else class="vue-treeselect__multi-value-label">
        {{ node.label }}
      </span>
      <span class="vue-treeselect__icon vue-treeselect__value-remove">
        <DeleteIcon />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { onLeftClick } from '@/utils'
import DeleteIcon from '@/components/icons/Delete.vue'
import type { TreeselectInstance, NormalizedNode } from '@/types'

interface Props {
  node: NormalizedNode
}

const props = defineProps<Props>()

const treeselect = inject<TreeselectInstance>('treeselect')!

const itemClass = computed(() => ({
  'vue-treeselect__multi-value-item': true,
  'vue-treeselect__multi-value-item-disabled': props.node.isDisabled,
  'vue-treeselect__multi-value-item-new': props.node.isNew,
}))

const customValueLabelRenderer = computed(() => {
  return (treeselect as any).$slots?.['value-label']
})

const handleMouseDown = onLeftClick(function () {
  // Deselect this node
  treeselect.select(props.node)
})
</script>
