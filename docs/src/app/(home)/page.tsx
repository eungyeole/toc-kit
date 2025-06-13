import Link from "next/link";
import { Toc } from "@toc-kit/react";
import { TocView } from "@/components/toc-view";

const Section = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <Toc.Item id={id}>
      <section className="w-full min-h-[calc(100vh-58px)] px-6 md:px-10 flex flex-col items-center justify-center text-center scroll-m-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-400">
            {title}
          </span>
        </h1>
        <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl">
          {description}
        </p>
      </section>
    </Toc.Item>
  );
};

export default function HomePage() {
  return (
    <Toc.Root>
      <main>
        <Section
          id="@toc-kit/react"
          title="@toc-kit/react"
          description="React에서 쉽고 유연하게 목차(TOC)를 구현하세요."
        />
        <Section
          id="features"
          title="📌 핵심 기능"
          description="자동 목차 생성, 커스터마이징 가능, 컴포넌트 기반 아키텍처"
        />
        <Section
          id="Installation"
          title="💡 설치는 간단하게"
          description="단 한 줄로 설치: npm i @toc-kit/react"
        />
        <Section
          id="Usage"
          title="🚀 사용법도 직관적"
          description="<Toc.Root>와 <Toc.Item>만으로 구조화된 TOC 구성!"
        />
        <TocView />
      </main>
    </Toc.Root>
  );
}
