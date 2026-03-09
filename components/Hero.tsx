'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './Hero.module.css';

/* ── Premium Fluid Mesh Animation ─────────────────────────── */
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

    // Layered flowing lines for depth
    const lines: (Line & { layer: 'primary' | 'secondary' | 'background' })[] = [];
    const layerConfigs = {
        primary: { count: 6, opacity: 0.25, width: dpr * 1.2, speedMult: 1.2, ampMult: 1.2 },
        secondary: { count: 12, opacity: 0.15, width: dpr * 0.6, speedMult: 1.0, ampMult: 1.0 },
        background: { count: 10, opacity: 0.08, width: dpr * 0.3, speedMult: 0.6, ampMult: 0.8 }
    };

    (Object.entries(layerConfigs) as [keyof typeof layerConfigs, any][]).forEach(([layer, config]) => {
        for (let i = 0; i < config.count; i++) {
            lines.push({
                layer,
                yOffset: 0.15 + (Math.random() * 0.6),
                amplitude: (80 + Math.random() * 100) * config.ampMult,
                frequency: (0.0005 + Math.random() * 0.001),
                speed: (0.001 + Math.random() * 0.0015) * config.speedMult,
                phase: Math.random() * Math.PI * 2,
                baseColor: `hsla(${200 + Math.random() * 40}, 70%, 75%, ${config.opacity})`,
            });
        }
    });

    // Particles system
    const particles: { x: number, y: number, vx: number, vy: number, size: number, opacity: number, t: number }[] = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * W() * dpr,
            y: Math.random() * H() * dpr,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: 1 + Math.random() * 2,
            opacity: Math.random(),
            t: Math.random() * Math.PI * 2
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

        // Pristine white background
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

            ctx.beginPath();
            ctx.lineWidth = config.width;

            // Subtle glow for primary lines
            if (line.layer === 'primary') {
                ctx.shadowBlur = 20;
                ctx.shadowColor = line.baseColor;
            } else {
                ctx.shadowBlur = 0;
            }

            for (let x = 0; x < w; x += 3) {
                // Stronger diagonal flow from bottom-left to top-right
                // At x=0 (left), diagonalShift is large (positive), moving line down (towards bottom).
                // At x=w (right), diagonalShift is 0, keeping line at its base offset.
                const diagonalShift = (w - x) * 0.45;
                let y = (h * line.yOffset) + diagonalShift +
                    Math.sin(x * line.frequency + (t * line.speed) + line.phase) * line.amplitude;

                // Secondary organic wave
                y += Math.sin(x * 0.002 - (t * 0.0008)) * 35;

                const dx = x - lerpMouse.x;
                const dy = y - lerpMouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const radius = 600 * dpr;
                if (dist < radius) {
                    // Smoother cubic-bezier like intensity for mouse reaction
                    const intensity = Math.pow(1 - (dist / radius), 3);
                    y -= (dy / dist) * intensity * 80;
                }

                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            const grad = ctx.createLinearGradient(0, 0, w, h);
            const baseAlpha = config.opacity;

            let activeAlpha = baseAlpha;
            if (mouse.x !== -1000) {
                const proximity = Math.abs(lerpMouse.y - (h * line.yOffset)) / h;
                activeAlpha = baseAlpha + (Math.max(0, 1 - proximity * 3) * 0.35);
            }

            grad.addColorStop(0, `hsla(210, 20%, 98%, 0)`);
            grad.addColorStop(0.5, line.baseColor.replace(/[\d.]+\)$/, `${activeAlpha})`));
            grad.addColorStop(1, line.baseColor.replace(/[\d.]+\)$/, `${baseAlpha * 1.2})`));

            ctx.strokeStyle = grad;
            ctx.stroke();
        }

        // --- Draw Particles ---
        ctx.shadowBlur = 0;
        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.t += 0.01;

            if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

            const pulse = (Math.sin(p.t) + 1) * 0.5;
            ctx.fillStyle = `rgba(37, 99, 235, ${pulse * p.opacity * 0.25})`;
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

/* ── Staggered text reveal ───────────────────────────────── */
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
                <a href="#vision" className={`btn btn-primary ${styles.btnHero}`}>
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

/* ── Hero Component ──────────────────────────────────────── */
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
            {/* Full background fluid animation */}
            <canvas ref={canvasRef} className={styles.canvasBackground} />

            {/* Content deeply left aligned, no container restrictions */}
            <div className={styles.inner}>
                <HeroText />
            </div>

            {/* Bottom scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </div>
        </section>
    );
}
