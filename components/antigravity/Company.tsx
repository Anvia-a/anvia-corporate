const companyProfile = [
  { term: "所在地", description: "東京都渋谷区（リモート併用）" },
  { term: "事業領域", description: "デジタルプロダクト開発 / コーポレートリニューアル" },
  { term: "対応範囲", description: "戦略設計・UIデザイン・実装・改善運用" },
];

export default function Company() {
  return (
    <section id="company" className="renew-section" data-reveal>
      <p className="renew-section-label">Company</p>
      <h2>Anvia Inc.</h2>
      <dl className="renew-company">
        {companyProfile.map((item) => (
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
