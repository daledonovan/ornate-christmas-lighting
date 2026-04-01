# Website Build Brief — Ornate Christmas Lighting
**Version:** 1.0 | **Date:** March 2026

---

## BRAND SNAPSHOT
- **Company:** Ornate Christmas Lighting
- **Location:** Fairfield County, Connecticut
- **Primary Color:** Deep Forest Green #1B3A2A
- **Secondary Color:** Warm Gold #C9A84C
- **Accent Color:** Soft Cream #FAF6EE
- **Dark Background:** Rich Black #0D0D0D
- **Fonts:** Cormorant Garamond (headlines) / Inter (body)
- **Tone:** Premium, trustworthy, warm, effortless
- **Core Message:** Fairfield County's premier holiday lighting specialists — fully managed, licensed, and stress-free from design through storage.
- **Slogan:** "Put your holiday decorating stress to rest!"
- **Phone:** (203) 505-5120
- **Email:** ornatechristmaslights@gmail.com
- **Yelp:** https://www.yelp.com/biz/ornate-christmas-lighting-norwalk
- **Instagram:** @ornatechristmaslighting
- **Minimum:** $1,500
- **Promo:** 20% off first year for new customers who accept a job before September 1st

---

## DESIGN DIRECTION

### Color Palette
| Role | Color | Hex |
|---|---|---|
| Primary Dark Background | Rich Black | #0D0D0D |
| Primary Brand | Deep Forest Green | #1B3A2A |
| Accent / Highlight | Warm Gold | #C9A84C |
| Light Background | Soft Cream | #FAF6EE |
| Text on Dark | Warm White | #F5F0E8 |
| Text on Light | Charcoal | #1A1A1A |
| Subtle Dividers | Dark Green | #142E21 |

**Rationale:** Deep green + warm gold mirrors the color language of Christmas itself (evergreen + ornament gold) while feeling elevated — not kitschy. Cream backgrounds add warmth. Avoids the navy-heavy palette all competitors use. No red (too generic), no purple (Chad Landscapes mistake).

### Typography
- **Headlines:** Cormorant Garamond — a refined, editorial serif that signals luxury and craftsmanship. Used by high-end brands. Competitors use Playfair Display (Decorate With Lights) or Poppins (Chad, Hang My Lights). Cormorant is more distinctive and elevated.
- **Subheadings:** Inter SemiBold 600 — clean, modern, high readability
- **Body:** Inter Regular 400 — crisp and legible at all sizes
- **CTA Buttons:** Inter SemiBold, uppercase tracking, pill-shaped

### Photography Style
- **Primary:** Dusk/blue-hour exterior shots of large Connecticut-style homes (colonials, tudors, stone facades) with soft warm white lighting on rooflines and hedges
- **Aesthetic:** Soft, warm, cinematic — NOT bright/festive/kitschy
- **Subject:** Large houses ($1M+ aesthetic), manicured grounds, tasteful lighting
- **Placeholder sources:** Use high-quality stock (Unsplash/Pexels) with large estate colonial homes + Christmas lighting. All images to be replaced with real client photography.
- **Gallery:** Dusk-shot gallery, portrait and landscape mix, masonry layout

### Animation Direction (GSAP + ScrollTrigger)
- Hero: Fade-in headline word by word, subtle parallax on background image
- Section transitions: Fade up + slight Y translate on scroll into view
- Gallery: Staggered image reveal on scroll
- Stats/numbers: Count-up animation when scrolled into view
- CTA buttons: Subtle scale + glow on hover
- Nav: Transparent on hero, transitions to solid dark on scroll
- NO aggressive animations — cinematic and restrained, not flashy

### What to AVOID (Competitor Mistakes)
- Purple accents (Chad Landscapes)
- Bright red/green festive color schemes (Hang My Lights)
- SEO-stuffed headlines as hero text (Handy Christmas)
- Generic stock photography of small homes
- Pricing tiers that anchor low (Hang My Lights $499 start)
- Hiding the contact form on a separate page only
- Corporate/functional language with no emotional warmth
- Inconsistent typography between pages

---

