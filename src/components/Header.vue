<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <header class="header">
    <div class="header__wrapper container">
      <span class="header__info">
          Каталог
      </span>

      <router-link :to="{ name: 'catalog' }" class="header__logo">
        <img src="@/assets/images/svg/header/logo-tech.svg" alt="Логотип интернет магазина Технозавррр">
      </router-link>

      <a class="header__tel" href="tel:88005555555">
        8 800 555 55 55
      </a>

      <router-link :to="{ name: 'cart' }" class="header__cart">
        <img src="@/assets/images/svg/header/cart.svg" alt="Корзина с товарами">
        <span class="header__count">{{ cartStore.productsLength }}</span>
      </router-link>
    </div>
  </header>
</template>