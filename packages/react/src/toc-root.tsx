"use client";

import {
  useRef,
  useState,
  useCallback,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { TocContext } from "./context";
import { getActiveTocItemId, TocItemType } from "@toc-kit/core";

export interface TocRootProps {
  children?: ReactNode;
}

export const TocRoot = ({ children }: TocRootProps) => {
  const [items, setItems] = useState<TocItemType[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const viewportRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollElement = viewportRef.current ?? window;

    const handleScroll = () => {
      const activeId = getActiveTocItemId(items, viewportRef.current);

      setActiveId(activeId);
    };

    if (items.length > 0) {
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const registerItem = useCallback((item: TocItemType) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }, []);

  const unregisterItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      items,
      activeId,
      registerItem,
      unregisterItem,
      viewportRef,
    }),
    [items, activeId, registerItem, unregisterItem]
  );

  return <TocContext.Provider value={value}>{children}</TocContext.Provider>;
};
