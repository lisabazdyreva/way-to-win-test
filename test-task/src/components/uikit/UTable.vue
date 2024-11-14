<script setup lang="ts">
withDefaults(
  defineProps<{
    headers: string[];
  }>(),
  {},
);
</script>

<template>
  <table class="min-w-full leading-normal border-b-2 border-zinc-200">
    <thead>
      <tr class="bg-emerald-700 text-white">
        <th
          v-for="header in headers"
          :key="header"
          class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-zinc-200">
      <slot name="rows" />
    </tbody>
  </table>
</template>

<style scoped></style>
