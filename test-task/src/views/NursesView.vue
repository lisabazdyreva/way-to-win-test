<script setup lang="ts">
import { ref } from "vue";

import nursesMocks from "@/mocks/nurses.json";
import type { INurse } from "@/types/user";

const data = nursesMocks as Array<INurse>;
const nurses = ref<Array<INurse> | null>(data);
</script>

<template>
  <main>
    <h1>Таблица медсёстер</h1>

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
        <tr v-for="nurse in nurses" :key="nurse.id">
          <td>{{ nurse.name }}</td>
          <td>{{ nurse.fatherName }}</td>
          <td>{{ nurse.surname }}</td>
          <td>{{ nurse.branch }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped></style>
