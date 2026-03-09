'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './OurVision.module.css';

export default function OurVision() {
    return (
        <section id="vision" className={`section ${styles.vision}`}>
            <div className={styles.bgBlob} />

            <div className="container">
                <div className={styles.grid}>
                    <AnimateOnScroll>
                        <div className={styles.left}>
                            <p className="section-label">Our Vision</p>
                            <h2 className="section-heading">
                                <span className={styles.line}>私たちは、</span>
                                <span className={styles.line}>時間は管理すべき</span>
                                <span className={styles.line}>リソースではなく、</span>
                                <span className={styles.line}>人生を形づくる</span>
                                <span className={styles.line}>最も重要な価値だと</span>
                                <span className={styles.line}>考えています。</span>
                            </h2>
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.right}>
                        <div className={styles.timeBackdrop} aria-hidden="true">
                            <span>TIME</span>
                            <span>TIME</span>
                            <span>TIME</span>
                        </div>

                        <AnimateOnScroll delay={100}>
                            <p className={styles.lead}>
                                直感に頼る判断を減らし、事業の強みとユーザー理解に基づく意思決定を実装します。
                                コーポレートサイトは会社の現在地を示すだけでなく、次の行動を生むための起点です。
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={200}>
                            <p className={styles.body}>
                                Anviaは、テクノロジーとデザインの両面から体験を設計し、
                                情報の見せ方・導線・運用までを一気通貫で支援します。
                                余白のある設計と改善の反復によって、長期的に効く価値を積み上げます。
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                            <div className={styles.pillars}>
                                {[
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
                                        label: 'シンプルを第一に',
                                        desc: '複雑さを増やさずに、本質的な価値が伝わる設計を行います。',
                                    },
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                                        label: '人間中心の設計',
                                        desc: 'ユーザーの文脈に沿って、迷いの少ない体験をデザインします。',
                                    },
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                                        label: '継続的な改善',
                                        desc: '公開して終わりではなく、運用と検証で成果を高め続けます。',
                                    },
                                ].map((p, i) => (
                                    <div key={p.label} className={styles.pillar} style={{ animationDelay: `${i * 0.1}s` }}>
                                        <span className={styles.pillarIcon}>{p.icon}</span>
                                        <span className={styles.pillarLabel}>{p.label}</span>
                                        <span className={styles.pillarDesc}>{p.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
