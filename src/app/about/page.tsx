import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "I've never coloured inside the lines — not in life, not in business, and definitely not in my career. Disruptive Alchemist, MBSc, creative leadership consultant and human-centred AI strategist.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    period: "1973–1986",
    heading: "Born to Explore",
    body: "UK → Dubai → UK → Nigeria → Australia. A nomadic childhood fuelling curiosity.",
  },
  {
    period: "1994–1998",
    heading: "London Calling: The Mad Men Years",
    body: "Bridging print and digital in London's booming 90s ad scene.",
  },
  {
    period: "1998–2010",
    heading: "The Leap: Employee to Entrepreneur",
    body: "Australia, marriage, motherhood, and launching Galea Consulting.",
  },
  {
    period: "2010s",
    heading: "Creative Director to Disruptive Alchemist",
    body: "Scaling businesses, training teams, focusing on human behaviour.",
  },
  {
    period: "2020–Now",
    heading: "Evolution: Behavioural Science & AI",
    body: "Blending neuroscience, design thinking, and AI for leadership.",
  },
  {
    period: "Ongoing",
    heading: "The Cross-Pollination Effect",
    body: "Celebrating the non-linear path.",
  },
];

const education = [
  "Ogilvy Behavioural Economics",
  "Brené Brown Dare to Lead Facilitator",
  "Master Behavioural Science, Advertising",
  "Cannes Lions Behavioural Science Branding",
  "Kate Toon's Recipe for SEO Success",
  "Truth Plane Body Language for Business",
];

const values = [
  {
    heading: "Enjoy Life",
    sub: "This is NOT a Rehearsal",
    body: "Life is too short for unnecessary friction. I aim to be user-friendly in all interactions, prioritising kindness, compassion, and curiosity.",
  },
  {
    heading: "Believe in Possibilities",
    sub: "",
    body: "Every problem has a solution. I believe we can overcome any obstacle and seize new opportunities with creative problem-solving and inventive thinking.",
  },
  {
    heading: "Make Moments Matter",
    sub: "Rewiring the Future, One Shift at a Time",
    body: "I don't believe this is a time for lone wolves. It's a moment for cross-pollination, diverse minds, compassion and connection.",
  },
  {
    heading: "Do Life Different",
    sub: "",
    body: "Adaptability, ingenuity, and improvisation are crucial in times of change. There's more than one way to live, and there's more than one way to think.",
  },
];

