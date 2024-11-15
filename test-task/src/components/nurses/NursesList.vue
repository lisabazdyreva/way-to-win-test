<script setup lang="ts">
import UButton from "@/components/uikit/UButton.vue";

import type { INurse } from "@/types/user";
import { BranchLabel } from "@/consts";

defineProps<{
  nurses: Array<INurse> | null;
}>();

defineEmits<{
  (e: "open-edit", value: INurse): void;
  (e: "remove-item", id: string): void;
}>();
</script>

<template>
  <ul>
    <li
      class="mb-4 bg-emerald-50 p-4 rounded last-of-type:mb-0"
      v-for="nurse in nurses"
      :key="nurse.id"
    >
      <div>
        <div class="mb-2">
          <h3 class="text-xl font-medium text-gray-700">
            Отделение:
            <span>{{ BranchLabel[nurse.branch].toLowerCase() }}</span>
          </h3>
        </div>

        <div class="mb-4">
          <h3 class="text-sm font-medium text-gray-700">ФИО:</h3>
          <div>
            {{ `${nurse.surname} ${nurse.name} ${nurse.fatherName}` }}
          </div>
        </div>

        <div class="flex justify-between gap-2">
          <UButton theme="dark-gray" @click="$emit('remove-item', nurse.id)">
            Удалить
          </UButton>

          <UButton theme="green" @click="$emit('open-edit', nurse)">
            Редактировать
          </UButton>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
