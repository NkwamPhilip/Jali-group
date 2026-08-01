import { Link } from "react-router-dom";
import SEOHead from "@/components/ui/SEOHead";
import JpNav from "@/components/jali/JpNav";
import JpFooter from "@/components/jali/JpFooter";
import "@/styles/jp.css";

const TRIBE_URL = "https://hubs.nestuge.com/thejalitribe";
const FOUNDER_URL = "https://mainstack.com/p/book-a-strategy-call-for-foundersignal";

const tribe = [
  {
    tag: "Quarterly",
    name: "Jali Builder",
    price: "$49",
    naira: "₦66,000",
    period: "per quarter",
    cta: "Join as Builder",
    featured: true,
  },
  {
    tag: "Bi-Annual",
    name: "Jali Core",
    price: "$92",
    naira: "₦124,000",
    period: "every 6 months",
    cta: "Join as Core",
    featured: false,
  },
  {
    tag: "Annual · Special Access Tier",
    name: "Jali Inner Circle",
    price: "$199",
    naira: "₦268,000",
    period: "per year",
    cta: "Join The Inner Circle",
    featured: false,
  },
];

const fastTrack = [
  { tag: "Tool", name: "Story Audit Tool", price: "$6.99" },
  { tag: "Engine", name: "30-in-One Content Engine", price: "$25" },
  { tag: "Limited Classics", name: "Victor's BrainBox: Limited Classics", price: "$10.99" },
];

const JaliPricing = () => (
  <div className="jp-page">
    <SEOHead
      title="Jali Group — Pricing"
      description="Everything Jali Group offers, what it costs, and where to start. No hidden fees anywhere."
    />
    <JpNav cta={{ label: "The Jali Tribe", href: "#tribe-pricing" }} />

    <header className="hero">
      <div className="wrap">
        <p className="eyebrow">Jali Group Pricing</p>
        <h1>One Page. Every Price.</h1>
        <p className="subtitle">
          Everything Jali Group offers, what it costs, and where to start. No hidden fees anywhere.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#tribe-pricing">The Jali Tribe</a>
          <a className="btn btn-ghost" href="#fast-track">Fast Track Products</a>
        </div>
      </div>
    </header>

    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className="dead">Hidden fees</span>
            <span className="dead">Contracts</span>
            <span className="dead">Lock-in</span>
            <span className="live">Clear pricing</span>
            <span className="live">Cancel anytime</span>
            <span className="live">One flat price</span>
          </span>
        ))}
      </div>
    </div>

    {/* THE JALI TRIBE */}
    <section className="light" id="tribe-pricing">
      <div className="wrap">
        <p className="sec-label">The Jali Tribe</p>
        <h2>Three Tiers. Full Vault On Every One.</h2>
        <p className="lead">
          Discounted launch pricing — lock in your rate now and keep it for as long as you stay subscribed.
        </p>
        <div className="tiers tiers-3">
          {tribe.map((t) => (
            <div className={`tier${t.featured ? " tier-featured" : ""}`} key={t.name}>
              <span className="tier-tag">{t.tag}</span>
              <h3>{t.name}</h3>
              <p className="price-amount">
                {t.price}
                <span style={{ fontSize: "18px", fontWeight: 400, color: "rgba(255,255,255,.5)" }}> / {t.naira}</span>
              </p>
              <p className="price-period">{t.period}</p>
              <p className="price-waitlist">Discounted rate</p>
              <div className="btn-stack">
                <a className="btn btn-solid" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">{t.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WAMC */}
    <section>
      <div className="wrap">
        <p className="sec-label">The 6-Week Growth Accelerator</p>
        <h2>WAMC</h2>
        <div className="price-banner">
          <div className="price-opt featured">
            <p className="plabel">Waitlist Price (First 25)</p>
            <p className="pamount">$500</p>
            <p className="pnote">Lock in before the first 25 spots fill</p>
          </div>
          <div className="price-opt">
            <p className="plabel">After First 25</p>
            <p className="pamount">$750</p>
            <p className="pnote">Standard enrolment price</p>
          </div>
        </div>
        <div style={{ marginTop: "32px" }}>
          <Link className="btn btn-solid" to="/wamc">Join The Waitlist</Link>
        </div>
      </div>
    </section>

    {/* CREATOR-FOUNDER SERVICE */}
    <section className="dark">
      <div className="wrap">
        <p className="sec-label">Done-With-You</p>
        <h2>The Creator-Founder Service</h2>
        <p className="lead">
          A bespoke, done-with-you service for founders. Strategy, content, execution, and growth, all handled.
          Your only commitment is 4 hours a month.
        </p>
        <div style={{ marginTop: "32px" }}>
          <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: "8px" }}>
            Starting From
          </p>
          <p style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 900, fontSize: "64px", letterSpacing: "-.04em", lineHeight: 1, color: "var(--amber)" }}>
            $4,999
            <span style={{ fontSize: "18px", fontWeight: 400, color: "rgba(255,255,255,.5)", letterSpacing: 0 }}> / month</span>
          </p>
          <div style={{ marginTop: "28px" }}>
            <a className="btn btn-solid" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">Book A 30-Minute Call</a>
          </div>
        </div>
      </div>
    </section>

    {/* FAST TRACK */}
    <section className="light" id="fast-track">
      <div className="wrap">
        <p className="sec-label">Jali Fast Track</p>
        <h2>Instant-Access Products</h2>
        <div className="tiers tiers-3">
          {fastTrack.map((p) => (
            <div className="tier" key={p.name}>
              <span className="tier-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p className="price-amount">{p.price}</p>
              <p className="price-period">one-time</p>
              <div className="btn-stack">
                <Link className="btn btn-solid" to="/fast-track">View On Fast Track</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CREATOR BUSINESS MASTERCLASS */}
    <section>
      <div className="wrap">
        <p className="sec-label">$5 Commitment</p>
        <h2>The Creator Business Live Masterclass</h2>
        <p className="lead">
          1h 30min with Victor Okafor. The framework to use your story to build an audience, attract
          opportunities, and generate revenue. Free value, $5 commitment to show up.
        </p>
        <div style={{ marginTop: "32px" }}>
          <Link className="btn btn-solid" to="/cblive">See The Masterclass</Link>
        </div>
      </div>
    </section>

    {/* FINAL */}
    <section className="final dark">
      <div className="wrap">
        <p className="sec-label" style={{ textAlign: "center" }}>One Decision Away</p>
        <h2>Pick Your Entry Point. The System Is The Same.</h2>
        <p className="lead">
          Every product runs on the same engine: story as leverage. Start where your budget and ambition meet.
        </p>
        <div>
          <a className="btn btn-solid" href="#tribe-pricing">Join The Jali Tribe</a>
        </div>
      </div>
    </section>

    <JpFooter />
  </div>
);

export default JaliPricing;
