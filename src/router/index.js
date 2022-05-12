import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/random",
      name: "random",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/iqra/:id",
      name: "iqra",
      component: () => import("../views/AyatView.vue"),
    },

    {
      path: "/aboutme",
      name: "aboutme",
      component: () => import("../views/AboutMeView.vue"),
    },
    {
      path: "/logo",
      name: "logo",
      component: () => import("../views/LogoView.vue"),
    },
    {
      path: "/mushaf",
      name: "mushaf",
      component: () => import("../views/MushafView.vue"),
    },
    {
      path: "/indopak/:id",
      name: "indopak",
      component: () => import("../views/MushafIndopakView.vue"),
    },
  ],
});

export default router;
