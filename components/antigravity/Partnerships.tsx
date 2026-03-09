'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './Partnerships.module.css';

const offerings = [
    {
        icon: '⬡',
        title: 'New Product Incubation',
        desc: 'ゼロからコンセプトの検証まで。プロダクトの核となる価値を見極め、アイデアを洗練された形へと昇華させます。',
    },
    {
        icon: '⬡',
        title: 'Web & App Development',
        desc: '高品質なWebアプリケーションや業務システム。細部まで丁寧に作り込み、長期的な運用に耐えうる設計を提供します。',
    },
    {
        icon: '⬡',
        title: 'AI Integration',
        desc: '自然な使い心地のインテリジェント機能。体験を真に向上させる場面を見極め、AIを適切にプロダクトに統合します。',
    },
    {
        icon: '⬡',
        title: 'Strategic Partnership',
        desc: '技術パートナーやアドバイザーとして、新たな方向性を模索する企業やスタートアップと長期的に協業します。',
    },
];

export default function Partnerships() {
    return (
        <section id="partnerships" className={`section ${styles.partnerships}`}>
            {/* Background grid decoration */}
            <div className={styles.bgGrid} />

            <div className="container">
                <div className={styles.inner}>
                    <AnimateOnScroll>
                        <div className={styles.left}>
                            <p className="section-label">Partnerships</p>
                            <h2 className="section-heading">
                                新しい価値を、<br />
                                <span className="gradient-text">共に。</span>
                            </h2>
                            <p className={styles.intro}>
                                Anviaは自社プロダクトを軸としながらも、<br className="mobile-hide" />
                                シンプルで洗練された体験という価値観を共有できる<br className="mobile-hide" />
                                野心的なプロジェクトとの協業を歓迎しています。
                            </p>
                            <a href="#contact" className={`btn btn-gradient ${styles.cta}`}>
                                ご相談はこちら
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.right}>
                        {offerings.map((item, i) => (
                            <AnimateOnScroll key={item.title} delay={i * 100}>
                                <div className={styles.item}>
                                    <div className={styles.itemDot} />
                                    <div>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
