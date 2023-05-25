import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import type { IProduct } from "@/components/Catalog/Product";

export const useProductsStore = defineStore('products', () => {
  const products = ref<Array<IProduct>>([]);
  const productsLength = computed((): number => products.value.length);

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