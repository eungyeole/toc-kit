import { useEffect, useRef } from 'react';
import type { TocOptions } from '@toc-kit/core';
import { createIntersectionManager } from '@toc-kit/core';

export function useTocIntersection(
  onIntersect: (id: string | null) => void,
  options: TocOptions = {}
) {
  const managerRef = useRef(createIntersectionManager(options));

  useEffect(() => {
    const manager = managerRef.current;
    manager.setCallback(onIntersect);
    manager.observe();

    return () => {
      manager.disconnect();
    };
  }, [onIntersect]);
}
