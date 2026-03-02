import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center">
                <span className="text-white text-sm font-black">A</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight">Anvia</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed jp mb-6 max-w-xs">
              構造から、事業を創る。<br />
              テクノロジーカンパニー
            </p>
            <p className="text-white/30 text-xs jp">東京都渋谷区円山町5-5 Navi渋谷V3階</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.12em] text-white/30 uppercase mb-5">Navigation</p>
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
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-hover w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.12em] text-white/30 uppercase mb-5">Legal</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/privacy-policy", label: "プライバシーポリシー" },
                { href: "/terms-of-service", label: "利用規約" },
                { href: "/cookie-policy", label: "Cookieポリシー" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-hover w-fit jp"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-8">
          <p className="text-white/25 text-xs jp">
            © {currentYear} 株式会社Anvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
