import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ZiggyOpenButton } from "@/components/ZiggyOpenButton";
import { getHomeContent } from "@/lib/cms/adapter";

const content = getHomeContent();

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
};

export default function Home() {
  const { hero, certificationBadges, socialProof, ziggyZap, chooseAdventure, authority, finalCta } = content;
  return (
    <>
      <Nav />

      <main className="overflow-hidden bg-brand-paper pt-28">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative px-6 pb-14 pt-10 sm:px-10 sm:pb-18 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="bauhaus-kicker text-ink/55">{hero.kicker}</p>
              <h1 className="mt-6 font-display text-[48px] leading-[1.2] tracking-[-0.02em] text-brand-black sm:text-[56px] lg:text-[64px]">
                {hero.heading}
              </h1>
              <h2 className="mt-6 font-heading text-xl leading-[1.3] tracking-[-0.03em] text-brand-black sm:text-2xl">
                {hero.subheadline}
              </h2>
              {hero.body.map((para, i) => (
                <p key={i} className="mt-4 max-w-3xl font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                  {para}
                </p>
              ))}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={hero.primaryCta.href} className="btn btn-filled">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn">
                  {hero.secondaryCta.label}
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

        {/* ── SOCIAL PROOF ─────────────────────────────────────────────────── */}
        <section className="bg-canvas py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="bauhaus-kicker text-ink/55 mb-12">{socialProof.heading}</p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 mb-16">
              {socialProof.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="bauhaus-number text-brand-black">{stat.number}</p>
                  <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-ink/60 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid gap-6 md:grid-cols-2">
              {socialProof.testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-[28px] bg-brand-paper p-8 sm:p-10"
                >
                  <p className="text-gold text-lg tracking-widest mb-4">
                    {'★'.repeat(testimonial.stars)}
                  </p>
                  <p className="bauhaus-kicker text-gold mb-3">{testimonial.title}</p>
                  <p className="font-body text-base text-ink/80 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-brand-black">
                      {testimonial.name}
                    </p>
                    <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 mt-1">
                      {testimonial.role}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── ZIGGYZAP SHOWCASE ────────────────────────────────────────────── */}
        <section className="bg-brand-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-brand-black border-2 border-gold/40 flex items-center justify-center">
                <span className="font-display text-4xl text-gold">⚡</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-paper/70">
                ZiggyZap // AI Concierge
              </p>
              <h2 className="mt-4 font-heading text-[2.2rem] uppercase leading-[0.9] tracking-[-0.05em] text-brand-paper sm:text-[3rem]">
                {ziggyZap.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-brand-paper/65 sm:text-lg">
                {ziggyZap.subheading}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {ziggyZap.cards.map((card, i) => (
                <div
                  key={card.number}
                  className={`rounded-[28px] border p-8 ${
                    i === 1
                      ? 'border-gold/30 bg-gold/10'
                      : 'border-gold/20 bg-brand-paper/5'
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-paper/60">
                    {card.number}
                  </p>
                  <h3 className="mt-3 font-heading text-[1.4rem] uppercase leading-[0.95] tracking-[-0.04em] text-brand-paper">
                    {card.heading}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-brand-paper/65">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <ZiggyOpenButton />
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-brand-paper/35">
                {ziggyZap.note}
              </p>
            </div>
          </div>
        </section>

        {/* ── CHOOSE YOUR ADVENTURE ────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-brand-paper py-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 text-center">
              <p className="bauhaus-kicker text-ink/55">{chooseAdventure.kicker}</p>
              <h2 className="mt-3 font-heading text-[15pt] uppercase leading-[0.9] tracking-[-0.05em] text-brand-black sm:text-[18pt]">
                {chooseAdventure.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-ink/75 sm:text-lg">
                {chooseAdventure.body}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {chooseAdventure.services.map((service) => (
                <article key={service.tag} className="overflow-hidden rounded-[28px] bg-brand-paper">
                  <div className="p-6 sm:p-7">
                    <span className="text-3xl block mb-4">{service.icon}</span>
                    <p className={`text-[12px] uppercase tracking-[0.2em] font-mono ${
                      ['Consulting & Strategy', 'Signature Programs', 'Live Events & Retreats'].includes(
                        service.tag
                      )
                        ? 'text-gold'
                        : 'text-ink/55'
                    }`}>
                      {service.tag}
                    </p>
                    <h3 className="mt-4 font-heading text-[1.5rem] leading-[1.2] tracking-[-0.02em] text-brand-black whitespace-pre-line">
                      {service.heading}
                    </h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-ink/72">
                      {service.body}
                    </p>
                    <div className="mt-6">
                      <Link href={service.cta.href} className="btn self-start">
                        {service.cta.label}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHORITY ────────────────────────────────────────────────────── */}
        <section className="bg-brand-paper py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-4xl">
              <p className="bauhaus-kicker text-gold mb-6">{authority.kicker}</p>
              <h2 className="font-display text-[2.8rem] leading-tight tracking-[-0.02em] text-brand-black sm:text-[4rem] mb-8">
                {authority.heading}
              </h2>
              {authority.body.map((para, i) => (
                <p key={i} className="font-body text-lg leading-relaxed text-ink/75 mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="bg-brand-black py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="bauhaus-kicker text-brand-paper/60 mb-6">{finalCta.kicker}</p>
            <h2 className="font-display text-[3rem] leading-tight tracking-[-0.02em] text-brand-paper sm:text-[4.5rem] mb-10">
              {finalCta.heading}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={finalCta.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-filled"
              >
                {finalCta.primaryCta.label}
              </a>
              <Link href={finalCta.secondaryCta.href} className="btn btn-ghost">
                {finalCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
