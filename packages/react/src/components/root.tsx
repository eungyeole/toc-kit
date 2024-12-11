import { createContext, useContext, useMemo, useRef } from 'react';
import { useTocIntersection } from '../hooks/useTocIntersection';
import { useTocScroll } from '../hooks/useTocScroll';
import type { TocOptions, TocSectionData, TocStore } from '@toc-kit/core';
import { createTocStore } from '@toc-kit/core';

const TocContext = createContext<TocStore | null>(null);

export interface TocRootProps {
  children: React.ReactNode;
  options?: TocOptions;
}

export function TocRoot({ children, options }: TocRootProps) {
  const storeRef = useRef(createTocStore());
  const store = storeRef.current;

  useTocIntersection((id) => store.setActiveId(id), options);
  useTocScroll(store.getActiveId(), options);

  return (
    <TocContext.Provider value={store}>
      {children}
    </TocContext.Provider>
  );
}

export function useTocContext() {
  const context = useContext(TocContext);
  if (!context) {
    throw new Error('useTocContext must be used within a TocRoot');
  }
  return context;
}
