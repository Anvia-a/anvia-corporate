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
    { ch: 'A', vars: { '--x0': '12%', '--y0': '16%', '--xw1': '24%', '--yw1': '22%', '--xw2': '30%', '--yw2': '60%', '--xa': '27%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'N', vars: { '--x0': '88%', '--y0': '16%', '--xw1': '74%', '--yw1': '30%', '--xw2': '48%', '--yw2': '22%', '--xa': '44%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'E', vars: { '--x0': '18%', '--y0': '82%', '--xw1': '54%', '--yw1': '72%', '--xw2': '68%', '--yw2': '44%', '--xa': '50%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'W', vars: { '--x0': '76%', '--y0': '80%', '--xw1': '36%', '--yw1': '70%', '--xw2': '24%', '--yw2': '42%', '--xa': '56%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'V', vars: { '--x0': '8%', '--y0': '56%', '--xw1': '18%', '--yw1': '30%', '--xw2': '62%', '--yw2': '16%', '--xa': '69%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'I', vars: { '--x0': '94%', '--y0': '52%', '--xw1': '72%', '--yw1': '62%', '--xw2': '38%', '--yw2': '76%', '--xa': '75%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
    { ch: 'A', vars: { '--x0': '52%', '--y0': '8%', '--xw1': '64%', '--yw1': '20%', '--xw2': '88%', '--yw2': '56%', '--xa': '83%', '--ya': '47%', '--delay': '0s', '--dur': '18s' } },
];

const extraLetters: Letter[] = [
    { ch: 'R', vars: { '--x0': '6%', '--y0': '10%', '--xw1': '22%', '--yw1': '24%', '--xw2': '34%', '--yw2': '52%', '--xa': '30%', '--ya': '24%', '--delay': '0.05s', '--dur': '18.15s' } },
    { ch: 'T', vars: { '--x0': '24%', '--y0': '12%', '--xw1': '14%', '--yw1': '38%', '--xw2': '46%', '--yw2': '28%', '--xa': '38%', '--ya': '24%', '--delay': '0.1s', '--dur': '17.9s' } },
    { ch: 'L', vars: { '--x0': '36%', '--y0': '14%', '--xw1': '50%', '--yw1': '12%', '--xw2': '58%', '--yw2': '26%', '--xa': '46%', '--ya': '24%', '--delay': '0.14s', '--dur': '18.2s' } },
    { ch: 'M', vars: { '--x0': '56%', '--y0': '10%', '--xw1': '72%', '--yw1': '12%', '--xw2': '80%', '--yw2': '30%', '--xa': '54%', '--ya': '24%', '--delay': '0.18s', '--dur': '17.95s' } },
    { ch: 'S', vars: { '--x0': '74%', '--y0': '10%', '--xw1': '86%', '--yw1': '24%', '--xw2': '76%', '--yw2': '36%', '--xa': '62%', '--ya': '24%', '--delay': '0.2s', '--dur': '18.1s' } },
    { ch: 'P', vars: { '--x0': '92%', '--y0': '16%', '--xw1': '94%', '--yw1': '38%', '--xw2': '74%', '--yw2': '48%', '--xa': '70%', '--ya': '24%', '--delay': '0.23s', '--dur': '17.85s' } },
    { ch: 'C', vars: { '--x0': '96%', '--y0': '32%', '--xw1': '84%', '--yw1': '54%', '--xw2': '66%', '--yw2': '62%', '--xa': '78%', '--ya': '24%', '--delay': '0.26s', '--dur': '18.2s' } },
    { ch: 'D', vars: { '--x0': '94%', '--y0': '52%', '--xw1': '72%', '--yw1': '74%', '--xw2': '52%', '--yw2': '78%', '--xa': '86%', '--ya': '24%', '--delay': '0.3s', '--dur': '17.9s' } },
    { ch: 'H', vars: { '--x0': '84%', '--y0': '74%', '--xw1': '56%', '--yw1': '84%', '--xw2': '36%', '--yw2': '80%', '--xa': '30%', '--ya': '70%', '--delay': '0.33s', '--dur': '18.2s' } },
    { ch: 'U', vars: { '--x0': '62%', '--y0': '88%', '--xw1': '38%', '--yw1': '82%', '--xw2': '20%', '--yw2': '66%', '--xa': '38%', '--ya': '70%', '--delay': '0.36s', '--dur': '17.85s' } },
    { ch: 'Y', vars: { '--x0': '40%', '--y0': '90%', '--xw1': '24%', '--yw1': '70%', '--xw2': '16%', '--yw2': '50%', '--xa': '48%', '--ya': '70%', '--delay': '0.4s', '--dur': '18.1s' } },
    { ch: 'O', vars: { '--x0': '20%', '--y0': '86%', '--xw1': '14%', '--yw1': '58%', '--xw2': '26%', '--yw2': '36%', '--xa': '58%', '--ya': '70%', '--delay': '0.44s', '--dur': '17.95s' } },
    { ch: 'B', vars: { '--x0': '10%', '--y0': '72%', '--xw1': '22%', '--yw1': '42%', '--xw2': '40%', '--yw2': '30%', '--xa': '68%', '--ya': '70%', '--delay': '0.48s', '--dur': '18.15s' } },
];

const meaningText = 'Anvia comes from \u201CA New Via\u201D \u2014 a new way forward.';

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
                                            style={{ '--ri': i } as React.CSSProperties}
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


