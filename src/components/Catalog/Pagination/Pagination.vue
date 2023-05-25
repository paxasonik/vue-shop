<script setup lang="ts">
import { computed } from "vue";
import type { PaginationProps, PaginationEmit } from "@/components/Catalog/Pagination";
import { Emit, paginationDisabledClass, paginationCurrentClass, pageOne } from "@/utils/constants";

const props = defineProps<PaginationProps>();
const emit = defineEmits<PaginationEmit>();

const totalPages = computed((): number => Math.ceil(props.count / props.perPage));

const pages = computed((): Array<number> => {
  const halfDisplayed = Math.floor(props.maxDisplayedPages / 2);
  let startPage = Math.max(pageOne, props.page - halfDisplayed);
  const endPage = Math.min(totalPages.value, startPage + props.maxDisplayedPages - 1);
  startPage = Math.max(pageOne, endPage - props.maxDisplayedPages + 1);
  return Array(endPage - startPage + 1).fill(0).map((item, index) => startPage + index);
});

const changePage = (page: number) => {
  emit(Emit.UPDATE_PAGE, page)
};

const prevPage = (page: number) => {
  if (page <= 1) return
  emit(Emit.UPDATE_PAGE, props.page - 1)
};

const nextPage = (page: number) => {
  if (page >= totalPages.value) return
  emit(Emit.UPDATE_PAGE, props.page + 1)
}

</script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        :class="{ [paginationDisabledClass]: props.page === pageOne }"
        @click.prevent="prevPage(props.page)"
      >
        <img src="@/assets/images/svg/catalog/icon-arrow-left.svg" alt="Предыдущая страница">
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        href="#"
        class="pagination__link"
        :class="{ [paginationCurrentClass]: pageNumber === props.page }"
        @click.prevent="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        :class="{ [paginationDisabledClass]: props.page === totalPages }"
        @click.prevent="nextPage(props.page)"
      >
        <img src="@/assets/images/svg/catalog/icon-arrow-right.svg" alt="Следующая страница">
      </a>
    </li>
  </ul>
</template>