<script setup lang="ts">
import { inject, ref } from "vue";

import NursesTable from "@/components/nurses/NursesTable.vue";
import UMainTitle from "@/components/uikit/UMainTitle.vue";
import UModalWrapper from "@/components/uikit/UModalWrapper.vue";

import type { INurse, IUserModalInject } from "@/types/user";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

const userModal = inject<IUserModalInject>("userModal");

const nurseToDelete = ref<INurse | null>(null);
const isDeleteModalOpen = ref<boolean>(false);

const handleEditUserModalOpen = (nurse: INurse) => {
  userModal.setEditUser(nurse);
};

const handleUserRemoveOpen = (idToRemove: string) => {
  const item = dataStore.nurses.find(({ id }) => id === idToRemove);

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
  const updatedNurses = dataStore.nurses.filter(
    ({ id }) => id !== nurseToDelete.value.id,
  );

  dataStore.updateNurses(updatedNurses);
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

    <button
      class="flex ml-auto mr-auto px-4 py-4 rounded-md bg-zinc-600 hover:bg-zinc-800 text-white font-semibold transition duration-100"
      @click="() => userModal.setIsUserModalOpen(true)"
    >
      Добавить новую медсестру
    </button>

    <teleport v-if="isDeleteModalOpen" to="body">
      <UModalWrapper @close-modal="() => closeDeleteModal()">
        <div>
          <h3>
            Вы уверены, что хотите удалить сотрудника
            {{ nurseToDelete?.name }}?
          </h3>
          <div class="flex justify-between">
            <button @click="closeDeleteModal">Отмена</button>
            <button @click="handleDeleteConfirmClick">Подтвердить</button>
          </div>
        </div>
      </UModalWrapper>
    </teleport>
  </main>
</template>

<style scoped></style>
