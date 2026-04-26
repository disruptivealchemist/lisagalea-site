import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getServicesContent } from "@/lib/cms/adapter";

const content = getServicesContent();

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
};

export default function Services() {
  const { hero, invitation, madeForMakers, offerings, testimonials, faq, cta } = content;
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
              className="object-cover object-center opacity-24"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
            <div className="bauhaus-panel p-8 sm:p-12 max-w-4xl">
              <p className="bauhaus-kicker mb-5 text-ink/55">{hero.kicker}</p>
              <h1 className="font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black max-w-3xl mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
                {hero.heading}
              </h1>
              <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold max-w-2xl">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ── THE INVITATION ────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-4xl mx-auto px-6 text-center bauhaus-panel p-8 sm:p-12">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-6">{invitation.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-8 leading-tight">
              {invitation.heading}
            </h2>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 leading-relaxed mb-6">
              {invitation.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 text-left">
              {invitation.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 max-w-xs border-2 border-brand-black/20 px-4 py-3 bg-brand-paper">
                  <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                  <span className="font-body text-sm text-ink leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-heading text-lg text-ink mt-8">{invitation.closing}</p>
          </div>
        </section>

        {/* ── MADE FOR MAKERS ───────────────────────────────────────────────── */}
        <section className="bg-grey-light py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">{madeForMakers.label}</p>
            <p className="font-body text-post-mobile sm:text-post-desktop text-ink/70 leading-relaxed">
              {madeForMakers.body}
            </p>
            <blockquote className="mt-8 text-left max-w-xl mx-auto bauhaus-panel p-6">
              <p className="font-display text-xl text-ink italic leading-snug">
                &ldquo;{madeForMakers.quote}&rdquo;
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
                <div className="bauhaus-panel p-4">
                  <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
                    <Image
                      src={o.image.src}
                      alt={o.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 601px) 50vw, 100vw"
                    />
                  </div>
                </div>

                <div className="bauhaus-panel p-8">
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">{o.tag}</p>
                  <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-5 leading-tight">
                    {o.heading}
                  </h2>
                  <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-6">{o.body}</p>

                  <div className="mb-6">
                    <p className="font-ui text-xs tracking-ui uppercase text-ink/40 mb-3">Outcomes</p>
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

                  {o.cta.external ? (
                    <a href={o.cta.href} target="_blank" rel="noopener noreferrer" className="btn btn-filled">
                      {o.cta.label}
                    </a>
                  ) : (
                    <Link href={o.cta.href} className="btn btn-filled">
                      {o.cta.label}
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-12 text-center">Kind Words</p>
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
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{faq.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-12 leading-tight">{faq.heading}</h2>
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
            <h2 className="font-display text-3xl sm:text-5xl text-ink mb-4 leading-tight">{cta.heading}</h2>
            <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-3">{cta.body}</p>
            <p className="font-heading text-lg text-ink mb-10">{cta.tagline}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={cta.primaryCta.href} className="btn btn-filled">
                {cta.primaryCta.label}
              </Link>
              <Link href={cta.secondaryCta.href} className="btn">
                {cta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
