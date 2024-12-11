import type { Writable } from 'svelte/store';

export interface TocSectionData {
  id: string;
  parentId: string | null;
  level: number;
}

export interface TocOptions {
  offset?: number;
  smooth?: boolean;
}

export interface TocContext {
  sections: Writable<TocSectionData[]>;
  activeId: Writable<string | null>;
  registerSection: (section: TocSectionData) => void;
  unregisterSection: (id: string) => void;
  setActiveId: (id: string | null) => void;
}
