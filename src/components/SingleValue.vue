<template>
  <div v-if="shouldShowValue" class="vue-treeselect__single-value">
    <!-- Custom value label renderer -->
    <SlotRenderer v-if="treeselect.slots['value-label']" :render-slot="treeselect.slots['value-label']" :scope="{ node: selectedNode }" />
    <!-- Default label -->
    <template v-else>
      {{ selectedNode.label }}
    </template>
  </div>
  <Placeholder />
  <Input />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTreeselectContext } from '@/context'
import SlotRenderer from '@/components/SlotRenderer'
import Input from '@/components/Input.vue'
import Placeholder from '@/components/Placeholder.vue'

const treeselect = useTreeselectContext()

const shouldShowValue = computed(() => {
  return treeselect.hasValue.value && !treeselect.trigger.searchQuery
})

const selectedNode = computed(() => {
  return treeselect.selectedNodes.value[0]
})
</script>
