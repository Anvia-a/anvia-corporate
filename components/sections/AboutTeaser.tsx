"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const pillars = [
  { label: "Aspire",    ja: "熱望", desc: "最高の技術とサービスを追求する。"         },
  { label: "Novel",     ja: "斬新", desc: "新しい発想でITソリューションを提供する。" },
  { label: "Vitality",  ja: "活力", desc: "活気ある開発体制でプロジェクトを推進する。" },
  { label: "Impact",    ja: "衝撃", desc: "市場に変化をもたらすプロダクトを創る。"   },
  { label: "Aesthetic", ja: "美学", desc: "機能とデザインの美しさを追求する。"       },
];

export function AboutTeaser() {
  return (
    <section className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: headline + link */}
          <AnimatedSection>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
              style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.15)" }}
            >
              About
            </div>
            <h2
              className="text-3xl md:text-[42px] font-black text-[#0F172A] leading-tight jp mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              単なるサービスではなく、
              <br />
              未来の事業構造を
              <br />
              つくる。
            </h2>
            <p className="text-slate-500 text-sm leading-[1.9] jp mb-8 max-w-sm">
              Anviaは、課題の本質を見極め、構造そのものを再設計します。
              テクノロジーは目的ではなく、価値を生み出すための手段。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                         text-[#1E3A8A] border border-[#1E3A8A]/20 hover:bg-[#E8EEFF] hover:border-[#1E3A8A]/40
                         transition-all duration-200 jp"
            >
              詳しく見る
              <span className="text-[#1E3A8A]/50">→</span>
            </Link>
          </AnimatedSection>

          {/* Right: ANVIA pillars compact */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white transition-all duration-200 cursor-default"
                  style={{ border: "1px solid #E6E8EB", boxShadow: "0 4px 12px rgba(15,23,42,0.05)" }}
                >
                  {/* Letter badge */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-[#1E3A8A]"
                    style={{ background: "#E8EEFF" }}
                  >
                    {p.label[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-[#1E3A8A] mr-2">{p.label}</span>
                    <span className="text-xs text-[#3B82F6] font-semibold jp mr-3">{p.ja}</span>
                    <span className="text-xs text-slate-400 jp">{p.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
