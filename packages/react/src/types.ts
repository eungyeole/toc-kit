export interface TocSectionData {
  id: string;
  title: string;
  level: number;
  parentId: string | null;
  metadata?: Record<string, unknown>;
}

export interface TocContextValue {
  activeId: string | null;
  sections: TocSectionData[];
  registerSection: (section: TocSectionData) => void;
  unregisterSection: (id: string) => void;
  setActiveId: (id: string | null) => void;
}

export interface TocOptions {
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Threshold for intersection observer */
  threshold?: number | number[];
  /** Offset for determining active section */
  offset?: number;
  /** Enable smooth scrolling */
  smooth?: boolean;
}

export interface TocSectionContextValue {
  id: string | null;
  level: number;
}

export interface TocRenderProps {
  sections: TocSectionData[];
  activeId: string | null;
  onActivate: (id: string | null) => void;
}
