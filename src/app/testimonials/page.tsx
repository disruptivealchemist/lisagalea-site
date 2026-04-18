import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { testimonials } from "@/lib/data/testimonials";
import type { Testimonial } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Kind words from coaching clients, keynote audiences, retreat participants, and executive teams who\u2019ve worked with Lisa Galea.",
  alternates: { canonical: "/testimonials" },
};

const categoryLabels: Record<Testimonial["category"], string> = {
  coaching: "Coaching & Leadership Labs",
  facilitation: "Keynotes & Workshops",
  retreat: "Retreats",
  general: "General",
};

const categoryOrder: Testimonial["category"][] = [
  "coaching",
  "retreat",
  "facilitation",
  "general",
];

export default function Testimonials() {
  const grouped = categoryOrder.reduce<Record<Testimonial["category"], Testimonial[]>>(
    (acc, cat) => {
      acc[cat] = testimonials.filter((t) => t.category === cat);
      return acc;
    },
    { coaching: [], facilitation: [], retreat: [], general: [] },
  );

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
              Kind Words
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase tracking-[-0.06em] leading-[0.88] text-brand-black mb-4 max-w-3xl sm:text-[3.2rem] lg:text-[4.1rem]">
              What People Are Saying
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold max-w-2xl">
              From boardrooms to Byron Bay hinterland retreat rooms.
            </p>
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────────────────── */}
        <section className="bg-gold py-16">
          <div className="max-w-4xl mx-auto px-6 text-center bauhaus-panel p-8 sm:p-10">
            <blockquote>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug italic">
                &ldquo;Most describe it as the leadership reset I didn&apos;t know I needed.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-ui text-xs tracking-ui uppercase text-ink/60">
                  Marcus Tan &mdash; CEO, Technology Company, Brisbane
                </p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── TESTIMONIALS BY CATEGORY ──────────────────────────────────────── */}
        {categoryOrder.map((cat) => {
          const items = grouped[cat];
          if (!items.length) return null;
          return (
            <section key={cat} className={cat === "retreat" || cat === "general" ? "bg-grey-light py-20" : "bg-canvas py-20"}>
              <div className="max-w-6xl mx-auto px-6">
                <p className="font-ui text-xs tracking-ui uppercase text-gold mb-10">
                  {categoryLabels[cat]}
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {items.map((t) => (
                    <blockquote key={`${t.name}-${t.category}`} className="bauhaus-card p-8">
                      <p className="font-ui text-xs tracking-ui uppercase text-gold mb-5">
                        {"★".repeat(t.stars ?? 5)}
                      </p>
                      <p className="font-body text-post-mobile text-ink/80 leading-relaxed mb-6 italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer>
                        <p className="font-heading text-sm text-ink">{t.name}</p>
                        <p className="font-body text-xs text-ink/50">{t.title}</p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-ink py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-canvas mb-4 leading-tight">
              Ready to Write Your Own Story?
            </h2>
            <p className="font-body text-post-mobile text-canvas/70 leading-relaxed mb-10">
              Book a clarity call and let\u2019s explore what\u2019s possible for you and your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-ghost">
                Book a Clarity Call
              </Link>
              <Link
                href="/services"
                className="btn btn-ghost"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
