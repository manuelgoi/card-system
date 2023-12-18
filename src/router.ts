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
    {
      path: "/scanner",
      name: "scanner",
      component: () => import("./views/ScannerWeb.vue"),
    },
    {
      path: "/bar-scanner",
      name: "barScanner",
      component: () => import("./views/BarScanner.vue"),
    },
    {
      path: "/test-bar-scanner",
      name: "testBarScanner",
      component: () => import("./views/TestBarScanner.vue"),
    },
  ],
});

export default router;
