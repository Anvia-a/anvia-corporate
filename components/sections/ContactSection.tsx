"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = (name: string) =>
    `w-full px-5 py-3.5 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-300 outline-none transition-all duration-200 bg-white border jp ${
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-8"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(30,58,138,0.14)" }}
            >
              Contact
            </div>
            <h2
              className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight jp mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              お問い合わせ
            </h2>
            <p className="text-slate-600 text-base leading-[1.9] jp">
              ご質問、ご相談、ビジネス提案など
              <br />
              お気軽にお問い合わせください。
            </p>
          </AnimatedSection>

          {/* Right: Form card */}
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-[20px] p-8 lg:p-10 bg-white"
              style={{ border: "1px solid #E6E8EB", boxShadow: "0 16px 40px rgba(15,23,42,0.08)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#E8EEFF" }}>
                    <span className="text-xl text-[#1E3A8A]">✓</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2 jp">ありがとうございます</h3>
                  <p className="text-slate-400 text-sm jp leading-relaxed">
                    お問い合わせを受け付けました。
                    <br />
                    担当者より折り返しご連絡いたします。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Name <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      placeholder="山田 太郎" className={inputCls("name")} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Email <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      placeholder="taro@example.com" className={inputCls("email")} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#3B82F6]">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5}
                      value={formData.message} onChange={handleChange}
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      placeholder="お問い合わせ内容をご記入ください。"
                      className={inputCls("message") + " resize-none"} />
                  </div>

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

                  {/* Simple note — no border box */}
                  <p className="text-center text-xs text-slate-400 jp pt-1">
                    恐れ入りますが、営業・売り込みを目的としたご連絡はご遠慮ください。
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
