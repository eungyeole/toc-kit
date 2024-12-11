import { useEffect, useRef } from 'react';
import type { TocOptions } from '@toc-kit/core';
import { scrollToElement } from '@toc-kit/core';

export function useTocScroll(
  targetId: string | null,
  options: TocOptions = {}
) {
  const lastScrollTime = useRef(0);

  useEffect(() => {
    if (!targetId) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 100) return;

    lastScrollTime.current = now;
    scrollToElement(targetId, options);
  }, [targetId, options]);
}
