"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedSection({
  children, className = "", delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

export function AnimatedStagger({
  children, className = "", staggerDelay = 0.1,
}: { children: React.ReactNode; className?: string; staggerDelay?: number }) {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.04 } } }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children, className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}>
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children, className = "", delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease }}>
      {children}
    </motion.div>
  );
}
