import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // unsafe-eval is required for Next.js HMR in development only
      process.env.NODE_ENV === "development"
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com https://use.typekit.net",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://openrouter.ai https://*.supabase.co",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

// WordPress → Next.js 301 redirects
// Preserves link equity and prevents 404s for indexed URLs
const wordpressRedirects = [
  // Main pages
  {
    source: "/lisa-galea-consulting-creative-leadership-with-human-centred-ai/",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/lisa-galea-consulting-creative-leadership-with-human-centred-ai",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/blog-thought-playground/",
    destination: "/blog",
    permanent: true,
  },
  {
    source: "/blog-thought-playground",
    destination: "/blog",
    permanent: true,
  },
  {
    source: "/testimonials/",
    destination: "/testimonials",
    permanent: true,
  },
  {
    source: "/give-back-make-moments-matter/",
    destination: "/give-back",
    permanent: true,
  },
  {
    source: "/give-back-make-moments-matter",
    destination: "/give-back",
    permanent: true,
  },
  // Blog posts
  {
    source: "/embodied-mind/",
    destination: "/blog/embodied-mind",
    permanent: true,
  },
  { source: "/embodied-mind", destination: "/blog/embodied-mind", permanent: true },
  {
    source: "/rethinking-risk/",
    destination: "/blog/rethinking-risk",
    permanent: true,
  },
  {
    source: "/rethinking-risk",
    destination: "/blog/rethinking-risk",
    permanent: true,
  },
  {
    source: "/sai_learning_page/",
    destination: "/blog/sai-learning",
    permanent: true,
  },
  {
    source: "/sai_learning_page",
    destination: "/blog/sai-learning",
    permanent: true,
  },
  {
    source: "/why-behaviour-is-changeable-exploring-the-kurt-lewin-legacy/",
    destination: "/blog/why-behaviour-is-changeable",
    permanent: true,
  },
  {
    source: "/why-behaviour-is-changeable-exploring-the-kurt-lewin-legacy",
    destination: "/blog/why-behaviour-is-changeable",
    permanent: true,
  },
  {
    source: "/to-em-or-not-to-em-journey-through-punctuation/",
    destination: "/blog/the-mark-of-time",
    permanent: true,
  },
  {
    source: "/to-em-or-not-to-em-journey-through-punctuation",
    destination: "/blog/the-mark-of-time",
    permanent: true,
  },
  {
    source: "/chris-do-the-futur-design-critic/",
    destination: "/blog/chris-do-the-futur-design-critic",
    permanent: true,
  },
  {
    source: "/chris-do-the-futur-design-critic",
    destination: "/blog/chris-do-the-futur-design-critic",
    permanent: true,
  },
  {
    source: "/make-moments-matter/",
    destination: "/blog/make-moments-matter",
    permanent: true,
  },
  {
    source: "/make-moments-matter",
    destination: "/blog/make-moments-matter",
    permanent: true,
  },
  {
    source: "/how-to-get-what-you-want-goal-setting-the-futur-chris-do/",
    destination: "/blog/goal-setting-chris-do",
    permanent: true,
  },
  {
    source: "/how-to-get-what-you-want-goal-setting-the-futur-chris-do",
    destination: "/blog/goal-setting-chris-do",
    permanent: true,
  },
  {
    source: "/secret-to-winning-at-life-workbook-thefutur-goals/",
    destination: "/blog/chris-do-goal-setting",
    permanent: true,
  },
  {
    source: "/secret-to-winning-at-life-workbook-thefutur-goals",
    destination: "/blog/chris-do-goal-setting",
    permanent: true,
  },
  {
    source: "/book-recommendations/",
    destination: "/blog/book-recommendations",
    permanent: true,
  },
  {
    source: "/book-recommendations",
    destination: "/blog/book-recommendations",
    permanent: true,
  },
  {
    source: "/clubhouse-2022/",
    destination: "/blog/clubhouse-2022",
    permanent: true,
  },
  {
    source: "/clubhouse-2022",
    destination: "/blog/clubhouse-2022",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  images: {
    // All images served from /public/images/ — no remote patterns needed
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return wordpressRedirects;
  },
};

export default nextConfig;
