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
                            <svg className={styles.networkSvg} viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice">
                                <path className={`${styles.organicLine} ${styles.pathA}`} d="M-40 110 C 120 40, 220 180, 360 130 C 500 80, 580 210, 720 150" />
                                <path className={`${styles.organicLine} ${styles.pathB}`} d="M-20 180 C 120 130, 240 240, 360 200 C 510 150, 600 280, 700 250" />
                                <path className={`${styles.organicLine} ${styles.pathC}`} d="M-40 250 C 120 210, 220 320, 340 280 C 500 220, 600 340, 720 300" />
                                <path className={`${styles.organicLine} ${styles.pathD}`} d="M20 60 C 160 20, 260 130, 390 90 C 520 50, 590 140, 700 110" />
                                <path className={`${styles.organicLine} ${styles.pathE}`} d="M0 320 C 130 290, 230 390, 360 360 C 500 320, 580 390, 700 370" />
                            </svg>

                            <span className={`${styles.node} ${styles.nodeA}`} />
                            <span className={`${styles.node} ${styles.nodeB}`} />
                            <span className={`${styles.node} ${styles.nodeC}`} />
                            <span className={`${styles.node} ${styles.nodeD}`} />
                            <span className={`${styles.node} ${styles.nodeE}`} />
                            <span className={`${styles.node} ${styles.nodeF}`} />
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}