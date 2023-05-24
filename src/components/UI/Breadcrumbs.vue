<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router';

const route: any = useRoute();
const path = computed(() => route.name);
</script>

<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <router-link :to="{ name: 'catalog' }" class="breadcrumbs__link">
        Каталог
      </router-link>
    </li>
    <li class="breadcrumbs__item" v-if="path === 'cart' || path === 'order'">
      <router-link :to="{ name: 'cart' }" class="breadcrumbs__link">
        Корзина
      </router-link>
    </li>
    <li class="breadcrumbs__item" v-if="path === 'order'">
      <router-link :to="{ name: 'order' }" class="breadcrumbs__link">
        Оформление заказа
      </router-link>
    </li>
    <li class="breadcrumbs__item" v-if="path === 'sent'">
      <router-link :to="{ name: 'sent' }" class="breadcrumbs__link">
        Оформление заказа
      </router-link>
    </li>
  </ul>
</template>