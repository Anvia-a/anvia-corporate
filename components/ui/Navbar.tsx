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
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_#E6E8EB]"
            : "bg-[#F5F7FB]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-black tracking-tight">A</span>
            </div>
            <span className="text-base font-extrabold tracking-tight text-[#0F172A]">Anvia</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-[#1E3A8A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="text-sm px-5 py-2.5 bg-[#1E3A8A] text-white rounded-full font-semibold
                         hover:bg-[#1e3a8a]/90 hover:scale-[1.03] transition-all duration-200
                         shadow-[0_4px_12px_rgba(30,58,138,0.22)] jp"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
            <motion.span animate={menuOpen ? { opacity: 0 }         : { opacity: 1 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-[#0F172A] rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={link.href}
                    className="block py-4 text-2xl font-bold text-[#0F172A] border-b border-[#F5F7FB]"
                    onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-10">
              <Link href="/#contact"
                className="inline-block text-sm px-8 py-3.5 bg-[#1E3A8A] text-white rounded-full font-semibold jp"
                onClick={() => setMenuOpen(false)}>
                お問い合わせ
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
