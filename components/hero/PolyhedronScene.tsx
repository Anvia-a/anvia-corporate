"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Vertex dots — placed at key icosahedron positions ── */
const VERT_POSITIONS: [number, number, number][] = [
  [0, 1.2, 0],
  [0, -1.2, 0],
  [1.05, 0.52, 0.38],
  [-1.05, 0.52, 0.38],
  [0.65, -0.52, 0.96],
  [-0.65, -0.52, 0.96],
  [0.65, -0.52, -0.96],
  [-0.65, -0.52, -0.96],
  [1.05, 0.52, -0.38],
  [-1.05, 0.52, -0.38],
  [0, 0.36, 1.12],
  [0, 0.36, -1.12],
];

export function PolyhedronScene({ dark }: { dark: boolean }) {
  const groupRef  = useRef<THREE.Group>(null!);
  const wireRef   = useRef<THREE.Mesh>(null!);
  const solidRef  = useRef<THREE.Mesh>(null!);
  const scanRef   = useRef<THREE.Mesh>(null!);

  /* ── Geometry: created once ── */
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

  /* ── Morph timers ── */
  const mState = useRef(0);
  const mT     = useRef(0);
  const mTimer = useRef(0);

  /* ── Scan timers ── */
  const sTimer  = useRef(0);
  const sActive = useRef(false);
  const sY      = useRef(-1.5);

  /* ── X-drift ── */
  const xDrift = useRef(0);
  const xDir   = useRef(1);

  const primary = dark ? "#3B82F6" : "#1E3A8A";
  const face    = dark ? "#1E3A8A" : "#3B82F6";

  /* ── Main animation loop ── */
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const g = groupRef.current;

    /* Full Y rotation ~10s */
    g.rotation.y += delta * ((Math.PI * 2) / 10);

    /* X drift ±15° */
    xDrift.current += delta * 0.18 * xDir.current;
    if (xDrift.current >  0.26) xDir.current = -1;
    if (xDrift.current < -0.26) xDir.current =  1;
    g.rotation.x = xDrift.current;

    /* Morph every 3.5s over 0.7s */
    mTimer.current += delta;
    if (mTimer.current > 3.5) {
      mTimer.current = 0;
      mState.current = mState.current === 0 ? 1 : 0;
      mT.current = 0;
    }
    mT.current = Math.min(1, mT.current + delta / 0.7);
    const t = mT.current;
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const solidOp = mState.current === 1 ? ease * 0.24 : (1 - ease) * 0.24;
    const wireOp  = mState.current === 0 ? 0.45 + ease * 0.2 : 0.65 - ease * 0.2;

    if (wireRef.current)
      (wireRef.current.material as THREE.MeshBasicMaterial).opacity = wireOp;
    if (solidRef.current)
      (solidRef.current.material as THREE.MeshBasicMaterial).opacity = solidOp;

    /* Scan sweep every 2.1s */
    sTimer.current += delta;
    if (!sActive.current && sTimer.current > 2.1) {
      sTimer.current = 0;
      sActive.current = true;
      sY.current = -1.5;
    }
    if (sActive.current && scanRef.current) {
      sY.current += delta * (3.0 / 0.75);
      scanRef.current.position.y = sY.current;
      const prog = (sY.current + 1.5) / 3.0;
      const scanOp = prog < 0.5 ? prog * 2 : (1 - prog) * 2;
      (scanRef.current.material as THREE.MeshBasicMaterial).opacity =
        Math.max(0, scanOp * 0.5);
      if (sY.current > 1.6) {
        sActive.current = false;
        (scanRef.current.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    }
  });

  /* ── Mouse-driven camera sway ── */
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.28 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.current.y * 0.2 + 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe shell */}
      <mesh ref={wireRef} geometry={geo}>
        <meshBasicMaterial
          color={primary}
          wireframe
          transparent
          opacity={0.52}
        />
      </mesh>

      {/* Semi-transparent solid (morphs in/out) */}
      <mesh ref={solidRef} geometry={geo}>
        <meshBasicMaterial
          color={face}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Scan highlight plane */}
      <mesh
        ref={scanRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[2.8, 0.07]} />
        <meshBasicMaterial
          color={primary}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Vertex glow dots */}
      {VERT_POSITIONS.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.042, 8, 8]} />
          <meshBasicMaterial
            color={primary}
            transparent
            opacity={0.72}
          />
        </mesh>
      ))}
    </group>
  );
}
