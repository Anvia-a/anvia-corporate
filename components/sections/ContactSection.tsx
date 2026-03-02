"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "individual" | "corporate";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const emptyForm = (): FormState => ({ name: "", email: "", company: "", message: "" });

export function ContactSection() {
  const [tab,       setTab]       = useState<Tab>("individual");
  const [form,      setForm]      = useState<FormState>(emptyForm());
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleTab = (t: Tab) => {
    setTab(t);
    setForm(emptyForm());
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = (name: string) =>
    `w-full px-5 py-3.5 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-300
     outline-none transition-all duration-200 bg-white border jp ${
      focused === name
        ? "border-[#1E3A8A]/40 shadow-[0_0_0_3px_rgba(30,58,138,0.07)]"
        : "border-[#E6E8EB]"
    }`;

  const isCorp = tab === "corporate";

  return (
    <section id="contact" className="section-py" style={{ background: "#E8EEFF" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left ── */}
          <AnimatedSection>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-8"
              style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(30,58,138,0.15)" }}
            >
              Contact
            </div>
            <h2
              className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight jp mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              お問い合わせ
            </h2>
            <p className="text-slate-600 text-base leading-[1.95] jp mb-8">
              ご質問、ご相談、ビジネス提案など
              <br />
              お気軽にお問い合わせください。
            </p>

            {/* Tab toggle */}
            <div
              className="inline-flex rounded-full p-1 gap-1"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #E6E8EB" }}
            >
              {([
                { key: "individual", label: "個人のお問い合わせ" },
                { key: "corporate",  label: "法人のお問い合わせ" },
              ] as { key: Tab; label: string }[]).map(t => (
                <button
                  key={t.key}
                  onClick={() => handleTab(t.key)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 jp ${
                    tab === t.key
                      ? "text-white"
                      : "text-slate-500 hover:text-[#1E3A8A]"
                  }`}
                >
                  {tab === t.key && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-[#1E3A8A]"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Right: Form card ── */}
          <AnimatedSection delay={0.18}>
            <div
              className="rounded-[20px] p-8 lg:p-10 bg-white"
              style={{ border: "1px solid #E6E8EB", boxShadow: "0 16px 40px rgba(15,23,42,0.08)" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: "#E8EEFF" }}>
                      <span className="text-xl text-[#1E3A8A]">✓</span>
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2 jp">ありがとうございます</h3>
                    <p className="text-slate-400 text-sm jp leading-relaxed">
                      お問い合わせを受け付けました。
                      <br />
                      担当者より折り返しご連絡いたします。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm(emptyForm()); }}
                      className="mt-6 text-xs text-[#1E3A8A] underline jp"
                    >
                      別のお問い合わせをする
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key={`form-${tab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name"
                        className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        {isCorp ? "担当者名" : "お名前"} <span className="text-[#3B82F6]">*</span>
                      </label>
                      <input type="text" id="name" name="name" required
                        value={form.name} onChange={handleChange}
                        onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                        placeholder={isCorp ? "田代 彩也" : "山田 太郎"}
                        className={inputCls("name")} />
                    </div>

                    {/* Company (corporate only) */}
                    {isCorp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <label htmlFor="company"
                          className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                          会社名 <span className="text-[#3B82F6]">*</span>
                        </label>
                        <input type="text" id="company" name="company" required={isCorp}
                          value={form.company} onChange={handleChange}
                          onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                          placeholder="株式会社〇〇"
                          className={inputCls("company")} />
                      </motion.div>
                    )}

                    {/* Email */}
                    <div>
                      <label htmlFor="email"
                        className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Email <span className="text-[#3B82F6]">*</span>
                      </label>
                      <input type="email" id="email" name="email" required
                        value={form.email} onChange={handleChange}
                        onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                        placeholder={isCorp ? "info@company.co.jp" : "taro@example.com"}
                        className={inputCls("email")} />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message"
                        className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Message <span className="text-[#3B82F6]">*</span>
                      </label>
                      <textarea id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                        placeholder={
                          isCorp
                            ? "事業内容や提案内容をご記入ください。"
                            : "お問い合わせ内容をご記入ください。"
                        }
                        className={inputCls("message") + " resize-none"} />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="w-full py-4 bg-[#1E3A8A] text-white text-sm font-semibold rounded-full
                                 flex items-center justify-center gap-2 jp mt-1"
                      style={{ boxShadow: "0 4px 20px rgba(30,58,138,0.28)" }}
                    >
                      送信する <span className="text-white/50">→</span>
                    </motion.button>

                    {/* Simple note — no border, no icon */}
                    <p className="text-center text-xs text-slate-400 jp pt-1 leading-relaxed">
                      恐れ入りますが、営業・売り込みを目的としたご連絡はご遠慮ください。
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
