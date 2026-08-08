import { Link } from "react-router-dom";
import SEOHead from "@/components/ui/SEOHead";
import JgNav from "@/components/jali/JgNav";
import JgFooter from "@/components/jali/JgFooter";
import "@/styles/jg.css";

// Community photos auto-loaded from src/assets/stories/ (drop images in; they appear here).
const storyModules = import.meta.glob(
  "../assets/stories/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;
const storyPhotos = Object.keys(storyModules).sort().map((k) => storyModules[k]);
const community = storyPhotos.length ? storyPhotos : ["/dre.jpg", "/steph.jpeg", "/iya.jpeg", "/grace.jpeg"];

const tickerDead = ["Another course", "Theory", "Effort that doesn't convert"];
const tickerLive = ["Your story", "A system", "Real results", "Money", "Opportunities", "Visibility"];

const services = [
  {
    featured: true,
    tag: "Flagship · For Creators & Entrepreneurs",
    title: "The Jali Tribe",
    body: "A private international community where you turn your story into a system that grows your audience, attracts opportunities, and actually makes you money. All our courses, live workshops, personal coaching, AI tools customised to your niche, quarterly events, and a room of people who are building.",
    items: [
      "All courses, playbooks, and resources",
      "Live coaching and workshops every week",
      "AI tools customised to your niche",
      "Quarterly events across the world",
      "Member spotlights to Victor's 800K+ audience",
    ],
    cta: "Join the Tribe",
    to: "/tribe",
  },
  {
    tag: "For Founders & CEOs",
    title: "Creator-Founder Service",
    body: "A bespoke, done-with-you agency service where we work with founders to build their community, audience, and revenue using creator-led growth strategies. We handle strategy, content, and execution. You show up 4 hours a month. We make the world know about it.",
    items: [
      "Personal brand strategy and positioning",
      "Content creation and distribution",
      "Audience and community growth engine",
      "Inbound leads through storytelling",
      "4 hours of your time a month — we handle the rest",
    ],
    cta: "Learn More",
    to: "/founders",
  },
  {
    tag: "For Anyone Ready To Transform",
    title: "WAMC Growth Challenge",
    body: "The 6-week public growth challenge that started everything. The exact system Victor used to go from under 1,000 to 800,000+ followers. A structured sprint with daily accountability, live coaching, content frameworks, and a cohort of people doing it alongside you.",
    items: [
      "6-week structured sprint with daily milestones",
      "The frameworks behind 70M+ views",
      "Platform strategies for IG, TikTok, LinkedIn, YouTube",
      "Live coaching and weekly check-ins",
      "Victor's personal playbook — the one behind 800K+",
    ],
    cta: "Join the Next Cohort",
    to: "/wamc",
  },
];

const testimonials = [
  { image: "/steph.jpeg", name: "Stephanie Obiano", role: "Travel Industry Icon · Silverbird Entrepreneur of the Year", quote: "From being overlooked, Stephanie was repositioned as a female icon in the travel management industry using the Signature Belief & Framework by Jali." },
  { image: "/iya.jpeg", name: "Iyobosa Sorae", role: "Ex-Global Head of Treasury, Coronation", quote: "Launched a signature book & community with captains of industry in attendance. In her words: “This program gave me a head start. It was worth it 1000%.”" },
  { image: "/grace.jpeg", name: "Grace Vanderpuye", role: "United Nations Staff", quote: "Working with the Jali team in 2025 was incredible. Communicating my value was made very easy and I had a structure for consistency." },
  { image: "/dre.jpg", name: "Dr. Emmanuel Okafor", role: "Medical Doctor · Influencer", quote: "Using the Jali Framework, Dr. E completely restructured his digital persona — from 88 followers to 10,000 in 14 days, with 5M+ organic views." },
];

const reviews = [
  { name: "Cynthia Joma", text: "It was an exciting and challenging experience at the same time. I had to put myself on camera which was not easy for me but I did it. I've learned a lot from the challenge and it has helped me revamp my business." },
  { name: "Aisha Modu", text: "The global niche is amazing, I used it all through. Introducing us to Mainstack is one of the amazing things I have learned on this challenge. This challenge is more than worth it. Thank you." },
  { name: "Glory Eziukwu", text: "It's a worthy self rediscovery adventure. The guidance from The Jali Group made a huge difference. I deeply appreciate the effort, the in-depth attention to details, and giving room for authenticity and creativity all at once." },
  { name: "James Ajala", text: "Tailored template that really encouraged posting really helped me position better to attract clients." },
];

const JaliHome = () => (
  <div className="jg">
    <SEOHead
      title="Jali Group — Build a Profitable Business From Your Story"
      description="Turn who you are and what you know into what brings you money, opportunities, and visibility, consistently. The Jali Tribe, the Creator-Founder Service, and the WAMC Growth Challenge."
    />
    <JgNav cta={{ label: "Join The Tribe", href: "/tribe" }} />

    {/* HERO */}
    <header className="hero">
      <div className="wrap">
        <p className="eyebrow">Jali Group</p>
        <h1>You've Been Putting In The Work. It's Time The Work Started Paying You Back.</h1>
        <p className="subtitle">
          The Jali Tribe is where creators stop pouring effort into content that doesn't convert, and
          entrepreneurs stop building incredible things that nobody can find. One room, systems that work, and
          real results. People inside are landing international deals, growing faster than they ever have, and
          monetising their personal brand with a clear structure behind it.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-solid" to="/tribe">Join The Jali Tribe</Link>
          <a className="btn btn-ghost" href="#services">See What We Do</a>
        </div>
        <div className="home-video">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/vic.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </header>

    {/* TICKER */}
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((d) => (
          <span key={d} style={{ display: "contents" }}>
            {tickerDead.map((t, i) => <span className="dead" key={"d" + d + i}>{t}</span>)}
            {tickerLive.map((t, i) => <span className="live" key={"l" + d + i}>{t}</span>)}
          </span>
        ))}
      </div>
    </div>

    {/* PAIN */}
    <section className="light">
      <div className="wrap">
        <h2>Hardwork Isn't Enough Anymore</h2>
        <div className="tiers">
          <div className="tier">
            <h3>You're creating more than ever. And earning less than you deserve.</h3>
            <p>
              You're showing up, posting consistently, doing all the things you're supposed to do, and your bank
              account hasn't changed. You watch people with half your talent land deals and charge premium prices.{" "}
              <strong>It's not that you're not good enough. It's that you were never given a system.</strong>
            </p>
          </div>
          <div className="tier">
            <h3>You've built something incredible. And the world has no idea.</h3>
            <p>
              Your product works. Your clients love you. But{" "}
              <strong>you don't know how to build an audience or get visible.</strong> You see founders with worse
              products getting all the attention, and you're stuck relying on referrals. If people could just see
              what you've built, everything would change.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* TRANSITION */}
    <div className="transition">
      <p>
        That's exactly why we built this. Not another course. Not another community that goes quiet after a week.{" "}
        <strong>A system that actually works, because it's built on the one thing nobody can take from you: your
        story.</strong>
      </p>
    </div>

    {/* COMMUNITY PHOTO 1 */}
    <section style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="feature-photo"><img src="/community-1.jpg" alt="The Jali Experience, Lagos 2025" loading="lazy" /></div>
        <p className="feature-cap">The Jali Experience · Lagos '25</p>
      </div>
    </section>

    {/* SERVICES */}
    <section id="services">
      <div className="wrap">
        <p className="sec-label">What We Do</p>
        <h2>Three Ways To Get From Where You Are To Where You Should Be</h2>
        <div className="grid-3">
          {services.map((s) => (
            <div className={`gcard${s.featured ? " tier-featured" : ""}`} key={s.title}>
              <h4>{s.tag}</h4>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul style={{ listStyle: "none", margin: "18px 0 24px" }}>
                {s.items.map((it) => (
                  <li key={it} style={{ padding: "8px 0", borderTop: "1px solid #333", fontSize: "14px", color: "#E6E6E6" }}>→ {it}</li>
                ))}
              </ul>
              <Link className={`btn ${s.featured ? "btn-solid" : "btn-ghost"}`} to={s.to}>{s.cta} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STORY */}
    <section className="dark" id="story">
      <div className="wrap">
        <div className="feature-photo"><img src="/victor-main.jpg" alt="Victor Okafor speaking at The Jali Experience, Abuja" loading="lazy" /></div>
        <p className="feature-cap" style={{ marginBottom: "44px" }}>Victor Okafor · The Jali Experience, Abuja</p>
        <p className="sec-label">How This Started</p>
        <h2>One Phone. One Decision. Everything Changed.</h2>
        <p className="lead">
          Victor Okafor had under 1,000 followers. No team. No budget. He ran a 90-day public experiment called
          "Watching A Man Change", posting every single day, documenting every win and failure in real time.
        </p>
        <p className="lead" style={{ marginTop: "16px" }}>
          In 90 days: 11 million views. Today: 800,000+ followers and 2,000+ students who've used the same system
          to build businesses from their stories. That system is now Jali Group.
        </p>
        <div className="pillars">
          <div className="pillar"><p className="stat">800K+</p><p>Followers Built</p></div>
          <div className="pillar"><p className="stat">70M+</p><p>Views Generated</p></div>
          <div className="pillar"><p className="stat">2,000+</p><p>Students</p></div>
          <div className="pillar"><p className="stat">40+</p><p>Countries</p></div>
        </div>
      </div>
    </section>

    {/* REAL PEOPLE — TESTIMONIALS */}
    <section className="light">
      <div className="wrap">
        <p className="sec-label">Proof, Not Promises</p>
        <h2>Real People. Real Repositioning.</h2>
        <p className="lead">A few of the founders and creators who turned their story into authority, income, and opportunity with Jali.</p>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-photo"><img src={t.image} alt={t.name} loading="lazy" /></div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section>
      <div className="wrap">
        <p className="sec-label">In Their Words</p>
        <h2>Straight From The People Who Did It</h2>
        <p className="lead">Real reviews from creators and founders who took the challenge and put themselves out there.</p>
        <div className="grid-3 grid-2">
          {reviews.map((r) => (
            <div className="gcard" key={r.name}>
              <p style={{ color: "#E6E6E6", fontSize: "15px", lineHeight: 1.7 }}>“{r.text}”</p>
              <div className="testi-name" style={{ marginTop: "16px" }}>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMMUNITY PHOTO 2 */}
    <section style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="feature-photo"><img src="/community-2.jpg" alt="The Jali Experience community, Lagos 2025" loading="lazy" /></div>
        <p className="feature-cap">Inside the room · The Jali Experience, Lagos '25</p>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="final">
      <div className="wrap">
        <h2>Your Story Is Already Worth Something. We Give You The System To Collect.</h2>
        <p className="lead">
          Build a profitable business that finally lets you never worry about money again. No theory. Just a
          system that turns who you are and what you know into what brings you money, opportunities, and
          visibility, consistently.
        </p>
        <div><Link className="btn btn-solid" to="/tribe">Join The Jali Tribe</Link></div>
        <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#8A8A8A", marginTop: "16px" }}>No contracts. Cancel anytime.</p>
      </div>
    </section>

    {/* COMMUNITY CAROUSEL */}
    <section style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <p className="sec-label" style={{ textAlign: "center" }}>The Community</p>
        <h2 style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          Join 2000+ founders and creators building profitable businesses the Jali way.
        </h2>
      </div>
    </section>
    <div className="home-mq" aria-hidden="true">
      <div className="home-mq-track">
        {[...community, ...community].map((src, i) => (
          <div className="home-mq-item" key={i}><img src={src} alt="Jali community member" loading="lazy" /></div>
        ))}
      </div>
    </div>

    <JgFooter />
  </div>
);

export default JaliHome;
