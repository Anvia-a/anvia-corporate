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
                                <span className={styles.line}><span className="gradient-text">最も重要な価値</span>だと</span>
                                <span className={styles.line}>考えています。</span>
                            </h2>
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.right}>
                        <AnimateOnScroll delay={100}>
                            <p className={styles.lead}>
                                不要な摩擦、繰り返しの作業、複雑さとの格闘。そうしたものに費やされる時間は、本来もっと価値あることに使われるべきものです。
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={200}>
                            <p className={styles.body}>
                                Anviaは「テクノロジーは時間を奪うものではなく、取り戻すためにある」という考えから生まれました。私たちは複雑さをシンプルに変え、人々の日常をより軽やかにするプロダクトを設計・開発しています。
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={300}>
                            <div className={styles.pillars}>
                                {[
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
                                        label: 'シンプルを第一に',
                                        desc: '余計な機能を増やすのではなく、本質的な価値だけを残す設計を大切にしています。'
                                    },
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                                        label: 'ユーザー中心の設計',
                                        desc: 'ユーザーの体験を中心に、直感的で心地よいプロダクトを設計します。'
                                    },
                                    {
                                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                                        label: '長期的な価値',
                                        desc: '短期的なトレンドではなく、長く使われ続ける価値を目指します。'
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

