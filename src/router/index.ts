import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/talks',
    name: 'Talks',
    component: () => import('@/views/Talks.vue'),
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('@/views/Challenges.vue'),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('@/views/Schedule.vue'),
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import('@/views/Activities.vue'),
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import('@/views/Live.vue'),
  },
  {
    path: '/fullscreen',
    name: 'FullScreen',
    component: () => import('@/views/FullScreen.vue'),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('@/views/Rules.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
