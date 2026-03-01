"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white pt-16">
      {/* Subtle background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-surface opacity-30" />
        <div className="absolute bottom-0 left-0 w-px h-1/3 bg-accent/20" />
        <div className="absolute top-1/4 right-1/4 w-px h-48 bg-accent/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32 relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-widest text-secondary uppercase">
            Technology Company
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent leading-none mb-10 jp-text"
          style={{
            fontFamily: "DM Serif Display, Georgia, serif",
            letterSpacing: "-0.02em",
          }}
        >
          「構造から、
          <br />
          事業を創る。」
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-14"
        >
          <p className="text-base md:text-lg text-secondary leading-relaxed jp-text">
            Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
            <br className="hidden md:block" />
            データ・権限・収益構造まで一貫して設計し、
            <br className="hidden md:block" />
            スケール可能なプロダクトを構築します。
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/#vision"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 group jp-text"
          >
            <span>事業について</span>
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300 jp-text"
          >
            お問い合わせ
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-6 lg:left-10 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-accent/30"
          />
          <span className="text-xs tracking-widest text-secondary/50 rotate-90 origin-center mt-2 whitespace-nowrap">
            SCROLL
          </span>
        </motion.div>
      </div>
    </section>
  );
}
