"use client";

import { useToc } from "@toc-kit/react";

export const TocRender = () => {
  const { items, activeId } = useToc();
  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 0,
        width: 200,
        zIndex: 1000,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => item.element.scrollIntoView({ behavior: "smooth" })}
          style={{
            padding: 10,
            border:
              item.id === activeId
                ? "1px solid black"
                : "1px solid transparent",
            borderRadius: 4,
            marginBottom: 4,
          }}
        >
          {item.id}
        </div>
      ))}
    </div>
  );
};
