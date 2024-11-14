<script setup lang="ts">
import CrossIcon from "@/components/icons/CrossIcon.vue";

const emits = defineEmits<{
  (e: "close-modal"): void;
}>();

const handleModalClose = () => {
  emits("close-modal");
};
</script>

<template>
  <div
    class="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 z-20 flex justify-center align-middle"
  >
    <div
      class="relative max-w-[400px] w-full bg-white py-6 px-10 rounded-md mt-auto mb-auto"
    >
      <button class="absolute right-2 top-2" @click="handleModalClose">
        <CrossIcon class="h-6 w-6 text-gray-600" />
      </button>
      <div class="w-full max-h-[700px] overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
