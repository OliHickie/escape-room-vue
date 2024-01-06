import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/GameArea.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'game',
          name: 'game',
          component: () => import('../views/GamePlay.vue'),
          meta: {
            question: 1,
          }
        },
      ]
    },
  ]
})

export default router
