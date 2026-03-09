'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Contact.module.css';

type Tab = 'individual' | 'business';

const inquiryTypes = [
    'サービスに関するお問い合わせ',
    'パートナーシップ・協業について',
    '採用に関するお問い合わせ',
    '取材・メディア関連',
    'その他',
];

export default function Contact() {
    const [tab, setTab] = useState<Tab>('individual');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className={styles.bgBlob} />

            <div className="container">
                <AnimateOnScroll>
                    <div className={styles.headerRow}>
                        <p className="section-label">Contact</p>
                        <h2 className="section-heading">お問い合わせ</h2>
                    </div>
                </AnimateOnScroll>

                <div className={styles.viewPortContainer}>
                    <div className={styles.grid}>
                        <AnimateOnScroll delay={100}>
                            <div className={styles.infoPanel}>
                                <p className={styles.infoLead}>
                                    サービスに関するご質問、パートナーシップのご相談など、お気軽にお問い合わせください。内容を確認のうえ、担当者よりご連絡いたします。
                                </p>

                                <div className={styles.socials}>
                                    <p className={styles.socialsLabel}>SNS</p>
                                    <div className={styles.socialLinks}>
                                        {[
                                            { label: 'X / Twitter', href: 'https://twitter.com/' },
                                            { label: 'Instagram', href: 'https://instagram.com/' },
                                        ].map((s) => (
                                            <a key={s.label} href={s.href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                                {s.label}
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={200}>
                            <div className={styles.formPanel}>
                                <div className={styles.tabs}>
                                    <button
                                        className={`${styles.tab} ${tab === 'individual' ? styles.tabActive : ''}`}
                                        onClick={() => setTab('individual')}
                                    >
                                        個人のお客様
                                    </button>
                                    <button
                                        className={`${styles.tab} ${tab === 'business' ? styles.tabActive : ''}`}
                                        onClick={() => setTab('business')}
                                    >
                                        法人・団体のお客様
                                    </button>
                                </div>

                                {submitted ? (
                                    <div className={styles.success}>
                                        <div className={styles.successIcon}>✓</div>
                                        <h3>送信完了しました。</h3>
                                        <p>お問い合わせいただきありがとうございます。<br />内容を確認のうえ、担当者よりご連絡いたします。</p>
                                        <button className={`btn btn-outline ${styles.resetBtn}`} onClick={() => setSubmitted(false)}>
                                            続けて送信する
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        {tab === 'individual' ? (
                                            <>
                                                <FormField label="お名前" name="name" type="text" required placeholder="山田 太郎" />
                                                <FormField label="メールアドレス" name="email" type="email" required placeholder="example@email.com" />
                                                <FormTextarea label="お問い合わせ内容" name="message" required placeholder="ご質問やご相談内容をご記入ください。" />
                                            </>
                                        ) : (
                                            <>
                                                <div className={styles.fieldRow}>
                                                    <FormField label="会社名・団体名" name="company" type="text" required placeholder="株式会社〇〇" />
                                                    <FormField label="お名前" name="name" type="text" required placeholder="山田 太郎" />
                                                </div>
                                                <div className={styles.fieldRow}>
                                                    <FormField label="メールアドレス" name="email" type="email" required placeholder="example@company.co.jp" />
                                                    <FormField label="電話番号" name="phone" type="tel" placeholder="03-0000-0000" />
                                                </div>
                                                <FormSelect label="お問い合わせ種別" name="inquiry" required options={inquiryTypes} />
                                                <FormTextarea label="お問い合わせ内容" name="message" required placeholder="ご相談やプロジェクトの概要をご記入ください。" />
                                            </>
                                        )}

                                        <button type="submit" className={`btn btn-gradient ${styles.submitBtn}`} disabled={loading}>
                                            {loading ? (
                                                <span className={styles.spinner} />
                                            ) : (
                                                <>
                                                    送信する
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M2 8l12 0M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormField({
    label,
    name,
    type,
    required,
    placeholder,
}: {
    label: string;
    name: string;
    type: string;
    required?: boolean;
    placeholder?: string;
}) {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>{label}{required && <span className={styles.req}>*</span>}</label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
}

function FormTextarea({
    label,
    name,
    required,
    placeholder,
}: {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
}) {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>{label}{required && <span className={styles.req}>*</span>}</label>
            <textarea
                id={name}
                name={name}
                required={required}
                placeholder={placeholder}
                rows={3}
                className={`${styles.input} ${styles.textarea}`}
            />
        </div>
    );
}

function FormSelect({
    label,
    name,
    required,
    options,
}: {
    label: string;
    name: string;
    required?: boolean;
    options: string[];
}) {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>{label}{required && <span className={styles.req}>*</span>}</label>
            <div className={styles.selectWrap}>
                <select id={name} name={name} required={required} className={`${styles.input} ${styles.select}`}>
                    <option value="">選択してください</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <svg className={styles.selectChevron} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
}
