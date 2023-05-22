<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import { init, reInit } from "./notification";
import Toastify, { Options } from "toastify-js";

export interface NotificationElement {
  toastify: ReturnType<typeof Toastify>;
  showToast: () => void;
  hideToast: () => void;
}

export interface NotificationProps {
  options?: Options;
  refKey?: string;
}

export type ProvideNotification = (el: NotificationElement) => void;

const props = defineProps<NotificationProps>();

const toastifyRef = ref<NotificationElement>();

const bindInstance = (el: NotificationElement) => {
  if (props.refKey) {
    const bind = inject<ProvideNotification>(`bind[${props.refKey}]`);
    if (bind) {
      bind(el);
    }
  }
};

const vNotificationDirective = {
  mounted(el: NotificationElement) {
    init(el, props);
  },
  updated(el: NotificationElement) {
    reInit(el);
  },
};

onMounted(() => {
  if (toastifyRef.value) {
    bindInstance(toastifyRef.value);
  }
});
</script>

<template>
  <div
    v-notification-directive
    ref="toastifyRef"
  >
    <slot></slot>
  </div>
</template>
