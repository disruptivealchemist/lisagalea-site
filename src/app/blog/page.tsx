import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Thought Garden",
  description:
    "Ideas on behavioural design, creative leadership, AI strategy, and living differently. Lisa Galea\u2019s Thought Garden \u2014 where curiosity grows into clarity.",
  alternates: { canonical: "/blog" },
};

const categories = ["All", "Leadership", "Strategy", "AI & Technology", "Behavioural Science", "Design", "Creative", "Resources", "Digital & Social"];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  // Sort newest first
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src="https://lisagalea.com/wp-content/uploads/2025/09/co-working-13b.png"
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
              Thought Garden
            </p>
            <h1 className="font-heading text-[2.2rem] uppercase leading-[0.88] tracking-[-0.06em] text-brand-black max-w-3xl mb-4 sm:text-[3.2rem] lg:text-[4.1rem]">
              Where Curiosity Grows Into Clarity
            </h1>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold max-w-2xl">
              Ideas on leadership, behaviour, AI, and doing life differently.
            </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ─────────────────────────────────────────────────── */}
        {featured && (
          <section className="bg-canvas py-20">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-ui text-xs tracking-ui uppercase text-gold mb-8">
                Latest Post
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-10 sm:grid-cols-2 sm:items-center"
              >
                <div className="bauhaus-panel p-4">
                <div className="relative aspect-[16/9] overflow-hidden border-2 border-brand-black">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(min-width: 601px) 50vw, 100vw"
                  />
                </div>
                </div>
                <div className="bauhaus-panel p-8">
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-3">
                    {featured.category} &middot; {formatDate(featured.date)}
                  </p>
                  <h2 className="font-heading text-2xl sm:text-3xl text-ink leading-tight mb-4 group-hover:text-gold transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="font-body text-post-mobile text-ink/70 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <span className="font-ui text-xs tracking-ui uppercase text-ink border-b-2 border-gold pb-0.5 group-hover:text-gold transition-colors duration-200">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── CATEGORY FILTER (static labels, no JS filter needed for SSG) ── */}
        <section className="bg-grey-light py-10 border-y border-ink/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bauhaus-kicker bg-brand-paper text-ink/55"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── POST GRID ─────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bauhaus-card flex flex-col p-5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-2 border-brand-black mb-5">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 601px) 50vw, 100vw"
                    />
                  </div>
                  <p className="font-ui text-xs tracking-ui uppercase text-gold mb-2">
                    {post.category} &middot; {formatDate(post.date)}
                  </p>
                  <h2 className="font-heading text-lg text-ink leading-tight mb-3 group-hover:text-gold transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-ink/70 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="font-ui text-xs tracking-ui uppercase text-ink border-b-2 border-gold pb-0.5 self-start group-hover:text-gold transition-colors duration-200">
                    Read More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-ink py-20">
          <div className="max-w-3xl mx-auto px-6 text-center bauhaus-panel-dark p-10">
            <p className="font-ui text-sm tracking-ui uppercase text-gold mb-4">
              Stay Curious
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-canvas mb-6 leading-tight">
              Want These Ideas in Your Inbox?
            </h2>
            <p className="font-body text-post-mobile text-canvas/70 leading-relaxed mb-10">
              No weekly newsletters, no hustle content. Just ideas worth thinking
              about, when they\u2019re ready.
            </p>
            <Link href="/contact" className="btn btn-ghost">
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
