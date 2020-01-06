import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Test from "../views/Test.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components:{
      header: Header,
      content: Home,
      footer: Footer
    }
  },
  {
    path: "/test",
    name: "test",
    component: {
      header: Header,
      content: Test,
      footer: Footer
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
