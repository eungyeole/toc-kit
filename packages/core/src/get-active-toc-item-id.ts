import { sortTocItems } from "./sort-toc-items";
import { TocItemType } from "./types";

const SCROLL_NEAR_THRESHOLD = 100;

/**
 * 스크롤 이벤트 발생 시 호출될 가벼운 로직을 담은 클로저를 생성합니다.
 * @param items TOC 아이템 목록
 * @param viewportElement 스크롤 컨테이너 (null이면 window)
 * @returns 스크롤 위치에 따라 활성화된 TOC 아이템 ID를 반환하는 함수
 */
export const getActiveTocItemId = (
  items: TocItemType[],
  viewportElement: HTMLElement | null
) => {
  const sortedItems = sortTocItems(items);

  if (!sortedItems.length) {
    return null;
  }

  const getRelativeItemTop = (el: HTMLElement) => {
    if (viewportElement) {
      return (
        el.getBoundingClientRect().top -
        viewportElement.getBoundingClientRect().top
      );
    }
    return el.getBoundingClientRect().top;
  };

  const scrollTop = viewportElement
    ? viewportElement.scrollTop
    : window.scrollY;
  const viewportHeight = viewportElement
    ? viewportElement.clientHeight
    : window.innerHeight;
  const contentHeight = viewportElement
    ? viewportElement.scrollHeight
    : document.documentElement.scrollHeight;

  if (scrollTop < SCROLL_NEAR_THRESHOLD) {
    return sortedItems[0].id;
  }

  if (contentHeight - (scrollTop + viewportHeight) < SCROLL_NEAR_THRESHOLD) {
    return sortedItems[sortedItems.length - 1].id;
  }

  for (let i = sortedItems.length - 1; i >= 0; i--) {
    const item = sortedItems[i];
    const style = getComputedStyle(item.element);
    const marginTop = parseFloat(style.scrollMarginTop);
    const adjustedTop =
      getRelativeItemTop(item.element) - (isNaN(marginTop) ? 0 : marginTop);

    if (adjustedTop <= 0) {
      return item.id;
    }
  }

  return sortedItems[0].id;
};
