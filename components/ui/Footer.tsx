import Link from "next/link";

const RIGHT_LINKS = [
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
    <footer
      style={{ background: "#0B0F1A", color: "#F8FAFC" }}
      role="contentinfo"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left: brand block */}
          <div className="flex-shrink-0">
            <span className="block text-[17px] font-black tracking-tight mb-2">
              Anvia
            </span>
            <p
              className="text-sm jp leading-relaxed mb-4"
              style={{ color: "rgba(248,250,252,0.45)", maxWidth: 210 }}
            >
              構造から、事業を創る。
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(248,250,252,0.22)" }}
            >
              © {year} 株式会社Anvia
            </p>
          </div>

          {/* Right: links — aligned right on desktop */}
          <nav
            className="flex flex-col gap-2 md:items-end"
            aria-label="Footer navigation"
          >
            {RIGHT_LINKS.map((l) => (
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
