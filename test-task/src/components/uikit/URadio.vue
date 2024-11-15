<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | null;
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
}>();

defineEmits<{
  (e: "update:model-value", value: string): void;
}>();
</script>

<template>
  <label class="flex items-center cursor-pointer group">
    <input
      type="radio"
      :name="name"
      :checked="modelValue === value"
      :value="value"
      :required="required"
      :disabled="disabled"
      class="peer sr-only"
      @change="$emit('update:model-value', value)"
    />
    <span
      class="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-emerald-600 peer-focus:border-emerald-600 peer-checked:border-emerald-600 peer-checked:bg-emerald-600 transition-all"
    ></span>
    <span
      class="ml-2 text-base font-medium text-gray-600 group-hover:text-emerald-600 peer-focus:text-emerald-600 peer-checked:text-gray-600 transition-all"
      >{{ label }}</span
    >
  </label>
</template>

<style scoped></style>
