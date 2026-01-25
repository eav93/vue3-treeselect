<template>
  <input
    v-for="(stringifiedValue, i) in stringifiedValues"
    :key="`hidden-field-${i}`"
    type="hidden"
    :name="treeselect.name"
    :value="stringifiedValue"
  />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { isNaN } from '@/utils'
import type { TreeselectInstance } from '@/types'

const treeselect = inject<TreeselectInstance>('treeselect')!

function stringifyValue(value: any): string {
  if (typeof value === 'string') return value
  if (value != null && !isNaN(value)) return JSON.stringify(value)
  return ''
}

const stringifiedValues = computed(() => {
  if (!treeselect.name || treeselect.disabled || !treeselect.hasValue.value) {
    return []
  }

  let values = treeselect.internalValue.value.map(stringifyValue)

  if (treeselect.multiple && treeselect.joinValues) {
    values = [values.join(treeselect.delimiter)]
  }

  return values
})
</script>
