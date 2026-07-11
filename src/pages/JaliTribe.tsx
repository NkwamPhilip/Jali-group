import { useState } from "react";
import JaliLayout from "@/components/jali/JaliLayout";
import Testimonials from "@/components/jali/Testimonials";
import Reviews from "@/components/jali/Reviews";
import CommunityCarousel from "@/components/jali/CommunityCarousel";

const TRIBE_URL = "https://hubs.nestuge.com/thejalitribe";

const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly do I get when I join the Jali Tribe?",
    a: `You get immediate access to the full Resource Vault — that's 10 structured modules across the Creator Track, Entrepreneur Track, and Shared Track. On top of that, you get our custom AI tools, the weekly live sessions (Ignition Call and Win Wall), the community infrastructure (Deal Board, Accountability Pods, Member Directory, Resource Request Board), and access to quarterly events including the Jali Summit. The exact mix of live access depends on your tier — Member, Builder, or Inner Circle — but every tier gets the full vault with zero locked content.`,
  },
  {
    q: "I'm a complete beginner with no audience. Is this for me?",
    a: `Yes — and you might actually get the most out of it. The entire system was built by someone who started with under 1,000 followers. The Creator Track begins with Personal Brand Architecture — positioning, voice, and identity — before you post a single piece of content. You're not playing catch-up. You're building the right foundation from the start, which means you skip the mistakes most people spend years making.`,
  },
  {
    q: "I'm an entrepreneur, not a creator. Will this work for me?",
    a: `The Entrepreneur Track was built specifically for founders who need visibility but don't want to become influencers. It covers founder content systems, audience building for business, offer architecture, and scale. You'll learn how to use your founder story as a growth channel — not how to dance on TikTok. Some of our most successful members are B2B founders who've generated six figures in inbound revenue through the content strategies inside the vault.`,
  },
  {
    q: "What's the difference between the three tiers?",
    a: `Every tier gets the full Resource Vault — all 10 modules, no content locked behind a paywall. The difference is in live access and speed. <strong>Jali Builder ($49)</strong> gets the vault, all 3 AI tools, weekly Ignition Calls, monthly Expert Room sessions, Accountability Pod placement, the Resource Request Board, WAMC Challenge participation, and Member Spotlight eligibility. <strong>Jali Core ($92)</strong> includes the vault, community access, the monthly Mixer, Deal Board, and quarterly Summit access. <strong>Jali Inner Circle ($199)</strong> adds a monthly 1-on-1 strategy call with Victor, a private direct-access channel, VIP hot seat priority, and an annual featured case study across Victor's full audience. Builder and Inner Circle both include the option to pay in 3 instalments.`,
  },
  {
    q: "What are the AI tools and how do they work?",
    a: `These are three custom-built tools exclusive to Tribe members — not ChatGPT wrappers. The <strong>Magnetic Content Engine & Brand Voice Tool</strong> generates full 30-day content calendars, rewrites weak hooks, and creates a complete brand voice guide from your inputs. The <strong>Story Architect Tool</strong> transforms your raw experiences and business lessons into high-performing storytelling content. The <strong>Creator Business Diagnostic Tool</strong> audits your current positioning, brand associations, content volume, and credibility so you know exactly where you stand and what to fix first. Jali Core members get access to 2 of the 3 tools; Builder and Inner Circle get all 3.`,
  },
  {
    q: "How much time do I need to commit each week?",
    a: `That depends on your tier and how fast you want to move. At a minimum, you can work through the vault at your own pace — even 2-3 hours a week of focused implementation will produce noticeable results within 30 days. If you're on the Builder or Inner Circle tier, the live sessions add another 1-2 hours per week. The Accountability Pods meet weekly for about 30 minutes. The members who see the fastest results are the ones who treat it like a part-time job for the first 90 days — but the system is designed to work even if you're busy.`,
  },
  {
    q: "What happens on the weekly live sessions?",
    a: `The <strong>Ignition Call</strong> happens every Saturday — one tactical focus, one actionable framework, and you leave with a clear action for the week. It's not a lecture. It's a working session. The <strong>Win Wall</strong> happens every other Friday — a live celebration and accountability session where members share wins, report progress, and course-correct publicly. Both sessions are recorded if you can't attend live, but the culture of the Tribe is built around showing up.`,
  },
  {
    q: "What are Accountability Pods and how do they work?",
    a: `When you join at Builder tier or above, you're placed into a pod of 5 members matched by goal and stage. Your pod meets weekly — quick check-ins, progress sharing, and honest feedback. The pod is the reason members show up even on hard weeks. It's not optional accountability — it's a small group of people who know what you committed to and will call you out if you disappear. Many members say the pod alone is worth the membership.`,
  },
  {
    q: "What's the Deal Board?",
    a: `A private board inside the community where members post and find opportunities — freelance work, collaborations, job openings, partnership proposals, beta testers, guest appearances, and referrals. The idea is simple: when you're in a room of creators and entrepreneurs who are all building, opportunities flow naturally. The Deal Board is where those opportunities get formalised. Members have landed paid gigs, co-created products, and found clients directly through it.`,
  },
  {
    q: "What does the Member Spotlight look like?",
    a: `Every week, one Tribe member gets featured across Victor's 800K+ audience on all platforms. That's real exposure — the kind you can't buy. You'll be introduced with your story, your work, and a direct link to whatever you're building. It's designed to drive followers, leads, and credibility to you. Spotlight eligibility starts at the Builder tier.`,
  },
  {
    q: "Can I switch tiers later?",
    a: `Absolutely. You can upgrade or downgrade at any time. Many members start at the Member tier to explore the vault, then move to Builder once they're ready for the live sessions and pods. There's no penalty for switching, and any remaining balance on your current billing cycle gets applied.`,
  },
  {
    q: "What if I join and it's not for me?",
    a: `You can cancel anytime — no contracts, no lock-in, no awkward cancellation process. If you join and realise it's not the right fit, you cancel and your access continues until the end of your current billing period. We don't make it hard to leave because we'd rather have a room full of people who want to be there.`,
  },
  {
    q: "Are these prices discounted?",
    a: `Yes — the current rates (Jali Builder $49, Jali Core $92, Jali Inner Circle $199) are discounted launch pricing. Lock in now and you keep your rate for as long as you stay subscribed.`,
  },
  {
    q: "How is this different from every other creator community out there?",
    a: `Three things. First, everything in the Tribe is built on a documented, proven system — the same one behind 800K+ followers and 70M+ views. It's not theory. Second, the Tribe is structured with real infrastructure — Accountability Pods, a Deal Board, a Member Directory, weekly live sessions, and quarterly summits. This isn't a Slack group that goes quiet after two weeks. Third, you get custom AI tools built exclusively for this community, direct exposure to Victor's audience, and a community of people who are actually building — not just consuming content about building.`,
  },
];

