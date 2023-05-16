import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import AppLayout from '@/layouts/AppLayout.vue';
// @ts-ignore
import CatalogPage from '@/pages/CatalogPage.vue';
// @ts-ignore
import OrderPage from "@/pages/OrderPage.vue";
// @ts-ignore
import CartPage from "@/pages/CartPage.vue";
// @ts-ignore
import SentPage from "@/pages/SentPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'catalog',
          component: CatalogPage,
        },
        {
          path: '/order',
          name: 'order',
          component: OrderPage,
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartPage,
        },
        {
          path: '/sent',
          name: 'sent',
          component: SentPage,
        },
      ]
    }
  ]
})

export default router
