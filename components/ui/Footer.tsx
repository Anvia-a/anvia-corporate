import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-bold tracking-widest mb-4"
              style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
            >
              Anvia
            </p>
            <p className="text-white/60 text-sm leading-relaxed jp-text">
              構造から、事業を創る。
              <br />
              テクノロジーカンパニー
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/#vision", label: "Vision" },
                { href: "/#values", label: "Values" },
                { href: "/#products", label: "Products" },
                { href: "/#company", label: "Company" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">
              Legal
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/privacy-policy", label: "プライバシーポリシー" },
                { href: "/terms-of-service", label: "利用規約" },
                { href: "/cookie-policy", label: "Cookieポリシー" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 jp-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/40 text-xs jp-text">
            © {currentYear} 株式会社Anvia. All rights reserved.
          </p>
          <p className="text-white/40 text-xs jp-text">
            東京都渋谷区円山町5-5 Navi渋谷V3階
          </p>
        </div>
      </div>
    </footer>
  );
}
