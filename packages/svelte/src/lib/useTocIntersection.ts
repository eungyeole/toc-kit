import { createIntersectionManager } from '@toc-kit/core';
import type { TocContext } from '@toc-kit/core';

export function useTocIntersection(context: TocContext) {
  const manager = createIntersectionManager((id) => context.setActiveId(id));

  function init() {
    return () => {
      manager.disconnect();
    };
  }

  function registerHeading(element: HTMLElement) {
    manager.observe(element);
  }

  function unregisterHeading(element: HTMLElement) {
    manager.unobserve(element);
  }

  return {
    init,
    registerHeading,
    unregisterHeading,
  };
}
