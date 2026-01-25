<template>
  <div :class="`vue-treeselect__tip vue-treeselect__${type}-tip`">
    <div class="vue-treeselect__icon-container">
      <span :class="`vue-treeselect__icon-${icon}`" />
    </div>
    <span :class="`vue-treeselect__tip-text vue-treeselect__${type}-tip-text`">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string
  icon: string
}

defineProps<Props>()
</script>
