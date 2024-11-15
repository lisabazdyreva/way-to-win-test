<script setup lang="ts">
import { inject, ref } from "vue";

import PhysiciansTable from "@/components/physicians/PhysiciansTable.vue";
import RemoveUserModal from "@/components/common/RemoveUserModal.vue";
import UMainTitle from "@/components/uikit/UMainTitle.vue";
import UButton from "@/components/uikit/UButton.vue";

import type { IPhysician, IUserModalInject } from "@/types/user";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

const userModal = inject<IUserModalInject>("userModal");

const physicianToDelete = ref<IPhysician | null>(null);
const isDeleteModalOpen = ref<boolean>(false);

const handleEditUserModalOpen = (physician: IPhysician) => {
  userModal?.setEditUser(physician);
};

const handleUserRemoveOpen = (idToRemove: string) => {
  const item = dataStore.physicians?.find(({ id }) => id === idToRemove);

  if (!item) {
    return;
  }

  isDeleteModalOpen.value = true;
  physicianToDelete.value = item;
};

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false;
  physicianToDelete.value = null;
};

const handleDeleteConfirmClick = () => {
  const id = physicianToDelete.value?.id;
  if (!id) {
    return;
  }

  dataStore.removePhysician(id);
  closeDeleteModal();
};
</script>

<template>
  <main class="mx-1">
    <UMainTitle> Таблица врачей </UMainTitle>

    <PhysiciansTable
      class="mb-4"
      v-if="dataStore.physicians?.length"
      :physicians="dataStore.physicians"
      @open-edit="handleEditUserModalOpen"
      @remove-item="handleUserRemoveOpen"
    />

    <p class="text-red-500" v-else>Нет данных по врачам.</p>

    <UButton
      class="flex mx-auto"
      theme="light-gray"
      @click="() => userModal?.setIsUserModalOpen(true)"
    >
      Добавить
    </UButton>

    <teleport v-if="isDeleteModalOpen" to="body">
      <RemoveUserModal
        :name="`${physicianToDelete?.name} ${physicianToDelete?.fatherName}`"
        @confirm-remove="handleDeleteConfirmClick"
        @cancel-remove="closeDeleteModal"
      />
    </teleport>
  </main>
</template>

<style scoped></style>
