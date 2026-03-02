"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "構造定義",                    en: "Structure Definition",    desc: "事業の土台となる権限・データ・収益構造を設計します。" },
  { number: "02", title: "データ設計",                  en: "Data Architecture",       desc: "スケールを前提とした情報アーキテクチャを構築します。" },
  { number: "03", title: "AIを活用した高速プロトタイピング", en: "AI-Powered Prototyping", desc: "AIを活用し、仮説検証サイクルを最速で回します。"         },
  { number: "04", title: "仮説検証",                    en: "Hypothesis Testing",      desc: "データに基づき、構造の妥当性を徹底的に検証します。"     },
  { number: "05", title: "スケール設計",                en: "Scale Engineering",       desc: "持続可能な成長を前提に、プロダクトを拡張します。"       },
];

export function HowWeBuildSection() {
  return (
    <section className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
                style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.14)" }}
              >
                Process
              </div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A]"
                style={{ letterSpacing: "-0.025em" }}
              >
                How We Build
              </h2>
            </div>
            <div>
              <p className="text-slate-500 text-base leading-relaxed jp mb-1">Anviaは、以下のプロセスで事業を構築します。</p>
              <p className="text-slate-400 text-sm leading-relaxed jp">単発の改善ではなく、持続可能な成長を前提に設計します。</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedStagger className="flex flex-col gap-3" staggerDelay={0.07}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ x: 5, boxShadow: "0 16px 40px rgba(15,23,42,0.10)" }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-5 lg:gap-8 p-5 rounded-[20px] bg-white cursor-default"
                style={{ border: "1px solid #E6E8EB", boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#E8EEFF" }}>
                  <span className="text-xs font-black text-[#1E3A8A]">{step.number}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#0F172A] jp">{step.title}</p>
                  <p className="text-xs text-slate-400 jp mt-0.5">{step.desc}</p>
                </div>

                <span className="hidden md:block text-[10px] font-medium text-slate-300 tracking-widest uppercase flex-shrink-0">
                  {step.en}
                </span>

                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[#1E3A8A]"
                  style={{ background: "#F5F7FB" }}
                >
                  <span className="text-slate-300 group-hover:text-white text-xs transition-colors duration-200">→</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
