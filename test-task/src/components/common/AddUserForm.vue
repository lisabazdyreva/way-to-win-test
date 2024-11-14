<script setup lang="ts">
import { ref } from "vue";
import type { UserBranchType } from "@/types/user";

defineProps<{
  type: "nurse" | "physician";
  isEditMode?: boolean;
}>();

const name = ref<string | null>(null);
const surname = ref<string | null>(null);
const fatherName = ref<string | null>(null);
const branch = ref<null | UserBranchType>(null);
const isChief = ref<boolean>(false);
</script>

<template>
  <form>
    <h3>
      <template v-if="isEditMode">Редактировать пользователя</template>
      <template v-else>Создать пользователя</template>
    </h3>

    <label>
      <span>Имя</span>
      <input :value="name" type="text" />
    </label>

    <label>
      <span>Фамилия</span>
      <input :value="surname" type="text" />
    </label>

    <label>
      <span>Отчество</span>
      <input :value="fatherName" type="text" />
    </label>

    <select :value="branch">
      <option :value="null">Выберите отделение</option>
    </select>

    <label>
      Хирургия
      <input name="branch" type="radio" :value="branch" />
    </label>

    <label>
      Кардиология
      <input name="branch" type="radio" :value="branch" />
    </label>

    <label>
      <span>Заведующий?</span>
      <input type="checkbox" :value="isChief" />
    </label>

    <button>Сохранить</button>
  </form>
</template>

<style scoped></style>