## SITE ARCHITECTURE

### Pages
| Page | Purpose |
|---|---|
| `/index.html` | Homepage — primary conversion page |
| `/services.html` | Full services breakdown |
| `/gallery.html` | Full photo gallery |
| `/quote.html` | Quote request form |
| `/admin/index.html` | Admin login (password protected) |
| `/admin/dashboard.html` | Quote inbox + job management |

### Navigation Structure
```
Logo (left) | Home  Services  Gallery  Get a Quote (CTA button, gold)
```
Nav behavior: Transparent with white text on hero → solid #0D0D0D background on scroll

### Homepage Section Order (informed by top competitor pattern)
1. **Hero** — Full-bleed dusk photography, headline, subheadline, dual CTAs
2. **Promo Banner** — 20% off preseason special (dismissible)
3. **Trust Bar** — Licensed Electrician | Fully Insured | Fairfield County Native | Satisfaction Guaranteed
4. **Services Overview** — 3 cards: Christmas Lighting (primary), Events & Weddings, Full-Service Care
5. **How It Works** — 5-step process (Design → Install → Maintain → Remove → Store)
6. **Mid-Page Quote CTA** — "Ready to transform your home?" + quote button
7. **Gallery Preview** — 6-image masonry grid, "View Full Gallery" link
8. **Why Choose Ornate** — Licensed electrician callout, no-hassle service, we own the lights
9. **Testimonial** — Yelp review featured prominently
10. **FAQ** — 8 questions addressing all key objections
11. **Final CTA** — Full-width dark section with headline + quote button + phone number
12. **Footer** — Logo, nav links, contact info, Yelp + Instagram links, license info

---

## CONTENT FRAMEWORK

### Homepage Headline Options (3)
1. **"Fairfield County's Premier Holiday Lighting Experience"** — local authority positioning
2. **"Transform Your Home. Stress-Free."** — outcome + emotion
3. **"The Holiday Light Installation Fairfield County Trusts"** — social proof positioning

**Selected:** Option 1 as H1, Option 2 as supporting subheadline

### Subheadline
"Professional design, installation, and full-season care — we own the lights, you enjoy the magic."

### Value Proposition Structure
- We own the lights (you rent) → no upfront cost on equipment
- Licensed electrician on every job → safety + credibility
- Full service: design → install → maintenance → removal → storage → nothing left for you to do
- Local to Fairfield County → we know your neighborhood

### Section-by-Section Copy Direction

**Hero:**
- H1: "Fairfield County's Premier Holiday Lighting Experience"
- H2: "Professional design, installation, and full-season care — we own the lights, you enjoy the magic."
- CTA 1: "Get Your Free Quote" (gold button)
- CTA 2: "Call (203) 505-5120" (outline button)

**Promo Banner:**
- "🎄 Preseason Special: 20% off your first year — new customers who book before September 1st save big. [Get a Quote]"

**Trust Bar (4 icons):**
- Licensed Electrician on Every Job
- Fully Insured
- Fairfield County, CT
- Lights Included — Nothing to Buy

**Services Cards:**
1. Christmas & Holiday Lighting (PRIMARY) — Design, customization, installation, maintenance, removal, and climate-controlled storage. We own the lights.
2. Weddings & Special Events — Elegant custom lighting for your most important moments.
3. Full-Season Care — 24/7 maintenance response. If something goes out, we come back.

**How It Works (5 Steps):**
1. Free Design Consultation — We assess your property and design a custom lighting plan
2. Custom Installation — Our licensed team installs your display with precision and care
3. Season-Long Maintenance — We respond quickly if anything needs attention
4. Stress-Free Removal — We take everything down after the season
5. Safe Storage — Your lights are stored safely until next season

**Why Choose Ornate:**
- Licensed electrician: "Not every company can say this. Ours can."
- No hassle: "We handle everything. You just enjoy."
- We own the lights: "No upfront equipment cost. No boxes in your attic."
- Local: "We're based in Fairfield County. Your neighbors are our clients."

