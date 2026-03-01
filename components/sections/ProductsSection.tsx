"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ProductsSection() {
  return (
    <section id="products" className="bg-white py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-widest text-secondary uppercase">
              Products
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-accent"
            style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
          >
            Products
          </h2>
        </AnimatedSection>

        {/* Product Card */}
        <AnimatedSection delay={0.15}>
          <div className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 overflow-hidden hover:border-accent/20 transition-colors duration-500">
              {/* Left: Visual */}
              <div className="bg-accent min-h-[280px] lg:min-h-[400px] flex items-center justify-center relative overflow-hidden p-12">
                {/* Decorative geometry */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-white" />
                  <div className="absolute bottom-8 right-8 w-48 h-48 border border-white rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white opacity-30" />
                </div>
                <div className="relative text-center">
                  <p
                    className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                  >
                    COMIN
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 border border-white/30 text-white/60 text-xs tracking-widest uppercase">
                    In Development
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-widest text-secondary/60 uppercase">
                      Product 01
                    </span>
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-accent mb-2"
                    style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                  >
                    COMIN
                  </h3>
                  <p className="text-sm text-secondary/60 jp-text mb-6">開発中</p>
                </div>

                <p className="text-secondary leading-relaxed jp-text text-base mb-8">
                  出張型美容プラットフォーム。
                  <br />
                  店舗前提の美容モデルを再設計し、
                  <br />
                  個人が主役となる市場構造を構築します。
                </p>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-accent/30" />
                  <span className="text-xs tracking-widest text-secondary/50 uppercase">
                    Beauty Platform
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
