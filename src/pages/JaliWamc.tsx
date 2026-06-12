import { useState } from "react";
import JaliLayout from "@/components/jali/JaliLayout";

const faqs = [
  {
    q: "What if I have zero followers right now?",
    a: "Even better. The founder had under 1,000 when he started. WAMC is designed for people starting from scratch or stuck at a plateau. The system works regardless of where you're starting from.",
  },
  {
    q: "How much time do I need to commit per week?",
    a: "Expect 5-7 hours per week. That includes live sessions, content creation, and community participation. If you can't commit that, this isn't the right time. We'd rather you wait and show up fully than join and disappear.",
  },
  {
    q: "Why $500 and not cheaper?",
    a: "Because this isn't a course. It's a coached transformation with live access, accountability clusters, and a proven system. The price filters for people who are serious. If you're looking for a $29 course, this isn't it. If you're looking for a result, this is underpriced.",
  },
  {
    q: "What happens after the 6 weeks?",
    a: "You get lifetime access to the Jali Tribe community — the modules, live sessions, deal board, accountability pods. WAMC is the sprint. The Tribe is the marathon. You'll have both.",
  },
  {
    q: "Is this just for creators?",
    a: "No. Entrepreneurs, founders, freelancers, consultants — anyone who needs to build visibility and turn attention into revenue. The system adapts to your context. The principles are universal.",
  },
  {
    q: "What's the difference between the $500 and $750 price?",
    a: "Content is identical. The $500 waitlist price is for the first 25 people who commit early. After those 25 slots fill, the price moves to $750 for everyone else. Same challenge. Same access. Just a reward for moving fast.",
  },
];

