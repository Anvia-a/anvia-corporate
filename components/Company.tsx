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

const coreLetters = [
    { ch: 'A', cls: styles.c1 },
    { ch: 'N', cls: styles.c2 },
    { ch: 'E', cls: styles.c3 },
    { ch: 'W', cls: styles.c4 },
    { ch: 'V', cls: styles.c5 },
    { ch: 'I', cls: styles.c6 },
    { ch: 'A', cls: styles.c7 },
];

const extraLetters = [
    { ch: 'R', cls: styles.e1 },
    { ch: 'T', cls: styles.e2 },
    { ch: 'L', cls: styles.e3 },
    { ch: 'M', cls: styles.e4 },
    { ch: 'S', cls: styles.e5 },
    { ch: 'P', cls: styles.e6 },
    { ch: 'C', cls: styles.e7 },
    { ch: 'D', cls: styles.e8 },
    { ch: 'H', cls: styles.e9 },
    { ch: 'U', cls: styles.e10 },
    { ch: 'Y', cls: styles.e11 },
    { ch: 'O', cls: styles.e12 },
    { ch: 'B', cls: styles.e13 },
];

const meaningText = 'Anvia comes from “A New Via” — a new way forward.';

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
                            <div className={styles.nameField}>
                                {coreLetters.map((l) => (
                                    <span key={`core-${l.cls}`} className={`${styles.glyph} ${styles.coreGlyph} ${l.cls}`}>{l.ch}</span>
                                ))}

                                {extraLetters.map((l) => (
                                    <span key={`extra-${l.cls}`} className={`${styles.glyph} ${styles.extraGlyph} ${l.cls}`}>{l.ch}</span>
                                ))}

                                <span className={styles.finalWord}>Anvia</span>

                                <span className={`${styles.spark} ${styles.sparkA}`} />
                                <span className={`${styles.spark} ${styles.sparkB}`} />
                                <span className={`${styles.spark} ${styles.sparkC}`} />
                                <span className={`${styles.spark} ${styles.sparkD}`} />

                                <p className={styles.meaning} aria-label={meaningText}>
                                    {meaningText.split('').map((char, i) => (
                                        <span
                                            key={`meaning-${i}`}
                                            className={styles.meaningChar}
                                            style={{ '--i': i } as React.CSSProperties}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                    <span className={`${styles.meaningSpark} ${styles.meaningSparkA}`} />
                                    <span className={`${styles.meaningSpark} ${styles.meaningSparkB}`} />
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
