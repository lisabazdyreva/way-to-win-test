<script setup lang="ts">
import { computed, onMounted } from "vue";

const props = defineProps<{
  value: boolean;
  label: string;
  name: string;
}>();

const emits = defineEmits<{
  (e: "update"): void;
}>();

const id = computed(() => `${props.name}_${props.label}`);
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="checkbox"
      :checked="value"
      :id="id"
      class="h-5 w-5 text-blue-500 border-gray-300 rounded-sm focus:ring-blue-500"
      @change="() => $emit('update')"
    />
    <label :for="id" class="text-gray-700 font-medium">{{ label }}</label>
  </div>
</template>

<style scoped></style>
