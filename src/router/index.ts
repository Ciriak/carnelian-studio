import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Workshop from "../components/Workshop.vue";
import Settings from "../components/Settings.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/workshop",
    name: "Workshop",
    component: Workshop
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
