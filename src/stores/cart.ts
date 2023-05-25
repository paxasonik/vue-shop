import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { callSuccess } from "@/utils/helper";
import type { IProduct } from "@/components/Cart/Product";

export const useCartStore = defineStore('cart', () => {
  const products = ref<Array<IProduct>>([]);
  const productsLength= computed((): number => products.value.reduce((acc, item ) => {
    return item.count + acc;
  }, 0));
  const totalPrice = computed((): number => products.value.reduce((acc, item) => {
    return (item.price * item.count) + acc
  }, 0));


  const changeProductsLength = ( id: number, count: number, colorId: number ) => {
    const product = products.value.find((item: IProduct) => item.id === id && item.color.id === colorId);
    if (product?.count) product.count = count
  };
  const deleteProduct = ( id: number, colorId: number ) => {
    products.value = products.value.filter((item: IProduct) => !(item.id === id && item.color.id === colorId));
    callSuccess("Товар удален из корзины");
  };

  return {
    products,
    productsLength,
    totalPrice,
    changeProductsLength,
    deleteProduct,
  }
})