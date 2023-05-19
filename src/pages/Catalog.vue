<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import Filter from "@/components/Catalog/Filter.vue";
import Product from "@/components/Catalog/Product.vue";
import Pagination from "@/components/Catalog/Pagination.vue";
import { declOfNum } from "@/utils/helper"
import { declOfProduct, pageOne, productsPerPage, maxDisplayedPages } from "@/utils/constants"
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();

const page = ref(pageOne);

const products = computed(() => {
  const offset = (page.value - 1) * productsPerPage;
  return productsStore.products.slice(offset, offset + productsPerPage)
});

onBeforeMount(() => {
    productsStore.getProducts()
})
</script>

<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info">
          {{ productsStore.productsLength + ' ' + declOfNum( productsStore.productsLength, declOfProduct ) }}
        </span>
    </div>

    <div class="content__catalog">
      <Filter/>
      <section class="catalog">
        <ul class="catalog__list">
          <Product v-for="product in products" :key="product.id" :product="product"/>
        </ul>
        <Pagination v-model:page="page" :count="productsStore.productsLength" :per-page="productsPerPage" :max-displayed-pages="maxDisplayedPages"/>
      </section>
    </div>
  </main>
</template>