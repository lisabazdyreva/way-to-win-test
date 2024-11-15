<script setup lang="ts">
defineProps<{
  value: boolean | null;
  label: string;
  disabled: boolean;
}>();

defineEmits<{
  (e: "update"): void;
}>();
</script>

<template>
  <div class="space-y-4">
    <label
      class="flex items-center cursor-pointer group"
      :class="{ 'cursor-not-allowed': disabled }"
    >
      <input
        type="checkbox"
        :checked="!!value"
        :disabled="disabled"
        class="peer sr-only"
        @change="$emit('update')"
      />
      <span
        class="*:hidden peer-checked:*:block peer-disabled:*:hidden w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center group-hover:border-emerald-600 peer-focus:border-emerald-600 peer-checked:border-emerald-600 peer-checked:bg-emerald-600 transition-all peer-disabled:bg-gray-200 peer-disabled:border-gray-300 peer-disabled:peer-checked:bg-gray-400"
      >
        <svg
          class="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 13l4 4L19 7" color="currentColor"></path>
        </svg>
      </span>
      <span
        class="ml-2 text-base font-medium text-gray-600 group-hover:text-emerald-600 peer-checked:text-emerald-600 peer-focus:text-emerald-600 transition-all peer-disabled:text-gray-500"
        >{{ label }}</span
      >
    </label>
  </div>
</template>

<style scoped></style>
