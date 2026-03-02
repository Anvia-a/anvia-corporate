"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const PILLARS = [
  { letter: "A", word: "Aspire",    ja: "熱望", desc: "最高の技術を追求し、常に上を目指す。"     },
  { letter: "N", word: "Novel",     ja: "斬新", desc: "新しい発想でソリューションを提供する。"   },
  { letter: "V", word: "Vitality",  ja: "活力", desc: "活気ある体制でプロジェクトを推進する。"   },
  { letter: "I", word: "Impact",    ja: "衝撃", desc: "市場に変化をもたらすプロダクトを創る。"   },
  { letter: "A", word: "Aesthetic", ja: "美学", desc: "機能とデザインの美しさを追求する。"       },
];

export function AboutTeaser() {
  return (
    <section className="section-py" style={{ background: "#F5F7FB" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: headline + link */}
          <AnimatedSection>
            <div className="pill-tag">About</div>
            <h2
              className="text-3xl md:text-[42px] font-black text-[#0F172A] leading-[1.22] jp mb-5"
              style={{ letterSpacing: "-0.024em" }}
            >
              単なるサービスではなく、
              <br />
              未来の事業構造を
              <br />
              つくる。
            </h2>
            <p className="text-slate-500 text-sm leading-[1.95] jp mb-8 max-w-sm">
              Anviaは、課題の本質を見極め、構造そのものを再設計します。
              テクノロジーは目的ではなく、価値を生み出すための手段。
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

          {/* Right: compact ANVIA pillars */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.word}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white"
                  style={{ border: "1px solid #E6E8EB", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-[#1E3A8A]"
                    style={{ background: "#E8EEFF" }}
                  >
                    {p.letter}
                  </div>
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-xs font-bold text-[#1E3A8A] flex-shrink-0">{p.word}</span>
                    <span className="text-xs font-semibold text-[#3B82F6] jp flex-shrink-0">{p.ja}</span>
                    <span className="text-xs text-slate-400 jp truncate">{p.desc}</span>
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
