'use client';

import styles from './Footer.module.css';

const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Our Vision', href: '/#vision' },
    { label: 'Services', href: '/#services' },
    { label: 'Partnerships', href: '/#partnerships' },
    { label: 'Company', href: '/#company' },
    { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (window.location.pathname === '/') {
            const id = href.replace('/', '');
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const offset = 72;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className="container">
                    <div className={styles.topInner}>
                        <div className={styles.brand}>
                            <div className={styles.logoWrap}>
                                <span className={styles.logoText}>Anvia</span>
                            </div>
                            <p className={styles.tagline}>Make time work better.</p>
                            <p className={styles.taglineJa}>時間を、もっと自由に。</p>
                        </div>

                        <nav className={styles.nav}>
                            <p className={styles.navTitle}>Navigation</p>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={(e) => handleClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className={styles.connect}>
                            <p className={styles.navTitle}>Connect</p>
                            <a href="https://twitter.com/" className={styles.navLink} target="_blank" rel="noopener noreferrer">X / Twitter</a>
                            <a href="https://instagram.com/" className={styles.navLink} target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <p className={styles.copy}>© {year} Anvia Inc. All rights reserved.</p>
                        <div className={styles.legal}>
                            <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
                            <a href="/terms-of-service" className={styles.legalLink}>Terms of Service</a>
                            <a href="/cookie-policy" className={styles.legalLink}>Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
