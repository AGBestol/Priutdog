import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
  },
  {
    path: "/our-dogs",
    name: "ourDogs",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/OurDogsView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/BlogView.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HelpView.vue"),
  },
  {
    path: "/Selection",
    name: "Selection",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SelectionView.vue"),
  },
  {
    path: "/Donate",
    name: "Donate",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/DonateView.vue"),
  },
  // {
  //   path: "/complexes",
  //   name: "complexes",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ComplexesView.vue"),
  // },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
