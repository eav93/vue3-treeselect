<template>
  <div v-if="shouldShowValue" class="vue-treeselect__single-value">
    <!-- Custom value label renderer -->
    <component
      v-if="customValueLabelRenderer"
      :is="customValueLabelRenderer"
      :node="selectedNode"
    />
    <!-- Default label -->
    <template v-else>
      {{ selectedNode.label }}
    </template>
  </div>
  <Placeholder />
  <Input ref="input" />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import Input from '@/components/Input.vue'
import Placeholder from '@/components/Placeholder.vue'
import type { TreeselectInstance } from '@/types'

const treeselect = inject<TreeselectInstance>('treeselect')!

const shouldShowValue = computed(() => {
  return treeselect.hasValue.value && !treeselect.trigger.searchQuery
})

const selectedNode = computed(() => {
  return treeselect.selectedNodes.value[0]
})

const customValueLabelRenderer = computed(() => {
  return (treeselect as any).$slots?.['value-label']
})
</script>
