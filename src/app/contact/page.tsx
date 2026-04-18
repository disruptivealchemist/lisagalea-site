import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Curious? I hope so. Book a Clarity Call, enquire about speaking engagements, or reach out about the Byron Bay retreat. curious@lisagalea.com",
  alternates: { canonical: "/contact" },
};

const contactChannels = [
  {
    label: "General Enquiries",
    value: "curious@lisagalea.com",
    href: "mailto:curious@lisagalea.com",
    note: "For immediate assistance call 0411 124 240",
  },
  {
    label: "Media & Events",
    value: "media@lisagalea.com",
    href: "mailto:media@lisagalea.com",
    note: "Speaking engagements, workshops, press",
  },
  {
    label: "Retreat Venue",
    value: "events@inthepocketbyron.com",
    href: "mailto:events@inthepocketbyron.com",
    note: "Livin' the dream in the Byron Hinterland",
  },
];

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="max-w-6xl mx-auto px-6">
            <div className="bauhaus-panel p-8 sm:p-12 max-w-4xl">
            <p className="bauhaus-kicker mb-5 text-ink/55">
              Start a Conversation
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase tracking-[-0.06em] leading-[0.88] text-brand-black mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
              Curious?
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold">
              I hope so.
            </p>
            </div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ────────────────────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_380px]">

            {/* Form */}
            <div className="bauhaus-panel p-8 sm:p-10">
              <h2 className="font-heading text-2xl text-ink mb-2">
                Looking for clarity and change for you and your business?
              </h2>
              <p className="font-body text-sm text-ink/60 mb-10">
                The best way to get started is to send a message below.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Contact channels */}
              <div className="bauhaus-panel p-8">
                <p className="font-ui text-xs tracking-ui uppercase text-gold mb-6">
                  Get in Touch
                </p>
                <div className="space-y-6">
                  {contactChannels.map((c) => (
                    <div key={c.label}>
                      <p className="font-ui text-xs tracking-ui uppercase text-ink/40 mb-1">
                        {c.label}
                      </p>
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

              {/* Lisa portrait */}
              <div className="bauhaus-panel p-4">
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-brand-black">
                <Image
                  src="/images/lisa-galea-contact-portrait.jpg"
                  alt="Lisa Galea, MBSc — Disruptive Alchemist"
                  fill
                  className="object-cover object-top"
                  sizes="380px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-ink/60 p-4">
                  <p className="font-heading text-sm text-canvas">Lisa Galea, MBSc.</p>
                  <p className="font-ui text-xs tracking-ui uppercase text-gold">
                    Disruptive Alchemist · aka Miss Messy
                  </p>
                </div>
              </div>
              </div>

              <div className="bauhaus-panel p-4">
                <div className="relative aspect-[1/1] overflow-hidden border-2 border-brand-black bg-grey-light">
                  <Image
                    src="/images/lisa-galea-curiosity-panel.jpg"
                    alt="Curiosity and creative leadership"
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
              <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">
                Byron Retreat Venue
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-6 leading-tight">
                Sanctuary in the Pocket
              </h2>
              <address className="not-italic font-body text-sm text-ink/70 leading-relaxed mb-6">
                17 Skyline Road, The Pocket<br />
                Byron Hinterland, NSW 2483<br />
                Australia
              </address>
              <p className="font-body text-sm text-ink/70 leading-relaxed mb-4">
                Live events are held at my retreat property in the pocket of Byron
                Hinterland — only <strong>30 minutes from Gold Coast Airport</strong> and
                12 minutes from the golden sands of the Pacific Ocean.
              </p>
              <p className="font-body text-sm text-ink/70 leading-relaxed mb-8">
                We&apos;re nestled on 5 acres of magical rainforest with the Nightcap
                mountains and Mt Warning as our backdrop. Come and play with me —
                I can&apos;t wait to show you around my magical backyard!
              </p>
              <a href="https://inthepocketbyron.com" target="_blank" rel="noopener noreferrer" className="btn btn-filled">
                Visit Retreat Site
              </a>
            </div>

            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
              <Image
                src="/images/sanctuary-retreat.jpg"
                alt="Sanctuary in the Pocket — Byron Bay Hinterland retreat venue"
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
            <p className="font-body text-sm text-canvas/60 text-center">
              We celebrate diversity and inclusive safe environments. We welcome
              people from any religion and race and are proud LGBTQ+ allies.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
