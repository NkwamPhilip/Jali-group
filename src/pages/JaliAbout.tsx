import { Link } from "react-router-dom";
import JaliLayout from "@/components/jali/JaliLayout";

const audit = [
  { num: "120M+", label: "Impressions generated for clients" },
  { num: "40+", label: "Countries with active clients" },
  { num: "2,000+", label: "Students across 6 continents" },
  { num: "$20.8B", label: "Joint revenue of managed clients" },
];

const values = [
  { title: "Authentic Connection", desc: "Genuine relationships and authentic storytelling as the only path to lasting market impact." },
  { title: "Purpose-Driven Growth", desc: "Every strategy is rooted in a unique purpose designed for sustainable, long-term transformation." },
  { title: "Collaborative Excellence", desc: "We work as elite partners in your journey, merging our expertise with your specific vision." },
  { title: "Proven Results", desc: "A track record of measurable outcomes for companies worth a combined $20.8B." },
];

const credentials = [
  "Stellar academic background in Law",
  "7 years of experience in brand communication & storytelling",
  "Consulted for organizations with a combined valuation exceeding $20B",
  "Techstars Mentor",
  "Academic Scholar in Business & Marketing",
];

const JaliAbout = () => {
  return (
    <JaliLayout
      page="about"
      title="About — Jali Group | Victor Okafor"
      description="Jali Group turns your story into leverage. Founded by Victor Okafor — global business advisor, brand consultant, and pioneer of founder-led brand growth."
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-line" />
        <p className="eyebrow">The Origin</p>
        <h1 className="h1">Growth Is Found In Forgotten Connections.</h1>
        <p className="sub">
          Founded on the belief that the leverage you seek is often hidden in the stories you have yet to tell.
        </p>
      </section>

      {/* IMPACT */}
      <section className="section section-alt">
        <div className="wrap-wide">
          <p className="eyebrow">Global Impact Audit</p>
          <h2 className="h2">Transforming Lives Through Story</h2>
          <p className="sub">
            At Jali Group, we don't just "market" — we discover the unique narrative waiting to be told and use
            it as a catalyst for extraordinary growth. Through a story-centric approach, we've unlocked
            sustainable transformation for hundreds of high-net-worth individuals and global organisations.
          </p>
          <div className="audit-grid">
            {audit.map((a) => (
              <div className="audit-box" key={a.label}>
                <div className="audit-num">{a.num}</div>
                <div className="audit-label">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="section">
        <div className="wrap-wide">
          <div className="about-split">
            <div className="about-photo">
              <img src="/omo.JPEG" alt="Victor Okafor" />
            </div>
            <div>
              <p className="eyebrow">Meet The Architect</p>
              <h2 className="h2">Victor Okafor</h2>
              <p className="sub" style={{ marginBottom: "8px" }}>
                Victor is a global business advisor, brand consultant and one of the foremost pioneers of
                founder-led brand growth. He is redefining how founders build power in the modern economy —
                through authority that converts into capital.
              </p>
              <ul className="about-list">
                {credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a
                href="https://mainstack.com/p/strategy-with-okafo"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta"
                style={{ marginTop: "32px", display: "inline-block" }}
              >
                Work With Victor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-alt">
        <div className="wrap-wide">
          <p className="eyebrow">The Standard</p>
          <h2 className="h2">Principles Guiding Every Relationship</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2 className="h2">Ready To Start Your Journey?</h2>
        <p className="sub sub-center">
          Let's discuss how our story-centric approach can transform your personal or business growth.
        </p>
        <div className="hero-cta-group" style={{ marginTop: "8px" }}>
          <Link to="/contact" className="hero-cta">Book A Discovery Call</Link>
          <Link to="/tribe" className="hero-cta-secondary">Explore The Tribe</Link>
        </div>
      </section>
    </JaliLayout>
  );
};

export default JaliAbout;
