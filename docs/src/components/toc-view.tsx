"use client";

import { useToc } from "@toc-kit/react";
import { cn } from "fumadocs-ui/utils/cn";

export const TocView = () => {
  const { items, activeId } = useToc();

  return (
    <div className="fixed right-0 top-40 w-60">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "border-l px-4 py-4 text-fd-secondary text-sm cursor-pointer transition-all",
              activeId === item.id && "text-fd-primary border-l-fd-primary"
            )}
            onClick={() => {
              const element = document.getElementById(item.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
