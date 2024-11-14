<script setup lang="ts">
import { ref } from "vue";

import physiciansMocks from "@/mocks/physicians.json";
import type { IPhysician } from "@/types/user";
import AddUserForm from "@/components/common/AddUserForm.vue";

const data = physiciansMocks as Array<IPhysician>;
const physicians = ref<Array<IPhysician> | null>(data);
</script>

<template>
  <main>
    <h1>Таблица врачей</h1>

    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Фамилия</th>
          <th>Отделение</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="physician in physicians" :key="physician.id">
          <td>
            <div>
              <span v-if="physician?.isChief">Заведующий</span>
              {{ physician.name }}
            </div>
          </td>
          <td>{{ physician.fatherName }}</td>
          <td>{{ physician.surname }}</td>
          <td>{{ physician.branch }}</td>
          <td><button>Удалить</button></td>
          <td><button>Изменить</button></td>
        </tr>
      </tbody>
    </table>

    <AddUserForm type="physician" />
  </main>
</template>

<style scoped></style>
