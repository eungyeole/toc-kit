"use client";

import { useContext, ReactNode } from "react";
import { TocContext } from "./context";
import { Slot } from "@radix-ui/react-slot";

export interface TocViewportProps {
  children: ReactNode;
}

export const TocViewport = ({ children, ...props }: TocViewportProps) => {
  const context = useContext(TocContext);

  return (
    <Slot ref={context?.viewportRef} {...props}>
      {children}
    </Slot>
  );
};
