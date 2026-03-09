'use client';

import AnimateOnScroll from './AnimateOnScroll';
import styles from './Company.module.css';

const companyInfo = [
    { label: '会社名', value: '株式会社Anvia' },
    { label: '代表取締役', value: '田代 彩也' },
    { label: '設立', value: '2025年12月' },
    { label: '所在地', value: '東京都渋谷区円山町5-5 Navi渋谷V 3階' },
    { label: '事業内容', value: 'プロダクト開発・サービス運営' },
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
                            <div className={styles.networkField}>
                                <span className={`${styles.networkLine} ${styles.lineA}`} />
                                <span className={`${styles.networkLine} ${styles.lineB}`} />
                                <span className={`${styles.networkLine} ${styles.lineC}`} />
                                <span className={`${styles.networkLine} ${styles.lineD}`} />
                                <span className={`${styles.networkLine} ${styles.lineE}`} />
                                <span className={`${styles.networkLine} ${styles.lineF}`} />
                                <span className={`${styles.networkLine} ${styles.lineG}`} />
                                <span className={`${styles.networkLine} ${styles.lineH}`} />

                                <span className={`${styles.node} ${styles.nodeA}`} />
                                <span className={`${styles.node} ${styles.nodeB}`} />
                                <span className={`${styles.node} ${styles.nodeC}`} />
                                <span className={`${styles.node} ${styles.nodeD}`} />
                                <span className={`${styles.node} ${styles.nodeE}`} />
                                <span className={`${styles.node} ${styles.nodeF}`} />
                                <span className={`${styles.node} ${styles.nodeG}`} />
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}