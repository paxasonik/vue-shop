import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Array<Record<string, unknown> | null>>([]);
  const productsLength = computed(() => products.value.length);

  const getProducts = async () => {
    await axios.get('/src/mock-data/products.json').then((res) => {
      products.value = res.data.items
    });
  }


  return {
    products,
    productsLength,
    getProducts,
  }
})