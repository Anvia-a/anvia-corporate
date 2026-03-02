"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutTeaser() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatedSection>
            <div className="pill-tag">About</div>
            <h2
              className="text-3xl md:text-[48px] font-black text-[#0F172A] leading-[1.18] jp mb-6"
              style={{ letterSpacing: "-0.026em" }}
            >
              単なるサービスではなく、
              <br />
              未来の事業構造をつくる。
            </h2>
            <p className="text-slate-500 text-[15px] leading-[2.0] jp mb-10 max-w-lg">
              Anviaは、課題の本質を見極め、構造そのものを再設計します。
              テクノロジーは目的ではなく、価値を生み出すための手段。
              データ・権限・収益の構造まで一貫して設計し、
              スケール可能なプロダクトを共に築きます。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                         text-[#1E3A8A] border border-[#1E3A8A]/20 hover:bg-[#E8EEFF]
                         hover:border-[#1E3A8A]/40 transition-all duration-200 jp"
            >
              詳しく見る
              <span className="opacity-50">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
