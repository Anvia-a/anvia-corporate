'use client';

import { useMemo, useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './MissionValues.module.css';

const timeMarks = ['08:30', '09:12', '10:45', '11:38', '12:05', '13:47', '14:20', '16:10', '18:55', '21:05', '22:40', '23:10', '00:30'];

function MissionTextContent({ accentClass }: { accentClass: string }) {
    return (
        <>
            <p className={styles.missionLead}>人々の<span className={accentClass}>時間</span>を<span className={accentClass}>取り戻す</span>。<br />それが私たちのミッションです。</p>
            <p>日常には、気づかないうちに多くの摩擦や無駄な作業が存在します。<br />私たちはテクノロジーとデザインの力でそれらを取り除き、<br />人々が<span className={accentClass}>本当に価値のあること</span>に時間を使える世界をつくります。</p>
            <p>Anviaは<br />“Make time work better.”<br />という思想のもと、<br />より<span className={accentClass}>シンプル</span>で<span className={accentClass}>軽やか</span>な体験を生み出すプロダクトを設計・開発しています。</p>
        </>
    );
}

export default function MissionValues() {
    const ringValues = [...timeMarks, ...timeMarks, ...timeMarks];
    const missionTextRef = useRef<HTMLDivElement>(null);

    const spinConfig = useMemo(() => ({
        sphere: `${3.2 + Math.random() * 1.2}s`,
        bandA: `${0.78 + Math.random() * 0.22}s`,
        bandB: `${0.82 + Math.random() * 0.24}s`,
        bandC: `${0.8 + Math.random() * 0.24}s`,
        delayA: `${-(Math.random() * 1.8).toFixed(2)}s`,
        delayB: `${-(Math.random() * 1.8).toFixed(2)}s`,
        delayC: `${-(Math.random() * 1.8).toFixed(2)}s`,
    }), []);

    function handleMissionMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = missionTextRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
    }

    return (
        <section id="mission" className={`section ${styles.missionValues}`}>
            <div className="container">
                <AnimateOnScroll>
                    <div className={styles.missionBlock}>
                        <div className={styles.sectionHeader}>
                            <p className="section-label">Mission</p>
                        </div>

                        <div className={styles.missionRow}>
                            <AnimateOnScroll>
                                <div
                                    ref={missionTextRef}
                                    className={styles.missionTextWrap}
                                    onMouseMove={handleMissionMouseMove}
                                >
                                    <div className={styles.missionText}>
                                        <MissionTextContent accentClass={styles.accentWord} />
                                    </div>
                                    <div className={styles.missionTextSpot} aria-hidden="true">
                                        <MissionTextContent accentClass={styles.accentWordSpot} />
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <div className={styles.timeGraphic} aria-hidden="true">
                                <div className={styles.reelViewport}>
                                    <div className={styles.reelSphere} style={{ animationDuration: spinConfig.sphere } as React.CSSProperties}>
                                        <div
                                            className={`${styles.reelBand} ${styles.reelBandA}`}
                                            style={{ animationDuration: spinConfig.bandA, animationDelay: spinConfig.delayA } as React.CSSProperties}
                                        >
                                            {ringValues.map((value, i) => (
                                                <span key={`a-${value}-${i}`} style={{ '--i': i } as React.CSSProperties}>{value}</span>
                                            ))}
                                        </div>
                                        <div
                                            className={`${styles.reelBand} ${styles.reelBandB}`}
                                            style={{ animationDuration: spinConfig.bandB, animationDelay: spinConfig.delayB } as React.CSSProperties}
                                        >
                                            {ringValues.map((value, i) => (
                                                <span key={`b-${value}-${i}`} style={{ '--i': i } as React.CSSProperties}>{value}</span>
                                            ))}
                                        </div>
                                        <div
                                            className={`${styles.reelBand} ${styles.reelBandC}`}
                                            style={{ animationDuration: spinConfig.bandC, animationDelay: spinConfig.delayC } as React.CSSProperties}
                                        >
                                            {ringValues.map((value, i) => (
                                                <span key={`c-${value}-${i}`} style={{ '--i': i } as React.CSSProperties}>{value}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.valuesBlock}>
                            <div className={styles.sectionHeader}>
                                <p className="section-label">Values</p>
                            </div>

                            <AnimateOnScroll delay={120}>
                                <div className={styles.valuesStatement}>
                                    <p>私たちは、<span className={styles.accentWord}>シンプル</span>な設計で人の<span className={styles.accentWord}>時間</span>を守り、日常の<span className={styles.accentWord}>摩擦</span>を減らし、テクノロジーで<span className={styles.accentWord}>時間を返す</span>ことを大切にしています。</p>
                                </div>
                            </AnimateOnScroll>

                            <div className={styles.valuesBubbles}>
                                {[
                                    { category: 'Simplicity first', title: 'シンプルを第一に', text: '複雑さを増やすのではなく、本質的な価値だけを残す。私たちは不要な機能や装飾を削ぎ落とし、本当に意味のある体験だけを設計します。' },
                                    { category: 'Craft over speed', title: 'スピードよりクラフト', text: '速く作ることより、長く使われるものをつくること。細部へのこだわりと品質への責任がプロダクトの価値を決めると考えています。' },
                                    { category: 'People over process', title: 'プロセスより人', text: '優れたプロダクトは優れたチームから生まれます。私たちは形式的なプロセスよりも人の創造性と判断を尊重します。' },
                                    { category: 'Integrity over appearance', title: '建前より誠実さ', text: '見た目の良さだけではなく、本当に意味のある価値を提供する。私たちは誠実さを大切にし、ユーザーにとって正しい選択をします。' }
                                ].map((v, i) => (
                                    <div key={v.title} className={`${styles.valueBubble} ${styles[`bubble${i}`]}`}>
                                        <div className={styles.bubbleInner}>
                                            <span className={styles.bubbleCategory}>{v.category}</span>
                                            <h4 className={styles.bubbleTitle}>{v.title}</h4>
                                            <p className={styles.bubbleText}>{v.text}</p>
                                            <div className={styles.bubbleArrow} aria-hidden="true">⇀</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}


