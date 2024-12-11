import type { TocActions, TocSectionData, TocStore } from './types';

export function createTocStore(): TocStore & TocActions {
  const store: TocStore = {
    sections: [],
    activeId: null,
  };

  return {
    ...store,
    registerSection: (section: TocSectionData) => {
      store.sections = [...store.sections, section];
    },
    unregisterSection: (id: string) => {
      store.sections = store.sections.filter((section) => section.id !== id);
    },
    setActiveId: (id: string | null) => {
      store.activeId = id;
    },
  };
}
