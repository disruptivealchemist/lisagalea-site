# Go-Live Runbook

## Pre-launch Setup

### 1. Resend Setup (Email)

1. Go to [resend.com](https://resend.com) and create an account
2. Domains → Add `lisagalea.com`
3. Add Resend's DNS records to Cloudflare (TXT/CNAME — Resend provides these)
4. Verify the domain in Resend dashboard
5. The `from:` address in contact form and ZiggyZap lead capture uses `noreply@lisagalea.com` — must be a verified Resend domain
6. Note the API key for Vercel env vars below

---

### 2. OpenRouter Setup (ZiggyZap AI)

1. Go to [openrouter.ai](https://openrouter.ai) and sign in
2. Keys → Create new key → name it `ziggyzap-prod`
3. Add credit (ZiggyZap uses `claude-haiku-4-5` — very cost-effective, ~$0.001 per conversation)
4. Note the API key for Vercel env vars below

---

### 3. Adobe Fonts (Typekit)

1. Go to [Adobe Fonts](https://fonts.adobe.com/my_fonts#web_projects-section)
2. Create a Web Project with: Playfair Display, Futura PT (Bold + Book), Museo Sans Condensed
3. Add `lisagalea.com` as an allowed domain
4. Copy the Kit ID from the `use.typekit.net/KITID.css` URL

---

### 4. Vercel Deployment

#### A. Connect repo to Vercel
```bash
npm install -g vercel
vercel login
vercel
```
Or connect GitHub repo from [vercel.com/new](https://vercel.com/new).

#### B. Environment Variables (Vercel Dashboard → Project → Settings → Environment Variables)

| Variable | Value | Required |
|---|---|---|
| `OPENROUTER_API_KEY` | From openrouter.ai/keys | Yes |
| `OPENROUTER_MODEL` | `anthropic/claude-haiku-4-5-20251001` | No (has default) |
| `RESEND_API_KEY` | From resend.com | Yes |
| `AGENTS_API_KEY` | Generate: `openssl rand -hex 32` | Yes |
| `NEXT_PUBLIC_SITE_URL` | `https://lisagalea.com` | Yes |
| `NEXT_PUBLIC_ADOBE_KIT_ID` | From Typekit web project | For production fonts |

**Generate AGENTS_API_KEY:**
```bash
openssl rand -hex 32
```

---

### 5. Cloudflare DNS Update (Final Step — do last)

After confirming the Vercel deployment loads on the `vercel.app` preview URL:

1. Cloudflare Dashboard → `lisagalea.com` → DNS
2. Update records to point to Vercel:
   - Add/update CNAME: Name `@` or `www` → Target `cname.vercel-dns.com`
   - Proxy Status: **DNS Only** (grey cloud) — Vercel handles SSL
3. In Vercel dashboard: add custom domain `lisagalea.com` and `www.lisagalea.com`
4. Vercel auto-provisions Let's Encrypt SSL

> ⚠️ DNS changes propagate in 5–60 min. Keep old WP site running until DNS is fully switched.

**Keep MX records intact** — email hosted on SiteGround or similar. Only change the A/CNAME records for web hosting.

---

## Post-Launch Checklist

- [ ] Visit `https://lisagalea.com` — homepage loads correctly
- [ ] ZiggyZap chat widget opens (bottom-right ⚡ button)
- [ ] ZiggyZap responds in character (Claude/OpenRouter connected)
- [ ] Submit test contact form — check email at `curious@lisagalea.com`
- [ ] ZiggyZap quiz completes → lead email arrives (ZiggyZap → Resend → visitor inbox)
- [ ] Fonts load correctly (Playfair Display, Futura PT, Museo Sans Condensed)
- [ ] All images load from `/images/` (no external WP URLs)
- [ ] `/services` → retreat link → `sanctuaryinthepocket.com.au` opens
- [ ] `/services` → AiMegos link → `aimegos.com` opens
- [ ] Google Search Console — submit sitemap: `https://lisagalea.com/sitemap.xml`
- [ ] Verify WP redirects work (e.g. `/lisa-galea-consulting-creative-leadership-with-human-centred-ai/` → `/about`)

---

## D-ID Video Agent (Phase 2)

ZiggyZap currently runs as a text chat widget. To add the video concierge layer:

1. Sign up at [d-id.com](https://d-id.com) — Advanced plan ($196/month) for 3 agents + API
2. Create a Visual Agent using the D-ID dashboard
3. Connect to the existing ZiggyZap API endpoint (`/api/chat`) as the LLM backend
4. Embed the D-ID agent script alongside or replacing the text widget
5. The ZiggyZap persona, routing, and quiz logic carry over unchanged

---

## Monthly Running Costs (estimated)

| Service | Monthly |
|---|---|
| Vercel Pro | $20 |
| OpenRouter (Claude, ZiggyZap usage) | ~$5–20 |
| Resend (email) | Free tier → $20 at scale |
| Cloudflare Pro | $20 |
| Adobe Fonts | Included in Creative Cloud |
| **Total** | **~$65–80/month** |
| + D-ID video agent (Phase 2) | + $196/month |
