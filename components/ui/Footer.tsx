import Link from "next/link";

const col1 = [
  { href: "/about",            label: "会社概要",             jp: true  },
  { href: "/privacy-policy",   label: "プライバシーポリシー", jp: true  },
  { href: "/terms-of-service", label: "利用規約",             jp: true  },
  { href: "/cookie-policy",    label: "Cookieポリシー",       jp: true  },
];

const col2 = [
  { href: "/#products", label: "COMIN",     jp: false },
  { href: "/#contact",  label: "お問い合わせ", jp: true  },
];

const linkCls = "text-sm hover:text-white transition-colors duration-200";
const linkStyle = { color: "rgba(248,250,252,0.5)" };
const headStyle = { color: "rgba(248,250,252,0.28)", fontSize: "10px", letterSpacing: "0.14em" };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0B0F1A", color: "#F8FAFC" }} role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* Main 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12">

          {/* Col 1: Brand */}
          <div>
            <span className="block text-[17px] font-black tracking-tight mb-3">Anvia</span>
            <p className="text-sm jp leading-relaxed mb-6" style={{ color: "rgba(248,250,252,0.45)", maxWidth: 220 }}>
              構造から、事業を創る。
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <p className="font-bold uppercase mb-4 tracking-widest" style={headStyle}>COMPANY</p>
            <nav className="flex flex-col gap-3">
              {col1.map((l) => (
                <Link key={l.href} href={l.href} className={`${linkCls} ${l.jp ? "jp" : ""}`} style={linkStyle}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Products & Contact */}
          <div>
            <p className="font-bold uppercase mb-4 tracking-widest" style={headStyle}>PRODUCTS & CONTACT</p>
            <nav className="flex flex-col gap-3">
              {col2.map((l) => (
                <Link key={l.href} href={l.href} className={`${linkCls} ${l.jp ? "jp" : ""}`} style={linkStyle}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div style={{ borderTop: "1px solid rgba(248,250,252,0.08)" }} className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs jp" style={{ color: "rgba(248,250,252,0.22)" }}>
            © {year} 株式会社Anvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
