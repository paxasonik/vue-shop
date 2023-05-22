<script setup lang="ts">
import { ref } from "vue";
import Color from "@/components/Catalog/Color/Color.vue";
import Counter from "@/components/UI/Counter/Counter.vue";
import { ProductProps } from "@/components/Catalog/Product";
import { callError, callSuccess } from "@/utils/helper";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps<ProductProps>();

const colorId = ref('');
const count = ref(1);

const addCart = () => {
  if (!colorId.value) {
    callError("Выберите цвет");
    return
  }
  if (count.value < 1) {
    callError("Неверное количество");
    return
  }

  const product = cartStore.products.find(item => item.id === props.product.id && item.color.id === colorId.value)
  if (product) {
    product.count += count.value;
    callSuccess("Товар добавлен в корзину");
  } else {
    cartStore.products.push({
      id: props.product.id,
      title: props.product.title,
      price: props.product.price,
      imageUrl: props.product.imageUrl,
      count: count.value,
      color: props.product.colors.find(item => item.id === colorId.value),
    })
    callSuccess("Товар добавлен в корзину");
  }
}
</script>

<template>
  <li class="catalog__item">
    <img :src="props.product.imageUrl" :alt="props.product.title" class="catalog__pic">
    <h3 class="catalog__title">
      {{ props.product.title }}
    </h3>

    <span class="catalog__price">{{ props.product.price }} ₽</span>

    <ul class="colors colors--black">
      <Color v-for="color in props.product.colors" :key="color.id" :color="color" :name="'color-' + props.product.id" v-model.number="colorId"/>
    </ul>
      <div class="catalog__row">
        <Counter class="catalog__counter" v-model.number="count" :count="count"/>

        <button class="button button--primery" type="submit" @click="addCart">
          <img src="@/assets/images/svg/header/cart.svg" alt="Корзина с товарами" width="30" height="21">
        </button>
      </div>
  </li>
</template>