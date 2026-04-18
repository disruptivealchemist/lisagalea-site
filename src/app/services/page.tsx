import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic off-sites & retreats, executive coaching, facilitation, and keynotes. Behavioural design meets meaningful mischief — for visionary leaders who do things differently.",
  alternates: { canonical: "/services" },
};

const offerings = [
  {
    id: "retreats",
    tag: "Strategic Off-Sites & Team Retreats",
    heading: "Activation Portals, Not Away Days",
    body: "Immersive, curated, deeply creative. These aren\u2019t \u201caway days.\u201d They\u2019re activation portals. We blend neuro-design, nudgetech, and playful strategy to unlock what\u2019s really holding your team back \u2014 and rewire for what\u2019s possible.",
    outcomes: ["Team coherence", "Next-level problem solving", "Regenerative energy"],
    cta: "Explore Retreat Dates",
    href: "https://sanctuaryinthepocket.com.au",
    external: true,
    image: "/images/retreats-byron.jpg",
    imageAlt: "Lisa Galea leadership retreats Byron Bay Hinterland",
    note: "Held at my private property in the Byron Bay Hinterland.",
  },
  {
    id: "coaching",
    tag: "Executive Coaching & Leadership Labs",
    heading: "The HCOS Upgrade Framework",
    body: "Not your average leadership development. We train the next-gen creative executives — people who think in systems and stories, not silos. Our HCOS Upgrade Framework blends emotional intelligence, nudging psychology, AI-enhanced clarity tools, and narrative strategy.",
    outcomes: ["Braver decisions", "Clearer influence", "Deep cultural leadership"],
    cta: "Book a Clarity Call",
    href: "/contact",
    external: false,
    image: "/images/lisa-galea-cognitive.jpg",
    imageAlt: "Lisa Galea executive coaching and leadership development",
    note: null,
  },
  {
    id: "facilitation",
    tag: "Bespoke Facilitation, Keynotes & Interactive Workshops",
    heading: "Behavioural Design Meets Meaningful Mischief",
    body: "Available in-person or virtual. Crafted for multi-passionate business leaders navigating growth, reinvention, and next-era business. Because your strategy deserves more than spreadsheets — it needs story, behavioural insight, and space to breathe.",
    outcomes: ["Change is Good", "AI without Burnout", "Behavioural Design & Nudgetech"],
    cta: "Book a Speaking Enquiry",
    href: "/contact",
    external: false,
    image: "/images/consulting.jpg",
    imageAlt: "Lisa Galea keynote speaking and interactive workshops",
    note: null,
  },
];

const testimonials = [
  {
    quote: "I'm so much more confident in my brand, pricing and selling. I've paid other coaches but none of them told me things Lisa did — my key takeaway was to speak to my audience and tell them what to do. Sounds simple but I never thought of it.",
    name: "Samantha Laidlaw",
    title: "Owner, Femflix",
  },
  {
    quote: "Lisa is a burst of creative inspiration and big-picture thinking. Her strategies are unique, actionable and results-driven. Lisa provides perspective and wise insight into what it takes to create a successful business and live abundantly.",
    name: "Daniela Rose",
    title: "Entrepreneur & Business Owner, Sydney",
  },
];

