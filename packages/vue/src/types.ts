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
  sections: TocSectionData[];
  activeId: string | null;
  registerSection: (section: TocSectionData) => void;
  unregisterSection: (id: string) => void;
  setActiveId: (id: string | null) => void;
}
