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
    '--xb': string;
    '--yb': string;
    '--xn': string;
    '--yn': string;
    '--delay': string;
    '--dur': string;
};

type Letter = {
    ch: string;
    vars: LetterVars;
};

const coreLetters: Letter[] = [
    { ch: 'A', vars: { '--x0': '8%', '--y0': '18%', '--xw1': '26%', '--yw1': '16%', '--xw2': '24%', '--yw2': '62%', '--xa': '25.5%', '--ya': '47%', '--xb': '12%', '--yb': '26%', '--xn': '48%', '--yn': '49%', '--delay': '0s', '--dur': '12.2s' } },
    { ch: 'N', vars: { '--x0': '86%', '--y0': '14%', '--xw1': '76%', '--yw1': '34%', '--xw2': '48%', '--yw2': '22%', '--xa': '42.5%', '--ya': '47%', '--xb': '62%', '--yb': '22%', '--xn': '49%', '--yn': '49%', '--delay': '0.05s', '--dur': '12.55s' } },
    { ch: 'E', vars: { '--x0': '16%', '--y0': '84%', '--xw1': '54%', '--yw1': '74%', '--xw2': '70%', '--yw2': '46%', '--xa': '49.3%', '--ya': '47%', '--xb': '34%', '--yb': '79%', '--xn': '50%', '--yn': '49%', '--delay': '0.1s', '--dur': '12.9s' } },
    { ch: 'W', vars: { '--x0': '76%', '--y0': '80%', '--xw1': '38%', '--yw1': '70%', '--xw2': '26%', '--yw2': '42%', '--xa': '56%', '--ya': '47%', '--xb': '86%', '--yb': '71%', '--xn': '51%', '--yn': '49%', '--delay': '0.15s', '--dur': '13.05s' } },
    { ch: 'V', vars: { '--x0': '6%', '--y0': '56%', '--xw1': '20%', '--yw1': '28%', '--xw2': '64%', '--yw2': '16%', '--xa': '69.5%', '--ya': '47%', '--xb': '20%', '--yb': '60%', '--xn': '52%', '--yn': '49%', '--delay': '0.2s', '--dur': '12.35s' } },
    { ch: 'I', vars: { '--x0': '96%', '--y0': '52%', '--xw1': '72%', '--yw1': '62%', '--xw2': '36%', '--yw2': '76%', '--xa': '75.8%', '--ya': '47%', '--xb': '94%', '--yb': '42%', '--xn': '53%', '--yn': '49%', '--delay': '0.24s', '--dur': '12.7s' } },
    { ch: 'A', vars: { '--x0': '46%', '--y0': '4%', '--xw1': '60%', '--yw1': '18%', '--xw2': '88%', '--yw2': '58%', '--xa': '82.2%', '--ya': '47%', '--xb': '76%', '--yb': '8%', '--xn': '54%', '--yn': '49%', '--delay': '0.29s', '--dur': '13.2s' } },
];

