<script setup lang="ts">
import { ColorProps } from "./Types/color"

const props = defineProps<ColorProps>();
</script>

<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" :name="'color-' + props.productId" :value="props.color.code">
      <span class="colors__value" :style="{ backgroundColor: props.color.code }"></span>
    </label>
  </li>
</template>