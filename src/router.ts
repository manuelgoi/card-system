import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/GridViewMore.vue"),
    },
    {
      path: "/grid-view-more",
      name: "gridViewMore",
      component: () => import("./views/GridViewMore.vue"),
    },
    {
      path: "/grid-no-view-more",
      name: "gridNoViewMore",
      component: () => import("./views/GridViewNoMore.vue"),
    },
    {
      path: "/chin-timeline",
      name: "textOne",
      component: () => import("./views/ChinTimeLine.vue"),
    },
  ],
});

export default router;
