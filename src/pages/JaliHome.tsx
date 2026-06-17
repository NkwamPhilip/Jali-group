import { Link } from "react-router-dom";
import JaliLayout from "@/components/jali/JaliLayout";
import Testimonials from "@/components/jali/Testimonials";
import Reviews from "@/components/jali/Reviews";
import CommunityCarousel from "@/components/jali/CommunityCarousel";

const JaliHome = () => {
  return (
    <JaliLayout
      page="home"
      title="Jali Group — Build a Profitable Business From Your Story"
      description="Turn who you are and what you know into money, opportunities, and visibility — consistently. The Jali Tribe, the Creator-Founder Service, and the WAMC Growth Challenge."
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-line" />
        <h1 className="h1">
          You've Been Putting In The Work. It's Time The Work Started Paying You Back.
        </h1>
        <p className="sub">
          The Jali Tribe is where creators stop pouring effort into content that doesn't convert — and
          entrepreneurs stop building incredible things that nobody can find. One room, systems that work,
          and real results. People inside are landing international deals, growing faster than they ever have,
          and monetising their personal brand with a clear structure behind it.
        </p>
        <div className="hero-cta-group">
          <Link to="/tribe" className="hero-cta">Join The Jali Tribe</Link>
          <a href="#services" className="hero-cta-secondary">See What We Do</a>
        </div>
        <div className="hero-video">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* PAIN */}
      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h2">Hardwork Isn't Enough Anymore</h2>
          <div className="pain-block">
            <h3>You're creating more than ever. And earning less than you deserve.</h3>
            <p>
              You're showing up, posting consistently, doing all the things you're supposed to do — and your
              bank account hasn't changed. You watch people with half your talent land deals and charge premium
              prices, and you can't figure out what they know that you don't.{" "}
              <strong>It's not that you're not good enough. It's that you were never given a system.</strong>
            </p>
          </div>
          <div className="pain-block">
            <h3>You've built something incredible. And the world has no idea.</h3>
            <p>
              Your product works. Your clients love you. But{" "}
              <strong>you don't know how to build an audience or get visible.</strong> You see founders with
              worse products getting all the attention — and you're stuck relying on referrals. If people could
              just see what you've built, everything would change.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      <div className="transition">
        <p>
          That's exactly why we built this. Not another course. Not another community that goes quiet after a
          week. <strong>A system that actually works — because it's built on the one thing nobody can take from
          you: your story.</strong>
        </p>
      </div>

      {/* COMMUNITY PHOTO — TOP */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap-wide">
          <div className="feature-photo" style={{ marginTop: 0 }}>
            <img src="/community-1.jpg" alt="The Jali Experience, Lagos 2025" loading="lazy" />
          </div>
          <p className="feature-cap">The Jali Experience · Lagos '25</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="wrap-wide">
          <p className="eyebrow">What We Do</p>
          <h2 className="h2">Three Ways To Get From Where You Are To Where You Should Be</h2>

          <div className="services-grid">
            <div className="service-card featured">
              <span className="featured-tag">Flagship</span>
              <p className="card-for">For Creators &amp; Entrepreneurs</p>
              <h3>The Jali Tribe</h3>
              <p>
                A private international community where you turn your story into a system that grows your
                audience, attracts opportunities, and actually makes you money. All our courses, live workshops,
                personal coaching, AI tools customised to your niche, quarterly events, and a room of people who
                are building.
              </p>
              <ul className="card-includes">
                <li>All courses, playbooks, and resources</li>
                <li>Live coaching and workshops every week</li>
                <li>AI tools customised to your niche</li>
                <li>Quarterly events across the world</li>
                <li>Member spotlights to Victor's 800K+ audience</li>
              </ul>
              <Link to="/tribe" className="card-link">Join the Tribe <span>→</span></Link>
            </div>

            <div className="service-card">
              <p className="card-for">For Founders &amp; CEOs</p>
              <h3>Creator-Founder Service</h3>
              <p>
                A bespoke, done-with-you agency service where we work with founders to build their community,
                audience, and revenue using creator-led growth strategies. We handle strategy, content, and
                execution. You show up 4 hours a month. We make the world know about it.
              </p>
              <ul className="card-includes">
                <li>Personal brand strategy and positioning</li>
                <li>Content creation and distribution</li>
                <li>Audience and community growth engine</li>
                <li>Inbound leads through storytelling</li>
                <li>4 hours of your time a month — we handle the rest</li>
              </ul>
              <Link to="/founders" className="card-link">Learn More <span>→</span></Link>
            </div>

            <div className="service-card">
              <p className="card-for">For Anyone Ready To Transform</p>
              <h3>WAMC Growth Challenge</h3>
              <p>
                The 6-week public growth challenge that started everything. The exact system Victor used to go
                from under 1,000 to 800,000+ followers. A structured sprint with daily accountability, live
                coaching, content frameworks, and a cohort of people doing it alongside you.
              </p>
              <ul className="card-includes">
                <li>6-week structured sprint with daily milestones</li>
                <li>The frameworks behind 70M+ views</li>
                <li>Platform strategies for IG, TikTok, LinkedIn, YouTube</li>
                <li>Live coaching and weekly check-ins</li>
                <li>Victor's personal playbook — the one behind 800K+</li>
              </ul>
              <Link to="/wamc" className="card-link">Join the Next Cohort <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section section-alt" id="story">
        <div className="wrap">
          <div className="feature-photo" style={{ marginTop: 0 }}>
            <img src="/victor-main.jpg" alt="Victor Okafor speaking at The Jali Experience, Abuja" />
          </div>
          <p className="feature-cap" style={{ marginBottom: "44px" }}>
            Victor Okafor · The Jali Experience, Abuja
          </p>

          <p className="eyebrow">How This Started</p>
          <h2 className="h2">One Phone. One Decision. Everything Changed.</h2>
          <p className="story-text">
            Victor Okafor had under 1,000 followers. No team. No budget. He ran a 90-day public experiment
            called <strong>"Watching A Man Change"</strong> — posting every single day, documenting every win
            and failure in real time.
          </p>
          <p className="story-text">
            In 90 days: <strong>11 million views.</strong> Today: <strong>800,000+ followers</strong> and{" "}
            <strong>2,000+ students</strong> who've used the same system to build businesses from their stories.
            That system is now Jali Group.
          </p>

          <div className="stats-row">
            <div className="stat-box"><div className="stat-num">800K+</div><p className="stat-label">Followers Built</p></div>
            <div className="stat-box"><div className="stat-num">70M+</div><p className="stat-label">Views Generated</p></div>
            <div className="stat-box"><div className="stat-num">2,000+</div><p className="stat-label">Students</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* REVIEWS */}
      <Reviews alt />

      {/* COMMUNITY PHOTO — END */}
      <section className="section">
        <div className="wrap-wide">
          <div className="feature-photo" style={{ marginTop: 0 }}>
            <img src="/community-2.jpg" alt="The Jali Experience community, Lagos 2025" loading="lazy" />
          </div>
          <p className="feature-cap">Inside the room · The Jali Experience, Lagos '25</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2 className="h2">Your Story Is Already Worth Something. We Give You The System To Collect.</h2>
        <p className="sub sub-center">
          Build a profitable business that finally lets you never worry about money again. No theory. Just a
          system that turns who you are and what you know into what brings you money, opportunities, and
          visibility — consistently.
        </p>
        <Link to="/tribe" className="final-cta-btn">Join The Jali Tribe</Link>
        <p className="price-note">No contracts. Cancel anytime.</p>
      </section>

      {/* COMMUNITY CAROUSEL */}
      <CommunityCarousel alt />
    </JaliLayout>
  );
};

export default JaliHome;
