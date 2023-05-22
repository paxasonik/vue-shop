import {computed, ref} from 'vue'
import { defineStore } from 'pinia'


export const useOrderStore = defineStore('order', () => {
  const products = ref<Array<Record<string, unknown> | null>>([]);
  const productsLength= ref(0);
  const totalPrice = ref(0);
  const form = ref({});

  return {
    products,
    productsLength,
    totalPrice,
    form,
  }
})