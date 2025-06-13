import Link from "next/link";
import { Toc } from "@toc-kit/react";
import { TocRender } from "./test";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
      <Toc.Root>
        {/** 만약 특정 Overflow 요소를 타겟으로 잡고 싶다면  Toc.Viewport  */}

        {/* <Toc.Viewport>
          <div style={{ height: 300, overflow: "auto" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Toc.Item key={index} id={index.toString()}>
                <div style={{ height: 300 }}>{index}</div>
              </Toc.Item>
            ))}
          </div>
        </Toc.Viewport> */}

        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            <Toc.Item key={index} id={index.toString()}>
              <div style={{ height: 300, scrollMarginTop: "100px" }}>
                {index}
              </div>
            </Toc.Item>
          ))}
        </div>

        <TocRender />
      </Toc.Root>
    </main>
  );
}
