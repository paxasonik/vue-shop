<script setup lang="ts">
import Product from "@/components/Cart/Product/Product.vue";
import Breadcrumbs from "@/components/UI/Breadcrumbs.vue";
import { declOfNum } from "@/utils/helper";
import { declOfProduct } from "@/utils/constants";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <main class="content container">
    <div class="content__top">
      <Breadcrumbs/>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">{{ cartStore.productsLength + ' ' + declOfNum( cartStore.productsLength, declOfProduct ) }}</span>
    </div>

    <section class="cart" v-if="cartStore.productsLength">
      <form class="cart__form form">
        <ul class="cart__list">
          <Product v-for="product in cartStore.products" :key="product.id" :product="product"/>
        </ul>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ cartStore.totalPrice }} ₽</span>
          </p>

          <router-link :to="{ name: 'order' }" class="cart__button button button--primery">
            Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
    <div class="" v-else>
      Корзина пуста
    </div>
  </main>
</template>