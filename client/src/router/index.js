import { createRouter, createWebHistory } from "vue-router";
import Songs from "../views/Songs.vue";

const routes = [
  {
    path: "/",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/playlist",
    name: "Playlist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "playlist" */ "../views/Playlist.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/more",
    name: "More",
    component: () => import(/* webpackChunkName: "more" */ "../views/More.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
