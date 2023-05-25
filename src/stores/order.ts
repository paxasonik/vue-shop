import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IProduct } from "@/components/Cart/Product";
// @ts-ignore
import type { Form } from "@/pages/Order.vue";


export const useOrderStore = defineStore('order', () => {
  const products = ref<Array<IProduct>>([]);
  const productsLength= ref<number>(0);
  const totalPrice = ref<number>(0);
  const form = ref<Form | null>(null);

  return {
    products,
    productsLength,
    totalPrice,
    form,
  }
})