import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainView from '@/components/NewsList.vue'
import CommentView from '@/views/NewsOverview.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/news/:id',
    name: 'NewsOverviewView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsOverview.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
