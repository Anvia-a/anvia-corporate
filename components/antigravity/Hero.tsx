'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './Hero.module.css';

interface Line {
    yOffset: number;
    amplitude: number;
    frequency: number;
    speed: number;
    phase: number;
    baseColor: string;
}

function initCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const lines: (Line & { layer: 'primary' | 'secondary' | 'background' })[] = [];
    const layerConfigs = {
        primary: { count: 9, opacity: 0.27, width: dpr * 1.15, speedMult: 1.45, ampMult: 1.1 },
        secondary: { count: 14, opacity: 0.17, width: dpr * 0.65, speedMult: 1.2, ampMult: 0.95 },
        background: { count: 12, opacity: 0.1, width: dpr * 0.35, speedMult: 0.9, ampMult: 0.75 },
    };

    (Object.entries(layerConfigs) as [keyof typeof layerConfigs, any][]).forEach(([layer, config]) => {
        for (let i = 0; i < config.count; i++) {
            lines.push({
                layer,
                yOffset: 0.2 + (Math.random() * 0.58),
                amplitude: (75 + Math.random() * 85) * config.ampMult,
                frequency: (0.00055 + Math.random() * 0.0011),
                speed: (0.0012 + Math.random() * 0.0018) * config.speedMult,
                phase: Math.random() * Math.PI * 2,
                baseColor: `hsla(${200 + Math.random() * 40}, 70%, 75%, ${config.opacity})`,
            });
        }
    });

    const particles: { x: number, y: number, vx: number, vy: number, size: number, opacity: number, t: number }[] = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * W() * dpr,
            y: Math.random() * H() * dpr,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: 1 + Math.random() * 2,
            opacity: Math.random(),
            t: Math.random() * Math.PI * 2,
        });
    }

    const mouse = { x: -1000, y: -1000 };
    const lerpMouse = { x: -1000, y: -1000 };

    function onMouseMove(e: MouseEvent) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function onMouseLeave() {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    let t = 0;
    let raf: number;

    function draw() {
        const w = W() * dpr;
        const h = H() * dpr;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);

        const targetX = mouse.x === -1000 ? w / (2 * dpr) : mouse.x;
        const targetY = mouse.y === -1000 ? h / (2 * dpr) : mouse.y;

        lerpMouse.x += (targetX * dpr - lerpMouse.x) * 0.03;
        lerpMouse.y += (targetY * dpr - lerpMouse.y) * 0.03;

        t += 1;
        ctx.globalCompositeOperation = 'multiply';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const config = layerConfigs[line.layer];
            const startX = w * 0.48;

            ctx.beginPath();
            ctx.lineWidth = config.width;

            if (line.layer === 'primary') {
                ctx.shadowBlur = 20;
                ctx.shadowColor = line.baseColor;
            } else {
                ctx.shadowBlur = 0;
            }

            for (let x = startX; x < w; x += 2.5) {
                const rightRegionWidth = w - startX;
                const diagonalShift = (w - x) * (0.23 + (0.07 * (rightRegionWidth / w)));
                let y = (h * line.yOffset) + diagonalShift +
                    Math.sin(x * line.frequency + (t * line.speed) + line.phase) * line.amplitude;

                y += Math.sin(x * 0.002 - (t * 0.001)) * 32;

                const dx = x - lerpMouse.x;
                const dy = y - lerpMouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const radius = 600 * dpr;
                if (dist < radius) {
                    const intensity = Math.pow(1 - (dist / radius), 3);
                    y -= (dy / Math.max(dist, 1)) * intensity * 70;
                }

                if (x === startX) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            const grad = ctx.createLinearGradient(startX, 0, w, h);
            const baseAlpha = config.opacity;

            let activeAlpha = baseAlpha;
            if (mouse.x !== -1000) {
                const proximity = Math.abs(lerpMouse.y - (h * line.yOffset)) / h;
                activeAlpha = baseAlpha + (Math.max(0, 1 - proximity * 3) * 0.3);
            }

            grad.addColorStop(0, `hsla(210, 20%, 98%, 0)`);
            grad.addColorStop(0.5, line.baseColor.replace(/[\d.]+\)$/, `${activeAlpha})`));
            grad.addColorStop(1, line.baseColor.replace(/[\d.]+\)$/, `${baseAlpha * 1.2})`));

            ctx.strokeStyle = grad;
            ctx.stroke();
        }

        ctx.shadowBlur = 0;
        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.t += 0.01;

            if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

            const pulse = (Math.sin(p.t) + 1) * 0.5;
            ctx.fillStyle = `rgba(37, 99, 235, ${pulse * p.opacity * 0.22})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * dpr, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalCompositeOperation = 'source-over';
        raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        document.body.removeEventListener('mouseleave', onMouseLeave);
        cancelAnimationFrame(raf);
    };
}

function HeroText() {
    return (
        <div className={styles.textContent}>
            <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                繝・け繝弱Ο繧ｸ繝ｼ ﾂｷ 繝・じ繧､繝ｳ ﾂｷ 譎る俣
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
                譎る俣繧偵√ｂ縺｣縺ｨ閾ｪ逕ｱ縺ｫ縲・
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

    const initRef = useCallback((node: HTMLCanvasElement | null) => {
        if (node) {
            (canvasRef as React.MutableRefObject<HTMLCanvasElement>).current = node;
            const cleanup = initCanvas(node);
            return cleanup;
        }
    }, []);

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
