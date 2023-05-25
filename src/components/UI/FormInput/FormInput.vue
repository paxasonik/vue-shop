<script setup lang="ts">
import type { InputProps, InputEmit } from "@/components/UI/FormInput";
import { Emit } from "@/utils/constants";
import { vMaska } from 'maska';

const props = defineProps<InputProps>();
const emit = defineEmits<InputEmit>();
const updateInput = (event: any) =>  {
  emit(Emit.UPDATE_VALUE, event.target.value)
}
</script>

<template>
  <label class="form__label">
    <input
      class="form__input"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="updateInput"
      v-maska
      :data-maska="props.dataMaska"
      :data-maska-tokens="props.dataMaskaTokens"
    >
    <span class="form__value">{{ props.label }}</span>
  </label>
</template>
