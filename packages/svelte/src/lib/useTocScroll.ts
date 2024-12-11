import { scrollToElement } from '@toc-kit/core';
import type { TocOptions } from '@toc-kit/core';

export function useTocScroll(activeId: string | null, options: TocOptions = {}) {
  scrollToElement(activeId, options);
}
