"use client";

import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

function ProductVisual() {
  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: 300,
        background: "#0B0F1A",
        borderRadius: "20px 20px 0 0",
      }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,130,246,0.14) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30,58,138,0.38) 0%, transparent 70%)",
          filter: "blur(30px)",
          top: "15%",
          left: "15%",
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center px-8 py-10">
        <p
          className="font-black text-white mb-3"
          style={{ fontSize: "clamp(40px, 8vw, 64px)", letterSpacing: "-0.02em" }}
        >
          COMIN
        </p>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
          style={{
            color:      "rgba(255,255,255,0.4)",
            border:     "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          In Development
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="section-py"
      style={{ background: "#F5F7FB" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div className="pill-tag">Products</div>
          <h2
            className="text-3xl md:text-5xl font-black text-[#0F172A]"
            style={{ letterSpacing: "-0.025em" }}
          >
            Products
          </h2>
        </AnimatedSection>

        <AnimatedCard delay={0.08}>
          <motion.div
            whileHover={{ boxShadow: "0 24px 64px rgba(15,23,42,0.13)" }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden rounded-[20px]"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.09)",
              border:    "1px solid #E6E8EB",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: visual panel */}
              <div
                style={{
                  borderRadius: "20px 0 0 20px",
                  overflow: "hidden",
                  minHeight: 380,
                }}
                className="hidden lg:block"
              >
                <div
                  className="h-full relative flex items-center justify-center overflow-hidden"
                  style={{ background: "#0B0F1A" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(59,130,246,0.14) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
                    }}
                  />
                  <div
                    className="absolute w-56 h-56 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(30,58,138,0.38) 0%, transparent 70%)",
                      filter: "blur(30px)",
                      top: "10%",
                      left: "10%",
                    }}
                  />
                  <div className="relative z-10 text-center px-8">
                    <p
                      className="font-black text-white mb-3"
                      style={{ fontSize: 64, letterSpacing: "-0.02em" }}
                    >
                      COMIN
                    </p>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        color:      "rgba(255,255,255,0.4)",
                        border:     "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                      In Development
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: visual above */}
              <div className="lg:hidden">
                <ProductVisual />
              </div>

              {/* Right: description */}
              <div
                className="p-10 lg:p-14 flex flex-col justify-center bg-white"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="px-3 py-1 text-xs font-semibold text-[#3B82F6] rounded-full"
                    style={{ background: "#E8EEFF" }}
                  >
                    Product 01
                  </span>
                  <span
                    className="px-3 py-1 text-xs font-semibold text-slate-400 rounded-full jp"
                    style={{ background: "#F5F7FB", border: "1px solid #E6E8EB" }}
                  >
                    開発中
                  </span>
                </div>

                <h3
                  className="text-4xl font-black text-[#0F172A] mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  COMIN
                </h3>
                <div className="w-10 h-[2px] bg-[#E6E8EB] mb-6 rounded-full" />

                <p className="text-slate-500 leading-[1.9] jp text-sm mb-8">
                  出張型美容プラットフォーム。
                  美容師と顧客をつなぐ新しいマーケットプレイスです。
                  店舗に依存しないモデルで、個人が主役となる市場構造を構築します。
                </p>

                <span
                  className="inline-block w-fit px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A8A]"
                  style={{ background: "#E8EEFF" }}
                >
                  Beauty Platform
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatedCard>
      </div>
    </section>
  );
}
