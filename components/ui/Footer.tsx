import Link from "next/link";

const NAV_LINKS = [
  { href: "/#company",         label: "Company",             jp: false },
  { href: "/#products",        label: "COMIN",               jp: false },
  { href: "/#contact",         label: "Contact",             jp: false },
  { href: "/privacy-policy",   label: "プライバシーポリシー", jp: true  },
  { href: "/terms-of-service", label: "利用規約",             jp: true  },
  { href: "/cookie-policy",    label: "Cookieポリシー",       jp: true  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0B0F1A", color: "#F8FAFC" }} role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Left: brand */}
          <div>
            <span className="block text-[17px] font-black tracking-tight mb-2">
              Anvia
            </span>
            <p className="text-sm jp leading-relaxed mb-4" style={{ color: "rgba(248,250,252,0.45)", maxWidth: 220 }}>
              構造から、事業を創る。
            </p>
            <p className="text-xs" style={{ color: "rgba(248,250,252,0.28)" }}>
              © {year} 株式会社Anvia
            </p>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm link-hover ${l.jp ? "jp" : ""} hover:text-white transition-colors duration-200`}
                style={{ color: "rgba(248,250,252,0.45)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
