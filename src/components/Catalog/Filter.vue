<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Color from "@/components/Catalog/Color.vue";
import FormInput from "@/components/UI/FormInput.vue";
import FormSelect from "@/components/UI/FormSelect.vue";
import { useFilterStore } from "@/stores/filter";

const filterStore = useFilterStore();

const currentPriceFrom = ref<number>(0);
const currentPriceTo = ref<number>(0);
const currentCategoryId = ref<number>(0);
const currentColorId = ref<number>(0);

const submit = () => {
  filterStore.priceFrom = currentPriceFrom.value;
  filterStore.priceTo = currentPriceTo.value;
  filterStore.categoryId = currentCategoryId.value;
  filterStore.colorId = currentColorId.value;
}

const reset = () => {
  currentPriceFrom.value = 0;
  currentPriceTo.value = 0;
  currentCategoryId.value = 0;
  currentColorId.value = 0;

  filterStore.priceFrom = 0;
  filterStore.priceTo = 0;
  filterStore.categoryId = 0;
  filterStore.colorId = 0;
}

onBeforeMount(() => {
  filterStore.getCategories();
  filterStore.getColors();
})
</script>

<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form class="filter__form form">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <Form-input
          class="form__label--price"
          name="priceFrom"
          label="От"
          type="text"
          v-model.number="currentPriceFrom"
          data-maska-tokens="X:[0-9]:multiple"
          data-maska="X"
        />
        <Form-input
          class="form__label--price"
          name="priceTo"
          label="До"
          type="text"
          v-model.number="currentPriceTo"
          data-maska-tokens="X:[0-9]:multiple"
          data-maska="X"
        />
      </fieldset>

        <fieldset class="form__block">
          <legend class="form__legend">Категория</legend>
            <Form-select :options="filterStore.categories" name="category" v-model.number="currentCategoryId"/>
        </fieldset>

        <fieldset class="form__block">
          <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <Color v-for="color in filterStore.colors" :key="color.id" :color="color" name="color-filter" v-model.number="currentColorId"/>
            </ul>
        </fieldset>

        <button class="filter__submit button button--primery" type="submit" @click.prevent="submit">
          Применить
        </button>
        <button class="filter__reset button button--second" type="button" @click.prevent="reset">
          Сбросить
        </button>
      </form>
  </aside>
</template>