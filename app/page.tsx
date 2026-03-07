const NAV_ITEMS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Work with us", href: "#work-with-us" },
  { label: "Contact", href: "#contact" },
];

const WHAT_WE_DO = [
  {
    title: "Product Development",
    description:
      "日常の体験をよりシンプルで快適なものにするプロダクトを企画・開発します。",
  },
  {
    title: "Technology",
    description:
      "テクノロジーとアイデアを組み合わせ、自由度の高い新しい体験を生み出します。",
  },
  {
    title: "Collaboration",
    description:
      "新しいサービス開発やプロジェクトのご相談も受け付けています。",
  },
];

const WORK_WITH_US = [
  "新規プロダクトの企画・設計",
  "Webサービス / 管理画面の開発",
  "AI活用を含む新しい体験設計",
  "スタートアップや企業との開発協業",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          Anvia
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-background" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-eyebrow reveal reveal-1">A New Via</p>
          <h1 className="hero-title reveal reveal-2">
            Time is the most valuable asset.
          </h1>
          <p className="hero-subtitle reveal reveal-3">時間を、もっと自由に。</p>
          <p className="hero-tagline reveal reveal-4">Give time back to people.</p>

          <div className="hero-actions reveal reveal-5">
            <a className="button button-primary" href="#philosophy">
              Learn more
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <a href="#philosophy" className="scroll-indicator" aria-label="Scroll to next section">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-icon">⌄</span>
        </a>
      </section>

      <section id="philosophy" className="section section-narrow">
        <div className="section-heading">
          <p className="section-label">Philosophy</p>
          <h2 className="section-title">Time is the most valuable asset.</h2>
        </div>
        <div className="prose-block">
          <p>
            時間は、誰にとっても最も価値のある資産です。私たちは、テクノロジーとアイデアによって、日常の体験をよりシンプルで自由なものへと再設計していきます。
          </p>
          <p>
            目指すのは、無駄を減らし、人が本当に使いたい時間を取り戻せる世界です。Anviaは、そのための新しい方法を生み出す会社です。
          </p>
        </div>
      </section>

      <section id="what-we-do" className="section section-alt">
        <div className="section-heading">
          <p className="section-label">What we do</p>
          <h2 className="section-title">Building products for a better everyday life.</h2>
          <p className="section-description">
            日常の体験をアップデートするために、プロダクト開発・技術実装・協業の3つの軸で価値を生み出します。
          </p>
        </div>

        <div className="card-grid">
          {WHAT_WE_DO.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-narrow">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2 className="section-title">A new way for everyday life.</h2>
        </div>
        <div className="prose-block">
          <p>
            Anviaは、日常の体験をアップデートするプロダクトを開発する会社です。生活の中にある非効率や手間を見つけ出し、よりシンプルで自由な体験へと変えていきます。
          </p>
          <p>
            プロダクトの形は一つではありません。私たちは、固定された一つの正解ではなく、これからの生活に必要な新しい方法を柔軟に作り続けます。
          </p>
        </div>
      </section>

      <section id="work-with-us" className="section section-alt">
        <div className="section-heading">
          <p className="section-label">Work with us</p>
          <h2 className="section-title">We also collaborate on new projects.</h2>
          <p className="section-description">
            自社プロダクトの開発を中心に、新しいサービス開発やプロジェクトのご相談も受けています。
          </p>
        </div>

        <div className="work-panel">
          <div className="work-copy">
            <p>
              受託会社のような見せ方ではなく、プロダクト思考を持つ開発パートナーとして、立ち上げフェーズの構想整理から実装まで伴走します。
            </p>
          </div>
          <ul className="work-list">
            {WORK_WITH_US.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section section-narrow section-contact">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something meaningful.</h2>
          <p className="section-description">
            ご相談やお問い合わせは、メールアドレスやフォームリンクに差し替えてご利用ください。
          </p>
        </div>

        <div className="contact-card">
          <p className="contact-label">Email</p>
          <a href="mailto:hello@anvia.jp" className="contact-link">
            hello@anvia.jp
          </a>
        </div>
      </section>
    </main>
  );
}
