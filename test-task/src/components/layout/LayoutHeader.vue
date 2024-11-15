<script setup lang="ts">
import { RouterLink } from "vue-router";

import UButton from "@/components/uikit/UButton.vue";

defineEmits<{
  (e: "open-modal"): void;
}>();
</script>

<template>
  <header class="flex bg-zinc-100">
    <nav class="w-full mx-2">
      <ul class="flex gap-2 items-center">
        <li>
          <RouterLink
            class="link flex py-6 px-4 text-zinc-600 hover:text-zinc-800 font-bold transition duration-100"
            to="/physicians"
            >Врачи</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="link flex py-6 px-4 text-zinc-600 hover:text-zinc-800 font-bold"
            to="/nurses"
            >Медсестры</RouterLink
          >
        </li>
        <li class="ml-auto">
          <UButton theme="green" @click="$emit('open-modal')">
            <svg
              class="caption--mobile w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span class="caption--desktop"> Добавить работника </span>
          </UButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.caption--desktop {
  display: none;
}

.link.router-link-exact-active {
  color: rgb(39 39 42);
}

@media screen and (min-width: 560px) {
  .caption--mobile {
    display: none;
  }
  .caption--desktop {
    display: initial;
  }
}
</style>
