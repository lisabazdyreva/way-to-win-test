import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NursesView from "@/views/NursesView.vue";
import PhysiciansView from "@/views/PhysiciansView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/nurses",
      name: "nurses",
      component: NursesView,
    },
    {
      path: "/physicians",
      name: "physicians",
      component: PhysiciansView,
    },
  ],
});

export default router;
