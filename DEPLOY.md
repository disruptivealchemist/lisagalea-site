# Deployment Guide — lisagalea.com

> **Status:** Ready to deploy. All env vars documented below.
> **Full runbook:** `GO-LIVE-RUNBOOK.md`

---

## Step 1 — Get your API keys (15 min)

| Service | Where to get it | What for |
|---|---|---|
| **OpenRouter** | openrouter.ai → Keys → Create key `ziggyzap-prod` | ZiggyZap AI (Claude) |
| **Resend** | resend.com → Add domain `lisagalea.com` → get API key | Contact form + lead emails |
| **Adobe Fonts** | fonts.adobe.com → Web Projects → get Kit ID | Futura PT, Playfair Display fonts |
| **Agents key** | Run `openssl rand -hex 32` in terminal | Protects /api/agents/ route |

---

## Step 2 — Deploy to Vercel

```bash
cd "/Users/lisag/Documents/04 Development/Projects/LCG26 WEB Lisa Galea"

# Push to GitHub first (create repo at github.com/new)
git init
git add .
git commit -m "feat: complete Lisa Galea site build — ZiggyZap, local images, Claude AI"
git remote add origin https://github.com/YOUR_USERNAME/lisagalea-site.git
git push -u origin main

# Then connect to Vercel at vercel.com/new
# Import the GitHub repo → auto-detects Next.js
```

---

## Step 3 — Add env vars in Vercel dashboard

Project → Settings → Environment Variables → add each:

```
OPENROUTER_API_KEY         = sk-or-...
OPENROUTER_MODEL           = anthropic/claude-haiku-4-5-20251001
RESEND_API_KEY             = re_...
AGENTS_API_KEY             = (your generated hex string)
NEXT_PUBLIC_SITE_URL       = https://lisagalea.com
NEXT_PUBLIC_ADOBE_KIT_ID   = (your Typekit kit ID)
```

---

## Step 4 — Point DNS in Cloudflare

1. Cloudflare → lisagalea.com → DNS
2. Add CNAME: Name `@` → Target `cname.vercel-dns.com` → Proxy: OFF (grey cloud)
3. Add CNAME: Name `www` → Target `cname.vercel-dns.com` → Proxy: OFF
4. In Vercel: Project → Settings → Domains → Add `lisagalea.com` and `www.lisagalea.com`
5. Wait 5–60 min for DNS to propagate
6. Vercel auto-provisions SSL

> Keep MX records (email) unchanged — only update A/CNAME records.

---

## Step 5 — Post-launch smoke test

- [ ] Homepage loads — ZiggyZap ⚡ button visible bottom-right
- [ ] Open ZiggyZap — greets in character, responds
- [ ] Contact form submits — email arrives at curious@lisagalea.com
- [ ] ZiggyZap quiz → lead email → arrives in test inbox
- [ ] /services, /about, /blog, /contact all load
- [ ] Retreat link → sanctuaryinthepocket.com.au ✓
- [ ] AiMegos link → aimegos.com ✓
- [ ] Fonts load (Futura PT headings, Playfair Display quotes)
- [ ] Submit sitemap to Google Search Console: lisagalea.com/sitemap.xml

---

## Monthly costs once live

| | Cost |
|---|---|
| Vercel Pro | $20/month |
| OpenRouter (ZiggyZap/Claude) | ~$5–20/month |
| Resend | Free → $20 at scale |
| Cloudflare Pro | $20/month |
| **Total** | **~$65–80/month** |
| + D-ID video concierge (Phase 2) | + $196/month |
