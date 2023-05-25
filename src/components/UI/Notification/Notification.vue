<script setup lang="ts">
import { ref, onMounted, inject } from "vue";
import { init, reInit } from "@/components/UI/Notification/notification";
import Toastify from "toastify-js";
import type { Options } from "toastify-js";

export interface NotificationElement {
  toastify: ReturnType<typeof Toastify>;
  showToast: () => void;
  hideToast: () => void;
  [key: string]: any;
}

export interface NotificationProps {
  options?: Options;
  refKey?: string;
  [key: string]: any;
}

export type ProvideNotification = (el: NotificationElement) => void;

const props = defineProps<NotificationProps>();

const toastifyRef = ref<NotificationElement>();

const bindInstance = (el: NotificationElement | undefined) => {
  if (props.refKey) {
    const bind = inject<ProvideNotification>(`bind[${props.refKey}]`);
    if (bind && el) {
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
