<script setup lang="ts">
import UButton from "@/components/uikit/UButton.vue";
import UModalWrapper from "@/components/uikit/UModalWrapper.vue";

defineProps<{
  name: string;
}>();

defineEmits<{
  (e: "cancel-remove"): void;
  (e: "confirm-remove"): void;
}>();
</script>

<template>
  <UModalWrapper @close-modal="() => $emit('cancel-remove')">
    <div>
      <h3 class="text-xl font-bold text-blue-950 pt-1.5 pb-3 text-center mb-2">
        Вы уверены, что хотите удалить сотрудника {{ name }}?
      </h3>
      <div class="flex justify-between">
        <UButton theme="light-gray" @click="$emit('cancel-remove')">
          Отмена
        </UButton>
        <UButton theme="red" @click="$emit('confirm-remove')">
          Подтвердить
        </UButton>
      </div>
    </div>
  </UModalWrapper>
</template>

<style scoped></style>