**Testimonial (Yelp):**
> "First time using Ornate Christmas Lighting and I can honestly say that my wife and I couldn't be happier with the outcome! They did the hedges in front, and the whole house. The owner is honest and affordable, would recommend 100%"
> — Verified Yelp Review ⭐⭐⭐⭐⭐

**FAQ Questions:**
1. Do I need to buy my own lights?
2. How much does it cost?
3. When do you install and remove?
4. What if something stops working mid-season?
5. Do I need to be home during installation?
6. Are you licensed and insured?
7. What areas do you serve?
8. How do I get started?

### SEO Keyword Targets
- "Christmas light installation Fairfield County CT"
- "holiday lighting installation Greenwich CT"
- "professional Christmas lighting Westport CT"
- "Christmas light installer Darien New Canaan CT"
- "holiday light installation Norwalk CT"
- "Christmas lighting company Connecticut"

---

## CONVERSION PLAYBOOK

**Primary Conversion Goal:** Quote form submission
**Secondary:** Phone call to (203) 505-5120

**Lead Capture Strategy:**
- Mid-page quote CTA on homepage (not just footer)
- Persistent "Get a Quote" button in sticky nav
- Final full-width CTA section at bottom of every page
- Quote form on dedicated `/quote.html` with $1,500 minimum noted

**Quote Form Fields:**
- First Name, Last Name
- Email Address
- Phone Number
- Street Address (for site assessment)
- City/Town
- Type of Property (Residential / Small Business / Event)
- Service Interested In (Christmas Lighting / Wedding & Events / Other)
- Approximate square footage / home size (optional)
- How did you hear about us?
- Message / Additional details
- Submit → "Request My Free Quote"

**Social Proof Plan:**
- Yelp review featured in testimonial section (homepage)
- Yelp badge/link in footer
- Instagram link in footer (builds over time)
- "Fairfield County's trusted local team" framing

**Trust Signal Checklist:**
- [x] Licensed electrician called out (hero + why choose section)
- [x] Fully insured stated
- [x] Local Fairfield County positioning
- [x] We own the lights (eliminates barrier to entry)
- [x] 5-star Yelp review featured
- [x] Email + phone visible in header and footer
- [x] $1,500 minimum noted on quote page (sets expectations, filters leads)
- [x] Preseason 20% off promo (urgency + value)

---

## ADMIN PORTAL SPEC

**Access:** Password-protected. Username + password login. Not linked from public site.
**URL:** `/admin/`
**Backend:** Supabase (PostgreSQL database + Auth + Storage)

**Admin Sections:**

### 1. Quote Inbox
- Table view of all incoming quote form submissions
- Columns: Date, Name, Phone, Email, Address, Service Type, Status
- Status options: New, Contacted, Quoted, Accepted, Declined
- Click row to view full submission details
- Mark as read / unread

### 2. Job Folders
- Move accepted quotes into Job records
- Each job has:
  - Client info (auto-populated from quote)
  - Job status: Scheduled / In Progress / Completed / On Hold
  - Install date, removal date
  - Price / Invoice amount
  - Notes (free text field)
  - Photo uploads (stored in Supabase Storage)
  - Internal tags

### 3. Admin Management
- Owner can add/remove admin users
- Simple username + password auth via Supabase Auth

---

## TECH STACK

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Animations:** GSAP 3 + ScrollTrigger
- **Fonts:** Google Fonts (Cormorant Garamond + Inter)
- **Icons:** Phosphor Icons (lightweight, clean)
- **Backend:** Supabase (Auth + PostgreSQL + Storage)
- **Deployment:** Netlify (recommended) or Vercel
- **Forms:** Fetch API → Supabase REST
- **Images:** Optimized WebP, lazy loaded

---

## FINAL NOTES

- Logo included in nav (subtle — not hero focus per client direction)
- Slogan "Put your holiday decorating stress to rest!" used in hero or CTA section
- Do NOT mention "2 years in business" — use "years of experience" framing
- Promo: 20% off first year, new customers, accept before September 1st
- $1,500 minimum listed only on quote page
- Contact: ornatechristmaslights@gmail.com | (203) 505-5120
- All photography placeholders clearly marked for replacement with real client photos
