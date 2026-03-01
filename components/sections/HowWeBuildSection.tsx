"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

const steps = [
  { number: "01", title: "構造定義", en: "Structure Definition" },
  { number: "02", title: "データ設計", en: "Data Architecture" },
  { number: "03", title: "AIを活用した高速プロトタイピング", en: "AI-Powered Prototyping" },
  { number: "04", title: "仮説検証", en: "Hypothesis Testing" },
  { number: "05", title: "スケール設計", en: "Scale Engineering" },
];

export function HowWeBuildSection() {
  return (
    <section className="bg-surface py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-widest text-secondary uppercase">
              Process
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h2
              className="text-3xl md:text-5xl font-bold text-accent leading-tight"
              style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
            >
              How We Build
            </h2>
            <div>
              <p className="text-secondary text-base leading-relaxed jp-text mb-4">
                Anviaは、以下のプロセスで事業を構築します。
              </p>
              <p className="text-secondary text-sm leading-relaxed jp-text">
                単発の改善ではなく、
                持続可能な成長を前提に設計します。
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedStagger className="space-y-0">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group flex items-center gap-8 lg:gap-16 py-7 border-t border-white/60 hover:bg-white transition-all duration-300 px-0 hover:px-6 -mx-0 hover:-mx-6 rounded-none hover:rounded-sm cursor-default">
                <span
                  className="text-sm font-bold text-secondary/30 tabular-nums flex-shrink-0 w-8"
                  style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                >
                  {step.number}
                </span>
                <div className="flex-1">
                  <p className="text-lg md:text-xl font-medium text-accent jp-text group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </p>
                </div>
                <span className="hidden md:block text-xs text-secondary/40 tracking-widest flex-shrink-0">
                  {step.en}
                </span>
                <span className="text-secondary/20 group-hover:text-accent/40 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                  →
                </span>
              </div>
            </StaggerItem>
          ))}
          <div className="border-t border-white/60" />
        </AnimatedStagger>
      </div>
    </section>
  );
}
