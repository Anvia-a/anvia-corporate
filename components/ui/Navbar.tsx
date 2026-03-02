"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#company",  label: "Company"  },
  { href: "/#contact",  label: "Contact"  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_#E6E8EB]"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Text-only logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[17px] font-black tracking-tight text-[#0F172A]">Anvia</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-[#1E3A8A] transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/#contact"
              className="text-sm px-5 py-2.5 bg-[#1E3A8A] text-white rounded-full font-semibold
                         hover:bg-[#163070] hover:scale-[1.03] transition-all duration-200
                         shadow-[0_4px_12px_rgba(30,58,138,0.22)] jp">
              お問い合わせ
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <motion.span animate={open ? { rotate: 45, y: 6.5 }  : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
            <motion.span animate={open ? { opacity: 0 }           : { opacity: 1 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
            <motion.span animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={l.href}
                    className="block py-4 text-2xl font-bold text-[#0F172A] border-b border-[#F5F7FB]"
                    onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="mt-8">
              <Link href="/#contact"
                className="inline-block px-8 py-3.5 bg-[#1E3A8A] text-white text-sm font-semibold rounded-full jp"
                onClick={() => setOpen(false)}>
                お問い合わせ
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
