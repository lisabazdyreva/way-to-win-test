<script setup lang="ts">
import EditIcon from "@/components/icons/EditIcon.vue";
import RemoveIcon from "@/components/icons/RemoveIcon.vue";
import UTable from "@/components/uikit/UTable.vue";

import type { INurse } from "@/types/user";

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
          {{ nurse.branch }}
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
            <button
              class="bg-zinc-100 hover:bg-zinc-200 text-gray-700 font-semibold py-2 px-2 rounded-md shadow-md transition duration-100"
            >
              <EditIcon
                class="h-5 w-5 text-gray-600"
                @click="() => $emit('open-edit', nurse)"
              />
            </button>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-2 rounded-md shadow-md transition duration-100"
              @click="() => $emit('remove-item', nurse?.id)"
            >
              <RemoveIcon class="h-5 w-5 text-white" />
            </button>
          </div>
        </td>
      </tr>
    </template>
  </UTable>
</template>

<style scoped></style>
