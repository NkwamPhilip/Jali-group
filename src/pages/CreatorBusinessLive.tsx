import { Link } from "react-router-dom";
import SEOHead from "@/components/ui/SEOHead";
import "@/styles/cbl.css";

// Reserve / registration link for the masterclass.
const RESERVE_URL = "https://mainstack.com/p/the-creator-business-live-masterclass";

const reviews: { name: string; img?: string; text: string }[] = [
  {
    name: "@bloom_with_nay",
    img: "/cblive-3.jpg",
    text: "This has been without an iota of doubt the best 2+ hours of my life. How do you know you have come in contact with excellence if a gap has not been closed? If a void has not been filled? A BIG THANKS to Victor and the Jali team. This was a 100% high impact class.",
  },
  {
    name: "@d_biboye_egbejule",
    img: "/cblive-4.jpg",
    text: "This class was genuinely the best 1,500 I have ever spent in my life. The clarity, the relatability, the practical steps. Nothing was just talk, everything was real and everything landed. The storytelling alone sold me an experience I did not even know I needed. 10 out of 10.",
  },
  {
    name: "@profitswithjess",
    img: "/cblive-5.jpg",
    text: "I've honestly never been this excited for a masterclass before, and it was so worth it. The value! Victor, you really outdid yourself. This gave me so much clarity on what I need to do next.",
  },
  {
    name: "@julietoj_",
    text: "Thank you V.O, thank you JALI Team. I gained clarity on my differentiator and unique trust accelerator. I'm glad I positioned myself for the gems I've received tonight.",
  },
  {
    name: "Vesto",
    img: "/cblive-6.jpg",
    text: "Wow! This is a lot of valuable information for this masterclass. Even though I've already started learning some of these skills, I can see that I'm on the right path. I'm excited to use it to elevate my career to the next level.",
  },
  {
    name: "@foremanbiola · @adefolarin._",
    text: "This is a best experience for me as a creator and entrepreneur. Thank you so much.  Congratss. The masterclass was value packed!",
  },
];

