import { onMounted, onUnmounted, ref } from 'vue';
import { createIntersectionManager } from '@toc-kit/core';
import type { TocContext } from '@toc-kit/core';

export function useTocIntersection(context: TocContext) {
  const manager = createIntersectionManager((id) => context.setActiveId(id));
  const headings = ref<HTMLElement[]>([]);

  onMounted(() => {
    for (const heading of headings.value) {
      manager.observe(heading);
    }
  });

  onUnmounted(() => {
    manager.disconnect();
  });

  const registerHeading = (element: HTMLElement) => {
    headings.value.push(element);
    manager.observe(element);
  };

  const unregisterHeading = (element: HTMLElement) => {
    headings.value = headings.value.filter((heading) => heading !== element);
    manager.unobserve(element);
  };

  return {
    registerHeading,
    unregisterHeading,
  };
}
