import SEOHead from "@/components/ui/SEOHead";
import JpNav from "@/components/jali/JpNav";
import JpFooter from "@/components/jali/JpFooter";
import "@/styles/jp.css";

// TODO: replace with the real Creator/Investor board application links.
const CREATOR_APPLY = "mailto:hello@jaliafriq.com?subject=Creator%20Board%20Waitlist";
const INVESTOR_APPLY = "mailto:hello@jaliafriq.com?subject=Investor%20Board%20Waitlist";

const invest = [
  ["Food & Beverage", "Restaurants, packaged foods, drinks brands, and everything people consume."],
  ["Fitness & Wellness", "Gyms, programmes, supplements, and the businesses built on transformation."],
  ["Beauty & Personal Care", "Skincare, haircare, grooming, and the brands people wear on their skin."],
  ["Fashion & Apparel", "Clothing lines, accessories, and identity people put on every morning."],
  ["Home & Lifestyle", "The products and services that shape how people live day to day."],
  ["Education & Coaching", "Knowledge businesses, programmes, and services that change outcomes."],
  ["Hospitality & Experiences", "Venues, travel, events, and the places people talk about after."],
  ["Health & Nutrition", "The brands people trust with their bodies, where creator credibility matters most."],
  ["Consumer Services", "Local and scaled services where a trusted recommendation decides the sale."],
];

const CreatorLabel = () => (
  <div className="jp-page">
    <SEOHead
      title="The Jali Creator Label — The Investment Arm of Jali Group"
      description="Built on the Angel Creator Model. We partner with creators to build their business ecosystem, and match entrepreneurs with creators who will skyrocket their brand."
    />
    <JpNav cta={{ label: "Apply", href: "#apply" }} />

    <header className="hero">
      <div className="wrap">
        <p className="eyebrow">The Investment Arm of Jali Group</p>
        <h1>The Jali Creator Label</h1>
        <p className="subtitle">
          Built on the Angel Creator Model. We partner with creators to build their business ecosystem, and we
          partner with entrepreneurs to match them with creators who will skyrocket their brand. Not
          sponsorships. Not brand deals. Ownership on both sides of the table.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#apply">Apply For The Creator Board Waitlist</a>
          <a className="btn btn-ghost" href="#apply">Apply For The Investor Board Waitlist</a>
        </div>
      </div>
    </header>

    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className="dead">Sponsorships</span>
            <span className="dead">Brand deals</span>
            <span className="dead">Flat fees</span>
            <span className="dead">Rented reach</span>
            <span className="live">Equity</span>
            <span className="live">Ownership</span>
            <span className="live">Partnership</span>
            <span className="live">Distribution</span>
            <span className="live">Compounding</span>
          </span>
        ))}
      </div>
    </div>

    <section className="dark">
      <div className="wrap">
        <p className="sec-label">The Model</p>
        <h2>The Angel Creator Model, Operated.</h2>
        <p className="lead">
          An Angel Creator takes an equity stake in a business in exchange for sustained content creation, brand
          building, and audience access. Like an angel investor, but the investment is attention, trust, and
          distribution instead of capital. The Jali Creator Label is where that model becomes real: we identify
          the match, structure the partnership, and build the systems that make it profitable for everyone at
          the table.
        </p>
      </div>
    </section>

    <section>
      <div className="wrap">
        <p className="sec-label">Two Doors In</p>
        <h2>Creators Become Owners. Entrepreneurs Get Distribution.</h2>
        <div className="tiers">
          <div className="tier tier-featured">
            <span className="tier-tag">For Creators</span>
            <h3>We Build Your Business Ecosystem</h3>
            <p style={{ color: "#B3B3B3" }}>
              You've built the audience. We build everything around it: the offers, the infrastructure, the
              partnerships, and the equity positions that turn your attention into ownership. You stop trading
              posts for fees and start building a portfolio.
            </p>
            <ul style={{ marginTop: "22px" }}>
              <li>Business infrastructure built around your audience</li>
              <li>Equity partnerships with vetted businesses in your niche</li>
              <li>Deal structuring, legal frameworks, and vesting handled</li>
              <li>The Jali content and strategy engine behind you</li>
            </ul>
            <div className="btn-stack">
              <a className="btn btn-solid" href="#apply">Apply For The Creator Board Waitlist</a>
            </div>
          </div>
          <div className="tier">
            <span className="tier-tag">For Entrepreneurs &amp; Investors</span>
            <h3>We Match You With The Creator Who Changes Everything</h3>
            <p>
              Your business works. What it needs is distribution and trust, and those cannot be bought with ad
              spend. We match you with the creator whose audience is your customer base, structure the equity
              partnership, and manage the relationship so the flywheel actually turns.
            </p>
            <ul style={{ marginTop: "22px" }}>
              <li>Creator matching by audience fit, industry, and values</li>
              <li>Performance-vested equity structures that protect you</li>
              <li>Customer acquisition at a fraction of paid media cost</li>
              <li>A defensible moat competitors cannot replicate</li>
            </ul>
            <div className="btn-stack">
              <a className="btn btn-solid" href="#apply">Apply For The Investor Board Waitlist</a>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "900px", margin: "56px auto 0" }}>
          <div className="img-block" style={{ margin: 0 }}>
            <img src="/cl-1.jpg" alt="The Jali Creator — the future of business" style={{ filter: "none" }} />
            <p className="img-cap">The Jali Creator</p>
          </div>
          <div className="img-block" style={{ margin: 0 }}>
            <img src="/cl-2.jpg" alt="The Jali Founder — the future of business" style={{ filter: "none" }} />
            <p className="img-cap">The Jali Founder</p>
          </div>
        </div>
      </div>
    </section>

    <section className="light">
      <div className="wrap">
        <p className="sec-label">Where We Invest</p>
        <h2>The Businesses We're Interested In</h2>
        <p className="lead">
          Mainly non-tech. We back real-world businesses with products people touch, taste, wear, visit, and
          live with, because that is where creator trust converts hardest.
        </p>
        <div className="grid-3">
          {invest.map(([h, p]) => (
            <div className="gcard" key={h}>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="img-block">
          <img src="/cl-3.jpg" alt="You are Jali — for those who build to win" style={{ filter: "none" }} />
          <p className="img-cap">You Are Jali · For Those Who Build To Win</p>
        </div>
      </div>
    </section>

    <section className="final dark" id="apply">
      <div className="wrap">
        <p className="sec-label" style={{ textAlign: "center" }}>The Boards Are Forming</p>
        <h2>Pick Your Side Of The Table.</h2>
        <p className="lead">
          Creators ready to convert trust into equity. Entrepreneurs and investors ready to grow with
          distribution money can't buy. Both boards are by waitlist.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-solid" href={CREATOR_APPLY}>Apply For The Creator Board Waitlist</a>
          <a className="btn btn-ghost" href={INVESTOR_APPLY}>Apply For The Investor Board Waitlist</a>
        </div>
      </div>
    </section>

    <JpFooter />
  </div>
);

export default CreatorLabel;
