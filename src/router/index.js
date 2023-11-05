import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/Home.vue";
import AboutView from "../view/About.vue";
import PersonView from "../view/Person.vue";
import NotFoundView from "../view/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  { path: "/person/:id", name: "Person", component: PersonView },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
