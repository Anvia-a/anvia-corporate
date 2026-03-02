"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "構造定義",                       desc: "事業の権限・データ・収益構造を設計します。"                 },
  { n: "02", title: "データ設計",                     desc: "スケールを前提とした情報アーキテクチャを構築します。"         },
  { n: "03", title: "AIを活用した高速プロトタイピング", desc: "AIを活用し、仮説検証サイクルを最速で回します。"               },
  { n: "04", title: "仮説検証",                       desc: "データに基づき、構造の妥当性を徹底的に検証します。"           },
  { n: "05", title: "スケール設計",                   desc: "持続可能な成長を前提にプロダクトを拡張します。"               },
];

export function HowWeBuildSection() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Section header */}
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="pill-tag">Process</div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A]"
                style={{ letterSpacing: "-0.025em" }}
              >
                How We Build
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed jp">
              Anviaは、以下のプロセスで事業を構築します。
              単発の改善ではなく、持続可能な成長を前提に設計します。
            </p>
          </div>
        </AnimatedSection>

        {/* Step rows */}
        <AnimatedStagger className="flex flex-col gap-2.5" staggerDelay={0.07}>
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white cursor-default"
                style={{
                  border:     "1px solid #E6E8EB",
                  boxShadow:  "0 4px 14px rgba(15,23,42,0.05)",
                }}
              >
                {/* Step number badge */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "#E8EEFF" }}
                >
                  <span className="text-xs font-black text-[#1E3A8A]">{s.n}</span>
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#0F172A] jp">{s.title}</p>
                  <p className="text-xs text-slate-400 jp mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