const JaliTribe = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <JaliLayout
      page="tribe"
      title="The Jali Tribe — Where Creators & Entrepreneurs Get Profitable"
      description="A private international community for creators and entrepreneurs ready to turn their story into a business system. Playbooks, coaching, AI tools, accountability, revenue."
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-line" />
        <h1 className="h1">
          You've Been Putting In The Work.<br />It's Time The Work Started Paying You Back.
        </h1>
        <p className="sub">
          The Jali Tribe is a private international community for creators and entrepreneurs who refuse to stay
          invisible. Playbooks. Coaching. AI tools. Accountability. Revenue. Not in theory. Visible results in
          just 30 days.
        </p>
        <a href="#pricing" className="hero-cta">Join The Tribe</a>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Who This Is For</p>
          <h2 className="h2">
            Creators Who Are Tired Of Being Broke. Entrepreneurs Who Are Tired Of Being Invisible.
          </h2>
          <div className="who-grid">
            <div className="who-card">
              <h3>For Creators</h3>
              <p>
                You're posting every day but your bank account doesn't reflect your effort. You have followers
                but no customers. You have content but no system. You've tried everything the gurus said and
                you're still trading time for pennies. The Tribe gives you the business system your creativity
                has been missing.
              </p>
            </div>
            <div className="who-card">
              <h3>For Entrepreneurs</h3>
              <p>
                Your product works. Your service delivers results. But nobody knows you exist. You've been told
                to "build a personal brand" but nobody's shown you how — not in a way that doesn't feel fake. The
                Tribe gives you the visibility engine that turns your founder story into your biggest growth
                channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO — TOP */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap-wide">
          <div className="feature-photo" style={{ marginTop: 0 }}>
            <img src="/community-1.jpg" alt="The Jali Experience, Lagos 2025" loading="lazy" />
          </div>
          <p className="feature-cap">The Jali Experience · Lagos '25</p>
        </div>
      </section>

      {/* RESOURCE VAULT */}
      <section className="section" id="vault">
        <div className="wrap">
          <p className="eyebrow">The Resource Vault</p>
          <h2 className="h2">Everything You Need To Build. Nothing You Don't.</h2>
          <p className="sub">
            Two tracks. Ten modules. Every one built around a specific problem with a defined outcome and a
            step-by-step action plan. You'll never wonder "what do I do next?"
          </p>

          {/* CREATOR TRACK */}
          <div className="track-header">
            <div className="track-name">Creator Track</div>
            <div className="track-tag">"Attention To Income"</div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 1</span>
              <span className="module-title">Personal Brand Architecture</span>
            </div>
            <ul className="module-includes">
              <li>The Positioning Playbook & Niche Domination Guide — own one idea so completely your name becomes the category</li>
              <li>The Voice & Identity Workbook — find the version of you people can't scroll past</li>
              <li>The Authority Stacking System — go from unknown to undeniable in 90 days</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Define your positioning so clearly your audience can describe you in one sentence</li>
                <li>Develop a distinct voice that makes your content instantly recognisable</li>
                <li>Go from unknown to undeniable within 90 days of consistent execution</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 2</span>
              <span className="module-title">Story & Content Mastery</span>
            </div>
            <ul className="module-includes">
              <li>The Storytelling Course — narrative frameworks that stop scrolls and build obsessive loyalty</li>
              <li>The Content Operating System — produce a month of content in one day</li>
              <li>The Hook Laboratory + Content That Works — 50 proven hook formulas with real examples</li>
              <li>Platform Playbooks — deep dives for Instagram, YouTube, LinkedIn, X, and TikTok</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Write content that holds attention 3x longer than your current average</li>
                <li>Build a repeatable story framework you can use across any platform</li>
                <li>Create 30 days of content in a single 4-hour session</li>
                <li>Repurpose 1 piece of content into 7 platform-native formats</li>
                <li>Eliminate content burnout with a production system that runs itself</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 3</span>
              <span className="module-title">Monetisation Mastery</span>
            </div>
            <ul className="module-includes">
              <li>The Creator Revenue Course — every income stream mapped with realistic numbers attached</li>
              <li>The Digital Product Workshop — build, price, and launch your first product in 30 days</li>
              <li>The Sponsorship Playbook — land brand deals, set rates, and negotiate like a pro</li>
              <li>The Community Monetisation Guide — turn your audience into a paid tribe</li>
              <li>The Email Money Machine — build a list that generates revenue on demand</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Identify and launch your first (or next) revenue stream within 30 days</li>
                <li>Price your offers with confidence using the Value-to-Price Framework</li>
                <li>Build a revenue model that doesn't depend on a single platform or sponsor</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 4</span>
              <span className="module-title">Creator Business Systems</span>
            </div>
            <ul className="module-includes">
              <li>The Burnout-Proof Creator System — batching, scheduling, and protecting your creativity</li>
              <li>The Team & Content Guide — when and how to hire your first editor, manager, and VA</li>
              <li>The Creator Legal Basics — contracts, IP, brand deals, and protecting yourself</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Create consistently for 90 days without burnout</li>
                <li>Become impossible to sideline in agreements</li>
                <li>Go from winging it to building a proper business structure</li>
              </ul>
            </div>
          </div>

          {/* ENTREPRENEUR TRACK */}
          <div className="track-header">
            <div className="track-name">Entrepreneur Track</div>
            <div className="track-tag">"Invisible to Industry Leader"</div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 1</span>
              <span className="module-title">The Founder Content System</span>
            </div>
            <ul className="module-includes">
              <li>Founder Identity & Mindset Reframing</li>
              <li>Building in Public Masterclass — document your journey and turn it into your most powerful acquisition channel</li>
              <li>The LinkedIn Domination Playbook — the platform where B2B money lives and how to own it</li>
              <li>The Thought Leadership Blueprint — become the most trusted voice in your industry</li>
              <li>The Founder Story Framework — craft the origin story that makes people root for you before you sell anything</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Generate your first inbound lead through content within 60 days</li>
                <li>Build a "build in public" narrative that attracts customers, partners, and press</li>
                <li>Turn your founder journey into a marketing engine that costs $0 in ad spend</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 2</span>
              <span className="module-title">Audience Building For Business</span>
            </div>
            <ul className="module-includes">
              <li>The Content Funnel for Entrepreneurs — how content becomes leads becomes clients becomes scale</li>
              <li>The Community Building for Business Playbook — build an audience that buys repeatedly</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Build a community that buys from you without compromising</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 3</span>
              <span className="module-title">Offer & Revenue Architecture</span>
            </div>
            <ul className="module-includes">
              <li>The Irresistible Offer & Pricing Psychology Workshop — package what you know into offers people feel stupid saying no to</li>
              <li>The Sales Through Content System — close without cold calling, paid ads, or awkward pitches</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Create offers that your audience pays for</li>
                <li>Build at least 3 consistent revenue streams</li>
              </ul>
            </div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">MODULE 4</span>
              <span className="module-title">Scale & Systems</span>
            </div>
            <ul className="module-includes">
              <li>The Leverage Playbook — systems, automation, and delegation so you stop being the bottleneck</li>
              <li>The Hiring for Scale Guide — your first 5 hires mapped with job descriptions and onboarding systems</li>
              <li>The Exit-Ready Business Framework — build something valuable enough to sell, even if you never plan to</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Delegate at least 3 recurring tasks within 30 days</li>
                <li>Build a team structure that gives you back 10+ hours per week</li>
                <li>Create systems that let your business operate without you in the room</li>
              </ul>
            </div>
          </div>

          {/* SHARED TRACK */}
          <div className="track-header">
            <div className="track-name">Shared Track</div>
            <div className="track-tag">"The Crossover Curriculum" — For creators & entrepreneurs</div>
          </div>

          <div className="module">
            <div className="module-head">
              <span className="module-num">SHARED</span>
              <span className="module-title">Public Speaking, Presence & Negotiation</span>
            </div>
            <ul className="module-includes">
              <li>The Public Speaking & Presence Vault — camera confidence, stage presence, podcast performance, and room command</li>
              <li>The Negotiation & Networking Playbook — get more from every deal, partnership, and collaboration</li>
            </ul>
            <div className="module-box outcome-box">
              <p className="box-label">Outcome</p>
              <ul className="box-list">
                <li>Become a world-class speaker and negotiator making money from simply talking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <div className="mid-cta">
        <a href="#pricing">Join The Tribe Now</a>
      </div>

      {/* AI TOOLS */}
      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Exclusive AI Tools</p>
          <h2 className="h2">Three Custom AI Tools Built For The Tribe. Found Nowhere Else.</h2>
          <p className="sub">
            These aren't ChatGPT wrappers. They're custom-trained tools built specifically for creators and
            entrepreneurs inside the Jali ecosystem.
          </p>
          <div className="tools-grid">
            <div className="tool-card">
              <p className="tool-label">Tool 1</p>
              <h3>The Magnetic Content Engine & Brand Voice Tool</h3>
              <p>
                Type in your niche, your audience, and your goal — it outputs a full 30-day content calendar with
                hooks, captions, story angles, CTAs, and platform-specific variations. It also rewrites weak
                hooks, suggests viral angles, and generates a week of content from a single idea. Plus: answer 10
                deep questions and get your complete brand voice guide — tone, vocabulary, templates, and a
                messaging framework you can hand to any writer.
              </p>
            </div>
            <div className="tool-card">
              <p className="tool-label">Tool 2</p>
              <h3>The Story Architect Tool</h3>
              <p>
                Transforms your experiences, business insights, failures, and lessons into powerful storytelling
                content that builds attention, authority, and trust across platforms. Stop staring at blank
                screens. Feed it your raw material — it gives you content that converts.
              </p>
            </div>
            <div className="tool-card">
              <p className="tool-label">Tool 3</p>
              <h3>The Creator Business Diagnostic Tool</h3>
              <p>
                An in-depth audit of your current positioning based on perceived brand story, brand associations,
                third-party mentions, content volume, and credibility. Know exactly where you stand — and exactly
                what to fix first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY EXPERIENCE */}
      <section className="section" id="community">
        <div className="wrap">
          <p className="eyebrow">The Full Community Experience</p>
          <h2 className="h2">This Is Not A Course. It's An Ecosystem.</h2>
          <p className="sub">Everything that makes the Jali Tribe a place people never want to leave.</p>

          <div className="comm-block" style={{ marginTop: "48px" }}>
            <p className="comm-label">Weekly & Bi-Weekly</p>
            <div className="event-grid">
              <div className="event-card">
                <div className="event-when">Every Saturday</div>
                <div className="event-name">The Ignition Call</div>
                <div className="event-tag">"This Week We Build"</div>
                <p className="event-desc">
                  One tactical focus. One actionable framework. You leave with one thing you're implementing
                  before Friday. This is how weeks stop being wasted.
                </p>
              </div>
              <div className="event-card">
                <div className="event-when">Every Other Friday</div>
                <div className="event-name">The Win Wall</div>
                <div className="event-tag">"Proof of Work"</div>
                <p className="event-desc">
                  A live celebration and accountability session. Share wins — first sale, viral post, landed
                  client. Public wins create culture. Culture creates retention.
                </p>
              </div>
            </div>
          </div>

          <div className="comm-block">
            <p className="comm-label">Monthly</p>
            <div className="event-grid">
              <div className="event-card">
                <div className="event-when">2nd Week of Every Month</div>
                <div className="event-name">The Expert Room</div>
                <div className="event-tag">"In The Room Where It Happened"</div>
                <p className="event-desc">
                  A world-class guest — a creator who built a 6/7-figure business, a founder who cracked organic
                  growth, an expert in monetisation, speaking, or scale. Not motivational. Surgical. Members
                  submit questions in advance.
                </p>
              </div>
              <div className="event-card">
                <div className="event-when">Last Friday, Every Other Month</div>
                <div className="event-name">The Jali Mixer</div>
                <div className="event-tag">"The Networking Room"</div>
                <p className="event-desc">
                  Rotating breakout rooms of 3-4 people matched by goals and industry. Leave with 5+ genuine
                  connections, potential collaborators, and warm relationships. This is where deals happen.
                </p>
              </div>
            </div>
          </div>

          <div className="comm-block">
            <p className="comm-label">Quarterly</p>
            <div className="event-grid">
              <div className="event-card">
                <div className="event-when">Every Quarter</div>
                <div className="event-name">The Jali Summit</div>
                <p className="event-desc">
                  A full-day physical event. Multiple speakers. Breakout sessions by track. Live panels. Member
                  showcases. Non-members see the highlights and immediately want in.
                </p>
              </div>
              <div className="event-card">
                <div className="event-when">Every Quarter</div>
                <div className="event-name">The WAMC Growth Challenge</div>
                <p className="event-desc">
                  A live 6-week challenge with exclusive member discounts. Daily tasks. Live check-ins. By the
                  end, you've built something real — a content system, a product, a brand positioning document.
                </p>
              </div>
            </div>
          </div>

          <div className="comm-block">
            <p className="comm-label">Community Infrastructure</p>
            <div className="infra-grid">
              <div className="infra-card">
                <h4>Member Directory</h4>
                <p>Searchable database of every member — niche, skills, what they're building. Creators find developers. Entrepreneurs find content strategists. Collabs happen here first.</p>
              </div>
              <div className="infra-card">
                <h4>The Deal Board</h4>
                <p>A private board for opportunities — freelance work, collabs, job openings, partnerships, beta testers. The community becomes an economic ecosystem.</p>
              </div>
              <div className="infra-card">
                <h4>Accountability Pods</h4>
                <p>Groups of 5 matched by goal and stage. Weekly meetings. Progress sharing. The pod is the reason members show up even on hard weeks.</p>
              </div>
              <div className="infra-card">
                <h4>Resource Request Board</h4>
                <p>Post what you need — caption feedback, offer review, tool recommendations. The community answers. Passive consumers become active contributors.</p>
              </div>
              <div className="infra-card">
                <h4>Member Spotlight</h4>
                <p>Every week, one member gets featured to Victor's 800K+ audience across all platforms. Exposure you couldn't buy.</p>
              </div>
              <div className="infra-card">
                <h4>Member Documentary System</h4>
                <p>Biweekly, members publicly document their lessons and experiences. Your transformation becomes content. Your content becomes proof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">Who Leads It</p>
          <h2 className="h2">Built And Led By Victor Okafor</h2>
          <p className="sub sub-center">
            Chevening Scholar, Techstars mentor, and the creator-entrepreneur who built 800K+ followers and 70M+
            views in 90 days through storytelling alone — and now teaches the exact system inside the Tribe.
          </p>
          <div className="feature-photo"><img src="/victor-main.jpg" alt="Victor Okafor speaking at The Jali Experience, Abuja" /></div>
          <p className="feature-cap">Victor Okafor · The Jali Experience, Abuja</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials alt heading="The Tribe Already Changes Lives." eyebrow="Member Results" />

      {/* REVIEWS */}
      <Reviews />

      {/* PRICING */}
      <section className="section section-alt" id="pricing">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>Choose Your Path</p>
          <h2 className="h2" style={{ textAlign: "center" }}>Three Tiers. Zero Locked Content On The Vault.</h2>
          <p className="sub sub-center">
            Every tier gets the full resource vault. The difference is how much access, accountability, and speed
            you want.
          </p>
          <div
            className="pricing-grid"
            style={{ gridTemplateColumns: "1fr", maxWidth: "540px", marginLeft: "auto", marginRight: "auto", marginTop: "48px" }}
          >
            <div className="price-card featured">
              <div className="price-badge">Best For Builders</div>
              <div className="price-tier">Jali Builder</div>
              <div className="price-amount">$49<span className="price-naira"> / ₦66,000</span></div>
              <div className="price-period">per quarter</div>
              <div className="price-waitlist">Discounted rate</div>
              <ul className="price-features">
                <li>Full Resource Vault — all creator & entrepreneur tracks</li>
                <li>All 3 custom AI tools</li>
                <li>Community access & member directory</li>
                <li>Saturday Ignition Call — live weekly</li>
                <li>Monthly Expert Room guest session</li>
                <li>Monthly Deep Dive Masterclass</li>
                <li>Accountability Pod placement</li>
                <li>Deal Board & Resource Request Board</li>
                <li>Quarterly WAMC Challenge participation</li>
                <li>Member Spotlight eligibility</li>
                <li>24-hour response guarantee</li>
                <li style={{ fontWeight: 700, color: "var(--amber)", borderBottom: "none", fontSize: "14px" }}>✦ Option to pay in 3 instalments</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a className="price-btn price-btn-fill" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">Join as Builder</a>
                <a className="price-btn price-btn-outline" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">Pay in Instalments</a>
              </div>
            </div>

            <div className="price-card">
              <div className="price-tier">Jali Core</div>
              <div className="price-amount">$92<span className="price-naira"> / ₦124,000</span></div>
              <div className="price-period">per month</div>
              <div className="price-waitlist">Discounted rate</div>
              <ul className="price-features">
                <li>Full Resource Vault — all creator & entrepreneur tracks</li>
                <li>Access to 2 of 3 custom AI tools</li>
                <li>Community access & member directory</li>
                <li>Monthly Jali Mixer networking event</li>
                <li>Deal Board access</li>
                <li>Quarterly Jali Summit access</li>
                <li>Cancel anytime</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a className="price-btn price-btn-outline" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">Join as Core</a>
              </div>
            </div>

            <div className="price-card">
              <div className="price-tier">Jali Inner Circle</div>
              <div className="price-amount">$199<span className="price-naira"> / ₦268,000</span></div>
              <div className="price-period">per year</div>
              <div className="price-waitlist">Discounted rate</div>
              <ul className="price-features">
                <li>Everything in Builder</li>
                <li>Monthly 1-on-1 strategy call with Victor — 45 min, recorded, actioned</li>
                <li>Private Inner Circle channel — direct access, 12-hour response</li>
                <li>First access to every new product, resource & event</li>
                <li>VIP hot seat priority — guaranteed spot once per quarter</li>
                <li>Annual featured case study to Victor's full audience</li>
                <li>Private Inner Circle credential for your bio & LinkedIn</li>
                <li>VIP invitation to annual in-person Jali Tribe event</li>
                <li style={{ fontWeight: 700, color: "var(--amber)", borderBottom: "none", fontSize: "14px" }}>✦ Option to pay in 3 instalments</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a className="price-btn price-btn-outline" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">Join The Jali Inner Circle</a>
                <a className="price-btn price-btn-outline" href={TRIBE_URL} target="_blank" rel="noopener noreferrer">Pay in Instalments</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>Common Questions</p>
          <h2 className="h2" style={{ textAlign: "center" }}>Before You Decide</h2>
          {faqs.map((f, i) => (
            <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}</div>
              <div className="faq-a"><p dangerouslySetInnerHTML={{ __html: f.a }} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY PHOTO — END */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap-wide">
          <div className="feature-photo" style={{ marginTop: 0 }}>
            <img src="/community-2.jpg" alt="The Jali Experience community, Lagos 2025" loading="lazy" />
          </div>
          <p className="feature-cap">Inside the room · The Jali Experience, Lagos '25</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <p className="eyebrow">The Only Question Left</p>
        <h2 className="h2">How Much Longer Will You Wait?</h2>
        <p className="sub sub-center">
          You already have the talent. You already have the drive. What you've been missing is the system, the
          community, and the accountability to make it all count. The Tribe is where that changes.
        </p>
        <a href="#pricing" className="final-cta-btn">Join The Jali Tribe</a>
      </section>

      {/* COMMUNITY CAROUSEL */}
      <CommunityCarousel alt />
    </JaliLayout>
  );
};

export default JaliTribe;
