<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string | null;
  name: string;
  value: string;
  label: string;
}>();

defineEmits<{
  (e: "update:model-value", value: string): void;
}>();

const id = computed(() => `${props.name}_${props.value}`);
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="radio"
      :id="id"
      :checked="modelValue === value"
      :name="name"
      :value="value"
      class="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      @change="$emit('update:model-value', value)"
    />
    <label :for="id" class="text-gray-700 font-medium">{{ label }}</label>
  </div>
</template>

<style scoped></style>
