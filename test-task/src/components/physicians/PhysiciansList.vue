<script setup lang="ts">
import UButton from "@/components/uikit/UButton.vue";

import type { IPhysician } from "@/types/user";
import { BranchLabel } from "@/consts";

defineProps<{
  physicians: Array<IPhysician>;
}>();

defineEmits<{
  (e: "open-edit", value: IPhysician): void;
  (e: "remove-item", id: string): void;
}>();
</script>

<template>
  <ul class="max-w-[600px] mx-auto">
    <li
      class="mb-4 bg-emerald-50 p-4 rounded last-of-type:mb-0"
      v-for="physician in physicians"
      :key="physician.id"
    >
      <div>
        <div class="mb-2">
          <h3 class="text-xl font-bold text-gray-700">
            Отделение:
            <span>{{ BranchLabel[physician.branch].toLowerCase() }}</span>
          </h3>
          <p
            class="text-sm mt-0.5 font-bold text-emerald-600"
            v-if="physician?.isChief"
          >
            Заведующий отделением
          </p>
        </div>

        <div class="mb-4">
          <h3 class="text-sm font-medium text-gray-700">ФИО:</h3>
          <div>
            {{
              `${physician.surname} ${physician.name} ${physician.fatherName}`
            }}
          </div>
        </div>

        <div class="flex justify-between gap-2">
          <UButton
            theme="dark-gray"
            @click="$emit('remove-item', physician.id)"
          >
            Удалить
          </UButton>

          <UButton theme="green" @click="$emit('open-edit', physician)">
            Редактировать
          </UButton>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
