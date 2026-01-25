<template>
  <div :class="placeholderClass">
    {{ treeselect.placeholder }}
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { TreeselectInstance } from '@/types'

const treeselect = inject<TreeselectInstance>('treeselect')!

const placeholderClass = computed(() => ({
  'vue-treeselect__placeholder': true,
  'vue-treeselect-helper-zoom-effect-off': true,
  'vue-treeselect-helper-hide': treeselect.hasValue.value || treeselect.trigger.searchQuery,
}))
</script>
