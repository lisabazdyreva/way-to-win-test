<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import UTextInput from "@/components/uikit/UTextInput.vue";
import URadio from "@/components/uikit/URadio.vue";
import UCheckbox from "@/components/uikit/UCheckbox.vue";

import { BranchLabel, UserTypeLabel } from "@/consts";
import {
  type INurse,
  type IPhysician,
  UserType,
  BranchType,
} from "@/types/user";
import { useDataStore } from "@/stores/data";
import UButton from "@/components/uikit/UButton.vue";

const props = defineProps<{
  user: null | INurse | IPhysician;
  isEditMode?: boolean;
}>();

const emits = defineEmits<{
  (e: "close-modal"): void;
}>();

const dataStore = useDataStore();

const branches: Array<BranchType> = Object.values(BranchType);
const userTypes: Array<UserType> = Object.values(UserType);

const id = ref<string | null>(props?.user?.id || null);
const name = ref<string | null>(props?.user?.name || null);
const surname = ref<string | null>(props?.user?.surname || null);
const fatherName = ref<string | null>(props?.user?.fatherName || null);
const branch = ref<null | BranchType>(props?.user?.branch || null);

const userType = ref<null | UserType>(props?.user?.type || null); // todo lisa

const isPhysician = (obj: null | INurse | IPhysician): obj is IPhysician => {
  return obj?.type === UserType.Physician;
};
const isChief = ref<boolean | null>(
  isPhysician(props?.user) && props?.user?.isChief
    ? props?.user?.isChief
    : null,
);

const handleIsChiefChange = () => {
  isChief.value = !isChief.value;
};

const handleBranchChange = (branchValue: string) => {
  branch.value = branchValue as BranchType;
};

const handleUserTypeChange = (userTypeValue: string) => {
  userType.value = userTypeValue as UserType;
};

const getNurseData = () => {
  if (
    !name.value ||
    !fatherName.value ||
    !surname.value ||
    !branch.value ||
    !userType.value
  ) {
    return;
  }

  const data: INurse = {
    id: id.value || uuidv4(), // todo lisa generate uuid
    name: name.value,
    fatherName: fatherName.value,
    surname: surname.value,
    branch: branch.value,
    type: userType.value,
  };
  return data;
};

const getPhysicianData = () => {
  if (
    !name.value ||
    !fatherName.value ||
    !surname.value ||
    !branch.value ||
    !userType.value
  ) {
    return;
  }

  const data: IPhysician = {
    id: id.value || uuidv4(), // todo lisa generate uuid
    name: name.value,
    fatherName: fatherName.value,
    surname: surname.value,
    branch: branch.value,
    type: userType.value,
  };

  if (isChief.value) {
    data.isChief = isChief.value;
  }
  return data;
};

const updateUser = (data: INurse | IPhysician) => {
  if (userType.value === UserType.Nurse) {
    dataStore.updateNurses(data);
  }

  if (userType.value === UserType.Physician) {
    dataStore.updatePhysicians(data);
  }
};

const createNewUser = (data: INurse | IPhysician) => {
  if (userType.value === UserType.Nurse) {
    dataStore.addNurse(data);
  }

  if (userType.value === UserType.Physician) {
    dataStore.addPhysician(data);
  }
};

const handleUserFormSubmit = () => {
  const data =
    userType.value === UserType.Nurse ? getNurseData() : getPhysicianData();

  if (!data) {
    return;
  }

  if (props?.isEditMode) {
    updateUser(data);
  }

  if (!props?.isEditMode) {
    createNewUser(data);
  }

  emits("close-modal");
};
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
        @update:model-value="handleBranchChange"
      />
    </div>

    <div class="mb-4">
      <h4 class="text-md text-gray-600 font-bold mb-1">Укажите должность:</h4>
      <URadio
        v-for="(userTypeItem, i) in userTypes"
        :key="i"
        name="user-type"
        :model-value="userType"
        :value="userTypeItem"
        :label="UserTypeLabel[userTypeItem]"
        @update:model-value="handleUserTypeChange"
      />
    </div>

    <UCheckbox
      class="mb-4"
      name="chief"
      :value="isChief"
      :disabled="userType === UserType.Nurse || !userType"
      label="Заведующий"
      @update="handleIsChiefChange"
    />

    <UButton theme="dark-gray" type="submit"> Сохранить </UButton>
  </form>
</template>

<style scoped></style>
