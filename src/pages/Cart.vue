<script setup lang="ts">
import Product from "@/components/Cart/Product.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
  <main class="content container">
    <div class="content__top">
      <Breadcrumbs/>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">3 товара</span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <Product/>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>32 970 ₽</span>
          </p>

          <router-link :to="{ name: 'order' }" class="cart__button button button--primery">
            Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>

</style>