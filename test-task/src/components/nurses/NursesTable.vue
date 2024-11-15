<script setup lang="ts">
import EditIcon from "@/components/icons/EditIcon.vue";
import RemoveIcon from "@/components/icons/RemoveIcon.vue";
import UTable from "@/components/uikit/UTable.vue";

import type { INurse } from "@/types/user";
import { BranchLabel } from "@/consts";
import UButton from "@/components/uikit/UButton.vue";

defineProps<{
  nurses: Array<INurse> | null;
}>();

defineEmits<{
  (e: "open-edit", value: INurse): void;
  (e: "remove-item", id: string): void;
}>();

const headers = ["Отделение", "Имя", "Отчество", "Фамилия", "Действия"];
</script>

<template>
  <UTable :headers="headers">
    <template #rows>
      <tr v-for="nurse in nurses" :key="nurse.id" class="border-red-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          {{ BranchLabel[nurse.branch] }}
        </td>
        <td
          class="max-w-[300px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
        >
          {{ nurse.name }}
        </td>
        <td
          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
        >
          {{ nurse.fatherName }}
        </td>
        <td
          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
        >
          {{ nurse.surname }}
        </td>
        <td class="px-6 max-w-[100px]">
          <div class="flex justify-between max-w-[100px]">
            <UButton
              theme="light-gray"
              form="square"
              @click="() => $emit('open-edit', nurse)"
            >
              <EditIcon class="h-5 w-5 text-gray-600" />
            </UButton>

            <UButton
              theme="red"
              form="square"
              @click="() => $emit('remove-item', nurse?.id)"
            >
              <RemoveIcon class="h-5 w-5 text-white" />
            </UButton>
          </div>
        </td>
      </tr>
    </template>
  </UTable>
</template>

<style scoped></style>
