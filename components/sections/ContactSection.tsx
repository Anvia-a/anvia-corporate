"use client";

import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "individual" | "corporate";

interface IndividualForm { name: string; email: string; message: string; }
interface CorporateForm  { company: string; person: string; email: string; phone: string; role: string; message: string; }

const emptyInd  = (): IndividualForm => ({ name: "", email: "", message: "" });
const emptyCorp = (): CorporateForm  => ({ company: "", person: "", email: "", phone: "", role: "", message: "" });

const ease = [0.22, 1, 0.36, 1] as const;

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 jp">
      {children}
    </label>
  );
}
function Req() { return <span className="text-[#3B82F6] ml-0.5">*</span>; }
function Note() {
  return (
    <p className="text-center text-[11px] text-slate-400 jp leading-relaxed">
      営業・売り込みを目的としたご連絡はご遠慮ください。
    </p>
  );
}

export function ContactSection() {
  const [tab,       setTab]       = useState<Tab>("individual");
  const [indForm,   setIndForm]   = useState<IndividualForm>(emptyInd());
  const [corpForm,  setCorpForm]  = useState<CorporateForm>(emptyCorp());
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState<string | null>(null);

  const switchTab = (t: Tab) => { setTab(t); setSubmitted(false); };

  /* mailto submission */
  const submitInd = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `名前: ${indForm.name}\nメール: ${indForm.email}\n\n${indForm.message}`
    );
    window.location.href = `mailto:contact@anvia.co.jp?subject=お問い合わせ&body=${body}`;
    setSubmitted(true);
  };
  const submitCorp = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `会社名: ${corpForm.company}\n担当者: ${corpForm.person}\n役職: ${corpForm.role}\nメール: ${corpForm.email}\n電話: ${corpForm.phone}\n\n${corpForm.message}`
    );
    window.location.href = `mailto:contact@anvia.co.jp?subject=法人お問い合わせ&body=${body}`;
    setSubmitted(true);
  };

  /* Disabled check */
  const indDisabled  = !indForm.name || !indForm.email || !indForm.message;
  const corpDisabled = !corpForm.company || !corpForm.person || !corpForm.email || !corpForm.phone || !corpForm.message;

  const inputCls = (name: string) =>
    `w-full px-4 py-3 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-300 outline-none
     transition-all duration-200 bg-white border jp ${
       focused === name
         ? "border-[#1E3A8A]/40 shadow-[0_0_0_3px_rgba(30,58,138,0.07)]"
         : "border-[#E6E8EB]"
     }`;

  return (
    <section id="contact" className="section-py" style={{ background: "#E8EEFF" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <AnimatedSection>
            <div
              className="pill-tag"
              style={{ background: "rgba(255,255,255,0.75)", borderColor: "rgba(30,58,138,0.18)" }}
            >
              Contact
            </div>
            <h2
              className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight jp mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              お問い合わせ
            </h2>
            <p className="text-slate-600 text-sm leading-[2.0] jp mb-8">
              ご質問、ご相談、ビジネス提案など<br />お気軽にお問い合わせください。
            </p>

            {/* Toggle */}
            <div
              className="inline-flex rounded-full p-1 gap-1"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #E6E8EB" }}
            >
              {([
                { key: "individual" as Tab, label: "個人" },
                { key: "corporate"  as Tab, label: "法人" },
              ]).map((t) => (
                <button
                  key={t.key}
                  onClick={() => switchTab(t.key)}
                  className="relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-200"
                  style={{ color: tab === t.key ? "#fff" : "#64748b" }}
                >
                  {tab === t.key && (
                    <motion.span
                      layoutId="contact-tab-pill"
                      className="absolute inset-0 rounded-full bg-[#1E3A8A]"
                      transition={{ duration: 0.24, ease }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.16}>
            <div
              className="rounded-[20px] p-8 lg:p-10 bg-white"
              style={{ border: "1px solid #E6E8EB", boxShadow: "0 16px 40px rgba(15,23,42,0.08)" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#E8EEFF" }}>
                      <span className="text-xl text-[#1E3A8A]">✓</span>
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2 jp">ありがとうございます</h3>
                    <p className="text-slate-400 text-sm jp leading-relaxed mb-6">
                      お問い合わせを受け付けました。<br />担当者より折り返しご連絡いたします。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setIndForm(emptyInd()); setCorpForm(emptyCorp()); }}
                      className="text-xs text-[#1E3A8A] underline jp"
                    >
                      別のお問い合わせをする
                    </button>
                  </motion.div>

                ) : tab === "individual" ? (
                  <motion.form
                    key="ind"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.26, ease }}
                    onSubmit={submitInd} className="space-y-4"
                  >
                    <div>
                      <FieldLabel>名前<Req /></FieldLabel>
                      <input type="text" required value={indForm.name}
                        onChange={e => setIndForm(p => ({ ...p, name: e.target.value }))}
                        onFocus={() => setFocused("i-name")} onBlur={() => setFocused(null)}
                        placeholder="山田 太郎" className={inputCls("i-name")} />
                    </div>
                    <div>
                      <FieldLabel>メール<Req /></FieldLabel>
                      <input type="email" required value={indForm.email}
                        onChange={e => setIndForm(p => ({ ...p, email: e.target.value }))}
                        onFocus={() => setFocused("i-email")} onBlur={() => setFocused(null)}
                        placeholder="taro@example.com" className={inputCls("i-email")} />
                    </div>
                    <div>
                      <FieldLabel>内容<Req /></FieldLabel>
                      <textarea required rows={5} value={indForm.message}
                        onChange={e => setIndForm(p => ({ ...p, message: e.target.value }))}
                        onFocus={() => setFocused("i-msg")} onBlur={() => setFocused(null)}
                        placeholder="お問い合わせ内容をご記入ください。"
                        className={inputCls("i-msg") + " resize-none"} />
                    </div>
                    <motion.button
                      type="submit" disabled={indDisabled}
                      whileHover={!indDisabled ? { scale: 1.03 } : {}}
                      whileTap={!indDisabled ? { scale: 0.98 } : {}}
                      className="w-full py-3.5 text-white text-sm font-semibold rounded-full
                                 flex items-center justify-center gap-2 jp transition-all duration-200"
                      style={{
                        background:   indDisabled ? "#94A3B8" : "#1E3A8A",
                        boxShadow:    indDisabled ? "none" : "0 4px 20px rgba(30,58,138,0.28)",
                        cursor:       indDisabled ? "not-allowed" : "pointer",
                      }}
                    >
                      送信する <span className="opacity-60">→</span>
                    </motion.button>
                    <Note />
                  </motion.form>

                ) : (
                  <motion.form
                    key="corp"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.26, ease }}
                    onSubmit={submitCorp} className="space-y-4"
                  >
                    <div>
                      <FieldLabel>会社名<Req /></FieldLabel>
                      <input type="text" required value={corpForm.company}
                        onChange={e => setCorpForm(p => ({ ...p, company: e.target.value }))}
                        onFocus={() => setFocused("c-company")} onBlur={() => setFocused(null)}
                        placeholder="株式会社〇〇" className={inputCls("c-company")} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <FieldLabel>担当者名<Req /></FieldLabel>
                        <input type="text" required value={corpForm.person}
                          onChange={e => setCorpForm(p => ({ ...p, person: e.target.value }))}
                          onFocus={() => setFocused("c-person")} onBlur={() => setFocused(null)}
                          placeholder="田代 彩也" className={inputCls("c-person")} />
                      </div>
                      <div>
                        <FieldLabel>役職（任意）</FieldLabel>
                        <input type="text" value={corpForm.role}
                          onChange={e => setCorpForm(p => ({ ...p, role: e.target.value }))}
                          onFocus={() => setFocused("c-role")} onBlur={() => setFocused(null)}
                          placeholder="代表取締役" className={inputCls("c-role")} />
                      </div>
                    </div>
                    <div>
                      <FieldLabel>メール<Req /></FieldLabel>
                      <input type="email" required value={corpForm.email}
                        onChange={e => setCorpForm(p => ({ ...p, email: e.target.value }))}
                        onFocus={() => setFocused("c-email")} onBlur={() => setFocused(null)}
                        placeholder="info@company.co.jp" className={inputCls("c-email")} />
                    </div>
                    <div>
                      <FieldLabel>電話<Req /></FieldLabel>
                      <input type="tel" required value={corpForm.phone}
                        onChange={e => setCorpForm(p => ({ ...p, phone: e.target.value }))}
                        onFocus={() => setFocused("c-phone")} onBlur={() => setFocused(null)}
                        placeholder="03-0000-0000" className={inputCls("c-phone")} />
                    </div>
                    <div>
                      <FieldLabel>内容<Req /></FieldLabel>
                      <textarea required rows={4} value={corpForm.message}
                        onChange={e => setCorpForm(p => ({ ...p, message: e.target.value }))}
                        onFocus={() => setFocused("c-msg")} onBlur={() => setFocused(null)}
                        placeholder="事業内容や提案内容をご記入ください。"
                        className={inputCls("c-msg") + " resize-none"} />
                    </div>
                    <motion.button
                      type="submit" disabled={corpDisabled}
                      whileHover={!corpDisabled ? { scale: 1.03 } : {}}
                      whileTap={!corpDisabled ? { scale: 0.98 } : {}}
                      className="w-full py-3.5 text-white text-sm font-semibold rounded-full
                                 flex items-center justify-center gap-2 jp transition-all duration-200"
                      style={{
                        background:   corpDisabled ? "#94A3B8" : "#1E3A8A",
                        boxShadow:    corpDisabled ? "none" : "0 4px 20px rgba(30,58,138,0.28)",
                        cursor:       corpDisabled ? "not-allowed" : "pointer",
                      }}
                    >
                      送信する <span className="opacity-60">→</span>
                    </motion.button>
                    <Note />
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
