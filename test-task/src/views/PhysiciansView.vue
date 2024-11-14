<script setup lang="ts">
import { inject, ref } from "vue";
import UMainTitle from "@/components/uikit/UMainTitle.vue";
import PhysiciansTable from "@/components/physicians/PhysiciansTable.vue";
import UModalWrapper from "@/components/uikit/UModalWrapper.vue";

import type { IPhysician, IUserModalInject } from "@/types/user";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

const userModal = inject<IUserModalInject>("userModal");

const physicianToDelete = ref<IPhysician | null>(null);
const isDeleteModalOpen = ref<boolean>(false);

const handleEditUserModalOpen = (physician: IPhysician) => {
  userModal.setEditUser(physician);
};

const handleUserRemoveOpen = (idToRemove: string) => {
  const item = dataStore.physicians.find(({ id }) => id === idToRemove);

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
  const updatedPhysicians = dataStore.physicians.filter(
    ({ id }) => id !== physicianToDelete.value.id,
  );

  dataStore.updatePhysicians(updatedPhysicians);
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

    <button
      class="flex ml-auto mr-auto px-4 py-4 rounded-md bg-zinc-600 hover:bg-zinc-800 text-white font-semibold transition duration-100"
      @click="() => userModal.setIsUserModalOpen(true)"
    >
      Добавить нового врача
    </button>

    <teleport v-if="isDeleteModalOpen" to="body">
      <UModalWrapper @close-modal="() => closeDeleteModal()">
        <div>
          <h3>
            Вы уверены, что хотите удалить сотрудника
            {{ physicianToDelete?.name }}?
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
