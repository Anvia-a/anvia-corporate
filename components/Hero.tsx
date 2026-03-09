'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface Line {
    slope: number;
    spread: number;
    phase: number;
    speed: number;
    amplitude: number;
    alpha: number;
    width: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
}

function initCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => undefined;
    const context = ctx;

    const dpr = window.devicePixelRatio || 1;
    let raf = 0;
    let tick = 0;

    const mouse = { x: window.innerWidth * 0.85, y: window.innerHeight * 0.72, active: false };

    function resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMouseMove(e: MouseEvent) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    }

    function onMouseLeave() {
        mouse.active = false;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    const lineCount = 80;
    const lines: Line[] = Array.from({ length: lineCount }, (_, i) => {
        const progress = i / (lineCount - 1);
        const dense = Math.pow(progress, 1.7);
        const lowerCluster = Math.random() < 0.74;
        const spread = lowerCluster
            ? 8 + Math.random() * 232
            : -238 + Math.random() * 186;

        return {
            slope: 0.28 + Math.random() * 0.2,
            spread,
            phase: Math.random() * Math.PI * 2,
            speed: 0.018 + Math.random() * 0.02,
            amplitude: 4 + Math.random() * 10,
            alpha: 0.08 + dense * 0.18,
            width: 0.7 + Math.random() * 1.0,
        };
    });

    const particles: Particle[] = Array.from({ length: 16 }, () => ({
        x: window.innerWidth * (0.62 + Math.random() * 0.36),
        y: window.innerHeight * (0.45 + Math.random() * 0.52),
        vx: 0.04 + Math.random() * 0.12,
        vy: -(0.03 + Math.random() * 0.08),
        size: 1 + Math.random() * 2.2,
        alpha: 0.15 + Math.random() * 0.18,
    }));

    function sampleY(line: Line, x: number, w: number, h: number, t: number) {
        const anchorX = w * 0.94;
        const anchorY = h * 0.86;
        const base = anchorY + line.spread + (anchorX - x) * line.slope;
        const wave =
            Math.sin(x * 0.003 + t * line.speed + line.phase) * line.amplitude +
            Math.sin(x * 0.0018 - t * line.speed * 0.72 + line.phase) * (line.amplitude * 0.35);
        return base + wave;
    }

    function draw() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        tick += 1;

        context.fillStyle = '#f8fafd';
        context.fillRect(0, 0, w, h);

        lines.forEach((line, idx) => {
            const hue = 206 + (idx % 4) * 4;
            const yAtMouse = sampleY(line, mouse.x, w, h, tick);
            const dy = Math.abs(yAtMouse - mouse.y);
            const linePull = mouse.active ? Math.max(0, 1 - dy / 180) : 0;
            const boost = linePull * 0.24;

            context.beginPath();
            context.lineWidth = line.width;

            const gradient = context.createLinearGradient(0, h, w, h * 0.1);
            gradient.addColorStop(0, `hsla(${hue}, 56%, 74%, ${(line.alpha + boost) * 0.28})`);
            gradient.addColorStop(0.56, `hsla(${hue}, 78%, 62%, ${(line.alpha + boost) * 0.9})`);
            gradient.addColorStop(1, `hsla(${hue + 8}, 80%, 56%, ${line.alpha + boost})`);
            context.strokeStyle = gradient;

            for (let x = -400; x <= w + 200; x += 6) {
                const baseY = sampleY(line, x, w, h, tick);
                const localPull = mouse.active
                    ? Math.max(0, 1 - Math.abs(x - mouse.x) / 230) * linePull
                    : 0;
                const pullToMouse = (mouse.y - baseY) * (localPull * 0.24);
                const elasticBend = Math.sin((x - mouse.x) * 0.02) * (localPull * 6);
                const y = baseY + pullToMouse + elasticBend;

                if (x === -400) context.moveTo(x, y);
                else context.lineTo(x, y);
            }

            context.stroke();
        });

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x > w + 8) p.x = w * (0.62 + Math.random() * 0.36);
            if (p.y < -8) p.y = h * (0.45 + Math.random() * 0.52);

            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const boost = mouse.active ? Math.max(0, 1 - dist / 110) * 0.2 : 0;

            context.beginPath();
            context.fillStyle = `rgba(74, 140, 255, ${p.alpha + boost})`;
            context.arc(p.x, p.y, p.size + boost * 2, 0, Math.PI * 2);
            context.fill();
        });

        raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
        cancelAnimationFrame(raf);
    };
}

function HeroText() {
    return (
        <div className={styles.textContent}>
            <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Technology · Design · Time
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