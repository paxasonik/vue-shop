<script setup lang="ts">
import type { SelectProps, SelectEmit } from "@/components/UI/FormSelect";
import { Emit } from "@/utils/constants";

const props = defineProps<SelectProps>();
const emit = defineEmits<SelectEmit>();
const changeOption = (event: any) =>  {
  emit(Emit.UPDATE_VALUE, event.target.value)
}
</script>

<template>
  <label class="form__label">
    <select class="form__select" :name="props.name" :value="props.modelValue" @change="changeOption">
      <option disabled :value="0">Выберите из списка</option>
      <option
        v-for="option in props.options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.title }}
      </option>
    </select>
  </label>

</template>
