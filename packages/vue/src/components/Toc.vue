<template>
  <div class="toc-root">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { createTocStore } from '@toc-kit/core';

const store = createTocStore();
const sections = ref(store.sections);
const activeId = ref(store.activeId);

provide('toc', {
  sections,
  activeId,
  registerSection: store.registerSection,
  unregisterSection: store.unregisterSection,
  setActiveId: store.setActiveId,
});
</script>
