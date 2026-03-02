"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── tiny glass card primitive ── */
function GlassCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#E6E8EB] ${className}`}
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── dot node ── */
function Node({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <circle
      cx={cx} cy={cy} r={3.5}
      className="animate-pulse-dot"
      style={{ animationDelay: `${delay}s` }}
      fill="#1E3A8A"
    />
  );
}

/* ── connection lines SVG overlay ── */
function Lines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* DataModel → Flow */}
      <path
        d="M 210 130 C 210 165, 265 180, 265 210"
        stroke="#1E3A8A" strokeWidth="1.5" strokeOpacity="0.25"
        className="animate-draw-line"
      />
      {/* Flow → Metrics */}
      <path
        d="M 265 270 C 265 295, 210 300, 210 315"
        stroke="#1E3A8A" strokeWidth="1.5" strokeOpacity="0.25"
        className="animate-draw-line-delay"
      />
      {/* DataModel → Metrics (long diagonal) */}
      <path
        d="M 165 130 C 130 200, 155 290, 165 315"
        stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.18"
        className="animate-draw-line-delay2"
      />
      <Node cx={210} cy={130} delay={0} />
      <Node cx={265} cy={210} delay={0.3} />
      <Node cx={210} cy={315} delay={0.6} />
      <Node cx={165} cy={130} delay={0.15} />
    </svg>
  );
}

/* ── Card 1: Data Model ── */
function DataModelCard() {
  const rows = [
    { label: "users",        color: "#1E3A8A", dots: 3 },
    { label: "reservations", color: "#3B82F6", dots: 5 },
    { label: "menus",        color: "#1E3A8A", dots: 2 },
    { label: "stylists",     color: "#6366F1", dots: 4 },
  ];
  return (
    <GlassCard className="p-4 w-52">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
        <span className="text-[10px] font-bold text-[#1E3A8A] tracking-widest uppercase">Data Model</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-3 rounded-sm" style={{ background: r.color, opacity: 0.6 }} />
              <span className="text-[10px] font-medium text-slate-500 font-mono">{r.label}</span>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: r.dots }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full"
                  style={{ background: r.color, opacity: 0.3 + i * 0.1 }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ── Card 2: Flow ── */
function FlowCard() {
  const steps = ["Client", "Search", "Booking", "Review"];
  return (
    <GlassCard className="p-4 w-52">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
        <span className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase">Flow</span>
      </div>
      <div className="flex flex-col gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <div
              className="flex items-center justify-center w-14 rounded text-[9px] font-semibold py-1"
              style={{
                background: i === 1 ? "#E8EEFF" : "#F5F7FB",
                color: i === 1 ? "#1E3A8A" : "#64748b",
                border: i === 1 ? "1px solid rgba(30,58,138,0.15)" : "1px solid #E6E8EB",
              }}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M 0 4 L 8 4 M 5 1 L 8 4 L 5 7"
                  stroke="#1E3A8A" strokeWidth="1.2" strokeOpacity="0.35"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ── Card 3: Metrics ── */
function MetricsCard() {
  const metrics = [
    { label: "Conversion", value: 68, color: "#1E3A8A" },
    { label: "Repeat",     value: 82, color: "#3B82F6" },
    { label: "Supply",     value: 54, color: "#6366F1" },
  ];
  return (
    <GlassCard className="p-4 w-52">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
        <span className="text-[10px] font-bold text-[#6366F1] tracking-widest uppercase">Metrics</span>
      </div>
      <div className="space-y-2.5">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[9px] font-medium text-slate-400">{m.label}</span>
              <span className="text-[9px] font-bold" style={{ color: m.color }}>{m.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#F5F7FB] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: m.color, opacity: 0.7 }}
                initial={{ width: 0 }}
                animate={{ width: `${m.value}%` }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ── Main exported component ── */
export function BlueprintVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setParallax({ x: dx * 10, y: dy * 8 });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] select-none overflow-hidden rounded-3xl blueprint-grid animate-fade-grid"
      style={{
        background: "#F5F7FB",
        border: "1px solid #E6E8EB",
      }}
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(245,247,251,0.6) 100%)",
        }}
      />

      {/* SVG connection lines */}
      <div className="absolute inset-0">
        <Lines />
      </div>

      {/* Parallax wrapper */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          x: parallax.x,
          y: parallax.y,
          transition: "all 0.12s ease-out",
        }}
      >
        {/* Card 1: Data Model — top-left */}
        <motion.div
          className="absolute animate-float-a"
          style={{ top: "10%", left: "6%" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <DataModelCard />
        </motion.div>

        {/* Card 2: Flow — right-center */}
        <motion.div
          className="absolute animate-float-b"
          style={{ top: "36%", right: "5%" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <FlowCard />
        </motion.div>

        {/* Card 3: Metrics — bottom-left */}
        <motion.div
          className="absolute animate-float-c"
          style={{ bottom: "8%", left: "8%" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <MetricsCard />
        </motion.div>
      </motion.div>

      {/* Corner label */}
      <div className="absolute bottom-3 right-4 text-[9px] font-semibold tracking-widest text-[#1E3A8A]/30 uppercase">
        Blueprint
      </div>
    </div>
  );
}
