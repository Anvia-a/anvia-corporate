"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

const details = [
  { label: "会社名",     value: "株式会社Anvia"                    },
  { label: "所在地",     value: "東京都渋谷区円山町5-5 Navi渋谷V3階" },
  { label: "設立",       value: "2025年12月"                        },
  { label: "代表取締役", value: "田代 彩也"                          },
  { label: "事業内容",   value: "プロダクト開発・サービス運営"       },
];

export function CompanySection() {
  return (
    <section id="company" className="bg-white section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div className="pill-tag">Company</div>
          <h2
            className="text-3xl md:text-5xl font-black text-[#0F172A] jp"
            style={{ letterSpacing: "-0.025em" }}
          >
            会社概要
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          {/* Full-width table — no max-w constraint so it fills the container */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #E6E8EB", boxShadow: "0 8px 32px rgba(15,23,42,0.06)" }}
          >
            <AnimatedStagger>
              {details.map((d, i) => (
                <StaggerItem key={d.label}>
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center px-8 py-5 gap-2 sm:gap-0 ${
                      i < details.length - 1 ? "border-b border-[#F1F3F7]" : ""
                    }`}
                  >
                    {/* Label column — fixed width */}
                    <p
                      className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase jp flex-shrink-0"
                      style={{ width: 160 }}
                    >
                      {d.label}
                    </p>
                    {/* Divider */}
                    <div
                      className="hidden sm:block flex-shrink-0"
                      style={{ width: 1, height: 16, background: "#E6E8EB", marginRight: 32 }}
                    />
                    {/* Value */}
                    <p className="text-sm font-medium text-[#0F172A] jp">{d.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </AnimatedStagger>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
