'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './Company.module.css';

const companyInfo = [
    { label: '会社名', value: '株式会社Anvia' },
    { label: '代表者', value: '安藤 大輔' },
    { label: '設立', value: '2025年12月' },
    { label: '所在地', value: '東京都渋谷区神南1-5-5 Navi神南V 3F' },
    { label: '事業領域', value: 'プロダクト開発・サービス改善支援' },
];

export default function Company() {
    return (
        <section id="company" className={`section ${styles.company}`}>
            <div className="container">
                <AnimateOnScroll>
                    <div className={styles.header}>
                        <p className="section-label">Company</p>
                        <h2 className="section-heading">
                            Who we <span className="gradient-text">are.</span>
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className={styles.infoWrapper}>
                    <AnimateOnScroll delay={100}>
                        <div className={styles.infoBlock}>
                            <div className={styles.table}>
                                {companyInfo.map((row) => (
                                    <div key={row.label} className={styles.row}>
                                        <dt className={styles.dt}>{row.label}</dt>
                                        <dd className={styles.dd}>{row.value}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll delay={180}>
                        <div className={styles.visualPanel} aria-hidden="true">
                            <div className={styles.ringOne} />
                            <div className={styles.ringTwo} />
                            <div className={styles.nodeCore} />
                            <span className={`${styles.node} ${styles.nodeA}`} />
                            <span className={`${styles.node} ${styles.nodeB}`} />
                            <span className={`${styles.node} ${styles.nodeC}`} />
                            <span className={`${styles.node} ${styles.nodeD}`} />
                            <svg className={styles.lineLayer} viewBox="0 0 280 280" fill="none">
                                <path d="M140 40 L220 96 L200 206 L80 236 L44 132 Z" />
                                <path d="M140 40 L80 236" />
                                <path d="M220 96 L44 132" />
                            </svg>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
