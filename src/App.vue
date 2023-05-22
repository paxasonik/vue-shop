<script setup lang="ts">
import { RouterView } from 'vue-router'
import Notification from "@/components/UI/Notification";
</script>

<template>
  <RouterView />
  <Notification id="success-notification-content">
    <div class="notification__content success-text"></div>
  </Notification>
  <Notification id="failed-notification-content">
    <div class="notification__content error-text"></div>
  </Notification>
</template>
