"use client";

import { AnimatedSection, AnimatedStagger, StaggerItem } from "@/components/ui/AnimatedSection";

const values = [
  {
    letter: "A",
    word: "Aspire",
    reading: "熱望",
    description: "最高の技術とサービスを追求し、常に上を目指す。",
  },
  {
    letter: "N",
    word: "Novel",
    reading: "斬新",
    description: "新しい発想とアプローチで、ITソリューションを提供する。",
  },
  {
    letter: "V",
    word: "Vitality",
    reading: "活力",
    description: "活気ある開発体制で、プロジェクトに生命力を吹き込む。",
  },
  {
    letter: "I",
    word: "Impact",
    reading: "衝撃",
    description: "ユーザーと市場に変化をもたらすプロダクトを創造する。",
  },
  {
    letter: "A",
    word: "Aesthetic",
    reading: "美学",
    description: "機能とデザインの美しさを徹底的に追求する。",
  },
];

export function ValuesSection() {
  return (
    <section id="values" className="bg-white py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-widest text-secondary uppercase">
              Values
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h2
              className="text-3xl md:text-5xl font-bold text-accent leading-tight jp-text"
              style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
            >
              Anviaとは
            </h2>
            <div>
              <p className="text-secondary text-base leading-relaxed jp-text">
                Anviaは、私たちの価値観を社名に込めています。
                <br />
                5つのキーワードが、意思決定とものづくりの基準です。
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Grid */}
        <AnimatedStagger className="space-y-0" staggerDelay={0.1}>
          {values.map((value, index) => (
            <StaggerItem key={value.word}>
              <div className="group flex flex-col sm:flex-row items-start gap-8 py-8 border-t border-gray-100 hover:border-accent/30 transition-colors duration-300 cursor-default">
                {/* Letter */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-accent/10 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-white transition-all duration-400">
                  <span
                    className="text-2xl font-bold text-accent group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                  >
                    {value.letter}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-48 flex-shrink-0">
                    <p
                      className="text-xl font-bold text-accent mb-1"
                      style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
                    >
                      {value.word}
                    </p>
                    <p className="text-sm text-secondary/70 jp-text">{value.reading}</p>
                  </div>
                  <p className="text-secondary text-base leading-relaxed jp-text flex-1">
                    {value.description}
                  </p>
                </div>

                {/* Number */}
                <div className="hidden lg:block flex-shrink-0 text-right">
                  <span className="text-xs text-secondary/30 tabular-nums">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
          <div className="border-t border-gray-100" />
        </AnimatedStagger>
      </div>
    </section>
  );
}
