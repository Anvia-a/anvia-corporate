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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: sticky header */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-28">
              <div className="pill-tag">Process</div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A] mb-5"
                style={{ letterSpacing: "-0.025em" }}
              >
                How We Build
              </h2>
              <p className="text-slate-500 text-sm leading-[1.9] jp max-w-xs">
                単発の改善ではなく、持続可能な成長を前提に設計します。
              </p>
            </div>
          </AnimatedSection>

          {/* Right: step list with vertical spine */}
          <AnimatedSection delay={0.08}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #E6E8EB", background: "#fff" }}
            >
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.38, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-stretch"
                  style={{ borderBottom: i < STEPS.length - 1 ? "1px solid #F1F3F7" : "none" }}
                >
                  {/* Spine column */}
                  <div
                    className="flex flex-col items-center flex-shrink-0"
                    style={{ width: 56, paddingTop: 16, paddingBottom: 16 }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#E8EEFF" }}
                    >
                      <span className="text-[9px] font-black text-[#1E3A8A]">{s.n}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="flex-1 mt-1.5"
                        style={{ width: 1, background: "#E8EEFF", minHeight: 12 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-4 pr-5">
                    <p className="text-sm font-bold text-[#0F172A] jp leading-snug mb-0.5">{s.title}</p>
                    <p className="text-xs text-slate-400 jp leading-relaxed">{s.desc}</p>
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
