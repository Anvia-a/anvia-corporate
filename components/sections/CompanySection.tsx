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
          <div
            className="rounded-[20px] overflow-hidden bg-white max-w-4xl"
            style={{ border: "1px solid #E6E8EB", boxShadow: "0 16px 40px rgba(15,23,42,0.07)" }}
          >
            <AnimatedStagger>
              {details.map((d, i) => (
                <StaggerItem key={d.label}>
                  <div
                    className={`flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-0 px-8 py-5 ${
                      i < details.length - 1 ? "border-b border-[#F5F7FB]" : ""
                    }`}
                  >
                    <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase flex-shrink-0 sm:w-40 jp">
                      {d.label}
                    </p>
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
