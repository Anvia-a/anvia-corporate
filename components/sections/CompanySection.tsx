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
    <section id="company" className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
            style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}>
            Company
          </div>
          <h2
            className="text-3xl md:text-5xl font-black text-[#0F172A] jp"
            style={{ letterSpacing: "-0.025em" }}
          >
            株式会社Anvia
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Table Card */}
          <AnimatedSection>
            <div
              className="rounded-[20px] overflow-hidden bg-white"
              style={{
                boxShadow: "0 10px 30px rgba(30,58,138,0.08)",
                border: "1px solid rgba(30,58,138,0.07)",
              }}
            >
              <AnimatedStagger>
                {companyDetails.map((item, i) => (
                  <StaggerItem key={item.label}>
                    <div
                      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 px-7 py-5 ${
                        i < companyDetails.length - 1 ? "border-b border-[#F5F7FB]" : ""
                      }`}
                    >
                      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase flex-shrink-0 sm:w-28 jp">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#0F172A] jp">{item.value}</p>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatedStagger>
            </div>
          </AnimatedSection>

          {/* Statement Card */}
          <AnimatedSection delay={0.18} className="flex flex-col justify-center">
            <div
              className="rounded-[20px] p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
                boxShadow: "0 10px 30px rgba(30,58,138,0.25)",
              }}
            >
              {/* Decorative ring */}
              <div
                className="absolute -right-12 -bottom-12 w-52 h-52 rounded-full border border-white/[0.06]"
              />
              <div
                className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-white/[0.06]"
              />

              <div className="relative z-10">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-8">
                  <span className="text-white text-sm font-black">A</span>
                </div>
                <p
                  className="text-3xl font-black text-white leading-snug jp mb-5"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  構造から、
                  <br />
                  事業を創る。
                </p>
                <p className="text-white/50 text-sm leading-relaxed jp">
                  私たちは、テクノロジーと構造設計の力を組み合わせ、
                  新たな市場価値を生み出すことにコミットしています。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
