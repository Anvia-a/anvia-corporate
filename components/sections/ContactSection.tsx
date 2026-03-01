"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend logic — display success state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Header */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-widest text-secondary uppercase">
                Contact
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-accent leading-tight mb-8 jp-text"
              style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
            >
              お問い合わせ
            </h2>
            <p className="text-secondary text-base leading-relaxed jp-text mb-8">
              ご質問、ご相談、ビジネス提案など
              <br />
              お気軽にお問い合わせください。
            </p>
            <p className="text-secondary/50 text-sm leading-relaxed jp-text border-l-2 border-accent/20 pl-4">
              ※誠に恐れ入りますが、営業・売り込みを目的とした
              ご連絡はご遠慮ください。
            </p>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="flex flex-col justify-center items-start h-full py-12">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6">
                  <span className="text-accent text-xl">✓</span>
                </div>
                <h3
                  className="text-2xl font-bold text-accent mb-3 jp-text"
                  style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                >
                  ありがとうございます
                </h3>
                <p className="text-secondary text-sm jp-text">
                  お問い合わせを受け付けました。
                  <br />
                  担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest text-secondary/60 uppercase mb-2"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary/30 focus:outline-none focus:border-accent transition-colors duration-200 jp-text"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest text-secondary/60 uppercase mb-2"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="taro@example.com"
                    className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest text-secondary/60 uppercase mb-2"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="お問い合わせ内容をご記入ください。"
                    className="w-full border border-gray-200 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-secondary/30 focus:outline-none focus:border-accent transition-colors duration-200 resize-none jp-text"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-3 group jp-text"
                >
                  <span>送信する</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