const extraLetters: Letter[] = [
    { ch: 'R', vars: { '--x0': '4%', '--y0': '8%', '--xw1': '24%', '--yw1': '22%', '--xw2': '34%', '--yw2': '50%', '--xa': '30%', '--ya': '24%', '--xb': '8%', '--yb': '10%', '--xn': '45%', '--yn': '48%', '--delay': '0.02s', '--dur': '12.45s' } },
    { ch: 'T', vars: { '--x0': '22%', '--y0': '12%', '--xw1': '14%', '--yw1': '36%', '--xw2': '46%', '--yw2': '26%', '--xa': '38%', '--ya': '24%', '--xb': '24%', '--yb': '8%', '--xn': '46%', '--yn': '48%', '--delay': '0.04s', '--dur': '13.1s' } },
    { ch: 'L', vars: { '--x0': '34%', '--y0': '14%', '--xw1': '50%', '--yw1': '12%', '--xw2': '58%', '--yw2': '24%', '--xa': '46%', '--ya': '24%', '--xb': '44%', '--yb': '6%', '--xn': '47%', '--yn': '48%', '--delay': '0.06s', '--dur': '12.65s' } },
    { ch: 'M', vars: { '--x0': '54%', '--y0': '10%', '--xw1': '72%', '--yw1': '12%', '--xw2': '80%', '--yw2': '30%', '--xa': '54%', '--ya': '24%', '--xb': '66%', '--yb': '8%', '--xn': '48%', '--yn': '48%', '--delay': '0.08s', '--dur': '13.25s' } },
    { ch: 'S', vars: { '--x0': '74%', '--y0': '10%', '--xw1': '86%', '--yw1': '24%', '--xw2': '76%', '--yw2': '36%', '--xa': '62%', '--ya': '24%', '--xb': '86%', '--yb': '18%', '--xn': '49%', '--yn': '48%', '--delay': '0.10s', '--dur': '12.35s' } },
    { ch: 'P', vars: { '--x0': '90%', '--y0': '16%', '--xw1': '94%', '--yw1': '38%', '--xw2': '74%', '--yw2': '48%', '--xa': '70%', '--ya': '24%', '--xb': '96%', '--yb': '34%', '--xn': '50%', '--yn': '48%', '--delay': '0.12s', '--dur': '12.95s' } },
    { ch: 'C', vars: { '--x0': '96%', '--y0': '30%', '--xw1': '84%', '--yw1': '54%', '--xw2': '64%', '--yw2': '64%', '--xa': '78%', '--ya': '24%', '--xb': '98%', '--yb': '52%', '--xn': '51%', '--yn': '48%', '--delay': '0.14s', '--dur': '13.35s' } },
    { ch: 'D', vars: { '--x0': '94%', '--y0': '50%', '--xw1': '72%', '--yw1': '74%', '--xw2': '50%', '--yw2': '78%', '--xa': '86%', '--ya': '24%', '--xb': '92%', '--yb': '76%', '--xn': '52%', '--yn': '48%', '--delay': '0.16s', '--dur': '12.58s' } },
    { ch: 'H', vars: { '--x0': '84%', '--y0': '74%', '--xw1': '56%', '--yw1': '84%', '--xw2': '36%', '--yw2': '80%', '--xa': '30%', '--ya': '68%', '--xb': '86%', '--yb': '90%', '--xn': '47%', '--yn': '51%', '--delay': '0.18s', '--dur': '13.05s' } },
    { ch: 'U', vars: { '--x0': '62%', '--y0': '88%', '--xw1': '38%', '--yw1': '82%', '--xw2': '20%', '--yw2': '66%', '--xa': '44%', '--ya': '68%', '--xb': '62%', '--yb': '96%', '--xn': '48%', '--yn': '51%', '--delay': '0.20s', '--dur': '12.42s' } },
    { ch: 'Y', vars: { '--x0': '40%', '--y0': '90%', '--xw1': '24%', '--yw1': '70%', '--xw2': '18%', '--yw2': '50%', '--xa': '50%', '--ya': '68%', '--xb': '34%', '--yb': '94%', '--xn': '49%', '--yn': '51%', '--delay': '0.22s', '--dur': '13.18s' } },
    { ch: 'O', vars: { '--x0': '20%', '--y0': '86%', '--xw1': '16%', '--yw1': '58%', '--xw2': '26%', '--yw2': '36%', '--xa': '58%', '--ya': '68%', '--xb': '12%', '--yb': '80%', '--xn': '50%', '--yn': '51%', '--delay': '0.24s', '--dur': '12.76s' } },
    { ch: 'B', vars: { '--x0': '8%', '--y0': '72%', '--xw1': '22%', '--yw1': '42%', '--xw2': '40%', '--yw2': '30%', '--xa': '68%', '--ya': '68%', '--xb': '2%', '--yb': '56%', '--xn': '51%', '--yn': '51%', '--delay': '0.26s', '--dur': '13.28s' } },
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
