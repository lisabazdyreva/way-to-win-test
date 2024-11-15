<script setup lang="ts">
import { inject, ref } from "vue";

import NursesTable from "@/components/nurses/NursesTable.vue";
import RemoveUserModal from "@/components/common/RemoveUserModal.vue";
import UButton from "@/components/uikit/UButton.vue";
import UMainTitle from "@/components/uikit/UMainTitle.vue";

import type { INurse, IUserModalInject } from "@/types/user";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

const userModal = inject<IUserModalInject>("userModal");

const nurseToDelete = ref<INurse | null>(null);
const isDeleteModalOpen = ref<boolean>(false);

const handleEditUserModalOpen = (nurse: INurse) => {
  userModal?.setEditUser(nurse);
};

const handleUserRemoveOpen = (idToRemove: string) => {
  const item = dataStore.nurses?.find(({ id }) => id === idToRemove);

  if (!item) {
    return;
  }

  isDeleteModalOpen.value = true;
  nurseToDelete.value = item;
};

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false;
  nurseToDelete.value = null;
};

const handleDeleteConfirmClick = () => {
  const id = nurseToDelete.value?.id;
  if (!id) {
    return;
  }

  dataStore.removeNurses(id);
  closeDeleteModal();
};
</script>

<template>
  <main class="mx-1">
    <UMainTitle> Таблица медсестёр </UMainTitle>

    <NursesTable
      v-if="dataStore?.nurses?.length"
      class="mb-4"
      :nurses="dataStore.nurses"
      @open-edit="handleEditUserModalOpen"
      @remove-item="handleUserRemoveOpen"
    />

    <p v-else class="text-red-500">Нет данных по медсёстрам.</p>

    <UButton
      class="flex mx-auto"
      theme="light-gray"
      type="button"
      @click="() => userModal?.setIsUserModalOpen(true)"
    >
      Добавить
    </UButton>

    <teleport v-if="isDeleteModalOpen" to="body">
      <RemoveUserModal
        :name="`${nurseToDelete?.name} ${nurseToDelete?.fatherName}`"
        @cancel-remove="closeDeleteModal"
        @confirm-remove="handleDeleteConfirmClick"
      />
    </teleport>
  </main>
</template>

<style scoped></style>
