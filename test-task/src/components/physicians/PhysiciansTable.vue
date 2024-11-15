<script setup lang="ts">
import UTable from "@/components/uikit/UTable.vue";
import UButton from "@/components/uikit/UButton.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import RemoveIcon from "@/components/icons/RemoveIcon.vue";

import type { IPhysician } from "@/types/user";
import { BranchLabel } from "@/consts";

defineProps<{
  physicians: Array<IPhysician>;
}>();

defineEmits<{
  (e: "open-edit", value: IPhysician): void;
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
        <tr
          v-for="physician in physicians"
          :key="physician.id"
          :class="{ 'bg-emerald-100/50': physician?.isChief }"
        >
          <td
            class="w-[150px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            {{ BranchLabel[physician.branch] }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            <div
              class="max-w-[400px] whitespace-nowrap text-sm font-medium text-gray-800 truncate"
            >
              {{ physician.surname }}
              {{ physician.name }}
              {{ physician.fatherName }}
            </div>
            <span
              v-if="physician?.isChief"
              class="text-xs text-emerald-800 font-bold"
              >Заведующий отделением</span
            >
          </td>
          <td class="w-[150px] px-6">
            <div class="flex justify-between">
              <UButton
                theme="light-gray"
                form="square"
                @click="() => $emit('open-edit', physician)"
              >
                <EditIcon class="h-5 w-5 text-gray-600" />
              </UButton>

              <UButton
                theme="red"
                form="square"
                @click="() => $emit('remove-item', physician?.id)"
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
