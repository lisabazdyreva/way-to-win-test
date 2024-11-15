import { createRouter, createWebHistory } from "vue-router";
import NursesView from "@/views/NursesView.vue";
import PhysiciansView from "@/views/PhysiciansView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/physicians",
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
