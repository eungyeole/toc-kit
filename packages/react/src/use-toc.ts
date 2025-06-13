import { useContext } from "react";
import { TocContext } from "./context";

function useTocContext() {
  const ctx = useContext(TocContext);
  if (!ctx) throw new Error("useToc must be used within TocRoot");
  return ctx;
}

export const useToc = () => {
  const { activeId, items } = useTocContext();

  return {
    activeId,
    items,
  };
};
