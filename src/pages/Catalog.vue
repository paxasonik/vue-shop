<script setup lang="ts">
import { ref, computed, onBeforeMount, onBeforeUnmount, watch } from "vue";
import Filter from "@/components/Catalog/Filter.vue";
import Product from "@/components/Catalog/Product/Product.vue";
import Pagination from "@/components/Catalog/Pagination/Pagination.vue";
import ContentTop from "@/components/UI/ContentTop/ContentTop.vue";
import type { IProduct } from "@/components/Catalog/Product";
import { declOfNum } from "@/utils/helper";
import { declOfProduct, pageOne, productsPerPage, maxDisplayedPages } from "@/utils/constants";
import { useProductsStore } from "@/stores/products";
import { useFilterStore } from "@/stores/filter";

const productsStore = useProductsStore();
const filterStore = useFilterStore();

const page = ref<number>(pageOne);

const filterProducts = computed((): Array<IProduct> => {
  if (!filterStore.priceFrom && !filterStore.priceTo && !filterStore.categoryId && !filterStore.colorId) {
    return productsStore.products;
  } else {
    let products: Array<IProduct> = productsStore.products;
    if(filterStore.priceFrom > 0) {
      products = Object.values(products).filter((product: IProduct) => product.price > filterStore.priceFrom);
    }
    if(filterStore.priceTo > 0) {
      products = Object.values(products).filter((product: IProduct) => product.price < filterStore.priceTo);
    }
    if(filterStore.categoryId) {
      products = Object.values(products).filter((product: IProduct) => product.category === filterStore.categoryId);
    }
    if(filterStore.colorId) {
      products = Object.values(products).filter((item: IProduct) => {
        return item.colors.some((color: IProduct) => color.id === filterStore.colorId);
      });
    }
    return products;
  }
});

const products = computed((): Array<IProduct> => {
  const offset = (page.value - 1) * productsPerPage;
  return filterProducts.value.slice(offset, offset + productsPerPage)
});

watch(() => [filterStore.priceFrom, filterStore.priceTo, filterStore.categoryId, filterStore.colorId], ( newValue ) => {
  page.value = pageOne;
});

onBeforeMount(() => {
    productsStore.getProducts()
})
onBeforeUnmount(() => {
  filterStore.priceFrom = 0;
  filterStore.priceTo = 0;
  filterStore.categoryId = 0;
  filterStore.colorId = 0;
});
</script>

<template>
  <main class="content container">
    <Content-top :is-breadcrumbs="false" class="content__top--catalog">
      <template #title>
        Каталог
      </template>
      <template #info>
        {{ filterProducts.length + ' ' + declOfNum( productsStore.productsLength, declOfProduct ) }}
      </template>
    </Content-top>

    <div class="content__catalog">
      <Filter/>
      <section class="catalog" v-if="filterProducts.length">
        <ul class="catalog__list">
          <Product v-for="product in products" :key="product.id" :product="product"/>
        </ul>
        <Pagination v-model:page="page" :count="filterProducts.length" :per-page="productsPerPage" :max-displayed-pages="maxDisplayedPages"/>
      </section>
      <div class="" v-else>
        Товар не найден
      </div>
    </div>
  </main>
</template>