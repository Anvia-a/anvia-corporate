import type { Metadata } from "next";
import Link from "next/link";
import { ValuesSection } from "@/components/sections/ValuesSection";

export const metadata: Metadata = {
  title: "About | Anvia",
  description: "Anviaのビジョンと価値観。構造設計を軸に事業を創るテクノロジーカンパニーです。",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-36 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-12 jp">
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors">Home</Link>
            <span>›</span>
            <span>About</span>
          </div>

          <div className="pill-tag">Vision</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <h1 className="text-4xl md:text-[52px] font-black text-[#0F172A] leading-[1.18] jp"
                style={{ letterSpacing: "-0.026em" }}>
                単なるサービスではなく、
                <br />未来の事業構造を
                <br />つくる。
              </h1>
            </div>
            <div className="pt-0 lg:pt-8 space-y-5">
              <p className="text-slate-500 leading-[2.0] text-sm jp">
                私たちは、機能の追加や表面的な改善を目的としません。
                課題の本質を見極め、構造そのものを再設計します。
              </p>
              <p className="text-slate-500 leading-[2.0] text-sm jp">
                テクノロジーは目的ではなく、価値を生み出すための手段。
              </p>
              <p className="text-slate-500 leading-[2.0] text-sm jp">
                Anviaは、持続可能な事業構造を設計することで、
                市場に新しい可能性を生み出します。
              </p>
            </div>
          </div>

          {/* Name origin */}
          <div className="mt-20 pt-12 border-t border-[#E6E8EB]">
            <div className="pill-tag">Name Origin</div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-6"
              style={{ letterSpacing: "-0.02em" }}>
              Anviaという名前について
            </h2>
            <p className="text-slate-500 text-sm leading-[2.0] jp max-w-xl">
              AnviaはAspire / Novel / Vitality / Impact / Aestheticの
              頭文字を組み合わせた造語です。
              この5つの価値観が、私たちの意思決定とものづくりの基準となっています。
            </p>
          </div>
        </div>
      </section>

      <ValuesSection />

      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1E3A8A] transition-colors jp">
            ← トップページへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}
