<script setup lang="ts">
import { RouterLink } from "vue-router";
import UButton from "@/components/uikit/UButton.vue";

defineEmits<{
  (e: "open-modal"): void;
}>();
</script>

<template>
  <header class="flex bg-emerald-100">
    <nav class="w-full mx-2">
      <ul class="flex gap-2 items-center">
        <li>
          <RouterLink
            class="flex py-6 px-4 text-zinc-600 hover:text-zinc-800 font-bold transition duration-100"
            to="/physicians"
            >Врачи</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="flex py-6 px-4 text-zinc-600 hover:text-zinc-800 font-bold"
            to="/nurses"
            >Медсестры</RouterLink
          >
        </li>
        <li class="ml-auto">
          <UButton theme="green" @click="$emit('open-modal')">
            Добавить работника
          </UButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
