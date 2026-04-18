import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ZiggyOpenButton } from "@/components/ZiggyOpenButton";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Lisa Galea | Creative Leadership & Human-Centred AI",
  description:
    "Play-based, science-backed leadership that turns chaos into confident decisions — plus practical AI your team will actually use. Based in Australia, available globally.",
  alternates: { canonical: "/" },
};

const certificationBadges = [
  { src: "/images/certifications/cert-ogilvy.jpg", label: "Ogilvy Behavioural Economics" },
  { src: "/images/certifications/cert-brene-brown.jpg", label: "Brené Brown Leadership Training" },
  { src: "/images/certifications/cert-master-bsc.jpg", label: "Master Behavioural Science, Advertising" },
  { src: "/images/certifications/cert-cannes-lions.jpg", label: "Cannes Lions Behavioural Science Branding" },
  { src: "/images/certifications/cert-body-language.jpg", label: "Truth Plane Body Language for Business" },
];

const services = [
  {
    tag: "AI for Leaders",
    heading: "Build Teams That Thrive",
    body: "Inject AI, emotional intelligence, and behavioural insight into your business. Build teams that adapt, collaborate, and lead with clarity.",
    cta: "Discover AiMegos",
    href: "https://aimegos.com",
    external: true,
    image: "/images/lisa-galea-ai-leadership.jpg",
    imageAlt: "AI leadership training with Lisa Galea",
  },
  {
    tag: "Retreats & Offsites — Byron Bay",
    heading: "Escape the Ordinary",
    body: "Nature-anchored immersion in Byron Bay for senior teams. Reset, realign, and return with a decision rhythm that sticks.",
    cta: "Explore Retreat Dates",
    href: "https://sanctuaryinthepocket.com.au",
    external: true,
    image: "/images/retreats-offsites.jpg",
    imageAlt: "Sanctuary in the Pocket Byron Bay retreats",
  },
  {
    tag: "Consulting & Facilitation",
    heading: "Crowd Pleasers",
    body: "Want to inspire bold thinking and real change? Lisa delivers talks and masterclasses that spark imagination and challenge assumptions.",
    cta: "Book a Speaking Enquiry",
    href: "/contact",
    external: false,
    image: "/images/consulting.jpg",
    imageAlt: "Lisa Galea keynote speaking and facilitation",
  },
];

const latestPosts = posts.slice(0, 3);

