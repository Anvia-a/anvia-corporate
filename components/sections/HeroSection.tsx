"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const PolyhedronCanvas = dynamic(
  () => import("@/components/hero/PolyhedronCanvas").then((m) => m.PolyhedronCanvas),
  { ssr: false }
);

/*
 * SCROLL-GATE ARCHITECTURE
 *
 * Outer section  : height = 200vh  (no overflow-hidden — required for sticky to work)
 * Sticky panel   : height = 100vh, position sticky, top 0
 * Pinned range   : outerHeight − stickyHeight = 200vh − 100vh = 100vh of scroll travel
 *
 * Progress math  : progress = scrolled / pinnedRange  (clamped 0→1)
 *   where scrolled    = −outerRect.top  (pixels scrolled past outer section top)
 *   and   pinnedRange = window.innerHeight  (= 100vh)
 *
 * At progress = 0 : hero is fully light, sticky has just engaged
 * At progress = 1 : hero is fully dark,  sticky releases → next section slides in
 *
 * Wipe layer uses clip-path: inset(T% 0 0 0)
 *   T = (1 − progress) × 100
 *   T = 100% → layer fully clipped (invisible)
 *   T = 0%   → layer fully visible (hero is dark)
 *
 * DOM writes bypass React state for the wipe to eliminate frame-lag.
 * The dark boolean (threshold 0.55) updates via useState — it only toggles once
 * and only drives colour tokens + the R3F canvas prop, so re-render cost is minimal.
 */
export function HeroSection() {
  const outerRef  = useRef<HTMLElement>(null);
  const wipeRef   = useRef<HTMLDivElement>(null);
  const lightRef  = useRef<HTMLDivElement>(null);
  const darkRef  = useRef(false);
  const [dark, setDark] = React.useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const wipe  = wipeRef.current;
    const light = lightRef.current;
    if (!outer || !wipe) return;

    const onScroll = () => {
      // scrolled: px the outer section's top edge has travelled above viewport top
      const scrolled    = -outer.getBoundingClientRect().top;
      // pinnedRange: the scroll travel distance while sticky is engaged
      // = outerHeight − stickyHeight = 200vh − 100vh = 1 × window.innerHeight
      const pinnedRange = window.innerHeight;
      const progress    = Math.max(0, Math.min(1, scrolled / pinnedRange));

      // Direct DOM write — no React re-render, no frame lag
      wipe.style.clipPath = `inset(${(1 - progress) * 100}% 0 0 0)`;
      // Fade out light base so white rectangle does not show through wipe edges
      if (lightRef.current) {
        lightRef.current.style.opacity = String(1 - progress);
      }

      // Dark threshold — only triggers a re-render on toggle
      const nowDark = progress > 0.55;
      if (nowDark !== darkRef.current) {
        darkRef.current = nowDark;
        setDark(nowDark);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tagBg  = dark ? "rgba(30,58,138,0.38)"   : "#E8EEFF";
  const tagBrd = dark ? "rgba(59,130,246,0.45)"  : "rgba(30,58,138,0.15)";
  const tagTxt = dark ? "#93C5FD"                : "#1E3A8A";
  const btn2Bg = dark ? "rgba(255,255,255,0.06)" : "transparent";
  const btn2Bd = dark ? "rgba(255,255,255,0.22)" : "#E6E8EB";
  const btn2Tx = dark ? "#CBD5E1"                : "#1E3A8A";

  return (
    /*
     * Outer: 200vh, NO overflow-hidden.
     * overflow-hidden on an ancestor breaks position:sticky in all browsers.
     */
    <section
      ref={outerRef}
      style={{ position: "relative", height: "200vh" }}
    >
      {/*
       * Sticky panel: pinned at top:0 for the full 200vh scroll distance.
       * Its own overflow:hidden safely clips the wipe layer to 100vh
       * without affecting the outer section's sticky context.
       */}
      <div
        style={{
          position: "sticky",
          top:      0,
          height:   "100vh",
          overflow: "hidden",
        }}
      >
        {/* Light base — fades out as dark wipe advances */}
        <div
          ref={lightRef}
          style={{
            position:   "absolute",
            inset:      0,
            background: "#F5F7FB",
            zIndex:     0,
            willChange: "opacity",
          }}
        />

        {/*
         * Dark wipe layer.
         * Starts fully clipped (T=100% → invisible).
         * clip-path is updated directly via ref on every scroll event.
         * At progress=1: T=0% → fully visible → hero fully dark → sticky releases.
         */}
        <div
          ref={wipeRef}
          aria-hidden
          style={{
            position:   "absolute",
            inset:      0,
            background: "#0B0F1A",
            zIndex:     1,
            clipPath:   "inset(100% 0 0 0)",
            willChange: "clip-path",
          }}
        />

        {/* Content — above both background layers */}
        <div
          className="relative flex flex-col justify-center pt-16"
          style={{ height: "100%", zIndex: 2 }}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: tagBg,
                    border:     `1px solid ${tagBrd}`,
                    color:      tagTxt,
                    transition: "background 0.4s, color 0.4s, border-color 0.4s",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  Technology Company — Tokyo
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.18] mb-7 jp"
                  style={{
                    letterSpacing: "-0.022em",
                    color:         dark ? "#F8FAFC" : "#0F172A",
                    transition:    "color 0.4s",
                  }}
                >
                  「構造から、
                  <br />
                  事業を創る。」
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15px] leading-[2.05] jp mb-10 max-w-[430px]"
                  style={{
                    color:      dark ? "#94A3B8" : "#64748B",
                    transition: "color 0.4s",
                  }}
                >
                  Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。
                  データ・権限・収益構造まで一貫して設計し、
                  スケール可能なプロダクトを構築します。
                </motion.p>

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
                      background:  btn2Bg,
                      borderColor: btn2Bd,
                      color:       btn2Tx,
                      transition:  "background 0.4s, border-color 0.4s, color 0.4s",
                    }}
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </div>

              {/* Right: 3-D canvas */}
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

          {/* Scroll nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
            style={{
              color:      dark ? "rgba(255,255,255,0.22)" : "rgba(100,116,139,0.5)",
              transition: "color 0.4s",
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
      </div>
    </section>
  );
}
