"use client";

import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

function ProductVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] flex items-center justify-center overflow-hidden bg-[#0F172A] rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none">
      {/* Animated gradient backdrop */}
      <div
        className="absolute inset-0 animate-pulse-opacity"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(30,58,138,0.8) 0%, rgba(15,23,42,0.9) 60%)",
        }}
      />
      {/* Floating glow orb */}
      <div
        className="absolute w-48 h-48 rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      {/* Rotating ring */}
      <div
        className="absolute w-52 h-52 rounded-full border border-white/[0.07] animate-rotate-slow"
        style={{ borderStyle: "dashed" }}
      />
      <div
        className="absolute w-36 h-36 rounded-full border border-[#3B82F6]/10 animate-rotate-reverse"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <p className="text-6xl font-black text-white tracking-tight mb-3">
          COMIN
        </p>
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/60"
          style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
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
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
            style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}>
            Products
          </div>
          <h2
            className="text-3xl md:text-5xl font-black text-[#0F172A]"
            style={{ letterSpacing: "-0.025em" }}
          >
            Products
          </h2>
        </AnimatedSection>

        {/* Product Card */}
        <AnimatedCard delay={0.1}>
          <motion.div
            whileHover={{ boxShadow: "0 24px 60px rgba(30,58,138,0.15)" }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            style={{
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(30,58,138,0.10)",
              border: "1px solid rgba(30,58,138,0.07)",
            }}
          >
            {/* Left: Visual */}
            <ProductVisual />

            {/* Right: Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="px-3 py-1 text-xs font-semibold text-[#3B82F6] rounded-full"
                  style={{ background: "#E8EEFF" }}
                >
                  Product 01
                </span>
                <span
                  className="px-3 py-1 text-xs font-semibold text-slate-400 rounded-full"
                  style={{ background: "#F5F7FB" }}
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

              <div className="w-10 h-[2px] bg-[#1E3A8A]/20 mb-6 rounded-full" />

              <p className="text-slate-500 leading-[1.85] jp text-base mb-8">
                出張型美容プラットフォーム。
                <br />
                店舗前提の美容モデルを再設計し、
                <br />
                個人が主役となる市場構造を構築します。
              </p>

              <div className="flex items-center gap-2">
                <div
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A8A]"
                  style={{ background: "#E8EEFF" }}
                >
                  Beauty Platform
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedCard>
      </div>
    </section>
  );
}