export default function Home() {
  return (
    <>
      <Nav />

      <main className="overflow-hidden bg-brand-paper pt-28">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative px-6 pb-14 pt-10 sm:px-10 sm:pb-18 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="bauhaus-kicker text-ink/55">Creative Leadership / Human-Centred AI</p>
              <h1 className="mt-6 font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black sm:text-[3.2rem] lg:text-[4.1rem]">
                The Art and Science of Play
              </h1>
              <p className="mt-5 font-heading text-xl uppercase tracking-[-0.03em] text-gold sm:text-2xl">
                More brains. Less bollocks. All heart.
              </p>
              <p className="mt-6 max-w-4xl font-body text-lg leading-relaxed text-ink/78 sm:text-xl">
                Play-based, science-backed leadership that turns chaos into confident decisions — plus practical AI your team will actually use.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="btn btn-filled">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn">
                  Book a Clarity Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ───────────────────────────────────────────────── */}
        <section className="border-y border-brand-black/10 bg-brand-paper py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-5" role="list">
              {certificationBadges.map(({ src, label }) => (
                <li key={label} className="text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-grey-light sm:h-28 sm:w-28">
                    <Image src={src} alt={label} fill className="object-cover" sizes="112px" />
                  </div>
                  <p className="mt-4 font-ui text-[10px] uppercase tracking-[0.2em] text-ink/65">{label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── ZIGGYZAP SHOWCASE ────────────────────────────────────────────── */}
        <section className="bg-brand-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">ZiggyZap // AI Concierge</p>
              <h2 className="mt-4 font-heading text-[2.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-paper sm:text-[3rem]">
                Your Guide to Lisa&apos;s World
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-brand-paper/65 sm:text-lg">
                ZiggyZap is a Bowie–Warhol–Westwood mashup with a Master&apos;s in making things click.
                She knows Lisa&apos;s world inside out — ask her anything, take the quiz, or get routed to exactly the right place.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div className="rounded-[28px] border border-gold/20 bg-brand-paper/5 p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">01</p>
                <h3 className="mt-3 font-heading text-[1.4rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-paper">
                  Ask Anything
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-paper/65">
                  Services, pricing (she&apos;ll route you), Lisa&apos;s story, speaking enquiries — ZiggyZap knows the territory.
                </p>
              </div>
              <div className="rounded-[28px] border border-gold/30 bg-gold/10 p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">02</p>
                <h3 className="mt-3 font-heading text-[1.4rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-paper">
                  Take the Quiz
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-paper/65">
                  15 questions. Behavioural science. No fluff. Score yourself and get your cheat sheet — straight to your inbox.
                </p>
              </div>
              <div className="rounded-[28px] border border-gold/20 bg-brand-paper/5 p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">03</p>
                <h3 className="mt-3 font-heading text-[1.4rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-paper">
                  Find Your Path
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-paper/65">
                  Not sure where to start? Tell ZiggyZap what you need and she&apos;ll route you straight to the right door.
                </p>
              </div>
            </div>

            <div className="text-center">
              <ZiggyOpenButton />
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-brand-paper/35">
                Look for the ⚡ in the bottom-right corner of every page
              </p>
            </div>
          </div>
        </section>

        {/* ── PLAY TO WIN ──────────────────────────────────────────────────── */}
        <section className="bg-canvas py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 lg:px-10">
            <div className="col-span-12 lg:col-span-7">
              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <div className="relative h-18 w-18 overflow-hidden rounded-full bg-grey-light sm:h-22 sm:w-22">
                  <Image
                    src="/images/lisa-galea-profile-mini.jpg"
                    alt="Lisa Galea, MBSc — Disruptive Alchemist"
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
                <div>
                  <p className="bauhaus-kicker text-ink/55">Play to win</p>
                  <h2 className="mt-3 font-heading text-[2rem] uppercase leading-[0.92] tracking-[-0.05em] text-brand-black sm:text-[2.8rem]">
                    I help business leaders, serial entrepreneurs and executive teams amplify with AI without losing the human magic.
                  </h2>
                  <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink/80 sm:text-xl">
                    Because in this tech super-cycle, curiosity is currency and those who play, win.
                  </p>
                  <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink/72 sm:text-lg">
                    Together, we explore complexity with clarity by blending behavioural science, emotional intelligence, and future-thinking to shape ideas that matter.
                  </p>
                  <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink/72 sm:text-lg">
                    This isn&apos;t about more information. It&apos;s about better questions, clearer direction, and the confidence to lead in your own way.
                  </p>
                  <div className="mt-8">
                    <Link href="/about" className="btn">
                      Discover My Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="grid gap-6">
                <div className="overflow-hidden rounded-[28px] bg-grey-light">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/lisa-galea-curiosity.jpg"
                      alt="Lisa Galea — creative leadership consultant and AI strategist"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 34rem, 100vw"
                    />
                  </div>
                </div>

                <div className="rounded-[32px] bg-brand-paper p-6">
                  <p className="bauhaus-kicker text-ink/55">Turn What If Into Why Not</p>
                  <p className="mt-4 font-display text-3xl leading-snug text-brand-black sm:text-4xl">
                    &ldquo;Lisa is a burst of creative inspiration and big-picture thinking, yet her strategies are unique, actionable and results driven.&rdquo;
                  </p>
                  <p className="mt-5 font-ui text-[10px] uppercase tracking-[0.22em] text-ink/60">
                    ★★★★★
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE ────────────────────────────────────────────────────────── */}
        <section className="border-y border-brand-black/10 bg-brand-paper py-10">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
            <p className="mt-3 font-display text-3xl italic leading-snug text-brand-black sm:text-4xl lg:text-5xl">
              &ldquo;Enjoy life. This is not a dress rehearsal.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-brand-black/60">
              Friedrich Nietzsche
            </p>
          </div>
        </section>

        {/* ── CHOOSE YOUR ADVENTURE ────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-brand-paper py-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="bauhaus-kicker text-ink/55">Work with me</p>
                <h2 className="mt-3 font-heading text-[2.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-black sm:text-[3.2rem]">
                  Choose Your Adventure
                </h2>
              </div>
              <p className="max-w-xl font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                Curious minds welcome. The brave, the unconventional, the quietly brilliant. This is your playground.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.tag} className="overflow-hidden rounded-[28px] bg-brand-paper">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-grey-light">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="bauhaus-kicker text-ink/55">{service.tag}</p>
                    <h3 className="mt-4 font-heading text-[1.7rem] uppercase leading-[0.92] tracking-[-0.04em] text-brand-black">
                      {service.heading}
                    </h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-ink/72">{service.body}</p>
                    <div className="mt-6">
                      {service.external ? (
                        <a href={service.href} target="_blank" rel="noopener noreferrer" className="btn self-start">
                          {service.cta}
                        </a>
                      ) : (
                        <Link href={service.href} className="btn self-start">
                          {service.cta}
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI EXPLORATION ───────────────────────────────────────────────── */}
        <section className="bg-canvas py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 lg:px-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="h-full">
                <p className="bauhaus-kicker text-ink/55">AI Exploration</p>
                <h2 className="mt-4 font-heading text-[2.1rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-black sm:text-[3rem]">
                  Welcome to a space where creativity meets strategic intelligence.
                </h2>
                <h3 className="mt-4 font-heading text-[1.6rem] uppercase leading-[0.92] tracking-[-0.04em] text-brand-black sm:text-[2.3rem]">
                  Recognise patterns. Reframe perception. Redefine possibility.
                </h3>
                <p className="mt-6 font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                  Almost 2.5 years ago, I started experimenting with AI. Mind blown by MidJourney&apos;s capacity, I dove deep. A few weeks later, a YouTube video on email automation sent my mind into hyperdrive — I saw the limitless potential of AI, not just as a tool but as an extension of my creative thinking.
                </p>
                <p className="mt-4 font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                  In November 2022, I fully embraced AI and automation, realising AI could finally help my marvellous mind get things done.
                </p>
                <div className="mt-8">
                  <Link href="/about" className="btn">
                    Discover My Story
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[22rem] overflow-hidden rounded-[28px] bg-grey-light sm:min-h-[30rem]">
                  <Image
                    src="/images/ai-section.jpg"
                    alt="Lisa Galea exploring AI and creative leadership"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="grid gap-6 content-start">
                  <div className="rounded-[28px] bg-grey-light p-6">
                    <p className="bauhaus-kicker text-ink/55">Looking to Escape</p>
                    <p className="mt-3 font-heading text-[1.5rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-black">
                      Come Play in the Pocket
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                      Only 25 mins from Gold Coast Airport &amp; Ballina Airport
                    </p>
                    <a href="https://sanctuaryinthepocket.com.au" target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block text-xs">
                      View Sanctuary
                    </a>
                  </div>
                  <div className="rounded-[28px] bg-brand-black p-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">ZiggyZap says</p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-brand-paper/80">
                      &ldquo;This site runs on AI and human collaboration. Ask me anything — I&apos;ve been briefed.&rdquo;
                    </p>
                    <ZiggyOpenButton label="Chat with ZiggyZap ⚡" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THOUGHT GARDEN ───────────────────────────────────────────────── */}
        <section className="border-y-2 border-brand-black bg-brand-paper py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="bauhaus-kicker text-ink/55">Thought Garden</p>
                <h2 className="mt-3 font-heading text-[2.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-black sm:text-[3.2rem]">
                  From Messy to Magnetic
                </h2>
              </div>
              <p className="max-w-xl font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                Curious rabbit holes and practical ideas you can use today. Not everything here will make sense. That&apos;s kind of the point.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <article key={post.slug} className="overflow-hidden rounded-[28px] bg-brand-paper">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-grey-light">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="bauhaus-kicker text-ink/45">{post.category} · {new Date(post.date).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}</p>
                      <h3 className="mt-3 font-heading text-[1.5rem] uppercase leading-[0.92] tracking-[-0.04em] text-brand-black transition-colors duration-200 group-hover:text-gold">
                        {post.title}
                      </h3>
                      <p className="mt-4 font-body text-base leading-relaxed text-ink/70">{post.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/blog" className="btn">
                Explore the Thought Garden
              </Link>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
        <section className="bg-brand-paper py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="rounded-[32px] bg-grey-light p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                <div>
                  <p className="bauhaus-kicker text-brand-black/55">Contact &amp; Next Steps</p>
                  <h2 className="mt-4 font-heading text-[2.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-black sm:text-[3.1rem]">
                    Ready to trade pressure for progress?
                  </h2>
                  <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-brand-black/80 sm:text-lg">
                    Bring your toughest leadership or AI decision to a 20-minute Clarity Call.
                  </p>
                  <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-brand-black/80 sm:text-lg">
                    We&apos;ll map the fastest path from chaos to clarity.
                  </p>
                </div>

                <div className="grid gap-4">
                  <Link href="/contact" className="btn btn-filled justify-center">
                    Schedule Now
                  </Link>
                  <Link href="/blog" className="btn justify-center bg-transparent">
                    Explore My Thinking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
