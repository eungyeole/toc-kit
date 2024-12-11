import { createContext, forwardRef, useContext, useEffect, useId } from 'react';
import type { TocSectionData } from '@toc-kit/core';
import { useTocContext } from './root';
import { Slot } from './slot';

const TocSectionContext = createContext<{ id: string | null; level: number }>({
  id: null,
  level: 0,
});

export interface TocSectionProps {
  title: string;
  metadata?: Record<string, unknown>;
  children?: React.ReactNode;
}

export const TocSection = forwardRef<HTMLElement, TocSectionProps>(
  (props, ref) => {
    const { title, metadata, children } = props;
    const id = useId();
    const store = useTocContext();
    const parentContext = useContext(TocSectionContext);
    const level = parentContext.level + 1;

    useEffect(() => {
      const section: TocSectionData = {
        id,
        title,
        level,
        parentId: parentContext.id,
        metadata,
      };

      store.addSection(section);
      return () => {
        store.removeSection(id);
      };
    }, [id, title, level, parentContext.id, metadata, store]);

    const contextValue: { id: string | null; level: number } = {
      id,
      level,
    };

    return (
      <TocSectionContext.Provider value={contextValue}>
        <Slot ref={ref} data-toc-id={id}>
          {children}
        </Slot>
      </TocSectionContext.Provider>
    );
  }
);

TocSection.displayName = 'TocSection';
