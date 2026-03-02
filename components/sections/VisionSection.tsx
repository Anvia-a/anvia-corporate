"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

export function VisionSection() {
  return (
    <section id="vision" className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <AnimatedSection>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-8"
              style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.14)" }}
            >
              Vision
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-black text-[#0F172A] leading-tight jp"
              style={{ letterSpacing: "-0.025em" }}
            >
              単なるサービスではなく、
              <br />
              未来の事業構造を
              <br />
              つくる。
            </h2>
          </AnimatedSection>

          {/* Right */}
          <AnimatedStagger className="pt-0 lg:pt-16">
            <StaggerItem>
              <p className="text-slate-500 leading-[1.9] text-base mb-5 jp">
                私たちは、機能の追加や表面的な改善を目的としません。
                課題の本質を見極め、構造そのものを再設計します。
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-slate-500 leading-[1.9] text-base mb-5 jp">
                テクノロジーは目的ではなく、
                価値を生み出すための手段。
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-slate-500 leading-[1.9] text-base jp">
                Anviaは、持続可能な事業構造を設計することで、
                市場に新しい可能性を生み出します。
              </p>
            </StaggerItem>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
