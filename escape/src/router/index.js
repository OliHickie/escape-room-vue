import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../layouts/GameArea.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'question-one',
          name: 'questionOne',
          component: () => import('../views/FootballRiddle.vue'),
        },
      ]
    },
  ]
})

export default router
