<script setup lang="ts">
import { ref } from "vue";
import Color from "@/components/Catalog/Color.vue";
import Counter from "@/components/Counter.vue";
import { ProductProps } from "@/components/Catalog/Types/product"

const props = defineProps<ProductProps>();

const colorId = ref('');
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
      <Color v-for="color in props.product.colors" :key="color.id" :color="color" :name="'color-' + props.product.id" v-model.number="colorId"/>
    </ul>
      <div class="catalog__row">
        <Counter class="catalog__counter"/>

        <button class="button button--primery" type="submit">
          <img src="@/assets/images/svg/header/cart.svg" alt="Корзина с товарами" width="30" height="21">
        </button>
      </div>
  </li>
</template>