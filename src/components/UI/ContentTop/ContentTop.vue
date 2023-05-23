<script setup lang="ts">
import Breadcrumbs from "@/components/UI/Breadcrumbs.vue";
import type {ContentTopProps} from "@/components/UI/ContentTop";

const props = defineProps<ContentTopProps>();
</script>

<template>
  <div class="content__top">
    <Breadcrumbs v-if="props.isBreadcrumbs"/>

    <h1 class="content__title">
      <slot name="title"/>
    </h1>
    <span class="content__info">
      <slot name="info"/>
    </span>
  </div>
</template>