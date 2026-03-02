"use client";

import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

function ProductVisual() {
  return (
    <div className="relative w-full min-h-[320px] lg:min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0F172A] rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none">
      {/* subtle grid on dark bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* glow orb */}
      <div
        className="absolute w-56 h-56 rounded-full animate-float-a"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          filter: "blur(28px)",
          top: "20%", left: "20%",
        }}
      />
      {/* rotating ring */}
      <div
        className="absolute w-52 h-52 rounded-full border border-white/[0.06]"
        style={{ borderStyle: "dashed", animation: "rotateSlow 40s linear infinite" }}
      />

      <div className="relative z-10 text-center px-8">
        <p className="text-6xl font-black text-white tracking-tight mb-3">COMIN</p>
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/50"
          style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)" }}
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
    <section id="products" className="bg-white section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
            style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.14)" }}
          >
            Products
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A]" style={{ letterSpacing: "-0.025em" }}>
            Products
          </h2>
        </AnimatedSection>

        <AnimatedCard delay={0.1}>
          <motion.div
            whileHover={{ boxShadow: "0 24px 60px rgba(15,23,42,0.14)" }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[20px]"
            style={{ boxShadow: "0 16px 40px rgba(15,23,42,0.08)", border: "1px solid #E6E8EB" }}
          >
            <ProductVisual />

            <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-5">
                <span className="px-3 py-1 text-xs font-semibold text-[#3B82F6] rounded-full" style={{ background: "#E8EEFF" }}>
                  Product 01
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-slate-400 rounded-full jp" style={{ background: "#F5F7FB", border: "1px solid #E6E8EB" }}>
                  開発中
                </span>
              </div>

              <h3 className="text-4xl font-black text-[#0F172A] mb-2" style={{ letterSpacing: "-0.02em" }}>
                COMIN
              </h3>
              <div className="w-10 h-[2px] bg-[#E6E8EB] mb-6 rounded-full" />

              <p className="text-slate-500 leading-[1.85] jp text-base mb-8">
                出張型美容プラットフォーム。
                <br />
                店舗前提の美容モデルを再設計し、
                <br />
                個人が主役となる市場構造を構築します。
              </p>

              <div className="inline-flex">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A8A]" style={{ background: "#E8EEFF" }}>
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
