<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";

import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import AddUserForm from "@/components/common/AddUserForm.vue";
import UModalWrapper from "@/components/uikit/UModalWrapper.vue";
import type { INurse, IPhysician } from "@/types/user";

const isUserModalOpen = ref<boolean>(false);
const editUser = ref<INurse | IPhysician | null>(null);

const setIsUserModalOpen = (value: boolean) => {
  isUserModalOpen.value = value;
  if (!value) {
    editUser.value = null;
  }
};

const setEditUser = (value: INurse | IPhysician) => {
  editUser.value = value;
  isUserModalOpen.value = true;
};

provide("userModal", {
  isUserModalOpen,
  setIsUserModalOpen,
  setEditUser,
});
</script>

<template>
  <div class="app flex flex-col min-h-svh">
    <LayoutHeader
      class="fixed w-full z-10"
      @open-modal="() => setIsUserModalOpen(true)"
    />
    <RouterView class="relative top-[72px]" />

    <footer class="relative mt-auto ml-auto top-[72px]">
      Тестовое задание
    </footer>

    <teleport v-if="isUserModalOpen" to="body">
      <UModalWrapper @close-modal="() => setIsUserModalOpen(false)">
        <AddUserForm
          :user="editUser"
          :is-edit-mode="!!editUser"
          @close-modal="() => setIsUserModalOpen(false)"
        />
      </UModalWrapper>
    </teleport>
  </div>
</template>

<style scoped></style>
