import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Main from '@/layouts/Main.vue';
// @ts-ignore
import Catalog from '@/pages/Catalog.vue';
// @ts-ignore
import Order from "@/pages/Order.vue";
// @ts-ignore
import Cart from "@/pages/Cart.vue";
// @ts-ignore
import Sent from "@/pages/Sent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'catalog',
          component: Catalog,
        },
        {
          path: '/order',
          name: 'order',
          component: Order,
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart,
        },
        {
          path: '/sent',
          name: 'sent',
          component: Sent,
        },
      ]
    }
  ]
})

export default router
