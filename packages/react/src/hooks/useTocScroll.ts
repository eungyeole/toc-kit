import { useEffect, useRef } from 'react';
import { TocOptions } from '../types';

export function useTocScroll(
  targetId: string | null,
  options: TocOptions = {}
) {
  const { smooth = true, offset = 0 } = options;
  const lastScrollTime = useRef(0);

  useEffect(() => {
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const now = Date.now();
    if (now - lastScrollTime.current < 100) return;

    lastScrollTime.current = now;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [targetId, smooth, offset]);
}
