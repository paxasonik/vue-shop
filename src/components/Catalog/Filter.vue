<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref, watch } from "vue";
import Color from "@/components/UI/Color/Color.vue";
import FormInput from "@/components/UI/FormInput/FormInput.vue";
import FormSelect from "@/components/UI/FormSelect/FormSelect.vue";
import { useFilterStore } from "@/stores/filter";

const filterStore = useFilterStore();

const currentPriceFrom = ref<number>(0);
const currentPriceTo = ref<number>(0);
const currentCategoryId = ref<number>(0);
const currentColorId = ref<number>(0);
const windowWidth = ref<number>(window.innerWidth);
const isShowFilter = ref<boolean>(true);

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

const activeFilter = () => {
  isShowFilter.value = !isShowFilter.value
}
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
}

watch(windowWidth, (newVal, oldVal) => {
  isShowFilter.value = newVal >= 992
});

onBeforeMount(() => {
  filterStore.getCategories();
  filterStore.getColors();
  window.addEventListener('resize', updateWidth)
  isShowFilter.value = windowWidth.value >= 992
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>
    <button class="filter__show" @click="activeFilter">Фильтры</button>

    <form class="filter__form form" v-if="isShowFilter">
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
              <Color
                v-for="color in filterStore.colors"
                :key="color.id"
                :color="color"
                name="color-filter"
                :isChecked="currentColorId === color.id"
                v-model.number="currentColorId"
              />
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