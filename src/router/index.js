import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
    props: true
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
