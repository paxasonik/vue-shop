<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import Counter from "@/components/UI/Counter/Counter.vue";
import type { ProductProps } from "@/components/Cart/Product/index";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps<ProductProps>();
const count = ref(0);

watchEffect(() => (
  count.value = props.product.count
));

watch(count, (newVal, oldVal) => {
  cartStore.changeProductsLength( props.product.id, newVal, props.product.color.id )
});
</script>

<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="props.product.imageUrl" :alt="props.product.title" class="catalog__pic" width="120" height="120">
    </div>
    <h3 class="product__title">
      {{ props.product.title }}
    </h3>
    <p class="product__info product__info--color">
      Цвет:
      <span>
        <i :style="{ backgroundColor: props.product.color.code }"></i>
        {{ props.product.color.title }}
      </span>
    </p>

    <Counter class="catalog__counter" v-model.number="count" :count="count"/>

    <b class="product__price">
      {{ props.product.price }} ₽
    </b>

    <button class="product__del button-del" type="button" @click="cartStore.deleteProduct( props.product.id, props.product.color.id )">
      <img src="@/assets/images/svg/cart/icon-close.svg" alt="Удалить товар из корзины" width="20" height="20">
    </button>
  </li>
</template>