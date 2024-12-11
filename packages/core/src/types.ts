export interface TocSectionData {
  id: string;
  parentId: string | null;
  level: number;
}

export interface TocOptions {
  offset?: number;
  smooth?: boolean;
}

export interface TocStore {
  sections: TocSectionData[];
  activeId: string | null;
}

export interface TocActions {
  registerSection: (section: TocSectionData) => void;
  unregisterSection: (id: string) => void;
  setActiveId: (id: string | null) => void;
}

export type TocContext = TocStore & TocActions;
