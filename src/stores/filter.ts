import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Colors {
  id: number;
  title: string;
  code: string;
  [key: string]: any;
}
interface Categories {
  id: number;
  title: string;
  [key: string]: any;
}

export const useFilterStore = defineStore('filter', () => {

  const categories = ref<Array<Categories>>([]);
  const colors = ref<Array<Colors>>([]);
  const priceFrom = ref<number>(0);
  const priceTo = ref<number>(0);
  const categoryId = ref<number>(0);
  const colorId = ref<number>(0);

  const getCategories = async () => {
    await axios.get('/mock-data/categories-filter.json').then((res) => {
      categories.value = res.data.items
    });
  };

  const getColors = async () => {
    await axios.get('/mock-data/colors-filter.json').then((res) => {
      colors.value = res.data.items
    });
  };


  return {
    categories,
    colors,
    priceFrom,
    priceTo,
    categoryId,
    colorId,
    getCategories,
    getColors,
  }
})