const clients = [
  { name: "Amnesty International", logo: "/images/clients/amnesty.png" },
  { name: "Audi", logo: "/images/clients/audi.png" },
  { name: "RizeUp", logo: "/images/clients/rizeup.png" },
  { name: "Heineken", logo: "/images/clients/heineken.png" },
  { name: "Saatchi & Saatchi", logo: "/images/clients/saatchi.png" },
  { name: "Sotheby's", logo: "/images/clients/sothebys.png" },
  { name: "Hardys", logo: "/images/clients/hardys.png" },
  { name: "Marks & Spencer", logo: "/images/clients/marks-and-spencer.png" },
  { name: "Toyota", logo: "/images/clients/toyota.png" },
  { name: "Penfolds", logo: "/images/clients/penfolds.png" },
  { name: "Ray-Ban", logo: "/images/clients/ray-ban.png" },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src="/images/lisa-galea-about-colour.jpg"
              alt="Lisa Galea — creative leadership consultant"
              fill
              className="object-cover object-top opacity-25"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
            <div className="bauhaus-panel max-w-4xl p-8 sm:p-12">
            <p className="bauhaus-kicker mb-5 text-ink/55">
              About me
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black max-w-3xl mb-6 sm:text-[3.2rem] lg:text-[4.1rem]">
              Step into a World of Possibilities
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.26em] text-gold max-w-xl">
              Disruptive Alchemist &amp; Entreprenerd
            </p>
            </div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 sm:grid-cols-2 sm:items-start">
            <div className="bauhaus-panel p-8 sm:p-10">
              <h2 className="font-heading text-2xl sm:text-3xl text-ink leading-tight mb-6">
                I&apos;ve never coloured inside the lines —{" "}
                <span className="text-gold">not in life</span>, not in business,
                and definitely not in my career.
              </h2>
              <p className="font-body text-post-mobile sm:text-post-desktop text-ink/80 leading-relaxed mb-4">
                I believe in <strong>rebellion with a cause.</strong> In questioning outdated systems.
                In challenging the way things have always been done.
              </p>
              <p className="font-body text-post-mobile sm:text-post-desktop text-ink/80 leading-relaxed mb-4">
                I&apos;ve spent my life <strong>bending, breaking and blending</strong> ideas
                to activate alchemy — from <strong>science to design to AI</strong>, serving{" "}
                <strong>global brands to start-ups</strong> while{" "}
                <strong>building a family</strong> and{" "}
                <strong>five successful active businesses.</strong>
              </p>
              <p className="font-body text-post-mobile sm:text-post-desktop text-ink/80 leading-relaxed mb-8">
                Every shift, every leap, every rabbit hole I&apos;ve gone down has led
                to one simple truth: <strong>The future belongs to the curious.</strong> And
                right now? We&apos;re in a tech supercycle and the biggest shift of our time.
              </p>
              <Link href="/contact" className="btn btn-filled">
                Start a Conversation
              </Link>
            </div>

            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-brand-black">
              <Image
                src="/images/lisa-galea-about.jpg"
                alt="Lisa Galea, MBSc — Disruptive Alchemist"
                fill
                className="object-cover object-top"
                sizes="(min-width: 601px) 50vw, 100vw"
              />
            </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────────────────────── */}
        <section className="bg-grey-light py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">Values</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-16 leading-tight max-w-xl">
              The principles that drive everything
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <article key={v.heading} className="bauhaus-card p-8">
                  <h3 className="font-heading text-xl text-ink mb-1">{v.heading}</h3>
                  {v.sub && (
                    <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">{v.sub}</p>
                  )}
                  {!v.sub && <div className="mb-4" />}
                  <p className="font-body text-sm text-ink/70 leading-relaxed">{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24 border-y-2 border-brand-black/10">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">
              A Visual Timeline
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight max-w-2xl">
              A Timeline of Creative Evolution
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-16 max-w-xl leading-relaxed">
              Every twist, turn, and pivot shaped who I am. Disruption, creativity,
              and curiosity fuel a life of bold innovation.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-ink/10" aria-hidden="true" />

              <ol className="space-y-12">
                {timeline.map((item, i) => (
                  <li
                    key={item.period}
                    className={`relative grid sm:grid-cols-2 gap-6 sm:gap-16 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-last sm:[&>*:first-child]:text-left sm:[&>*:last-child]:text-right"}`}
                  >
                    {/* Period */}
                    <div className={`pl-16 sm:pl-0 ${i % 2 !== 0 ? "sm:text-right" : ""}`}>
                      <span className="font-ui text-sm tracking-ui uppercase text-gold">
                        {item.period}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="pl-16 sm:pl-0">
                      {/* Dot */}
                      <div
                        className="absolute left-4 sm:left-1/2 top-1 w-4 h-4 rounded-full bg-gold border-2 border-canvas sm:-translate-x-1/2"
                        aria-hidden="true"
                      />
                      <h3 className="font-heading text-lg text-ink mb-2">{item.heading}</h3>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CATALYST MOMENT ───────────────────────────────────────────────── */}
        <section className="bg-ink py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 sm:grid-cols-2 sm:items-center">
            <div className="bauhaus-panel-dark p-8 sm:p-10">
              <p className="font-ui text-sm tracking-ui uppercase text-gold mb-5">
                Choose Change
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-canvas leading-tight mb-6">
                The Catalyst Moment
              </h2>
              <p className="font-body text-post-mobile text-canvas/70 leading-relaxed mb-4">
                A few years ago, I watched <strong className="text-canvas">AI organise an inbox</strong> —
                something my brain has never quite mastered. It was a tiny moment, but it hit like a lightning bolt.
              </p>
              <p className="font-body text-post-mobile text-canvas/70 leading-relaxed mb-4">
                I went all in — testing, breaking, rebuilding — because I saw AI wasn&apos;t about replacing humans.
                It was about freeing us from the linear systems and repetitive processes that no longer serve us.
              </p>
              <p className="font-body text-post-mobile text-canvas/70 leading-relaxed mb-10">
                I saw <strong className="text-gold">a world of possibilities</strong>. This was a game-changer —
                finally we could find new ways to thrive collectively in the future of work.
              </p>
              <Link href="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
              <Image
                src="/images/lisa-galea-crossroads.jpg"
                alt="Lisa Galea exploring AI and creative leadership"
                fill
                className="object-cover"
                sizes="(min-width: 601px) 50vw, 100vw"
              />
            </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ─────────────────────────────────────────────────────── */}
        <section className="bg-grey-light py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">Education</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight">
              Open Heart, Open Mind
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-12 max-w-xl leading-relaxed">
              Lifelong learner and unapologetic nerd for behavioural science,
              branding, and innovation.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {education.map((cert) => (
                <li key={cert} className="bauhaus-card flex items-start gap-3 px-5 py-4">
                  <span className="mt-0.5 shrink-0 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                  <span className="font-body text-sm text-ink leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CLIENTS ───────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">Awesome Clients</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight">
              In Great Company
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-12 max-w-xl leading-relaxed">
              A small selection of the clients I&apos;ve had the pleasure to work with.
            </p>
            <ul className="flex flex-wrap items-center gap-8" role="list">
              {clients.map((c) => (
                <li key={c.name} className="bauhaus-card relative h-16 w-32 p-3 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/testimonials" className="btn">
                Read Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20 border-t-2 border-brand-black/10">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">FAQ</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-12 leading-tight">
              About Lisa
            </h2>
            <dl className="space-y-8">
              {[
                {
                  q: "What is Lisa's professional background?",
                  a: "Lisa Galea is a Creative Leadership Consultant, Disruptive Alchemist, and Human-Centred AI Strategist with 35+ years across advertising, branding, behavioural science, and AI. She holds a Master of Behavioural Science in Advertising, Ogilvy Behavioural Economics Certification, and Brené Brown Dare to Lead Facilitator Certification, among others. She has built five successful businesses across Australia and worked with global brands including Heineken, Toyota, Marks & Spencer, Saatchi & Saatchi, Amnesty International, and Sotheby's.",
                },
                {
                  q: "What is the HCOS Framework?",
                  a: "HCOS stands for Human-Centred Operating System — Lisa's proprietary framework for upgrading how leaders think, connect, and make decisions. It combines emotional intelligence, nudge psychology, AI-enhanced clarity tools, and narrative strategy. Think of it as an operating system upgrade for how you lead.",
                },
                {
                  q: "Where is Lisa based?",
                  a: "Lisa is based in the Byron Bay Hinterland, Australia — and available globally for virtual coaching, speaking, and workshops. Her Sanctuary in the Pocket property (30 min from Gold Coast Airport, 25 min from Ballina Airport) hosts strategic off-sites and retreats.",
                },
                {
                  q: "How does Lisa approach AI differently from other consultants?",
                  a: "Lisa comes from behavioural science, neuroscience, and human-centred design — not from a technology-first perspective. She builds human + AI systems designed around how real brains work: cognitive load, trust, play, and psychological safety. Her company AiMegos handles the AI transformation and team implementation layer for organisations.",
                },
                {
                  q: "How can I work with Lisa?",
                  a: "Start with a 20-minute Clarity Call via the contact page. ZiggyZap (the ⚡ concierge on every page) can also guide you to the right service — retreats, coaching, keynotes, or AI strategy via AiMegos.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-t border-brand-black/10 pt-8">
                  <dt className="font-heading text-lg text-ink mb-3">{q}</dt>
                  <dd className="font-body text-sm text-ink/70 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-gold py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-ink mb-6 leading-tight">
              Learn to Play, Play to Learn
            </h2>
            <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-10">
              Join me on a journey of transformation, where your unique strengths
              are celebrated, and your potential is unlocked.
            </p>
            <Link href="/services" className="btn btn-filled">
              Explore My Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
