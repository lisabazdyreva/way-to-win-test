<script setup lang="ts">
import { RouterLink } from "vue-router";

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
          <button
            class="py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md transition duration-100"
            @click="$emit('open-modal')"
          >
            Добавить работника
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
