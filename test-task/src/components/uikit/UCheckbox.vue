<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: boolean | null;
  label: string;
  name: string;
  disabled: boolean;
}>();

defineEmits<{
  (e: "update"): void;
}>();

const id = computed(() => `${props.name}_${props.label}`);
</script>

<template>
  <div class="flex items-center mb-4">
    <!-- todo lisa styles -->
    <input
      :id="id"
      class="w-5 h-5 appearance-none border cursor-pointer border-zinc-300 rounded-md mr-2 hover:border-emerald-200 hover:bg-emerald-100 checked:bg-no-repeat checked:bg-center checked:border-emerald-500 checked:bg-emerald-100 disabled:bg-zinc-300 disabled:border-zinc-300 disabled:cursor-auto transition duration-100"
      type="checkbox"
      :checked="!!value"
      :disabled="disabled"
      @change="() => $emit('update')"
    />
    <label
      :for="id"
      class="text-sm font-norma cursor-pointer text-zinc-600 disabled:cursor-auto"
      >{{ label }}</label
    >
  </div>
</template>

<style scoped></style>
