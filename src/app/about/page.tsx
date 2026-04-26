import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAboutContent } from "@/lib/cms/adapter";

const content = getAboutContent();

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
};

export default function About() {
  const { hero, intro, values, timeline, catalystMoment, education, clients, faq, cta } = content;
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover object-top opacity-25"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
            <div className="bauhaus-panel max-w-4xl p-8 sm:p-12">
            <p className="bauhaus-kicker mb-5 text-ink/55">{hero.kicker}</p>
            <h1 className="font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black max-w-3xl mb-6 sm:text-[3.2rem] lg:text-[4.1rem]">
              {hero.heading}
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.26em] text-gold max-w-xl">
              {hero.subtitle}
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
              <Link href={intro.cta.href} className="btn btn-filled">
                {intro.cta.label}
              </Link>
            </div>

            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-brand-black">
              <Image
                src={intro.image.src}
                alt={intro.image.alt}
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{values.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-16 leading-tight max-w-xl">
              {values.heading}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {values.items.map((v) => (
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{timeline.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight max-w-2xl">
              {timeline.heading}
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-16 max-w-xl leading-relaxed">
              {timeline.description}
            </p>

            <div className="relative">
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-ink/10" aria-hidden="true" />
              <ol className="space-y-12">
                {timeline.items.map((item, i) => (
                  <li
                    key={item.period}
                    className={`relative grid sm:grid-cols-2 gap-6 sm:gap-16 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-last sm:[&>*:first-child]:text-left sm:[&>*:last-child]:text-right"}`}
                  >
                    <div className={`pl-16 sm:pl-0 ${i % 2 !== 0 ? "sm:text-right" : ""}`}>
                      <span className="font-ui text-sm tracking-ui uppercase text-gold">{item.period}</span>
                    </div>
                    <div className="pl-16 sm:pl-0">
                      <div className="absolute left-4 sm:left-1/2 top-1 w-4 h-4 rounded-full bg-gold border-2 border-canvas sm:-translate-x-1/2" aria-hidden="true" />
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
              <p className="font-ui text-sm tracking-ui uppercase text-gold mb-5">{catalystMoment.label}</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-canvas leading-tight mb-6">
                {catalystMoment.heading}
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
              <Link href={catalystMoment.cta.href} className="btn btn-ghost">
                {catalystMoment.cta.label}
              </Link>
            </div>
            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
              <Image
                src={catalystMoment.image.src}
                alt={catalystMoment.image.alt}
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{education.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight">
              {education.heading}
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-12 max-w-xl leading-relaxed">
              {education.description}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {education.items.map((cert) => (
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{clients.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-4 leading-tight">
              {clients.heading}
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 mb-12 max-w-xl leading-relaxed">
              {clients.description}
            </p>
            <ul className="flex flex-wrap items-center gap-8" role="list">
              {clients.items.map((c) => (
                <li key={c.name} className="bauhaus-card relative h-16 w-32 p-3 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300">
                  <Image src={c.logo} alt={c.name} fill className="object-contain" sizes="112px" />
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/testimonials" className="btn">Read Testimonials</Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20 border-t-2 border-brand-black/10">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{faq.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-12 leading-tight">
              {faq.heading}
            </h2>
            <dl className="space-y-8">
              {faq.items.map(({ q, a }) => (
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
              {cta.heading}
            </h2>
            <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-10">
              {cta.body}
            </p>
            <Link href={cta.cta.href} className="btn btn-filled">
              {cta.cta.label}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
