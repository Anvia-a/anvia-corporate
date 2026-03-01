"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

const companyDetails = [
  { label: "会社名", value: "株式会社Anvia" },
  { label: "所在地", value: "東京都渋谷区円山町5-5 Navi渋谷V3階" },
  { label: "設立", value: "2025年12月" },
  { label: "代表取締役", value: "田代 彩也" },
  { label: "事業内容", value: "プロダクト開発・サービス運営" },
];

export function CompanySection() {
  return (
    <section id="company" className="bg-surface py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-widest text-secondary uppercase">
              Company
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-accent"
            style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
          >
            株式会社Anvia
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Company Table */}
          <AnimatedStagger className="space-y-0">
            {companyDetails.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 py-5 border-t border-white/80">
                  <p className="text-xs tracking-widest text-secondary/50 uppercase flex-shrink-0 sm:w-28 jp-text">
                    {item.label}
                  </p>
                  <p className="text-base text-primary jp-text">{item.value}</p>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-white/80" />
          </AnimatedStagger>

          {/* Statement */}
          <AnimatedSection delay={0.2} className="flex flex-col justify-center">
            <blockquote className="relative">
              <span
                className="absolute -top-6 -left-2 text-6xl text-accent/10 font-serif select-none"
                aria-hidden
              >
                "
              </span>
              <p
                className="text-2xl md:text-3xl font-bold text-accent leading-snug jp-text relative"
                style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
              >
                構造から、
                <br />
                事業を創る。
              </p>
              <p className="text-secondary text-sm mt-6 leading-relaxed jp-text">
                私たちは、テクノロジーと構造設計の力を組み合わせ、
                新たな市場価値を生み出すことにコミットしています。
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
