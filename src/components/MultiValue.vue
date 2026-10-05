<template>
  <!-- TransitionGroup measures every item on each update: skip it for large selections -->
  <TransitionGroup
    v-if="useTransition"
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
    <Input key="input" />
  </TransitionGroup>
  <div v-else class="vue-treeselect__multi-value">
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
    <Input key="input" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useTreeselectContext } from '@/context'
import MultiValueItem from '@/components/MultiValueItem.vue'
import Input from '@/components/Input.vue'
import Placeholder from '@/components/Placeholder.vue'
import type { NormalizedNode } from '@/types'

const MAX_ANIMATED_ITEMS = 50

const treeselect = useTreeselectContext()
const props = treeselect.props

/**
 * Get nodes to display (up to limit)
 */
const displayedNodes = computed(() => {
  return treeselect.internalValue.value
    .slice(0, props.limit)
    .map(id => treeselect.getNode(id))
    .filter((node): node is NormalizedNode => node !== null)
})

// Switching the wrapper re-mounts the input, so only switch while it's not focused
const useTransition = ref(true)
watchEffect(() => {
  if (!treeselect.trigger.isFocused) {
    useTransition.value = displayedNodes.value.length <= MAX_ANIMATED_ITEMS
  }
})

/**
 * Whether the limit has been exceeded
 */
const exceedLimit = computed(() => {
  return treeselect.internalValue.value.length > (props.limit ?? Infinity)
})

/**
 * Text to show when limit is exceeded
 */
const limitText = computed(() => {
  const count = treeselect.internalValue.value.length - (props.limit ?? Infinity)
  return treeselect.texts.value.limitText(count)
})
</script>
