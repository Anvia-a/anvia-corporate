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

type LetterVars = {
    '--x0': string;
    '--y0': string;
    '--xw1': string;
    '--yw1': string;
    '--xw2': string;
    '--yw2': string;
    '--xa': string;
    '--ya': string;
    '--delay': string;
    '--dur': string;
};

type Letter = {
    ch: string;
    vars: LetterVars;
};

const coreLetters: Letter[] = [
    { ch: 'A', vars: { '--x0': '10%', '--y0': '14%', '--xw1': '28%', '--yw1': '18%', '--xw2': '32%', '--yw2': '58%', '--xa': '24%', '--ya': '47%', '--delay': '0s', '--dur': '14s' } },
    { ch: 'N', vars: { '--x0': '88%', '--y0': '16%', '--xw1': '72%', '--yw1': '30%', '--xw2': '46%', '--yw2': '20%', '--xa': '41%', '--ya': '47%', '--delay': '0.05s', '--dur': '13.7s' } },
    { ch: 'E', vars: { '--x0': '18%', '--y0': '82%', '--xw1': '52%', '--yw1': '74%', '--xw2': '70%', '--yw2': '42%', '--xa': '49%', '--ya': '47%', '--delay': '0.09s', '--dur': '14.2s' } },
    { ch: 'W', vars: { '--x0': '76%', '--y0': '80%', '--xw1': '34%', '--yw1': '70%', '--xw2': '24%', '--yw2': '42%', '--xa': '56%', '--ya': '47%', '--delay': '0.14s', '--dur': '13.85s' } },
    { ch: 'V', vars: { '--x0': '8%', '--y0': '54%', '--xw1': '18%', '--yw1': '28%', '--xw2': '62%', '--yw2': '14%', '--xa': '69%', '--ya': '47%', '--delay': '0.19s', '--dur': '14.1s' } },
    { ch: 'I', vars: { '--x0': '92%', '--y0': '52%', '--xw1': '70%', '--yw1': '62%', '--xw2': '36%', '--yw2': '76%', '--xa': '76%', '--ya': '47%', '--delay': '0.23s', '--dur': '13.9s' } },
    { ch: 'A', vars: { '--x0': '54%', '--y0': '8%', '--xw1': '66%', '--yw1': '20%', '--xw2': '88%', '--yw2': '54%', '--xa': '84%', '--ya': '47%', '--delay': '0.28s', '--dur': '14.25s' } },
];

const extraLetters: Letter[] = [
    { ch: 'R', vars: { '--x0': '6%', '--y0': '10%', '--xw1': '22%', '--yw1': '22%', '--xw2': '36%', '--yw2': '50%', '--xa': '28%', '--ya': '23%', '--delay': '0.02s', '--dur': '13.95s' } },
    { ch: 'T', vars: { '--x0': '22%', '--y0': '10%', '--xw1': '12%', '--yw1': '36%', '--xw2': '48%', '--yw2': '26%', '--xa': '36%', '--ya': '23%', '--delay': '0.04s', '--dur': '14.05s' } },
    { ch: 'L', vars: { '--x0': '34%', '--y0': '12%', '--xw1': '48%', '--yw1': '12%', '--xw2': '58%', '--yw2': '26%', '--xa': '44%', '--ya': '23%', '--delay': '0.06s', '--dur': '13.8s' } },
    { ch: 'M', vars: { '--x0': '52%', '--y0': '10%', '--xw1': '70%', '--yw1': '10%', '--xw2': '80%', '--yw2': '28%', '--xa': '52%', '--ya': '23%', '--delay': '0.08s', '--dur': '14.15s' } },
    { ch: 'S', vars: { '--x0': '72%', '--y0': '10%', '--xw1': '86%', '--yw1': '22%', '--xw2': '76%', '--yw2': '36%', '--xa': '60%', '--ya': '23%', '--delay': '0.1s', '--dur': '13.75s' } },
    { ch: 'P', vars: { '--x0': '90%', '--y0': '14%', '--xw1': '92%', '--yw1': '36%', '--xw2': '72%', '--yw2': '46%', '--xa': '68%', '--ya': '23%', '--delay': '0.12s', '--dur': '14.2s' } },
    { ch: 'C', vars: { '--x0': '94%', '--y0': '30%', '--xw1': '84%', '--yw1': '54%', '--xw2': '64%', '--yw2': '62%', '--xa': '76%', '--ya': '23%', '--delay': '0.14s', '--dur': '13.85s' } },
    { ch: 'D', vars: { '--x0': '92%', '--y0': '50%', '--xw1': '72%', '--yw1': '72%', '--xw2': '50%', '--yw2': '78%', '--xa': '84%', '--ya': '23%', '--delay': '0.16s', '--dur': '14.05s' } },
    { ch: 'H', vars: { '--x0': '82%', '--y0': '74%', '--xw1': '54%', '--yw1': '82%', '--xw2': '36%', '--yw2': '80%', '--xa': '28%', '--ya': '70%', '--delay': '0.18s', '--dur': '14.1s' } },
    { ch: 'U', vars: { '--x0': '62%', '--y0': '88%', '--xw1': '38%', '--yw1': '82%', '--xw2': '20%', '--yw2': '66%', '--xa': '38%', '--ya': '70%', '--delay': '0.2s', '--dur': '13.7s' } },
    { ch: 'Y', vars: { '--x0': '40%', '--y0': '90%', '--xw1': '24%', '--yw1': '70%', '--xw2': '16%', '--yw2': '50%', '--xa': '48%', '--ya': '70%', '--delay': '0.22s', '--dur': '14.2s' } },
    { ch: 'O', vars: { '--x0': '20%', '--y0': '86%', '--xw1': '14%', '--yw1': '58%', '--xw2': '26%', '--yw2': '36%', '--xa': '58%', '--ya': '70%', '--delay': '0.24s', '--dur': '13.9s' } },
    { ch: 'B', vars: { '--x0': '10%', '--y0': '72%', '--xw1': '22%', '--yw1': '42%', '--xw2': '40%', '--yw2': '30%', '--xa': '68%', '--ya': '70%', '--delay': '0.26s', '--dur': '14.15s' } },
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
                                {coreLetters.map((l, i) => (
                                    <span key={`core-${i}`} className={`${styles.glyph} ${styles.coreGlyph}`} style={l.vars as React.CSSProperties}>{l.ch}</span>
                                ))}

                                {extraLetters.map((l, i) => (
                                    <span key={`extra-${i}`} className={`${styles.glyph} ${styles.extraGlyph}`} style={l.vars as React.CSSProperties}>{l.ch}</span>
                                ))}

                                <span className={styles.absorbDot} />
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
                                            style={{ '--ri': meaningText.length - i } as React.CSSProperties}
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
