<script setup lang="ts">
withDefaults(
  defineProps<{
    headers: Array<{ title: string; width: string }>;
  }>(),
  {},
);
</script>

<template>
  <table class="min-w-full leading-normal border-b-2 border-zinc-200">
    <thead>
      <tr class="bg-emerald-700 text-white">
        <th
          v-for="(header, i) in headers"
          :key="i"
          class="px-6 py-5 text-left text-xs font-semibold uppercase tracking-wider last-of-type:text-center"
          :class="{ [header.width]: header?.width }"
        >
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-zinc-200">
      <slot name="rows" />
    </tbody>
  </table>
</template>

<style scoped></style>
