const services = [
  {
    title: "Corporate Renewal",
    description: "企業サイトの全面再設計と再構築",
  },
  {
    title: "Brand Story Design",
    description: "事業の強みを伝える情報設計とコンテンツ設計",
  },
  {
    title: "Growth Operation",
    description: "公開後の導線改善とCV最適化の継続支援",
  },
];

export default function Service() {
  return (
    <section id="service" className="renew-section" data-reveal>
      <p className="renew-section-label">Service</p>
      <h2>主要提供価値</h2>
      <ul className="renew-grid">
        {services.map((service) => (
          <li key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
