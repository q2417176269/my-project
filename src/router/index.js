import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashbord",
    children: [
      {
        path: "/dashbord",
        name: "dashbord",
        component: () => import("@/views/Dashbord.vue")
      },
      {
        path: "/base/menu-setting",
        name: "menu-setting",
        component: () => import("@/views/MenuSetting/index.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
