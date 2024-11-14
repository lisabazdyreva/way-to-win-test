<script setup lang="ts">
defineProps<{
  modelValue?: string | null;
  label?: string;
  type?: "text" | "password";
  placeholder?: string;
}>();

const emits = defineEmits<{
  (e: "update:model-value", value: string): void;
}>();

const onInput = (evt: Event) => {
  emits("update:model-value", (evt.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="flex flex-col border-b-2 border-gray-100">
    <span v-if="label" class="text-xs text-gray-600 mb-2">{{ label }}</span>
    <input
      class="text-md outline-none bg-transparent"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
    />
  </label>
</template>

<style scoped></style>
