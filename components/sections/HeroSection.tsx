"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlueprintVisual } from "@/components/hero/BlueprintVisual";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-64px)] py-16 lg:py-0">

          {/* ── Left: copy ── */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8 w-fit px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A8A]"
              style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.14)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Technology Company — Tokyo
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[64px] font-black text-[#0F172A] leading-[1.1] mb-6 jp"
              style={{ letterSpacing: "-0.025em" }}
            >
              「構造から、
              <br />
              事業を創る。」
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-slate-500 leading-[1.9] jp mb-10 max-w-md"
            >
              Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
              データ・権限・収益構造まで一貫して設計し、
              スケール可能なプロダクトを構築します。
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1E3A8A] text-white
                           text-sm font-semibold rounded-full hover:bg-[#1e3a8a]/90 hover:scale-[1.03]
                           transition-all duration-200 shadow-[0_4px_16px_rgba(30,58,138,0.28)] jp"
              >
                事業について
                <span className="text-white/60">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                           border border-[#E6E8EB] text-[#1E3A8A] text-sm font-semibold rounded-full
                           hover:border-[#1E3A8A]/40 hover:bg-[#E8EEFF]/50 transition-all duration-200 jp"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Blueprint Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <BlueprintVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
