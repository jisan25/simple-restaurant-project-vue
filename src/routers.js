import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/log-in",
    name: "Login",
    component: Login,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
