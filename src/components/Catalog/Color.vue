<script setup lang="ts">
import { ColorProps, ColorEmit } from "@/components/Catalog/Types/color"
import { Emit } from "@/utils/constants";

const props = defineProps<ColorProps>();
const emit = defineEmits<ColorEmit>();

const updateInput = (event) =>  {
  emit(Emit.UPDATE_VALUE, event.target.value)
}
</script>

<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" :name="props.name" @change="updateInput" :value="props.color.id">
      <span class="colors__value" :style="{ backgroundColor: props.color.code }"></span>
    </label>
  </li>
</template>