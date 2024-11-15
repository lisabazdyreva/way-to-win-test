<script setup lang="ts">
import UTable from "@/components/uikit/UTable.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import RemoveIcon from "@/components/icons/RemoveIcon.vue";

import type { IPhysician } from "@/types/user";
import { ref } from "vue";
import { BranchLabel } from "@/consts";
import UButton from "@/components/uikit/UButton.vue";

defineProps<{
  physicians: Array<IPhysician>;
}>();

defineEmits<{
  (e: "open-edit", value: IPhysician): void;
  (e: "remove-item", id: string): void;
}>();

const currentSortType = ref<null | string>();
const currentFilterType = ref<null | string>();

const headers = ["Отделение", "Имя", "Отчество", "Фамилия", "Действия"];
</script>

<template>
  <div>
    <div class="flex justify-between">Фильтрация, сортировка</div>

    <UTable :headers="headers">
      <template #rows>
        <tr
          v-for="physician in physicians"
          :key="physician.id"
          :class="{ 'bg-emerald-100': physician?.isChief }"
        >
          <td
            class="max-w-[300px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            {{ BranchLabel[physician.branch] }}
          </td>
          <td
            class="max-w-[300px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            <div>
              <span v-if="physician?.isChief">Заведующий</span>
              {{ physician.name }}
            </div>
          </td>
          <td
            class="max-w-[300px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            {{ physician.fatherName }}
          </td>
          <td
            class="max-w-[300px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate"
          >
            {{ physician.surname }}
          </td>
          <td class="px-6 max-w-[100px]">
            <div class="flex justify-between max-w-[100px]">
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
