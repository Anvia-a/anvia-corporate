"use client";

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Section({ id, label, title, children, className = '' }: RevealProps) {
  return (
    <section id={id} className={`section ${className}`} data-reveal>
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
      <p className="eyebrow">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setPointer({ x: currentX, y: currentY });
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    raf = requestAnimationFrame(animate);
    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const orbStyle = {
    transform: `translate(${pointer.x * 42}px, ${pointer.y * 28}px)`,
  };

  const rippleStyle = {
    transform: `translate(${pointer.x * -20}px, ${pointer.y * -14}px) scale(${1 + Math.abs(pointer.x) * 0.03})`,
  };

  const meshStyle = {
    transform: `translate(${pointer.x * 14}px, ${pointer.y * 16}px) rotate(${pointer.x * 4}deg)`,
  };

  return (
    <main className="page-shell">
      <div className="page-noise" />
      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <a href="#top" className="brand">Anvia</a>
        <nav className="nav">
          <a href="#philosophy">Philosophy</a>
          <a href="#whatwedo">What we do</a>
          <a href="#workwithus">Work with us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">A NEW VIA</p>
            <h1 className="hero-title animate-enter animate-delay-2">
              Time is the most valuable asset.
            </h1>
            <p className="hero-jp animate-enter animate-delay-3">時間を、もっと自由に。</p>
            <p className="hero-sub animate-enter animate-delay-4">Give time back to people.</p>
            <div className="hero-actions animate-enter animate-delay-5">
              <a href="#whatwedo" className="button button-primary">Learn more</a>
              <a href="#contact" className="button button-secondary">Contact</a>
            </div>
          </div>

          <div className="hero-visual animate-enter animate-delay-4" aria-hidden="true">
            <div className="hero-aura hero-aura-main" style={orbStyle} />
            <div className="hero-aura hero-aura-secondary" style={rippleStyle} />
            <div className="hero-mesh" style={meshStyle}>
              <div className="mesh-ring mesh-ring-1" />
              <div className="mesh-ring mesh-ring-2" />
              <div className="mesh-ring mesh-ring-3" />
              <div className="mesh-core" />
            </div>
            <div className="hero-line hero-line-1" />
            <div className="hero-line hero-line-2" />
          </div>
        </div>

        <a href="#philosophy" className="scroll-indicator animate-enter animate-delay-6">
          <span>SCROLL</span>
          <span className="scroll-arrow">⌄</span>
        </a>
      </section>

      <Section
        id="philosophy"
        label="PHILOSOPHY"
        title="Time is the most valuable asset."
      >
        <p>
          時間は、誰にとっても最も価値のある資産です。私たちは、テクノロジーとアイデアによって、
          日常の体験をよりシンプルで自由なものへと再設計していきます。
        </p>
        <p>
          目指すのは、無駄を減らし、人が本当に使いたい時間を取り戻せる世界です。Anviaは、そのための
          新しい方法を生み出す会社です。
        </p>
      </Section>

      <Section
        id="whatwedo"
        label="WHAT WE DO"
        title="Building products for a better everyday life."
        className="section-soft"
      >
        <p>
          日常の体験をアップデートするために、プロダクト開発・技術実装・協業の3つの軸で価値を生み出します。
        </p>
        <div className="card-grid card-grid-3">
          <article className="info-card">
            <h3>Product Development</h3>
            <p>日常の体験をよりシンプルで快適なものにするプロダクトを企画・開発します。</p>
          </article>
          <article className="info-card">
            <h3>Technology</h3>
            <p>テクノロジーとアイデアを組み合わせ、自由度の高い新しい体験を生み出します。</p>
          </article>
          <article className="info-card">
            <h3>Collaboration</h3>
            <p>新しいサービス開発やプロジェクトのご相談も受け付けています。</p>
          </article>
        </div>
      </Section>

      <Section
        label="ABOUT"
        title="A new way for everyday life."
      >
        <p>
          Anviaは、日常の体験をアップデートするプロダクトを開発する会社です。生活の中にある非効率や手間を見つけ出し、
          よりシンプルで自由な体験へと変えていきます。
        </p>
        <p>
          プロダクトの形は一つではありません。私たちは、固定された一つの正解ではなく、これからの生活に必要な新しい方法を柔軟に作り続けます。
        </p>
      </Section>

      <Section
        id="workwithus"
        label="WORK WITH US"
        title="We also collaborate on new projects."
        className="section-soft"
      >
        <p>自社プロダクトの開発を中心に、新しいサービス開発やプロジェクトのご相談も受けています。</p>
        <div className="split-panel">
          <div className="panel-note">
            受託会社のような見せ方ではなく、プロダクト思考を持つ開発パートナーとして、立ち上げフェーズの構想整理から実装まで伴走します。
          </div>
          <ul className="bullet-list">
            <li>新規プロダクトの企画・設計</li>
            <li>Webサービス / 管理画面の開発</li>
            <li>AI活用を含む新しい体験設計</li>
            <li>スタートアップや企業との開発協業</li>
          </ul>
        </div>
      </Section>

      <Section
        id="contact"
        label="CONTACT"
        title="Let’s build something meaningful."
      >
        <p>
          ご相談やお問い合わせは、メール・事業相談・コラボレーション相談からご連絡ください。初回の壁打ちや方向性整理のご相談も歓迎しています。
        </p>
        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-label">EMAIL</span>
            <a href="mailto:hello@anvia.jp" className="contact-link">hello@anvia.jp</a>
            <p>会社全般のお問い合わせ、取材、業務連携などはこちら。</p>
          </article>
          <article className="contact-card">
            <span className="contact-label">BUSINESS</span>
            <a href="mailto:business@anvia.jp" className="contact-link">business@anvia.jp</a>
            <p>新規サービス開発、管理画面、AI活用を含む事業相談向け。</p>
          </article>
          <article className="contact-card">
            <span className="contact-label">SOCIAL</span>
            <div className="contact-stack">
              <a href="#" className="mini-link">Instagram</a>
              <a href="#" className="mini-link">Threads</a>
              <a href="#" className="mini-link">X / Twitter</a>
            </div>
            <p>SNS導線は公開アカウントに合わせて差し替えて使えます。</p>
          </article>
        </div>
      </Section>
    </main>
  );
}
