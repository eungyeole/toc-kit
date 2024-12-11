import { useEffect, useRef } from 'react';
import { TocOptions } from '../types';

export function useTocIntersection(
  onIntersect: (id: string | null) => void,
  options: TocOptions = {}
) {
  const { rootMargin = '-20% 0% -80% 0%', threshold = 0 } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = document.querySelectorAll('[data-toc-id]');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          const topmost = intersecting.reduce((acc, curr) => {
            return acc.boundingClientRect.top < curr.boundingClientRect.top ? acc : curr;
          });
          const id = topmost.target.getAttribute('data-toc-id');
          onIntersect(id);
        }
      },
      { rootMargin, threshold }
    );

    headings.forEach((heading) => {
      observerRef.current?.observe(heading);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [onIntersect, rootMargin, threshold]);
}
