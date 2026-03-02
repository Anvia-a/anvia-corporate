"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NetworkVisual } from "@/components/hero/NetworkVisual";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px)] py-20 lg:py-0">

          {/* ── Left copy ── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8 w-fit px-3.5 py-1.5 rounded-full
                         text-xs font-semibold text-[#1E3A8A]"
              style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.15)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              Technology Company — Tokyo
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[66px] font-black text-[#0F172A] leading-[1.12] mb-7 jp"
              style={{ letterSpacing: "-0.028em" }}
            >
              「構造から、
              <br />
              事業を創る。」
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="text-[15px] text-slate-500 leading-[2.0] jp mb-10 max-w-[420px]"
            >
              Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
              データ・権限・収益構造まで一貫して設計し、
              スケール可能なプロダクトを構築します。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                           bg-[#1E3A8A] text-white text-sm font-semibold rounded-full
                           hover:bg-[#163070] hover:scale-[1.03] transition-all duration-200
                           shadow-[0_4px_16px_rgba(30,58,138,0.30)] jp"
              >
                事業について
                <span className="text-white/55">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                           border border-[#E6E8EB] text-[#1E3A8A] text-sm font-semibold rounded-full
                           hover:border-[#1E3A8A]/35 hover:bg-[#E8EEFF]/60 transition-all duration-200 jp"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Network Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <NetworkVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
