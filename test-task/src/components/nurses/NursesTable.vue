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

const headers = [
  {
    title: "Отделение",
    width: "w-[150px] max-w-[150px]",
  },
  {
    title: "ФИО",
    width: "custom-base",
  },
  {
    title: "Действия",
    width: "w-[150px] max-w-[150px]",
  },
];
</script>

<template>
  <div>
    <UTable :headers="headers">
      <template #rows>
        <tr v-for="nurse in nurses" :key="nurse.id">
          <td
            class="max-w-[150px] w-[150px] px-6 py-4 whitespace-nowrap text-sm text-gray-800"
          >
            {{ BranchLabel[nurse.branch] }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
          >
            <div
              class="max-w-[400px] whitespace-nowrap text-sm font-medium text-gray-800 truncate"
            >
              {{ nurse.surname }}
              {{ nurse.name }}
              {{ nurse.fatherName }}
            </div>
          </td>
          <td class="max-w-[150px] w-[150px] px-6">
            <div class="flex justify-between">
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
  </div>
</template>

<style scoped></style>