export default function Services() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-24"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
            <div className="bauhaus-panel p-8 sm:p-12 max-w-4xl">
            <p className="bauhaus-kicker mb-5 text-ink/55">
              What We Offer
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black max-w-3xl mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
              Design a Life You Love
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold max-w-2xl">
              Where Clarity Sparks Confidence &amp; Mess Makes Momentum
            </p>
            </div>
          </div>
        </section>

        {/* ── THE INVITATION ────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-4xl mx-auto px-6 text-center bauhaus-panel p-8 sm:p-12">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-6">
              The Invitation
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-8 leading-tight">
              Imagination + Influence = Innovation
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 leading-relaxed mb-6">
              You&apos;re not here for another AI lecture or outdated leadership playbook.
              You&apos;re here because you know the world is shifting — and your team or your
              inner compass is craving something deeper.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 text-left">
              {[
                "Clarity to lead through complexity",
                "Confidence to experiment without chaos",
                "Culture that actually connects",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 max-w-xs border-2 border-brand-black/20 px-4 py-3 bg-brand-paper">
                  <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                  <span className="font-body text-sm text-ink leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-heading text-lg text-ink mt-8">That&apos;s where we come in.</p>
          </div>
        </section>

        {/* ── MADE FOR MAKERS ───────────────────────────────────────────────── */}
        <section className="bg-grey-light py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">Made for Makers</p>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 leading-relaxed">
              We work with visionary entrepreneurs, founders, and executive teams who
              do things differently. Engineers with soul. Creatives with systems.
              Builders who value empathy.
            </p>
            <blockquote className="mt-8 text-left max-w-xl mx-auto bauhaus-panel p-6">
              <p className="font-display text-xl text-ink italic leading-snug">
                &ldquo;Most describe it as the leadership reset I didn&apos;t know I needed.&rdquo;
              </p>
              <p className="font-ui text-xs tracking-ui uppercase text-gold mt-3">★★★★★</p>
            </blockquote>
          </div>
        </section>

        {/* ── SERVICE OFFERINGS ─────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-24">
            {offerings.map((o, i) => (
              <article
                key={o.id}
                className={`grid gap-12 sm:grid-cols-2 sm:items-center ${i % 2 !== 0 ? "sm:[&>*:first-child]:order-last" : ""}`}
              >
                {/* Image */}
                <div className="bauhaus-panel p-4">
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
                  <Image
                    src={o.image}
                    alt={o.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 601px) 50vw, 100vw"
                  />
                </div>
                </div>

                {/* Content */}
                <div className="bauhaus-panel p-8">
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">
                    {o.tag}
                  </p>
                  <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-5 leading-tight">
                    {o.heading}
                  </h2>
                  <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-6">
                    {o.body}
                  </p>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <p className="font-ui text-xs tracking-ui uppercase text-ink/40 mb-3">
                      Outcomes
                    </p>
                    <ul className="space-y-2" role="list">
                      {o.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                          <span className="font-body text-sm text-ink">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {o.note && (
                    <p className="font-body text-xs text-ink/50 italic mb-6">{o.note}</p>
                  )}

                  {o.external ? (
                    <a
                      href={o.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-filled"
                    >
                      {o.cta}
                    </a>
                  ) : (
                    <Link
                      href={o.href}
                      className="btn btn-filled"
                    >
                      {o.cta}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="bg-ink py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-12 text-center">
              Kind Words
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="bauhaus-panel-dark p-8">
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-5">★★★★★</p>
                  <p className="font-body text-post-mobile text-canvas/80 leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-heading text-sm text-canvas">{t.name}</p>
                    <p className="font-body text-xs text-canvas/50">{t.title}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20 border-t-2 border-brand-black/10">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">FAQ</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-12 leading-tight">
              Common Questions
            </h2>
            <dl className="space-y-8">
              {[
                {
                  q: "Is Lisa available internationally?",
                  a: "Yes — virtual coaching, workshops, and keynotes are available globally. Strategic off-sites and retreats are held at Sanctuary in the Pocket, Byron Bay Hinterland, Australia (30 min from Gold Coast Airport, 25 min from Ballina Airport).",
                },
                {
                  q: "What is the HCOS Upgrade Framework?",
                  a: "HCOS stands for Human-Centred Operating System. It's an executive coaching framework that combines emotional intelligence, behavioural science, AI-enhanced clarity tools, and narrative strategy — designed to upgrade how you lead, not just what you know.",
                },
                {
                  q: "How is a strategic off-site different from a regular away day?",
                  a: "Away days are logistical. Strategic off-sites are transformational. Lisa blends neuro-design, nudge psychology, and playful strategy at a private rainforest property to unlock what's really holding your team back — and rewire for what's possible. Leaders leave with a 90-day action map.",
                },
                {
                  q: "What speaking topics does Lisa cover?",
                  a: "Lisa's signature topics include: 'Change is Good', 'AI Without Burnout', 'Behavioural Design & Nudgetech', and 'The Art and Science of Play'. All talks can be tailored for your audience — from small leadership teams to 200+ person conferences.",
                },
                {
                  q: "How does Lisa's AI work relate to AiMegos?",
                  a: "AiMegos (aimegos.com) is Lisa's AI transformation platform — focused on team upskilling, AI literacy, and human-centred AI integration for organisations. Lisa's personal consulting covers the strategic and behavioural leadership layer; AiMegos covers the AI systems and team implementation layer.",
                },
                {
                  q: "How do I start a conversation?",
                  a: "Book a 20-minute Clarity Call via the contact page, or chat directly with ZiggyZap (the ⚡ button on any page) — she can route you to exactly the right service based on what you need.",
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
            <h2 className="font-display text-3xl sm:text-5xl text-ink mb-4 leading-tight">
              This Is Your Call to Play
            </h2>
            <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-3">
              Let&apos;s reimagine what your leadership and your business could be when
              you stop trying to fit the mould and start upgrading the operating system.
            </p>
            <p className="font-heading text-lg text-ink mb-10">
              Exceptional Earthlings Start Here
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="btn btn-filled">
                Book a Clarity Call
              </Link>
              <a
                href="/contact"
                className="btn"
              >
                Explore Retreat Dates
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
