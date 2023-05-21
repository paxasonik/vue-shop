<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { CounterEmit, CounterProps } from "@/components/UI/Counter/type";
import { Emit } from "@/utils/constants";

const props = defineProps<CounterProps>();
const emit = defineEmits<CounterEmit>();
const count = ref(0);

watchEffect(() => (
  count.value = props.count
));
const minus = () => {
  if (count.value <= 1) return
  count.value -= 1
  emit(Emit.UPDATE_VALUE, count.value)
}

const plus = () => {
  count.value += 1
  emit(Emit.UPDATE_VALUE, count.value)
}
</script>

<template>
  <div class="form__counter">
    <button type="button" @click="minus">
      <img src="@/assets/images/svg/icon-minus.svg" alt="Убрать один товар">
    </button>

    <input type="text" name="count" v-model="count" readonly>

    <button type="button" @click="plus">
      <img src="@/assets/images/svg/icon-plus.svg" alt="Добавить один товар">
    </button>
  </div>
</template>