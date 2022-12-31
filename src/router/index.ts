import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainView from '@/views/MainView.vue'
import CommentView from '@/views/CommentView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/comment',
    name: 'comment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "comment" */ '../views/CommentView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
