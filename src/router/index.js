import { createWebHistory, createRouter } from "vue-router";
import Dasboard from "@/views/Dashboard.vue";
import n5 from "@/views/n5.vue";

const routes = [
  {
    path: "/",
    name: "Dashbaord",
    component: Dasboard,
  },
  {
    path: "/n5",
    name: "n5",
    component: n5,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;