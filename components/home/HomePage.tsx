"use client";

import { useEffect, useState } from 'react';

const sections = [
  { id: 'vision', label: 'Vision' },
  { id: 'mission', label: 'Mission' },
  { id: 'service', label: 'Service' },
  { id: 'company', label: 'Company' },
  { id: 'contact', label: 'Contact' },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.18 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="renew-shell" id="top">
      <header className={`renew-header ${scrolled ? 'renew-header-scrolled' : ''}`}>
        <a href="#top" className="renew-brand">ANVIA</a>
        <nav className="renew-nav">
          {sections.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="renew-hero" data-reveal>
        <p className="renew-kicker">ANTIGRAVITY BASED RENEWAL</p>
        <h1>Design the company site as a growth product.</h1>
        <p className="renew-lead">
          既存ページの継ぎ足しではなく、体験全体を再設計する。Anviaのコーポレートサイトを、
          採用・信用形成・問い合わせ導線が連動するプロダクトとして刷新します。
        </p>
        <div className="renew-actions">
          <a href="#service" className="cta cta-primary">サービスを見る</a>
          <a href="#contact" className="cta cta-secondary">相談する</a>
        </div>
      </section>

      <section id="vision" className="renew-section" data-reveal>
        <p className="renew-section-label">Vision</p>
        <h2>時間と意思決定を、もっと前に進める。</h2>
        <p>
          私たちは、企業とユーザーの接点を滑らかにし、重要な判断に使える時間を取り戻す体験をつくります。
        </p>
      </section>

      <section id="mission" className="renew-section" data-reveal>
        <p className="renew-section-label">Mission</p>
        <h2>戦略・デザイン・実装を一気通貫で提供する。</h2>
        <p>
          企画から公開後の改善までを同一チームで実行し、分断による遅延を減らします。
        </p>
      </section>

      <section id="service" className="renew-section" data-reveal>
        <p className="renew-section-label">Service</p>
        <h2>主要提供価値</h2>
        <ul className="renew-grid">
          <li>
            <h3>Corporate Renewal</h3>
            <p>企業サイトの全面再設計と再構築</p>
          </li>
          <li>
            <h3>Brand Story Design</h3>
            <p>事業の強みを伝える情報設計とコンテンツ設計</p>
          </li>
          <li>
            <h3>Growth Operation</h3>
            <p>公開後の導線改善・CV最適化の継続支援</p>
          </li>
        </ul>
      </section>

      <section id="company" className="renew-section" data-reveal>
        <p className="renew-section-label">Company</p>
        <h2>Anvia Inc.</h2>
        <dl className="renew-company">
          <div><dt>所在地</dt><dd>東京都渋谷区（リモート併用）</dd></div>
          <div><dt>事業領域</dt><dd>デジタルプロダクト開発 / コーポレートリニューアル</dd></div>
          <div><dt>対応範囲</dt><dd>戦略設計・UIデザイン・実装・運用改善</dd></div>
        </dl>
      </section>

      <section id="contact" className="renew-section renew-contact" data-reveal>
        <p className="renew-section-label">Contact</p>
        <h2>次フェーズ：antigravity本実装の相談を開始する</h2>
        <p>要件整理段階でも構いません。目的・期限・体制感を共有いただければ、移行計画をご提案します。</p>
        <a href="mailto:contact@anvia.example" className="cta cta-primary">contact@anvia.example</a>
      </section>
    </main>
  );
}
