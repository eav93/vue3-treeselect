<template>
  <TransitionGroup
    class="vue-treeselect__multi-value"
    tag="div"
    name="vue-treeselect__multi-value-item--transition"
    appear
  >
    <MultiValueItem
      v-for="node in displayedNodes"
      :key="`multi-value-item-${node.id}`"
      :node="node"
    />
    <div
      v-if="exceedLimit"
      key="exceed-limit-tip"
      class="vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
    >
      <span class="vue-treeselect__limit-tip-text">
        {{ limitText }}
      </span>
    </div>
    <Placeholder key="placeholder" />
    <Input ref="input" key="input" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import MultiValueItem from '@/components/MultiValueItem.vue'
import Input from '@/components/Input.vue'
import Placeholder from '@/components/Placeholder.vue'
import type { TreeselectInstance, NormalizedNode } from '@/types'

// ============================================================================
// Inject treeselect instance
// ============================================================================

const treeselect = inject<TreeselectInstance>('treeselect')!

// ============================================================================
// Computed
// ============================================================================

/**
 * Get nodes to display (up to limit)
 */
const displayedNodes = computed(() => {
  return treeselect.internalValue.value
    .slice(0, treeselect.limit)
    .map(treeselect.getNode)
    .filter((node): node is NormalizedNode => node !== null)
})

/**
 * Whether the limit has been exceeded
 */
const exceedLimit = computed(() => {
  return treeselect.internalValue.value.length > treeselect.limit
})

/**
 * Text to show when limit is exceeded
 */
const limitText = computed(() => {
  const count = treeselect.internalValue.value.length - treeselect.limit
  return treeselect.limitText(count)
})
</script>