const JaliWamc = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <JaliLayout
      page="wamc"
      title="WAMC — The 6-Week Growth Challenge"
      description="The 6-week growth challenge that took one creator from under 1,000 followers to 800,000+. Your turn."
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-line" />
        <p className="eyebrow">The 6-Week Growth Challenge</p>
        <h1 className="h1">Watch Yourself Change</h1>
        <p className="sub">
          The exact system that took one creator from under 1,000 followers to 800,000+ in 90 days. Compressed
          into a 6-week sprint. With a coach in your corner the entire time.
        </p>
        <a href="#waitlist" className="hero-cta">Join The Waitlist — $500</a>
      </section>

      {/* PRICING BANNER */}
      <div className="price-banner" id="waitlist">
        <div className="price-option featured">
          <div className="label">Waitlist Price (First 25)</div>
          <div className="amount">$500</div>
          <div className="note">Lock in before the first 25 spots fill</div>
        </div>
        <div className="price-option">
          <div className="label">After First 25</div>
          <div className="amount">$750</div>
          <div className="note">Standard enrolment price</div>
        </div>
      </div>

      {/* THE STORY */}
      <section className="section story-section">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-text">
              <p className="eyebrow">The Origin</p>
              <p>
                In February 2024, Victor Okafor had under 1,000 followers. No team. No budget. No strategy he
                hadn't already tried and watched fail.
              </p>
              <p>
                He decided to try something different: document his own growth journey publicly for 90 days.
                Every win. Every failure. Every lesson. Out in the open. He called it "Watching A Man Change."
              </p>
              <p>
                What happened next broke every assumption he had about growth. The numbers moved. The audience
                came. The opportunities followed. And by the time it was over, he'd built a proof of concept that
                changed everything about how he understood attention, storytelling, and revenue.
              </p>
              <p>
                The WAMC Growth Challenge is that system — refined, structured, and coached — compressed into 6
                weeks so you can experience the same transformation without the 90-day guesswork.
              </p>
            </div>
            <div>
              <div className="story-stats">
                <div className="stat"><div className="stat-num">800K+</div><div className="stat-label">Followers Built</div></div>
                <div className="stat"><div className="stat-num">70M+</div><div className="stat-label">Views Generated</div></div>
                <div className="stat"><div className="stat-num">90</div><div className="stat-label">Days to Prove It</div></div>
                <div className="stat"><div className="stat-num">2,000+</div><div className="stat-label">Students Since</div></div>
              </div>
            </div>
          </div>

          <div className="portrait"><img src="/guy.JPEG" alt="Victor Okafor" /></div>
          <p className="portrait-cap">Victor Okafor · Founder, Jali Group</p>
        </div>
      </section>

      {/* MID CTA */}
      <div className="mid-cta"><a href="#waitlist">Secure Your Slot — $500</a></div>

      {/* THE 3 PHASES */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The Structure</p>
          <h2 className="h2">6 Weeks. 3 Phases. One Transformation.</h2>
          <p className="sub">
            Each phase builds on the last. By the end, you won't just have grown — you'll have a system you can
            repeat forever.
          </p>
          <div className="phases">
            <div className="phase">
              <div>
                <div className="phase-label">Week 1 & 2</div>
                <div className="phase-sub">Foundation</div>
              </div>
              <div className="phase-content">
                <h3>Story & Identity</h3>
                <p>
                  You'll strip everything back to the foundation. Who are you? What's the story only you can
                  tell? What makes your perspective worth following? This is where most people skip — and it's
                  exactly why most people plateau. You'll leave this phase with a content identity so clear that
                  every post writes itself.
                </p>
                <div className="phase-outcomes">
                  <span className="phase-tag">Your Story Framework</span>
                  <span className="phase-tag">Content Identity Defined</span>
                  <span className="phase-tag">Platform Strategy Set</span>
                  <span className="phase-tag">First 10 Posts Written</span>
                </div>
              </div>
            </div>
            <div className="phase">
              <div>
                <div className="phase-label">Week 3 & 4</div>
                <div className="phase-sub">Execution</div>
              </div>
              <div className="phase-content">
                <h3>Growth & Momentum</h3>
                <p>
                  Now you execute. Daily posting. Real-time feedback. Algorithm-native strategies tailored to
                  your platform. This is where the growth happens — and where most people quit. You won't, because
                  your accountability cluster of 5 is watching. Your coach is watching. The numbers start moving
                  here.
                </p>
                <div className="phase-outcomes">
                  <span className="phase-tag">Daily Content Rhythm</span>
                  <span className="phase-tag">Engagement System Active</span>
                  <span className="phase-tag">First Viral Moment</span>
                  <span className="phase-tag">Audience Growth Compounding</span>
                </div>
              </div>
            </div>
            <div className="phase">
              <div>
                <div className="phase-label">Week 5 & 6</div>
                <div className="phase-sub">Scale</div>
              </div>
              <div className="phase-content">
                <h3>Monetisation & System</h3>
                <p>
                  You've built the audience. Now you build the machine. How to convert followers into revenue.
                  How to build a content system that runs without you thinking about it every day. How to turn
                  this sprint into a permanent advantage. You leave WAMC with a business asset, not just a
                  follower count.
                </p>
                <div className="phase-outcomes">
                  <span className="phase-tag">Monetisation Plan Live</span>
                  <span className="phase-tag">Content System Automated</span>
                  <span className="phase-tag">Revenue From Audience</span>
                  <span className="phase-tag">Repeatable Growth System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <div className="mid-cta"><a href="#waitlist">Secure Your Slot — $500</a></div>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What You Get</p>
          <h2 className="h2">Everything You Need. Nothing You Don't.</h2>
          <div className="get-grid">
            <div className="get-card">
              <h4>Live Coaching</h4>
              <p>Direct access to Victor and senior Jali coaches throughout all 6 weeks. Not pre-recorded modules. Live sessions where your specific situation gets addressed.</p>
            </div>
            <div className="get-card">
              <h4>Accountability Clusters</h4>
              <p>Groups of 5, led by senior coaches across UK, US, and Africa. Daily check-ins. Weekly reviews. People who won't let you quit when it gets hard.</p>
            </div>
            <div className="get-card">
              <h4>The WAMC Playbook</h4>
              <p>The complete storytelling and growth system. Templates, frameworks, scripts, and swipe files. The same system behind 800K+ followers and 70M+ views.</p>
            </div>
            <div className="get-card">
              <h4>Platform-Specific Strategy</h4>
              <p>Custom strategies for LinkedIn, Instagram, TikTok, X, or YouTube. Not generic advice. Tactics built for how each algorithm actually works right now.</p>
            </div>
            <div className="get-card">
              <h4>Private Community Access</h4>
              <p>Your WAMC cohort becomes your network. A private space for sharing wins, getting feedback, and finding collaborators long after the 6 weeks end.</p>
            </div>
            <div className="get-card">
              <h4>Jali Tribe Membership</h4>
              <p>Every WAMC graduate gets access to the Jali Tribe community. The modules, the live sessions, the deal board — the full ecosystem to keep your momentum going.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOT FOR */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="not-for">
            <h3>This Is Not For Everyone</h3>
            <ul className="not-list">
              <li>People who want results without doing the work</li>
              <li>People who think "going viral" is a strategy</li>
              <li>People who aren't willing to post publicly for 6 weeks</li>
              <li>People looking for a shortcut instead of a system</li>
              <li>People who need hand-holding on every decision</li>
              <li>People who'll buy and never show up</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="eyebrow">Common Questions</p>
          <h2 className="h2">Before You Decide</h2>
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
              </div>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <p className="eyebrow">This Is Your Window</p>
        <h2 className="h2">Six Weeks From Now, You'll Wish You Started Today</h2>
        <p className="sub sub-center" style={{ color: "var(--text-mid)" }}>
          The waitlist price of $500 is only available for the first 25 people. After that, it's $750. Don't
          think about it. You already know.
        </p>
        <a href="#waitlist" className="hero-cta" style={{ marginTop: "36px" }}>Join The Waitlist — $500</a>
      </section>
    </JaliLayout>
  );
};

export default JaliWamc;
