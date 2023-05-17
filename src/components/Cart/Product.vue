<script setup lang="ts">

</script>

<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img src="@/assets/images/catalog/pic-square-3.jpg" width="120" height="120" srcset="@/assets/images/catalog/pic-square-3@2x.jpg 2x" alt="Название товара">
    </div>
    <h3 class="product__title">
      Электрический дрифт-карт Razor Lil’ Crazy
    </h3>
    <p class="product__info product__info--color">
      Цвет:
      <span>
        <i style="background-color: #FF6B00"></i>
        Оранжевый
      </span>
    </p>
    <span class="product__code">Артикул: 1501230</span>

    <div class="product__counter form__counter">
      <button type="button">
        <img src="@/assets/images/svg/cart/icon-minus.svg" alt="Убрать один товар" width="10" height="10">
      </button>

      <input type="text" value="1" name="count">

      <button type="button">
        <img src="@/assets/images/svg/cart/icon-plus.svg" alt="Добавить один товар" width="10" height="10">
      </button>
    </div>

    <b class="product__price">
      8 990 ₽
    </b>

    <button class="product__del button-del" type="button">
      <img src="@/assets/images/svg/cart/icon-close.svg" alt="Удалить товар из корзины" width="20" height="20">
    </button>
  </li>
</template>