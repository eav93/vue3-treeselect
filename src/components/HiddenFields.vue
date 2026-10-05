<template>
  <input
    v-for="(stringifiedValue, i) in stringifiedValues"
    :key="`hidden-field-${i}`"
    type="hidden"
    :name="treeselect.props.name"
    :value="stringifiedValue"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isNaN } from '@/utils'
import { useTreeselectContext } from '@/context'

const treeselect = useTreeselectContext()
const props = treeselect.props

function stringifyValue(value: any): string {
  if (typeof value === 'string') return value
  if (value != null && !isNaN(value)) return JSON.stringify(value)
  return ''
}

const stringifiedValues = computed(() => {
  if (!props.name || props.disabled || !treeselect.hasValue.value) {
    return []
  }

  let values = treeselect.internalValue.value.map(stringifyValue)

  if (props.multiple && props.joinValues) {
    values = [values.join(props.delimiter)]
  }

  return values
})
</script>
