"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center select-none">
      {/* Base glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[500px] h-[500px] rounded-full animate-pulse-opacity"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59,130,246,0.18) 0%, rgba(30,58,138,0.1) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Outer rotating ring */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full border border-[#1E3A8A]/10 animate-rotate-slow"
        style={{ borderStyle: "dashed" }}
      />
      {/* Inner rotating ring (reverse) */}
      <div
        className="absolute w-[260px] h-[260px] rounded-full border border-[#3B82F6]/15 animate-rotate-reverse"
        style={{ borderStyle: "dashed" }}
      />

      {/* Large floating blob */}
      <div
        className="absolute w-64 h-64 rounded-full animate-float"
        style={{
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(59,130,246,0.22) 0%, rgba(30,58,138,0.12) 60%, transparent 100%)",
          filter: "blur(18px)",
        }}
      />

      {/* Secondary smaller blob */}
      <div
        className="absolute w-40 h-40 rounded-full animate-float-alt"
        style={{
          top: "20%",
          right: "18%",
          background:
            "radial-gradient(ellipse, rgba(99,179,255,0.2) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />

      {/* Orbiting dot top-right */}
      <div className="absolute w-[320px] h-[320px] animate-rotate-slow">
        <div
          className="absolute w-3 h-3 rounded-full bg-[#3B82F6]/60"
          style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
        />
      </div>
      {/* Orbiting dot bottom-left */}
      <div className="absolute w-[240px] h-[240px] animate-rotate-reverse">
        <div
          className="absolute w-2 h-2 rounded-full bg-[#1E3A8A]/50"
          style={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      {/* Center badge */}
      <div
        className="relative z-10 w-28 h-28 rounded-2xl flex items-center justify-center animate-float-slow"
        style={{
          background: "rgba(255,255,255,0.9)",
          boxShadow:
            "0 20px 60px rgba(30,58,138,0.18), 0 4px 16px rgba(30,58,138,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-center">
          <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] mx-auto mb-1.5 flex items-center justify-center">
            <span className="text-white text-xl font-black">A</span>
          </div>
          <span className="text-[10px] font-semibold text-[#1E3A8A]/60 tracking-wider uppercase">
            Anvia
          </span>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute top-[12%] left-[8%] px-3 py-1.5 rounded-full text-[10px] font-semibold text-[#1E3A8A] tracking-wide"
        style={{
          background: "rgba(232,238,255,0.95)",
          boxShadow: "0 4px 16px rgba(30,58,138,0.1)",
        }}
      >
        Structure
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute bottom-[18%] right-[6%] px-3 py-1.5 rounded-full text-[10px] font-semibold text-[#3B82F6] tracking-wide"
        style={{
          background: "rgba(232,238,255,0.95)",
          boxShadow: "0 4px 16px rgba(30,58,138,0.1)",
        }}
      >
        Scale
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute top-[55%] right-[3%] px-3 py-1.5 rounded-full text-[10px] font-semibold text-[#1E3A8A]/70 tracking-wide"
        style={{
          background: "rgba(232,238,255,0.95)",
          boxShadow: "0 4px 16px rgba(30,58,138,0.1)",
        }}
      >
        Product
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white pt-16">
      {/* Subtle surface tint in top-right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(232,238,255,0.6) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-0 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-64px)]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A8A] mb-8 w-fit"
              style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Technology Company — Tokyo
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[68px] font-black text-[#0F172A] leading-[1.1] mb-6 jp"
              style={{ letterSpacing: "-0.03em" }}
            >
              「構造から、
              <br />
              事業を創る。」
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-slate-500 leading-relaxed jp mb-10 max-w-lg"
            >
              Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
              データ・権限・収益構造まで一貫して設計し、
              スケール可能なプロダクトを構築します。
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/#vision"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1E3A8A] text-white text-sm font-semibold rounded-full hover:bg-[#1e3a8a]/90 hover:scale-[1.03] transition-all duration-200 shadow-[0_4px_16px_rgba(30,58,138,0.30)] jp"
              >
                <span>事業について</span>
                <span className="text-white/70">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#1E3A8A]/20 text-[#1E3A8A] text-sm font-semibold rounded-full hover:border-[#1E3A8A]/50 hover:bg-[#E8EEFF]/60 transition-all duration-200 jp"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </div>

          {/* Right: Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
