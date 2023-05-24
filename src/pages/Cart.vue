<script setup lang="ts">
import Product from "@/components/Cart/Product/Product.vue";
import ContentTop from "@/components/UI/ContentTop/ContentTop.vue";
import ContentCart from "@/components/UI/ContentCart/ContentCart.vue";
import { declOfNum } from "@/utils/helper";
import { declOfProduct } from "@/utils/constants";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
	<main class="content container">
		<Content-top :is-breadcrumbs="true">
			<template #title>
				Корзина
			</template>
			<template #info>
				{{ cartStore.productsLength + ' ' + declOfNum(cartStore.productsLength, declOfProduct) }}
			</template>
		</Content-top>

		<Content-cart v-if="cartStore.productsLength">
			<template #content>
				<ul class="cart__list">
					<Product v-for="product in cartStore.products" :key="product.id" :product="product"/>
				</ul>
			</template>
			<template #sidebar>
				<p class="cart__desc">
					Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
				</p>
				<p class="cart__price">
					Итого: <span>{{ cartStore.totalPrice }} ₽</span>
				</p>

				<router-link :to="{ name: 'order' }" class="cart__button button button--primery">
					Оформить заказ
				</router-link>
			</template>
		</Content-cart>

		<div class="cart__empty" v-else>
			Корзина пуста
		</div>

	</main>
</template>