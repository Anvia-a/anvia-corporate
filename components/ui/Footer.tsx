import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Left – brand */}
          <div>
            <span className="text-base font-black tracking-tight block mb-3">Anvia</span>
            <p className="text-white/45 text-sm jp leading-relaxed mb-3">構造から、事業を創る。</p>
            <p className="text-white/25 text-xs jp leading-relaxed">
              東京都渋谷区円山町5-5<br />Navi渋谷V3階
            </p>
          </div>

          {/* Middle – company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-white/28 uppercase mb-4">Company</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/#company",           label: "会社概要"             },
                { href: "/privacy-policy",     label: "プライバシーポリシー" },
                { href: "/terms-of-service",   label: "利用規約"             },
                { href: "/cookie-policy",      label: "Cookieポリシー"       },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200 link-hover w-fit jp">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right – products + contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-white/28 uppercase mb-4">Products &amp; Contact</p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/#products", label: "COMIN"      },
                { href: "/#contact",  label: "お問い合わせ" },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200 link-hover w-fit jp">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6">
          <p className="text-white/22 text-xs jp">© {year} 株式会社Anvia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
