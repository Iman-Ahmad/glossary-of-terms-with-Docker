import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'glossary',
      component: () => import('../views/Glossary.vue'),
    },
    {
      path: '/semantic',
      name: 'semantic',
      component: () => import('../views/Semantic.vue'),
    }
  ],
})

export default router;
