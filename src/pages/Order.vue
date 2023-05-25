<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { useRouter } from "vue-router";
import ContentTop from "@/components/UI/ContentTop/ContentTop.vue";
import FormInput from "@/components/UI/FormInput/FormInput.vue";
import ContentCart from "@/components/UI/ContentCart/ContentCart.vue";
import { declOfNum } from "@/utils/helper";
import { declOfProduct } from "@/utils/constants";
import { useOrderStore } from "@/stores/order";
import { useCartStore } from "@/stores/cart";

const orderStore = useOrderStore();
const cartStore = useCartStore();
const router = useRouter();

export interface Form {
  name: string;
  address: string;
  phone: string;
  email: string;
  comments: string;
  delivery: number;
  pay: string;
  [key: string]: any;
}

const isChangedForm = ref<boolean>(false);
const form = ref<Form>({
  name: '',
  address: '',
  phone: '',
  email: '',
  comments: '',
  delivery: 0,
  pay: '',
});

const submit = () => {
  orderStore.form = form.value;
  orderStore.products = cartStore.products;
  orderStore.productsLength = cartStore.productsLength;
  orderStore.totalPrice = cartStore.totalPrice;
  cartStore.products = [];
  router.push({ name: 'sent'});
}

watch(() => form.value, (newVal, oldVal) => {
  isChangedForm.value = newVal.name !== '' &&
    newVal.address !== '' &&
    newVal.phone !== '' &&
    newVal.email !== '' &&
    newVal.pay !== '' &&
    true
}, { deep: true });

onBeforeMount(() => {
  if (!cartStore.products.length) {
    router.push({ name: 'cart'});
  }
})

</script>

<template>
  <main class="content container">
    <Content-top :is-breadcrumbs="true">
      <template #title>
        Корзина
      </template>
      <template #info>
        {{ cartStore.productsLength + ' ' + declOfNum( cartStore.productsLength, declOfProduct ) }}
      </template>
    </Content-top>

    <Content-cart>
      <template #content>
        <div class="cart__field">
          <div class="cart__data">
            <Form-input
              name="name"
              placeholder="Введите ваше полное имя"
              label="ФИО"
              type="text"
              v-model="form.name"
              data-maska="X"
              data-maska-tokens="X:[а-яёА-ЯЁ\s-]:multiple"
            />

            <Form-input
              name="address"
              placeholder="Введите ваш адрес"
              label="Адрес доставки"
              type="text"
              v-model="form.address"
              data-maska="X"
              data-maska-tokens='X:[0-9а-яёА-ЯЁ\s.-\/",]:multiple'
            />

            <Form-input
              name="phone"
              placeholder="Введите ваш телефон"
              label="Телефон"
              type="tel"
              v-model="form.phone"
              data-maska="+7 (X##) ###-##-##"
              data-maska-tokens="X:[489]"
            />

            <Form-input
              name="email"
              placeholder="Введи ваш Email"
              label="Email"
              type="email"
              v-model="form.email"
              data-maska="X@X.X"
              data-maska-tokens="X:[0-9a-zA-Z.-_@]:multiple"
            />

            <label class="form__label">
              <textarea class="form__input form__input--area" name="comments" placeholder="Ваши пожелания" v-model="form.comments"></textarea>
              <span class="form__value">Комментарий к заказу</span>
            </label>
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" v-model.number="form.delivery" :value="0">
                  <span class="options__value">Самовывоз <b>бесплатно</b></span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" v-model.number="form.delivery" :value="500">
                  <span class="options__value">Курьером <b>500 ₽</b></span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" v-model="form.pay" value="card">
                  <span class="options__value">Картой при получении</span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" v-model="form.pay" value="cash">
                  <span class="options__value">Наличными при получении</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template #sidebar>
        <ul class="cart__orders">
          <li class="cart__order" v-for="product in cartStore.products" :key="product.id">
            <h3>{{ product.title }}</h3>
            <b>{{ product.price }} ₽</b>
          </li>
        </ul>

        <div class="cart__total">
          <p v-if="form.delivery === 500">Доставка: <b>500 ₽</b></p>
          <p>Итого: <b>{{ cartStore.productsLength }}</b> товара на сумму <b>{{ form.delivery === 500 ? cartStore.totalPrice + form.delivery : cartStore.totalPrice }} ₽</b></p>
        </div>

        <button class="cart__button button button--primery" type="submit" @click.prevent="submit" :disabled="!isChangedForm">
          Оформить заказ
        </button>
      </template>
    </Content-cart>
  </main>
</template>