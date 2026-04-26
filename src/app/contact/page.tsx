import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { getContactContent } from "@/lib/cms/adapter";

const content = getContactContent();

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
};

export default function Contact() {
  const { hero, form, channels, sidebarImages, retreatVenue, inclusion } = content;
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="bauhaus-panel p-8 sm:p-12 max-w-4xl">
              <p className="bauhaus-kicker mb-5 text-ink/55">{hero.kicker}</p>
              <h1 className="font-heading text-[2.2rem] uppercase tracking-[-0.06em] leading-[0.88] text-brand-black mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
                {hero.heading}
              </h1>
              <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_380px]">

            {/* Form */}
            <div className="bauhaus-panel p-8 sm:p-10">
              <h2 className="font-heading text-2xl text-ink mb-2">{form.heading}</h2>
              <p className="font-body text-sm text-ink/60 mb-10">{form.description}</p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              <div className="bauhaus-panel p-8">
                <p className="font-ui text-xs tracking-ui uppercase text-gold mb-6">Get in Touch</p>
                <div className="space-y-6">
                  {channels.map((c) => (
                    <div key={c.label}>
                      <p className="font-ui text-xs tracking-ui uppercase text-ink/40 mb-1">{c.label}</p>
                      <a
                        href={c.href}
                        className="font-body text-sm text-ink hover:text-gold transition-colors duration-200 break-all"
                      >
                        {c.value}
                      </a>
                      {c.note && (
                        <p className="font-body text-xs text-ink/50 mt-1">{c.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bauhaus-panel p-4">
                <div className="relative aspect-[3/4] overflow-hidden border-2 border-brand-black">
                  <Image
                    src={sidebarImages.portrait.src}
                    alt={sidebarImages.portrait.alt}
                    fill
                    className="object-cover object-top"
                    sizes="380px"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-ink/60 p-4">
                    <p className="font-heading text-sm text-canvas">{sidebarImages.portrait.caption}</p>
                    <p className="font-ui text-xs tracking-ui uppercase text-gold">{sidebarImages.portrait.subcaption}</p>
                  </div>
                </div>
              </div>

              <div className="bauhaus-panel p-4">
                <div className="relative aspect-[1/1] overflow-hidden border-2 border-brand-black bg-grey-light">
                  <Image
                    src={sidebarImages.book.src}
                    alt={sidebarImages.book.alt}
                    fill
                    className="object-contain p-8"
                    sizes="380px"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── RETREAT VENUE ─────────────────────────────────────────────────── */}
        <section className="bg-grey-light py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 sm:grid-cols-2 sm:items-center">
            <div className="bauhaus-panel p-8 sm:p-10">
              <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">{retreatVenue.label}</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-6 leading-tight">{retreatVenue.heading}</h2>
              <address className="not-italic font-body text-sm text-ink/70 leading-relaxed mb-6">
                {retreatVenue.address.map((line, i) => (
                  <span key={i}>{line}{i < retreatVenue.address.length - 1 && <br />}</span>
                ))}
              </address>
              {retreatVenue.body.map((para, i) => (
                <p key={i} className="font-body text-sm text-ink/70 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
              ))}
              <a href={retreatVenue.cta.href} target="_blank" rel="noopener noreferrer" className="btn btn-filled mt-4 inline-block">
                {retreatVenue.cta.label}
              </a>
            </div>

            <div className="bauhaus-panel p-4">
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
                <Image
                  src={retreatVenue.image.src}
                  alt={retreatVenue.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 601px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── INCLUSION NOTE ────────────────────────────────────────────────── */}
        <section className="bg-ink py-10">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-body text-sm text-canvas/60 text-center">{inclusion}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
