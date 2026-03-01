"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

export function VisionSection() {
  return (
    <section id="vision" className="bg-surface py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Label + Title */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-widest text-secondary uppercase">
                Vision
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent leading-tight jp-text"
              style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
            >
              単なるサービスではなく、
              <br />
              未来の事業構造を
              <br />
              つくる。
            </h2>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedStagger className="pt-0 lg:pt-16">
            <StaggerItem>
              <p className="text-secondary leading-relaxed text-base mb-6 jp-text">
                私たちは、機能の追加や表面的な改善を目的としません。
                課題の本質を見極め、構造そのものを再設計します。
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-secondary leading-relaxed text-base mb-6 jp-text">
                テクノロジーは目的ではなく、
                価値を生み出すための手段。
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-secondary leading-relaxed text-base jp-text">
                Anviaは、持続可能な事業構造を設計することで、
                市場に新しい可能性を生み出します。
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 pt-10 border-t border-accent/10">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-accent/40" />
                  <span className="text-xs tracking-widest text-secondary/60 uppercase">
                    Est. 2025 — Tokyo, Japan
                  </span>
                </div>
              </div>
            </StaggerItem>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
