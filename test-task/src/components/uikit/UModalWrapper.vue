<script setup lang="ts">
import CrossIcon from "@/components/icons/CrossIcon.vue";
import { onMounted, onUnmounted } from "vue";
import { checkIsEsc } from "@/utils/checkIsEsc";

const emits = defineEmits<{
  (e: "close-modal"): void;
}>();

const handleModalClose = () => {
  emits("close-modal");
};

const handleEscKeydown = (evt: KeyboardEvent) => {
  const isEsc = checkIsEsc(evt);

  if (!isEsc) {
    return;
  }

  handleModalClose();
};

const addBodyStyle = () => {
  const app = document.querySelector(".app");

  if (!app) {
    return;
  }

  app.classList.add("overflow-hidden");
  app.classList.add("max-h-svh");
  app.classList.add("relative");
};

const removeBodyStyle = () => {
  const app = document.querySelector(".app");

  if (!app) {
    return;
  }

  app.classList.remove("overflow-hidden");
  app.classList.remove("max-h-svh");
  app.classList.remove("relative");
};

onMounted(() => {
  document.addEventListener("keydown", handleEscKeydown);
  addBodyStyle();
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscKeydown);
  removeBodyStyle();
});
</script>

<template>
  <div
    class="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 z-20 flex justify-center align-middle"
  >
    <div
      class="relative max-w-[300px] sm:max-w-[400px] w-full bg-white py-2 px-4 sm:py-6 sm:px-10 rounded-md mt-auto mb-auto"
    >
      <button
        class="absolute right-0.5 top-0.5 sm:right-2 sm:top-2"
        @click="handleModalClose"
      >
        <CrossIcon class="h-6 w-6 text-gray-600" />
      </button>
      <div class="w-full max-h-[700px] overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
