import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getPost, getPostSlugs, posts } from "@/lib/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Related posts: same category, excluding current
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Nav />
      <main className="overflow-hidden bg-brand-paper">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20 border-b-2 border-brand-black">
          <div className="architectural-grid" />
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover object-center opacity-30"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 pt-32 w-full">
            <div className="bauhaus-panel p-8 sm:p-10">
            <Link
              href="/blog"
              className="font-ui text-xs tracking-ui uppercase text-gold/80 hover:text-gold transition-colors duration-200 mb-6 inline-flex items-center gap-2"
            >
              <span aria-hidden="true">\u2190</span> Thought Garden
            </Link>
            <p className="bauhaus-kicker mt-4 mb-3 text-ink/55">
              {post.category} &middot; {formatDate(post.date)}
            </p>
            <h1 className="font-heading text-[2rem] uppercase tracking-[-0.05em] leading-[0.9] text-brand-black max-w-3xl sm:text-[2.8rem] lg:text-[3.5rem]">
              {post.title}
            </h1>
            </div>
          </div>
        </section>

        {/* ── CONTENT ───────────────────────────────────────────────────────── */}
        <section className="bg-canvas py-20">
          <div className="max-w-3xl mx-auto px-6 bauhaus-panel p-8 sm:p-10">
            {/* Excerpt / lede */}
            <p className="font-heading text-xl sm:text-2xl text-ink leading-snug mb-10 pb-10 border-b border-ink/10">
              {post.excerpt}
            </p>

            {/* Body — authored HTML from migration kit */}
            <div
              className="prose-lg font-body text-ink/80 leading-relaxed space-y-6
                [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4
                [&_p]:text-post-mobile [&_p]:leading-relaxed
                [&_strong]:text-ink [&_strong]:font-heading
                [&_em]:italic
                [&_ul]:list-none [&_ul]:space-y-3
                [&_li]:flex [&_li]:gap-3 [&_li]:items-start"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Share / back nav */}
            <div className="mt-16 pt-10 border-t-2 border-brand-black/20 flex flex-wrap gap-4 items-center justify-between">
              <Link
                href="/blog"
                className="font-ui text-xs tracking-ui uppercase text-ink/60 hover:text-gold transition-colors duration-200"
              >
                \u2190 All Posts
              </Link>
              <Link href="/contact" className="btn btn-filled">
                Work With Lisa
              </Link>
            </div>
          </div>
        </section>

        {/* ── RELATED POSTS ─────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-grey-light py-20">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-ui text-xs tracking-ui uppercase text-gold mb-8">
                More From the Thought Garden
              </p>
              <div className="grid gap-10 sm:grid-cols-2">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group bauhaus-card flex flex-col p-5">
                    <div className="relative aspect-[16/9] overflow-hidden border-2 border-brand-black mb-5">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(min-width: 601px) 50vw, 100vw"
                      />
                    </div>
                    <p className="font-ui text-xs tracking-ui uppercase text-gold mb-2">
                      {p.category} &middot; {formatDate(p.date)}
                    </p>
                    <h2 className="font-heading text-lg text-ink leading-tight group-hover:text-gold transition-colors duration-200">
                      {p.title}
                    </h2>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
