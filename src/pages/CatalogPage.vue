<script setup lang="ts">
import CatalogFilter from "@/components/Catalog/CatalogFilter.vue";
import CatalogItem from "@/components/Catalog/CatalogItem.vue";
import CatalogPagination from "@/components/Catalog/CatalogPagination.vue";
</script>

<template>
    <main class="content container">
        <div class="content__top content__top--catalog">
            <h1 class="content__title">
                Каталог
            </h1>
            <span class="content__info">152 товара</span>
        </div>

        <div class="content__catalog">
            <catalog-filter/>

            <section class="catalog">
                <ul class="catalog__list">
                    <catalog-item/>
                </ul>
                <catalog-pagination/>
            </section>
        </div>
    </main>
</template>