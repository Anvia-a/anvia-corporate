"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

/* R3F must be loaded client-only to avoid SSR crash */
const PolyhedronCanvas = dynamic(
  () =>
    import("@/components/hero/PolyhedronCanvas").then(
      (m) => m.PolyhedronCanvas
    ),
  { ssr: false }
);

export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const wipeRef     = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(false);

  const onScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect    = el.getBoundingClientRect();
    const scrolled = -rect.top;
    const viewH    = window.innerHeight;
    /* progress 0→1 over the first 60vh of scroll within this section */
    const pct = Math.max(0, Math.min(1, scrolled / (viewH * 0.6)));
    /* wipe layer: starts at 100% bottom (invisible) → 0% (full) */
    const topPct = 100 - pct * 100;
    if (wipeRef.current) {
      wipeRef.current.style.top = `${topPct}%`;
    }
    setDark(pct > 0.55);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  /* Colour tokens that flip as background darkens */
  const tagBg  = dark ? "rgba(30,58,138,0.38)"  : "#E8EEFF";
  const tagBrd = dark ? "rgba(59,130,246,0.45)" : "rgba(30,58,138,0.15)";
  const tagTxt = dark ? "#93C5FD"               : "#1E3A8A";
  const btn2Bg = dark ? "rgba(255,255,255,0.06)" : "transparent";
  const btn2Bd = dark ? "rgba(255,255,255,0.22)" : "#E6E8EB";
  const btn2Tx = dark ? "#CBD5E1"               : "#1E3A8A";

  return (
    /*
     * min-h-[200vh]: gives scroll room so the sticky panel lingers
     * overflow-hidden: keeps the absolute wipe layer clipped to this section
     * isolation: isolate: creates a new stacking context so z-index doesn't bleed
     */
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "200vh", isolation: "isolate" } as React.CSSProperties}
    >
      {/* ── Dark wipe layer — grows from bottom as user scrolls ── */}
      <div
        ref={wipeRef}
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          top: "100%",          /* starts fully hidden below viewport */
          background: "#0B0F1A",
          zIndex: 0,
          willChange: "top",
        }}
      />

      {/* ── Sticky full-viewport panel ── */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center pt-16"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Left: hero copy ── */}
            <div>
              {/* Eyebrow tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background:   tagBg,
                  border:       `1px solid ${tagBrd}`,
                  color:        tagTxt,
                  transition:   "background 0.35s, color 0.35s, border-color 0.35s",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                Technology Company — Tokyo
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.18] mb-7 jp"
                style={{
                  letterSpacing: "-0.022em",
                  color:          dark ? "#F8FAFC" : "#0F172A",
                  transition:     "color 0.35s",
                }}
              >
                「構造から、
                <br />
                事業を創る。」
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-[15px] leading-[2.05] jp mb-10 max-w-[430px]"
                style={{
                  color:      dark ? "#94A3B8" : "#64748B",
                  transition: "color 0.35s",
                }}
              >
                Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
                データ・権限・収益構造まで一貫して設計し、
                スケール可能なプロダクトを構築します。
              </motion.p>

              {/* CTA buttons */}
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
                             shadow-[0_4px_18px_rgba(30,58,138,0.35)] jp"
                >
                  事業について
                  <span className="opacity-50">→</span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                             border text-sm font-semibold rounded-full jp"
                  style={{
                    background:   btn2Bg,
                    borderColor:  btn2Bd,
                    color:        btn2Tx,
                    transition:   "background 0.32s, border-color 0.32s, color 0.32s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                  }}
                >
                  お問い合わせ
                </Link>
              </motion.div>
            </div>

            {/* ── Right: 3D polyhedron ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
              style={{ height: 460 }}
            >
              <PolyhedronCanvas dark={dark} className="w-full h-full" />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue — bouncing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
          style={{
            color:      dark ? "rgba(255,255,255,0.22)" : "rgba(100,116,139,0.5)",
            transition: "color 0.35s",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-current"
          />
          <span className="text-[9px] tracking-[0.18em] uppercase font-medium">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
