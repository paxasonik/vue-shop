<script setup lang="ts">
import Filter from "@/components/Catalog/Filter.vue";
import Product from "@/components/Catalog/Product.vue";
import Pagination from "@/components/Catalog/Pagination.vue";
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
            <Filter/>

            <section class="catalog">
                <ul class="catalog__list">
                    <Product/>
                </ul>
                <Pagination/>
            </section>
        </div>
    </main>
</template>