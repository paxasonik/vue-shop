<script setup lang="ts">
import Color from "@/components/Catalog/Color.vue";
import { ProductProps } from "@/components/Catalog/Types/product"
import Counter from "@/components/Counter.vue";

const props = defineProps<ProductProps>();
</script>

<template>
  <li class="catalog__item">
    <img :src="props.product.imageUrl" alt="Название товара" class="catalog__pic">
    <h3 class="catalog__title">
      {{ props.product.title }}
    </h3>

    <span class="catalog__price">{{ props.product.price }} ₽</span>

      {{}}
    <ul class="colors colors--black">
      <Color v-for="color in props.product.colors" :key="color.id" :color="color" :productId="props.product.id" />
    </ul>
      <div class="catalog__row">
        <Counter class="catalog__counter"/>

        <button class="button button--primery" type="submit">
          <img src="@/assets/images/svg/header/cart.svg" alt="Корзина с товарами" width="30" height="21">
        </button>
      </div>
  </li>
</template>