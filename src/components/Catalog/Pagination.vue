<script setup lang="ts">

</script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow pagination__link--disabled">
        <img src="@/assets/images/svg/catalog/icon-arrow-left.svg" alt="Предыдущая страница" width="8" height="14">
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--current">1</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">2</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">3</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">4</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">...</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#">10</a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" href="#">
        <img src="@/assets/images/svg/catalog/icon-arrow-right.svg" alt="Следующая страница" width="8" height="14">
      </a>
    </li>
  </ul>
</template>