"use client";
import { TocItemType } from "@toc-kit/core";
import { createContext } from "react";

export interface TocContextType {
  items: TocItemType[];
  activeId: string | null;
  registerItem: (item: TocItemType) => void;
  unregisterItem: (id: string) => void;
  viewportRef: React.MutableRefObject<HTMLElement | null>;
}

export const TocContext = createContext<TocContextType | undefined>(undefined);
