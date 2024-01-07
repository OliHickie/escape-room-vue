import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/game',
      component: () => import('../views/GamePlay.vue'),
    },
    {
      path: '/out-of-time',
      component: () => import('../views/OutOfTime.vue'),
    }
  ]
})

export default router
