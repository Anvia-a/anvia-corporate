import type { SectionLink } from "./types";

type HeaderProps = {
  scrolled: boolean;
  sections: SectionLink[];
};

export default function Header({ scrolled, sections }: HeaderProps) {
  return (
    <header className={`renew-header ${scrolled ? "renew-header-scrolled" : ""}`}>
      <a href="#top" className="renew-brand">
        ANVIA
      </a>
      <nav className="renew-nav" aria-label="Top page navigation">
        {sections.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
