import { Link } from "react-router-dom";
import SEOHead from "@/components/ui/SEOHead";
import JpNav from "@/components/jali/JpNav";
import JpFooter from "@/components/jali/JpFooter";
import "@/styles/jp.css";

// TODO: replace "#" with the real purchase links for each product.
const BUY = "#";

const olabel: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono',monospace",
  fontSize: "11px",
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "#8A8A8A",
  margin: "20px 0 6px",
};

const FastTrack = () => (
  <div className="jp-page">
    <SEOHead
      title="Jali Fast Track — Instant-Access Products"
      description="The fastest way into the Jali system. Instant-access products, each built to give you one real result today."
    />
    <JpNav cta={{ label: "Get Started", href: "#products" }} />

    <header className="hero">
      <div className="wrap">
        <p className="eyebrow">Jali Fast Track</p>
        <h1>Start In The Next Five Minutes.</h1>
        <p className="subtitle">
          The fastest way into the Jali system. Instant-access products, each built to give you one real result
          today. No cohort. No waiting. Buy, open, build.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#products">See The Products</a>
        </div>
      </div>
    </header>

    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className="dead">Waiting</span>
            <span className="dead">Overthinking</span>
            <span className="dead">Someday</span>
            <span className="live">Instant access</span>
            <span className="live">One result today</span>
            <span className="live">From $6.99</span>
            <span className="live">Start now</span>
          </span>
        ))}
      </div>
    </div>

    <section className="light" id="products">
      <div className="wrap">
        <p className="sec-label">The Products</p>
        <h2>Three Ways To Move Fast.</h2>
        <div className="tiers tiers-3">
          <div className="tier">
            <span className="tier-tag">Tool</span>
            <h3>Story Audit Tool</h3>
            <p className="price-amount">$6.99</p>
            <p className="price-period">one-time · instant access</p>
            <p style={{ marginTop: "18px" }}>
              The tool we built to audit your story and positioning. Feed it your bio, your content, and how you
              currently describe yourself. It analyses where your story is leaking value: the weak positioning,
              the buried hook, the credibility you have but never mention. Then it hands you a prioritised fix
              list.
            </p>
            <p style={olabel}>The Outcome</p>
            <p style={{ fontWeight: 600 }}>
              You walk away knowing exactly what's broken in your story, what to fix first, and a clear roadmap
              of what story content to make, and how, for the next month.
            </p>
            <div className="btn-stack">
              <a className="btn btn-solid" href={BUY}>Get The Story Audit Tool</a>
            </div>
          </div>

          <div className="tier tier-featured">
            <span className="tier-tag">Engine</span>
            <h3>30-in-One Content Engine</h3>
            <p className="price-amount">$25</p>
            <p className="price-period">one-time · instant access</p>
            <p style={{ marginTop: "18px", color: "#B3B3B3" }}>
              The engine behind the Jali content system. Take one idea, one story, or one long-form piece, run
              it through the engine, and it becomes thirty pieces of platform-native content: hooks, captions,
              carousels, scripts, and posts shaped for how each platform actually works. The same process behind
              70M+ views.
            </p>
            <p style={olabel}>The Outcome</p>
            <p style={{ fontWeight: 600, color: "#fff" }}>
              A full month of content from a single idea. No more blank screens, no more posting gaps, no more
              consistency problem.
            </p>
            <div className="btn-stack">
              <a className="btn btn-solid" href={BUY}>Get The Content Engine</a>
              <Link className="btn btn-ghost" to="/tribe">Access for free in the community</Link>
            </div>
          </div>

          <div className="tier">
            <span className="tier-tag">Limited Classics</span>
            <h3>Victor's BrainBox: Limited Classics</h3>
            <p className="price-amount">$10.99</p>
            <p className="price-period">one-time · instant access</p>
            <p style={{ marginTop: "18px" }}>
              You've been wanting to pick his brain. Here it is, boxed. Over 12 hours inside Victor's brain: the
              very first Public Speaking Mastery (2023), the award-winning Finding Story X (2022), the personal
              brand and storytelling masterclass where the entire Jali philosophy was born, The Jali Experience
              Lagos (2025), the first Personal Brand Live Class, and more of the materials that have changed
              thousands of businesses across the world.
            </p>
            <p style={olabel}>The Outcome</p>
            <p style={{ fontWeight: 600 }}>
              Over 12 hours of the thinking behind 800K+ followers and 2,000+ clients. You leave knowing how to
              speak, how to tell your story, and how to build a brand people follow.
            </p>
            <div className="btn-stack">
              <a className="btn btn-solid" href={BUY}>Unlock The BrainBox</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="img-block">
          <img src="/ft-1.jpg" alt="Jali — the most unfair advantage in a saturated market" />
          <p className="img-cap">Jali · The Most Unfair Advantage In A Saturated Market</p>
        </div>
      </div>
    </section>

    <section className="final dark">
      <div className="wrap">
        <p className="sec-label" style={{ textAlign: "center" }}>No Excuses Left</p>
        <h2>Get Results Fast With Less Effort.</h2>
        <p className="lead">
          Every Fast Track product is a working piece of the same system behind 800K+ followers and 70M+ views.
          Pick one. Start today.
        </p>
        <div>
          <a className="btn btn-solid" href="#products">See The Products</a>
        </div>
      </div>
    </section>

    <JpFooter />
  </div>
);

export default FastTrack;
