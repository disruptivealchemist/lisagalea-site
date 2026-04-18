# Content Parity Sweep Checklist

Scope: Home, About, Services, Contact
Audit method: line-by-line review of migration markdown headings, key body statements, CTA labels/URLs, and feature image URLs against current route implementations.

## Home parity
Current page: [src/app/page.tsx](src/app/page.tsx)
Migration source: lisagalea.com_.md

### Matched
- [x] Hero title text matches migration: The Art and Science of Play. See [src/app/page.tsx](src/app/page.tsx#L102).
- [x] Hero subtitle matches migration: More brains. Less bollocks. All heart. See [src/app/page.tsx](src/app/page.tsx#L105).
- [x] Hero support copy matches migration sentence. See [src/app/page.tsx](src/app/page.tsx#L108).
- [x] Certification badge image set matches migration URLs (Ogilvy, Brene, Cannes, Truth Plane). See [src/app/page.tsx](src/app/page.tsx#L14).
- [x] Play to win section core body copy is aligned with migration lines 68-74. See [src/app/page.tsx](src/app/page.tsx#L152).
- [x] Founder image URL matches migration line 76. See [src/app/page.tsx](src/app/page.tsx#L143).
- [x] Curiosity mark image URL matches migration line 82. See [src/app/page.tsx](src/app/page.tsx#L178).
- [x] Services image URLs match migration lines 102, 112, 122. See [src/app/page.tsx](src/app/page.tsx#L66).
- [x] AI exploration image URL matches migration line 132. See [src/app/page.tsx](src/app/page.tsx#L291).
- [x] Thought Garden section heading and subheading align with migration lines 152-156. See [src/app/page.tsx](src/app/page.tsx#L324).

### Unmatched
- [ ] Migration includes duplicated top CTA pair (Explore Retreat Dates + second Book a Clarity Call, lines 44-46). Current hero only shows one CTA pair. See [src/app/page.tsx](src/app/page.tsx#L111).
- [ ] Service card 2 CTA target differs: migration line 120 points to lisagalea.com, current uses sanctuaryinthepocket.com.au. See [src/app/page.tsx](src/app/page.tsx#L74).
- [ ] Service card 3 CTA target differs: migration line 130 points to inthepocketbyron.com, current points to internal services route. See [src/app/page.tsx](src/app/page.tsx#L84).
- [ ] Thought Garden item links differ: migration uses old root slugs (/embodied-mind etc.), current uses /blog/[slug]. See [src/app/page.tsx](src/app/page.tsx#L336).
- [ ] Contact/Next Steps CTA set differs: migration includes Schedule Now and Subscribe (lines 184-186), current has Schedule Now and Explore Thoughts. See [src/app/page.tsx](src/app/page.tsx#L384).

## About parity
Current page: [src/app/about/page.tsx](src/app/about/page.tsx)
Migration source: lisagalea.com_lisa-galea-consulting-creative-leadership-with-human-centred-ai_.md

### Matched
- [x] Hero heading Step into a World of Possibilities matches migration line 34. See [src/app/about/page.tsx](src/app/about/page.tsx#L117).
- [x] Intro narrative block retains migration core copy and emphasis themes (rebellion, blending ideas, curiosity). See [src/app/about/page.tsx](src/app/about/page.tsx#L130).
- [x] Timeline sequence and milestones match migration lines 74-108. See [src/app/about/page.tsx](src/app/about/page.tsx#L198).
- [x] Choose Change and Catalyst Moment section intent matches migration lines 146-154. See [src/app/about/page.tsx](src/app/about/page.tsx#L246).
- [x] Education cert list includes Ogilvy, Brene, Master Behavioural Science, Cannes, Kate Toon, Truth Plane per migration lines 122-144. See [src/app/about/page.tsx](src/app/about/page.tsx#L283).

### Unmatched
- [ ] Hero/background image differs from migration assets for this page.
- [ ] Migration contains multiple visual value-image strips (values-w_1..4) and additional imagery; current uses text cards rather than those exact image modules.
- [ ] Migration includes Giving Back teaser module and extra transition blocks not present in current route.
- [ ] Client logo source URLs are not the exact migration WordPress links (current uses local client assets). See [src/app/about/page.tsx](src/app/about/page.tsx#L315).
- [ ] Some migration microcopy lines are condensed or omitted (for example Flip IT phrasing and cross-pollination detail in mid-page narrative).

## Services parity
Current page: [src/app/services/page.tsx](src/app/services/page.tsx)
Migration source: lisagalea.com_services_.md

### Matched
- [x] Hero heading Design a Life You Love matches migration line 34. See [src/app/services/page.tsx](src/app/services/page.tsx#L93).
- [x] Invitation block title Imagination + Influence = Innovation matches migration line 46. See [src/app/services/page.tsx](src/app/services/page.tsx#L108).
- [x] Made for Makers positioning aligns with migration lines 74-82. See [src/app/services/page.tsx](src/app/services/page.tsx#L138).
- [x] Three core service pillars are present and aligned conceptually with migration lines 84-122. See [src/app/services/page.tsx](src/app/services/page.tsx#L176).
- [x] Bottom CTA This Is Your Call to Play is present and aligned with migration line 150. See [src/app/services/page.tsx](src/app/services/page.tsx#L251).

### Unmatched
- [ ] Top CTA URL destinations differ from migration line mapping.
- [ ] Service feature image URLs are consistent internally but not exact same files as services migration lines 92, 96, 124.
- [ ] Section title differs: migration uses Bespoke Facilitation, Keynotes & Interactive Workshops; current uses Facilitation, Keynotes & Workshops.
- [ ] Migration includes specific quote card artwork image references not used in current build.
- [ ] Combined CTA link formatting differs (migration uses single combined call line at line 156).

## Contact parity
Current page: [src/app/contact/page.tsx](src/app/contact/page.tsx)
Migration source: lisagalea.com_contact_.md

### Matched
- [x] Hero title Contact / Curious / I hope so alignment is retained. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L49).
- [x] Start a conversation and clarity-focused opening message align with migration lines 40-44. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L64).
- [x] Contact channels include general enquiry and media/events pathways aligned with migration intent. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L14).
- [x] Portrait image URL matches migration line 88 exactly. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L104).
- [x] Retreat venue copy intent is aligned with migration lines 106-110. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L129).

### Unmatched
- [ ] Form fields are not line-by-line equivalent to migration form specification (current form structure is modernized/simplified).
- [ ] Migration includes Curiosity Essential image module (line 96) not present in current contact page.
- [ ] Migration includes a Google static map image URL (line 102); current uses retreat photo instead. See [src/app/contact/page.tsx](src/app/contact/page.tsx#L155).
- [ ] Some migration phrasing differs in media/events section formatting and linked mailto presentation.

## Overall parity status
- Home: high parity on core copy and major image set, medium parity on CTA/link destinations.
- About: medium parity on narrative structure, lower parity on exact migration imagery modules.
- Services: medium-high parity on structure and message, medium parity on exact image/link matching.
- Contact: medium-high parity on messaging, medium parity on exact form/map modules.

## Priority fix list for exact parity mode
1. Restore migration-exact CTA destination URLs on Home and Services where they currently differ.
2. Replace About and Services feature image URLs with migration-file exact URLs where required.
3. Decide whether Contact should keep modernized form UX or revert to migration field-level parity.
4. If strict parity is required, add missing migration modules (map, secondary visuals, specific quote artwork blocks).
