<script setup lang="ts">
</script>

<template>
  <section class="cart">
    <form class="cart__form form">
      <slot name="content"/>
			<div class="cart__block">
				<slot name="sidebar"/>
			</div>
    </form>
  </section>
</template>