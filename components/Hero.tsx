'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface Line {
    baseY: number;
    amplitude: number;
    frequency: number;
    speed: number;
    phase: number;
    alpha: number;
    width: number;
}

function initCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => undefined;
    const context = ctx;

    const dpr = window.devicePixelRatio || 1;
    let raf = 0;
    let t = 0;

    function resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const lineCount = 26;
    const lines: Line[] = Array.from({ length: lineCount }, (_, i) => {
        const progress = i / (lineCount - 1);
        return {
            baseY: -0.18 + progress * 1.4,
            amplitude: 16 + Math.random() * 22,
            frequency: 0.0035 + Math.random() * 0.002,
            speed: 0.017 + Math.random() * 0.018,
            phase: Math.random() * Math.PI * 2,
            alpha: 0.028 + Math.random() * 0.03,
            width: 0.65 + Math.random() * 0.75,
        };
    });

    function draw() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, w, h);

        t += 1;

        lines.forEach((line, index) => {
            context.beginPath();
            context.lineWidth = line.width;

            const hue = 202 + (index % 5) * 3;
            const gradient = context.createLinearGradient(0, h, w, 0);
            gradient.addColorStop(0, `hsla(${hue}, 58%, 70%, 0)`);
            gradient.addColorStop(0.35, `hsla(${hue}, 58%, 70%, ${line.alpha})`);
            gradient.addColorStop(1, `hsla(${hue + 8}, 62%, 66%, ${line.alpha * 0.85})`);
            context.strokeStyle = gradient;

            for (let x = -80; x <= w + 80; x += 6) {
                const diagonalShift = (1 - x / w) * (h * 0.34);
                const travel = t * line.speed;
                const y =
                    h * line.baseY +
                    diagonalShift +
                    Math.sin(x * line.frequency + travel + line.phase) * line.amplitude +
                    Math.sin(x * line.frequency * 0.52 - travel * 0.75 + line.phase) * (line.amplitude * 0.35);

                if (x === -80) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }

            context.stroke();
        });

        raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(raf);
    };
}

function HeroText() {
    return (
        <div className={styles.textContent}>
            <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                テクノロジー · デザイン · 時間
            </p>

            <h1 className={styles.headline}>
                <span className={styles.revealLine} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                    Make time{' '}
                </span>
                <span className={`${styles.revealLine} ${styles.gradientLine}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                    work better.
                </span>
            </h1>

            <p className={styles.jaSubtitle} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                時間を、もっと自由に。
            </p>

            <p className={styles.en1} style={{ '--delay': '0.4s' } as React.CSSProperties}>
                Give time back to people.
            </p>

            <p className={styles.body} style={{ '--delay': '0.5s' } as React.CSSProperties}>
                We build products that improve everyday life.
            </p>

            <div className={styles.ctas} style={{ '--delay': '0.7s' } as React.CSSProperties}>
                <a href="#vision" className={`btn btn-primary ${styles.btnHero} ${styles.learnMore}`}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#contact" className={`btn btn-outline ${styles.btnHero}`}>
                    Contact
                </a>
            </div>
        </div>
    );
}

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        return initCanvas(canvas);
    }, []);

    return (
        <section id="home" className={styles.hero}>
            <canvas ref={canvasRef} className={styles.canvasBackground} />
            <div className={styles.inner}>
                <HeroText />
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </div>
        </section>
    );
}

