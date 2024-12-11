import { useMemo } from 'react';
import type { TocRenderProps, TocSectionData } from '../types';
import { useTocContext } from './root';

export interface TocProps {
  render: (props: TocRenderProps) => React.ReactNode;
}

function buildTree(sections: TocSectionData[]) {
  const tree: TocSectionData[] = [];
  const map = new Map<string, TocSectionData[]>();

  sections.forEach((section) => {
    if (section.parentId === null) {
      tree.push(section);
    } else {
      if (!map.has(section.parentId)) {
        map.set(section.parentId, []);
      }
      map.get(section.parentId)!.push(section);
    }
  });

  function sortChildren(items: TocSectionData[]): TocSectionData[] {
    const sorted = [...items];
    sorted.sort((a, b) => sections.indexOf(a) - sections.indexOf(b));
    return sorted;
  }

  return sortChildren(tree);
}

export function Toc({ render }: TocProps) {
  const { sections, activeId, setActiveId } = useTocContext();

  const sortedSections = useMemo(() => {
    return buildTree(sections);
  }, [sections]);

  return render({
    sections: sortedSections,
    activeId,
    onActivate: setActiveId,
  });
}
