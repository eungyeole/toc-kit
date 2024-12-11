<template>
  <div :ref="setRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';
import type { TocContext, TocSectionData } from '../types';

const props = defineProps<{
  id: string;
  level?: number;
  parentId?: string | null;
}>();

const toc = inject<TocContext>('toc');
if (!toc) throw new Error('Section must be used within Toc component');

const { registerSection, unregisterSection } = toc;

const section: TocSectionData = {
  id: props.id,
  level: props.level ?? 0,
  parentId: props.parentId ?? null,
};

const elementRef = ref<HTMLElement | null>(null);

const setRef = (el: HTMLElement | null) => {
  elementRef.value = el;
};

onMounted(() => {
  registerSection(section);
});

onBeforeUnmount(() => {
  unregisterSection(section.id);
});
</script>
