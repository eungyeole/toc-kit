import { TocItemType } from "./types";

export const sortTocItems = (items: TocItemType[]) => {
  return items.sort((a, b) => {
    return a.element.compareDocumentPosition(b.element) &
      Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : 1;
  });
};
