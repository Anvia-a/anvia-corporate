import type { Metadata } from "next";
import Link from "next/link";
import { ValuesSection } from "@/components/sections/ValuesSection";

export const metadata: Metadata = {
  title: "About | Anvia",
  description: "Anviaのビジョンと価値観。構造設計を軸に新規事業を創出するテクノロジーカンパニーです。",
};

export default function AboutPage() {
  return (
    <>
      {/* Vision hero */}
      <section className="bg-white pt-36 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-12 jp">
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors link-hover">Home</Link>
            <span>›</span>
            <span>About</span>
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-8"
            style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.15)" }}
          >
            Vision
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0F172A] leading-tight jp"
                style={{ letterSpacing: "-0.028em" }}
              >
                単なるサービスではなく、
                <br />
                未来の事業構造を
                <br />
                つくる。
              </h1>
            </div>
            <div className="pt-0 lg:pt-6 space-y-5">
              <p className="text-slate-500 leading-[1.95] text-base jp">
                私たちは、機能の追加や表面的な改善を目的としません。
                課題の本質を見極め、構造そのものを再設計します。
              </p>
              <p className="text-slate-500 leading-[1.95] text-base jp">
                テクノロジーは目的ではなく、
                価値を生み出すための手段。
              </p>
              <p className="text-slate-500 leading-[1.95] text-base jp">
                Anviaは、持続可能な事業構造を設計することで、
                市場に新しい可能性を生み出します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section reused */}
      <ValuesSection />

      {/* Back link */}
      <section className="bg-[#F5F7FB] py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1E3A8A] transition-colors jp"
          >
            <span>←</span>
            <span>トップページへ戻る</span>
          </Link>
        </div>
      </section>
    </>
  );
}
