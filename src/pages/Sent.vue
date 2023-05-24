<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import ContentTop from "@/components/UI/ContentTop/ContentTop.vue";
import ContentCart from "@/components/UI/ContentCart/ContentCart.vue";
import { useOrderStore } from "@/stores/order";

const orderStore = useOrderStore();
const router = useRouter();

onBeforeMount(() => {
  if (!orderStore.products.length) {
    router.push({ name: 'cart'});
  }
})
onBeforeUnmount(() => {
  orderStore.products = [];
})
</script>

<template>
  <main class="content container">
    <Content-top :is-breadcrumbs="true">
      <template #title>
          Заказ оформлен <span>№ 23621</span>
      </template>
    </Content-top>

    <Content-cart>
      <template #content>
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
            Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key">Получатель</span>
              <span class="dictionary__value">{{ orderStore.form.name }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">Адрес доставки</span>
              <span class="dictionary__value">{{ orderStore.form.address }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">Телефон</span>
              <span class="dictionary__value">{{ orderStore.form.phone }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">Email</span>
              <span class="dictionary__value">{{ orderStore.form.email }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">Способ оплаты</span>
              <span class="dictionary__value">{{ orderStore.form.pay === 'cart' ? 'Картой при получении' : 'Наличными при получении' }}</span>
            </li>
          </ul>
        </div>
      </template>
      <template #sidebar>
        <ul class="cart__orders">
          <li class="cart__order" v-for="product in orderStore.products" :key="product.id">
            <h3>{{ product.title }}</h3>
            <b>{{ product.price }} ₽</b>
          </li>
        </ul>

        <div class="cart__total">
          <p v-if="orderStore.form.delivery === 500">Доставка: <b>500 ₽</b></p>
          <p>Итого: <b>{{ orderStore.productsLength }}</b> товара на сумму <b>{{ orderStore.form.delivery === 500 ? orderStore.totalPrice + orderStore.form.delivery : orderStore.totalPrice }} ₽</b></p>
        </div>
      </template>
    </Content-cart>
  </main>
</template>