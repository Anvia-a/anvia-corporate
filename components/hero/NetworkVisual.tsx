"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ── fixed node layout (deterministic, no random on render) ── */
const NODES = [
  { id: 0,  x: 80,  y: 70,  r: 5,   ring: true,  float: "a", label: "Data"      },
  { id: 1,  x: 230, y: 45,  r: 4,   ring: false, float: "b", label: ""           },
  { id: 2,  x: 370, y: 80,  r: 6,   ring: true,  float: "c", label: "Structure"  },
  { id: 3,  x: 50,  y: 190, r: 3.5, ring: false, float: "b", label: ""           },
  { id: 4,  x: 160, y: 175, r: 5,   ring: false, float: "a", label: "API"        },
  { id: 5,  x: 295, y: 155, r: 4,   ring: true,  float: "c", label: ""           },
  { id: 6,  x: 420, y: 200, r: 5.5, ring: false, float: "b", label: "Scale"      },
  { id: 7,  x: 100, y: 290, r: 4,   ring: true,  float: "c", label: ""           },
  { id: 8,  x: 240, y: 260, r: 6,   ring: false, float: "a", label: "Product"    },
  { id: 9,  x: 380, y: 300, r: 4,   ring: true,  float: "b", label: ""           },
  { id: 10, x: 60,  y: 360, r: 3.5, ring: false, float: "c", label: ""           },
  { id: 11, x: 190, y: 370, r: 5,   ring: false, float: "a", label: "Flow"       },
  { id: 12, x: 330, y: 390, r: 4,   ring: true,  float: "b", label: ""           },
  { id: 13, x: 440, y: 345, r: 3.5, ring: false, float: "c", label: ""           },
];

/* edges: pairs of node ids */
const EDGES = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [2, 6],
  [3, 4], [4, 5], [5, 6], [4, 7], [5, 8], [6, 9],
  [7, 8], [8, 9], [7, 10],[8, 11],[9, 12],[9, 13],
  [10,11],[11,12],[12,13],[3, 7], [6, 13],
];

function floatClass(f: string) {
  if (f === "a") return "node-float-a";
  if (f === "b") return "node-float-b";
  return "node-float-c";
}

function lineDelay(i: number) {
  const delays = ["", "line-draw-d1", "line-draw-d2", "line-draw-d3", "line-draw-d4", "line-draw-d5", "line-draw-d6"];
  return delays[i % delays.length];
}

export function NetworkVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 60, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 22 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    // ±3 degree equivalent as translate (very subtle)
    rawX.set(((e.clientX - cx) / rect.width)  * 12);
    rawY.set(((e.clientY - cy) / rect.height) * 10);
  }, [rawX, rawY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-3xl"
      style={{
        height: 460,
        background: "#F5F7FB",
        border: "1px solid #E6E8EB",
      }}
    >
      {/* Radial accent glow on right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 40%, rgba(232,238,255,0.95) 0%, transparent 65%)",
        }}
      />

      {/* Parallax wrapper */}
      <motion.div
        className="absolute inset-0"
        style={{ x: springX, y: springY }}
      >
        {/* SVG: edges + rings */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 460"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Edges */}
          {visible && EDGES.map(([a, b], i) => {
            const na = NODES[a];
            const nb = NODES[b];
            return (
              <line
                key={`e-${i}`}
                x1={na.x} y1={na.y}
                x2={nb.x} y2={nb.y}
                stroke="#1E3A8A"
                strokeWidth="1"
                strokeOpacity="0.22"
                className={`line-draw ${lineDelay(i)}`}
              />
            );
          })}

          {/* Ring halos on some nodes */}
          {NODES.filter(n => n.ring).map(n => (
            <circle
              key={`ring-${n.id}`}
              cx={n.x} cy={n.y}
              r={n.r * 4.5}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1"
              className="ring-pulse"
            />
          ))}
        </svg>

        {/* Floating node dots + labels (HTML for easy animation isolation) */}
        {NODES.map(n => (
          <div
            key={`n-${n.id}`}
            className={`absolute ${floatClass(n.float)}`}
            style={{ left: n.x - n.r * 2, top: n.y - n.r * 2, width: n.r * 4, height: n.r * 4 }}
          >
            {/* dot */}
            <div
              className="rounded-full dot-pulse"
              style={{
                width:  n.r * 2,
                height: n.r * 2,
                background: "#1E3A8A",
                margin: "auto",
                marginTop: n.r,
                boxShadow: `0 0 ${n.r * 3}px rgba(30,58,138,0.25)`,
              }}
            />
            {/* label */}
            {n.label && (
              <span
                className="absolute whitespace-nowrap text-[9px] font-semibold tracking-widest uppercase"
                style={{
                  color: "#1E3A8A",
                  opacity: 0.55,
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: n.r * 2 + 4,
                }}
              >
                {n.label}
              </span>
            )}
          </div>
        ))}
      </motion.div>

      {/* Corner label */}
      <span
        className="absolute bottom-3 right-4 text-[9px] font-semibold tracking-[0.14em] uppercase"
        style={{ color: "#1E3A8A", opacity: 0.25 }}
      >
        Network
      </span>
    </div>
  );
}
