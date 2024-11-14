<script setup lang="ts">
import { ref } from "vue";

import UTextInput from "@/components/uikit/UTextInput.vue";
import URadio from "@/components/uikit/URadio.vue";
import UCheckbox from "@/components/uikit/UCheckbox.vue";
import { UserType, BranchType, BranchLabel, UserTypeLabel } from "@/consts";
import type { INurse, IPhysician, UserBranchType } from "@/types/user";

const props = defineProps<{
  user: null | INurse | IPhysician;
  type: UserType;
  isEditMode?: boolean;
}>();

const branches: Array<BranchType> = Object.values(BranchType);

const name = ref<string | null>(props?.user?.name || null);
const surname = ref<string | null>(props?.user?.surname || null);
const fatherName = ref<string | null>(props?.user?.fatherName || null);
const branch = ref<null | UserBranchType>(props?.user?.branch || null);

const userType = ref<null | UserType>(props?.user?.type || null); // todo lisa
const isChief = ref<boolean>(props?.user?.isChief || null);

const handleIsChiefChange = () => {
  isChief.value = !isChief.value;
};
const handleUserFormSubmit = () => {};
</script>

<template>
  <form class="flex flex-col" @submit.prevent="handleUserFormSubmit">
    <h3 class="text-xl font-bold text-blue-950 py-1.5 text-center mb-2">
      <template v-if="isEditMode">Редактирование записи</template>
      <template v-else>Новая запись</template>
    </h3>

    <UTextInput
      v-model="name"
      class="mb-4"
      label="Имя"
      type="text"
      placeholder="Иван"
    />

    <UTextInput
      v-model="fatherName"
      class="mb-4"
      label="Отчество"
      type="text"
      placeholder="Иванович"
    />

    <UTextInput
      class="mb-4"
      label="Фамилия"
      v-model="surname"
      type="text"
      placeholder="Иванов"
    />

    <div class="mb-4">
      <h4 class="text-md text-gray-600 font-bold mb-1">Укажите отделение:</h4>

      <URadio
        v-for="(branchItem, i) in branches"
        :key="i"
        class="mb-1"
        name="branch"
        :model-value="branch"
        :value="branchItem"
        :label="BranchLabel[branchItem]"
        @update:model-value="(v: string) => (branch = v)"
      />
    </div>

    <div class="mb-4">
      <h4 class="text-md text-gray-600 font-bold mb-1">Укажите должность:</h4>
      <URadio
        name="user-type"
        :model-value="userType"
        :value="UserType.Nurse"
        :label="UserTypeLabel[UserType.Nurse]"
        @update:model-value="(v: string) => (userType = v)"
      />

      <URadio
        name="user-type"
        :model-value="userType"
        :value="UserType.Physician"
        :label="UserTypeLabel[UserType.Physician]"
        @update:model-value="(v: string) => (userType = v)"
      />
    </div>

    <UCheckbox
      class="mb-4"
      name="chief"
      :value="isChief"
      :disabled="userType === UserType.Nurse"
      label="Заведующий"
      @update="handleIsChiefChange"
    />

    <button
      class="px-4 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md transition duration-100"
    >
      Сохранить
    </button>
  </form>
</template>

<style scoped></style>