const CreatorBusinessLive = () => {
  return (
    <div className="cbl-page">
      <SEOHead
        title="Creator Business Masterclass — by Jali"
        description="A masterclass by Victor Okafor. The framework that took him from 1,000 followers to 800,000+ in 18 months. Free — just commit to show up."
      />

      <nav className="nav">
        <Link to="/" className="nav-logo">JALI<span>.</span></Link>
        <div className="nav-date">MASTERCLASS</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>CREATOR<br />BUSINESS<br /><span>MASTERCLASS</span></h1>
          <p className="hero-sub">
            90 minutes. One framework. The exact system behind 800,000+ followers, 70M+ views, and a business
            built entirely on storytelling. No theory. Just the blueprint that changed everything. This
            masterclass is FREE, but you just have to commit to show up so you don't take this for granted.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">1h 30min</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Host</span>
              <span className="meta-value">Victor Okafor</span>
            </div>
          </div>
          <a href={RESERVE_URL} className="hero-cta">Reserve My Seat</a>
        </div>
        <div className="hero-image">
          <img src="/cblive-1.jpg" alt="Victor Okafor speaking at The Jali Experience" />
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Let's Be Honest</p>
          <h2 className="h2">Hardwork Isn't Enough Anymore</h2>
          <div className="problem-text">
            <p>
              You're creating more content than ever. Posting consistently. Showing up. Doing all the things
              everyone tells you to do. And your bank account still doesn't reflect the work you're putting in.
              The followers aren't converting. The engagement feels empty. The effort is real but the results
              aren't there.
            </p>
            <p>
              Or maybe you've built something real — a product, a service, a business that actually delivers —
              but the world doesn't know you exist. You watch people with half your skill get all the attention,
              all the deals, all the invitations. And you can't figure out what they're doing differently.
            </p>
            <p><strong>Here's what they know that you don't.</strong></p>
            <p>
              The gap between where you are and where they are isn't talent. It isn't effort. It's a system.
              They figured out how to use their story — who they are, what they've been through, what they
              believe — as leverage. As the thing that attracts attention, builds trust, and converts strangers
              into paying customers. And nobody taught you how to do that. Until now.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      <div className="transition">
        <p>
          In this masterclass, I'm going to show you the exact framework I used to go from 1,000 followers to
          800,000+ in 18 months. <strong>Not the highlights. The actual system.</strong> The one behind the
          first 100,000 followers in 90 days. The one that led to a Chevening Scholarship, international speaking
          opportunities, and a business that runs on visibility.
        </p>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">What I'm Covering</p>
          <h2 className="h2">The Framework From Unknown To Inevitable</h2>
          <div className="learn-grid">
            <div className="learn-item">
              <div className="learn-num">01</div>
              <div>
                <h3>Why Most People Stay Invisible</h3>
                <p>The three mistakes that keep talented creators broke and skilled entrepreneurs unknown. Why consistency alone doesn't work. Why "just post more" is the worst advice you've ever followed. And the one shift that changes everything.</p>
              </div>
            </div>
            <div className="learn-item">
              <div className="learn-num">02</div>
              <div>
                <h3>The Story Leverage System</h3>
                <p>How to identify the one story only you can tell — and turn it into a magnet for attention, trust, and opportunity. This is the foundation behind every piece of content that's ever worked for me. Your story isn't decoration. It's your most valuable business asset.</p>
              </div>
            </div>
            <div className="learn-item">
              <div className="learn-num">03</div>
              <div>
                <h3>The 90-Day Growth Blueprint</h3>
                <p>The exact phase-by-phase system I used to build 100,000 followers in 90 days. What to post in Week 1 vs Week 12. How to trigger the algorithm. How to build momentum that compounds. This isn't theory — it's the documented playbook with timestamps.</p>
              </div>
            </div>
            <div className="learn-item">
              <div className="learn-num">04</div>
              <div>
                <h3>From Audience To Revenue</h3>
                <p>Followers mean nothing if they don't convert. I'll break down the monetisation framework that turns visibility into income — brand deals, digital products, services, speaking fees, and inbound opportunities. The system that makes attention pay you back.</p>
              </div>
            </div>
            <div className="learn-item">
              <div className="learn-num">05</div>
              <div>
                <h3>From Visibility To Credibility</h3>
                <p>How a personal brand opened doors I didn't even know existed — the Chevening Scholarship, international stages, partnerships with global brands, and a media company. Visibility isn't vanity when you know how to convert it into authority, access, and real-world opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <div className="mid-cta">
        <a href={RESERVE_URL}>Reserve My Seat</a>
      </div>

      {/* WHO IS TEACHING */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Your Host</p>
          <h2 className="h2">Victor Okafor</h2>
          <div className="who">
            <div className="who-img">
              <img src="/cblive-2.jpg" alt="Victor Okafor" />
            </div>
            <div>
              <div className="who-name">Victor Okafor</div>
              <div className="who-title">Founder, Jali Group — Chevening Scholar — Techstars Mentor</div>
              <p className="who-bio">
                800,000+ followers built from scratch. 70M+ views. 2,000+ students across multiple programmes.
                Harvard Rhetoric — perfect score. Built an entire audience and business from under 1,000
                followers in 18 months through storytelling. No ads. No team at the start. No shortcuts.
                Everything in this masterclass comes from what he did, not what he read in a book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Reviews</p>
          <h2 className="h2">What The Room Says</h2>
          <div className="rev-grid">
            {reviews.map((r) => (
              <div className="rev-card" key={r.name}>
                <div className="rev-head">
                  {r.img && <img src={r.img} alt={r.name} loading="lazy" />}
                  <div className="rev-name">{r.name}</div>
                </div>
                <p>“{r.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <p className="eyebrow">The Masterclass — 1 Hour</p>
        <h2 className="h2">One Hour Could Change How You Build For The Next Ten Years</h2>
        <p className="sub">
          This is the framework behind everything. The audience. The business. The opportunities. One session.
          Be in the room.
        </p>
        <div className="price-tag">
          <span className="price">FREE</span>
        </div>
        <a href={RESERVE_URL} className="hero-cta">Reserve My Seat</a>
        <p className="price-note">One commitment. One framework. 90 minutes that earns back every hour you've wasted guessing.</p>
      </section>

      <footer className="footer">
        <p>© 2026 Jali Group. <Link to="/">jaligroup.org</Link></p>
      </footer>
    </div>
  );
};

export default CreatorBusinessLive;
