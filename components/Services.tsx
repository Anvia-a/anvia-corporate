'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './Services.module.css';

const services = [
    {
        number: '01',
        title: 'Product Design',
        desc: 'コンセプトからローンチまで、細部にこだわり抜いたデジタルプロダクトを創出します。ユーザーの日常に自然に溶け込む体験を設計します。',
        tags: ['Strategy', 'Engineering', 'Launch'],
        color: 'blue',
    },
    {
        number: '02',
        title: 'Engineering',
        desc: '高いスケーラビリティと先進的なテクノロジーを駆使し、ビジネスの将来の成長を支える堅牢なシステムアーキテクチャを構築します。',
        tags: ['Architecture', 'AI / ML', 'Infrastructure'],
        color: 'navy',
    },
    {
        number: '03',
        title: 'Experience',
        desc: '機能的な使いやすさだけでなく、感情に響く美しさを持ったインターフェース。長く愛されるプロダクトのための洗練されたUI/UXを提供します。',
        tags: ['UI/UX', 'Prototyping', 'Research'],
        color: 'teal',
    },
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <AnimateOnScroll>
                    <div className={styles.header}>
                        <p className="section-label">Services</p>
                        <h2 className="section-heading">
                            What we <span className="gradient-text">do.</span>
                        </h2>
                        <p className="section-subheading">
                            デザイン、開発、体験設計を通じて、<br className="mobile-hide" />
                            人々に時間を取り戻す仕組みをつくります。
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <AnimateOnScroll key={s.title} delay={i * 120}>
                            <div className={`${styles.card} ${styles[`card--${s.color}`]}`}>
                                <span className={styles.number}>{s.number}</span>
                                <div className={styles.cardGlow} />
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <div className={styles.tags}>
                                    {s.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.cardArrow}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
