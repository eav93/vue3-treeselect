<template>
  <div :class="placeholderClass">
    {{ treeselect.props.placeholder }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTreeselectContext } from '@/context'

const treeselect = useTreeselectContext()

const placeholderClass = computed(() => ({
  'vue-treeselect__placeholder': true,
  'vue-treeselect-helper-zoom-effect-off': true,
  'vue-treeselect-helper-hide': treeselect.hasValue.value || !!treeselect.trigger.searchQuery,
}))
</script>
