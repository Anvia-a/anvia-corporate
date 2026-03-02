"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const values = [
  { letter: "A", word: "Aspire",    reading: "熱望", description: "最高の技術とサービスを追求し、常に上を目指す。"                   },
  { letter: "N", word: "Novel",     reading: "斬新", description: "新しい発想とアプローチで、ITソリューションを提供する。"           },
  { letter: "V", word: "Vitality",  reading: "活力", description: "活気ある開発体制で、プロジェクトに生命力を吹き込む。"             },
  { letter: "I", word: "Impact",    reading: "衝撃", description: "ユーザーと市場に変化をもたらすプロダクトを創造する。"             },
  { letter: "A", word: "Aesthetic", reading: "美学", description: "機能とデザインの美しさを徹底的に追求する。"                       },
];

export function ValuesSection() {
  return (
    <section id="values" className="bg-[#F5F7FB] section-py">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
                style={{ background: "#E8EEFF", border: "1px solid rgba(30,58,138,0.15)" }}
              >
                Values
              </div>
              <h2
                className="text-3xl md:text-5xl font-black text-[#0F172A] jp"
                style={{ letterSpacing: "-0.025em" }}
              >
                Anviaとは
              </h2>
            </div>
            <p className="text-slate-500 text-base leading-relaxed jp">
              Anviaは、私たちの価値観を社名に込めています。
              <br />
              5つのキーワードが、意思決定とものづくりの基準です。
            </p>
          </div>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {values.map((v, i) => (
            <StaggerItem key={v.word}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(15,23,42,0.12)" }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[20px] p-7 h-full cursor-default bg-white"
                style={{ border: "1px solid #E6E8EB", boxShadow: "0 16px 40px rgba(15,23,42,0.07)" }}
              >
                <span className="absolute top-4 right-5 text-5xl font-black text-[#1E3A8A]/[0.032] select-none tabular-nums">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "#E8EEFF" }}>
                  <span className="text-lg font-black text-[#1E3A8A]">{v.letter}</span>
                </div>
                <p className="text-base font-bold text-[#0F172A] tracking-tight mb-0.5">{v.word}</p>
                <p className="text-sm text-[#3B82F6] font-semibold jp mb-3">{v.reading}</p>
                <p className="text-slate-500 text-sm leading-relaxed jp">{v.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
