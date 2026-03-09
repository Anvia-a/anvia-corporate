'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Our Vision', href: '/#vision' },
    { label: 'Services', href: '/#services' },
    { label: 'Partnerships', href: '/#partnerships' },
    { label: 'Mission', href: '/#mission' },
    { label: 'Company', href: '/#company' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMenuOpen(false);

        // If we are on the home page, do smooth scroll
        if (window.location.pathname === '/') {
            const id = href.replace('/', ''); // Fix for /#id
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const offset = 72;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
        // If not on home page, allow default link behavior to load the home page with hash
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <a href="/#home" className={styles.logo} onClick={(e) => handleNavClick(e, '/#home')}>
                    <span className={styles.logoText}>Anvia</span>
                </a>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className={`btn btn-primary ${styles.ctaBtn}`}
                    onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                >
                    Contact
                </a>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className={`btn btn-primary ${styles.mobileCta}`}
                    onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                >
                    Contact
                </a>
            </div>
        </header>
    );
}
