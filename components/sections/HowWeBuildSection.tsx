"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "構造定義", en: "Structure Definition", desc: "事業の土台となる権限・データ・収益構造を設計します。" },
  { number: "02", title: "データ設計", en: "Data Architecture", desc: "スケールを前提とした情報アーキテクチャを構築します。" },
  { number: "03", title: "AIを活用した高速プロトタイピング", en: "AI-Powered Prototyping", desc: "AIを活用し、仮説検証サイクルを最速で回します。" },
  { number: "04", title: "仮説検証", en: "Hypothesis Testing", desc: "データに基づき、構造の妥当性を徹底的に検証します。" },
  { number: "05", title: "スケール設計", en: "Scale Engineering", desc: "持続可能な成長を前提に、プロダクトを拡張します。" },
];

export function HowWeBuildSection() {
  return (
    <section className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
                style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}>
                Process
              </div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight"
                style={{ letterSpacing: "-0.025em" }}
              >
                How We Build
              </h2>
            </div>
            <div>
              <p className="text-slate-500 text-base leading-relaxed jp mb-2">
                Anviaは、以下のプロセスで事業を構築します。
              </p>
              <p className="text-slate-400 text-sm leading-relaxed jp">
                単発の改善ではなく、持続可能な成長を前提に設計します。
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Step Cards */}
        <AnimatedStagger className="flex flex-col gap-3" staggerDelay={0.08}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ x: 6, boxShadow: "0 16px 40px rgba(30,58,138,0.12)" }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-6 lg:gap-10 p-6 rounded-[20px] cursor-default"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(30,58,138,0.07)",
                  boxShadow: "0 4px 16px rgba(30,58,138,0.06)",
                }}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: "#E8EEFF" }}
                >
                  <span className="text-sm font-black text-[#1E3A8A]">{step.number}</span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-[#0F172A] jp mb-0.5">{step.title}</p>
                  <p className="text-sm text-slate-400 jp">{step.desc}</p>
                </div>

                {/* EN label */}
                <div className="hidden md:block flex-shrink-0 text-right">
                  <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">
                    {step.en}
                  </span>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E3A8A] group-hover:text-white"
                  style={{ background: "#F5F7FB" }}
                >
                  <span className="text-slate-400 group-hover:text-white text-sm transition-colors duration-300">→</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
