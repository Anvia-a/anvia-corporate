"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PolyhedronScene } from "./PolyhedronScene";

interface Props {
  dark?: boolean;
  className?: string;
}

export function PolyhedronCanvas({ dark = false, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const bg = dark ? "#0B0F1A" : "#F5F7FB";

  /* SSR placeholder */
  if (!mounted) {
    return (
      <div
        className={className}
        style={{
          background: bg,
          borderRadius: 24,
          width: "100%",
          height: "100%",
        }}
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        background: bg,
        borderRadius: 24,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0.4, 3.4], fov: 44 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%", borderRadius: 24 }}
        frameloop="always"
      >
        <color attach="background" args={[bg]} />
        <Suspense fallback={null}>
          <PolyhedronScene dark={dark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
