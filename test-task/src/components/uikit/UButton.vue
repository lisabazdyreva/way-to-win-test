<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  theme: "green" | "light-gray" | "dark-gray" | "red";
  type?: "button" | "submit";
  form?: "square";
}>();

const classes = computed(() => {
  let classes = "";

  switch (props.theme) {
    case "green": {
      classes += `bg-emerald-700 hover:bg-emerald-800 text-white`;
      break;
    }
    case "light-gray": {
      classes += `bg-zinc-100 hover:bg-zinc-200 text-gray-700`;
      break;
    }
    case "dark-gray": {
      classes += `bg-gray-700 hover:bg-gray-800 text-white`;
      break;
    }
    case "red": {
      classes += `bg-red-400 hover:bg-red-500 text-white`;
      break;
    }
  }

  switch (props.form) {
    case "square": {
      classes += ` py-2 px-2`;
      break;
    }
    default: {
      classes += ` py-2 px-4`;
      break;
    }
  }

  return classes;
});
</script>

<template>
  <button
    class="font-medium rounded-md transition duration-100"
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>

<style scoped></style>
