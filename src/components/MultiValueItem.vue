<template>
  <div class="vue-treeselect__multi-value-item-container">
    <div :class="itemClass" @mousedown="handleMouseDown">
      <span class="vue-treeselect__multi-value-label">
        <!-- Custom value label renderer -->
        <SlotRenderer v-if="treeselect.slots['value-label']" :render-slot="treeselect.slots['value-label']" :scope="{ node }" />
        <!-- Default label -->
        <template v-else>{{ node.label }}</template>
      </span>
      <span class="vue-treeselect__icon vue-treeselect__value-remove">
        <DeleteIcon />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { onLeftClick } from '@/utils'
import { useTreeselectContext } from '@/context'
import SlotRenderer from '@/components/SlotRenderer'
import DeleteIcon from '@/components/icons/Delete.vue'
import type { NormalizedNode } from '@/types'

const props = defineProps<{
  node: NormalizedNode
}>()

const treeselect = useTreeselectContext()

const itemClass = computed(() => ({
  'vue-treeselect__multi-value-item': true,
  'vue-treeselect__multi-value-item-disabled': props.node.isDisabled,
  'vue-treeselect__multi-value-item-new': props.node.isNew,
}))

const handleMouseDown = onLeftClick(function () {
  // Deselect this node
  treeselect.select(props.node)
})
</script>
