import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("@/layouts/Main.vue"),
      children: [
        {
          path: '/',
          name: 'catalog',
          component: () => import("@/pages/Catalog.vue"),
        },
        {
          path: '/order',
          name: 'order',
          component: () => import("@/pages/Order.vue"),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import("@/pages/Cart.vue"),
        },
        {
          path: '/sent',
          name: 'sent',
          component: () => import("@/pages/Sent.vue"),
        },
        {
          path: '/:pathMatch(.*)*',
          name: "error-page",
          component: () => import("@/pages/ErrorPage.vue"),
        },
      ]
    },
  ]
})

export default router
