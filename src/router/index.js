import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const routes = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
