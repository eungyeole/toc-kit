<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue';
import type { TocContext, TocOptions } from '../types';
import { useTocScroll } from '../composables/useTocScroll';

const props = defineProps<{
  options?: TocOptions;
}>();

const toc = inject<TocContext>('toc');
if (!toc) throw new Error('Root must be used within Toc component');

const { activeId } = toc;

onMounted(() => {
  useTocScroll(activeId, props.options);
});
</script>
