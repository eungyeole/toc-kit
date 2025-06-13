"use client";

import { ReactNode, useContext, useEffect, useRef } from "react";
import { TocContext } from "./context";

import { Slot } from "@radix-ui/react-slot";
import { TocItemType } from "@toc-kit/core";

export interface TocItemProps {
  id: string;
  depth?: number;
  children: ReactNode;
}

export const TocItem = ({ id, depth = 1, children }: TocItemProps) => {
  const context = useContext(TocContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!context || !ref.current) return;
    const item: TocItemType = { id, element: ref.current, depth };
    context.registerItem(item);
    return () => {
      context.unregisterItem(id);
    };
  }, [id, depth]);

  const isActive = context?.activeId === id;

  return (
    <Slot
      ref={ref}
      id={id}
      data-toc-id={id}
      data-toc-depth={depth}
      data-toc-active={isActive}
    >
      {children}
    </Slot>
  );
};
