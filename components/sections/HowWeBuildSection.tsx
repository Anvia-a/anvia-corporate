"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "構造定義",                       desc: "事業の権限・データ・収益構造を設計します。"           },
  { n: "02", title: "データ設計",                     desc: "スケールを前提とした情報アーキテクチャを構築します。" },
  { n: "03", title: "AIを活用した高速プロトタイピング", desc: "AIを活用し、仮説検証サイクルを最速で回します。"       },
  { n: "04", title: "仮説検証",                       desc: "データに基づき、構造の妥当性を徹底的に検証します。"   },
  { n: "05", title: "スケール設計",                   desc: "持続可能な成長を前提にプロダクトを拡張します。"       },
];

export function HowWeBuildSection() {
  return (
    <section className="section-py" style={{ background: "#F5F7FB" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: title + description — sticky on desktop */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-28">
              <div className="pill-tag">Process</div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6"
                style={{ letterSpacing: "-0.025em" }}
              >
                How We Build
              </h2>
              <p className="text-slate-500 text-sm leading-[1.9] jp max-w-xs">
                Anviaは、以下のプロセスで事業を構築します。
                単発の改善ではなく、持続可能な成長を前提に設計します。
              </p>
            </div>
          </AnimatedSection>

          {/* Right: step cards */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-3">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white cursor-default"
                  style={{
                    border:    "1px solid #E6E8EB",
                    boxShadow: "0 2px 10px rgba(15,23,42,0.05)",
                  }}
                >
                  {/* Number badge */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#E8EEFF" }}
                  >
                    <span className="text-[11px] font-black text-[#1E3A8A]">{s.n}</span>
                  </div>
                  {/* Text */}
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-bold text-[#0F172A] jp leading-snug">{s.title}</p>
                    <p className="text-xs text-slate-400 jp mt-1 leading-relaxed">{s.desc}</p>
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
