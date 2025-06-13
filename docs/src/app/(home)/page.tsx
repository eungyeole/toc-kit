import Link from "next/link";
import { Toc } from "@toc-kit/react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full max-w-2xl text-center pt-16 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
          Welcome to <span className="text-fd-primary">@toc-kit</span>
        </h1>
        <p className="text-lg md:text-xl text-fd-muted-foreground mb-6">
          React에서 쉽고 유연하게 목차(TOC)를 구현하세요.
        </p>
      </section>
    </main>
  );
}
