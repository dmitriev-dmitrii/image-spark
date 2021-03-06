import Vue from "vue";
import VueRouter from "vue-router";
import Users from "@/views/Users.vue";
import User from "@/views/User.vue";
import Error from "@/views/Error.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },

  {
    path: "/:login",
    name: "user",
    component: User,
  },

  {
    path: "*",
    name: "Error",
    props: true,
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
