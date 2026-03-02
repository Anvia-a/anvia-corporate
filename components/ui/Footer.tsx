import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-black">A</span>
              </div>
              <span className="text-base font-extrabold tracking-tight">Anvia</span>
            </div>
            <p className="text-white/50 text-sm jp leading-relaxed mb-3">
              構造から、事業を創る。
            </p>
            <p className="text-white/30 text-xs jp leading-relaxed">
              東京都渋谷区円山町5-5<br />Navi渋谷V3階
            </p>
          </div>

          {/* Middle: Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase mb-4">Company</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/#company",      label: "会社概要" },
                { href: "/privacy-policy", label: "プライバシーポリシー" },
                { href: "/terms-of-service", label: "利用規約" },
                { href: "/cookie-policy", label: "Cookieポリシー" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-hover w-fit jp">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Products + Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase mb-4">Products &amp; Contact</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/#products", label: "COMIN" },
                { href: "/#contact",  label: "お問い合わせ" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-hover w-fit jp">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6">
          <p className="text-white/25 text-xs jp">
            © {year} 株式会社Anvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
