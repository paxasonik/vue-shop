<script setup lang="ts">

</script>

<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <router-link :to="{ name: 'catalog' }" class="breadcrumbs__link">
        Каталог
      </router-link>
    </li>
    <li class="breadcrumbs__item">
      <router-link :to="{ name: 'cart' }" class="breadcrumbs__link">
        Корзина
      </router-link>
    </li>
    <li class="breadcrumbs__item">
      <router-link :to="{ name: 'order' }" class="breadcrumbs__link">
        Оформление заказа
      </router-link>
    </li>
  </ul>
</template>