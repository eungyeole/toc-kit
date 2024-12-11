import { createContext, useContext, useMemo, useState } from 'react';
import { useTocIntersection } from '../hooks/useTocIntersection';
import { useTocScroll } from '../hooks/useTocScroll';
import type { TocContextValue, TocOptions, TocSectionData } from '../types';

const TocContext = createContext<TocContextValue | null>(null);

export interface TocRootProps {
  children: React.ReactNode;
  options?: TocOptions;
}

export function TocRoot({ children, options }: TocRootProps) {
  const [sections, setSections] = useState<TocSectionData[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const registerSection = (section: TocSectionData) => {
    setSections((prev) => [...prev, section]);
  };

  const unregisterSection = (id: string) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  useTocIntersection(setActiveId, options);
  useTocScroll(activeId, options);

  const value = useMemo(
    () => ({
      sections,
      activeId,
      registerSection,
      unregisterSection,
      setActiveId,
    }),
    [sections, activeId]
  );

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>;
}

export function useTocContext() {
  const context = useContext(TocContext);
  if (!context) {
    throw new Error('useTocContext must be used within a TocRoot');
  }
  return context;
}
