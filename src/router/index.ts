import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CardComponent from "@/views/Card.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: CardComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Card.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
