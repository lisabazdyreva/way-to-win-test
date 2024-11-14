<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><RouterLink to="/physicians">Врачи</RouterLink></li>
          <li><RouterLink to="/nurses">Медсестры</RouterLink></li>
        </ul>
      </nav>
    </header>
    <RouterView />
    <footer>Footer</footer>
  </div>
</template>

<style scoped></style>
