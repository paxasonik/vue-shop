import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const products = ref<Array<Record<string, unknown> | null>>([]);
  const productsLength= computed(() => products.value.reduce((acc, item) => {
    return item.count + acc;
  }, 0));
  const totalPrice = computed(() => products.value.reduce((acc, item) => {
    return (item.price * item.count) + acc
  }, 0));


  const changeProductsLength = ( id: number, count: number, colorId: number ) => {
    const product = products.value.find(item => item.id === id && item.color.id === colorId);
    product.count = count
  };
  const deleteProduct = ( id: number, colorId: number ) => {
    products.value = products.value.filter(item => !(item.id === id && item.color.id === colorId));
  };

  return {
    products,
    productsLength,
    totalPrice,
    changeProductsLength,
    deleteProduct,
  }
})