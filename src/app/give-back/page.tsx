import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Give Back",
  description:
    "Care, curiosity, and change. Lisa Galea\u2019s advocacy work \u2014 from mentoring Papua New Guinea women alumni to building bridges through kindness, inclusivity, and creative change.",
  alternates: { canonical: "/give-back" },
};

export default function GiveBack() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src="/images/give-back-hero.jpg"
              alt=""
              fill
              className="object-cover object-top opacity-24"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
            <div className="bauhaus-panel p-8 sm:p-12 max-w-4xl">
            <p className="bauhaus-kicker mb-5 text-ink/55">
              Care // Curiosity // Change
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase tracking-[-0.06em] leading-[0.88] text-brand-black max-w-3xl mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
              Advocate for Change
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold max-w-2xl">
              Rewards come from being in service to others.
            </p>
            </div>
          </div>
        </section>

        {/* ── MAKE EVERY INTERACTION COUNT ──────────────────────────────────── */}
        <section className="bg-canvas py-24">
          <div className="max-w-4xl mx-auto px-6 bauhaus-panel p-8 sm:p-12">
            <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">
              Kindness. Curiosity. Inclusivity.
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-10 leading-tight">
              Make Every Interaction Count
            </h2>
            <div className="space-y-6 font-body text-post-mobile sm:text-post-desktop text-ink/80 leading-relaxed">
              <p>
                Each person you meet and every story you share with them is like a thread
                that adds its own unique colour and texture to the tapestry of your life
                &mdash; a beautiful masterpiece that only grows richer with every interaction.
              </p>
              <p>
                The amazing diversity of our minds and our innate creativity are both gifts
                from nature that we should treasure and celebrate. It&apos;s only through
                embracing our differences and exploring our creative potential that we can
                grow and thrive as a species.
              </p>
              <p>
                I believe together, we can build a better world by harnessing the power of
                creative change. So join me on this mission, and let&apos;s make ripples that
                turn into waves of positive impact, one act of kindness at a time.
              </p>
            </div>
          </div>
        </section>

        {/* ── BREN\xc9 BROWN QUOTE ───────────────────────────────────────────────── */}
        <section className="bg-gold py-16">
          <div className="max-w-4xl mx-auto px-6">
            <blockquote>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug italic">
                &ldquo;Integrity is choosing courage over comfort. It&apos;s choosing what is
                right over what is fun, fast, or easy. It&apos;s choosing to practice your
                values rather than simply professing them.&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-heading text-base text-ink">&mdash; Bren&eacute; Brown</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Integrity", "Values", "Taking a Stand", "Inspirational"].map((tag) => (
                    <span
                      key={tag}
                      className="bauhaus-kicker bg-brand-paper text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── BUILDING BRIDGES ──────────────────────────────────────────────── */}
        <section className="bg-grey-light py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 sm:grid-cols-2 sm:items-start">
            <div className="bauhaus-panel p-8 sm:p-10">
              <p className="font-ui text-xs tracking-ui uppercase text-gold mb-4">
                Building Bridges
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-ink mb-2 leading-tight">
                Papua New Guinea Australia Alumni Association
              </h2>
              <p className="font-ui text-xs tracking-ui uppercase text-ink/40 mb-8">
                Australian Womens Alumni Mentoring Initiative &mdash; 2020&ndash;2023
              </p>

              <h3 className="font-heading text-lg text-ink mb-4">
                Leadership and Confidence Mentor
              </h3>
              <div className="space-y-4 font-body text-sm text-ink/70 leading-relaxed">
                <p>
                  As a member of the Papua New Guinea Australia Alumni Association, I was
                  chuffed to be selected as a mentor in the Women Alumni Mentoring Initiative.
                  As part of the broader alumni network, this opportunity allowed me to mentor
                  and facilitate workshops to help Papua New Guinea alumni grow their confidence
                  in business and life.
                </p>
                <p>
                  It has been one of the most rewarding things in my life, and as I continue
                  my serve, I receive so much more back than I feel I ever give.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p className="font-ui text-xs tracking-ui uppercase text-ink/40">Learn More</p>
                {[
                  { label: "pngaaa.org", href: "https://www.pngaaa.org/" },
                  { label: "Get Involved", href: "https://www.pngaaa.org/get-involved/" },
                  { label: "News & Updates", href: "https://www.pngaaa.org/news/" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-sm text-ink hover:text-gold transition-colors duration-200"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>

            {/* Visual / decorative */}
            <div className="bauhaus-panel p-4">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black">
              <Image
                src="/images/lisa-galea-community-workshop.jpg"
                alt="Lisa Galea mentoring and community advocacy"
                fill
                className="object-cover object-top"
                sizes="(min-width: 601px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <div className="absolute bottom-0 inset-x-0 bg-ink/70 p-6">
                <p className="font-heading text-sm text-canvas">
                  Activating change and building confidence
                </p>
                <p className="font-ui text-xs tracking-ui uppercase text-gold mt-1">
                  Women Alumni Mentoring Initiative, PNG
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* ── SHE\u2019S FIRST / VALUES STRIP ─────────────────────────────────────────── */}
        <section className="bg-ink py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  heading: "Care",
                  body: "Every person deserves to feel seen, heard, and valued. Kindness is the foundation of everything.",
                },
                {
                  heading: "Curiosity",
                  body: "Curiosity is the antidote to judgment. When we stay curious, we stay open to possibility.",
                },
                {
                  heading: "Change",
                  body: "Ripples become waves. One interaction, one act of courage, one moment of connection at a time.",
                },
              ].map((v) => (
                <div key={v.heading} className="bauhaus-panel-dark p-6">
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-3">
                    {v.heading}
                  </p>
                  <p className="font-body text-sm text-canvas/70 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-gold py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-ink mb-4 leading-tight">
              Join the Mission
            </h2>
            <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-10">
              Whether it&apos;s a conversation, a collaboration, or a connection &mdash;
              every interaction is an opportunity to make a positive ripple.
            </p>
            <Link href="/contact" className="btn btn-filled">
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
