# Ornate Christmas Lighting — Website

Professional holiday lighting website for Ornate Christmas Lighting, Fairfield County CT.

---

## Project Structure

```
site/
├── index.html              Homepage
├── services.html           Services page
├── gallery.html            Photo gallery
├── quote.html              Quote request form
├── 404.html                Error page
├── sitemap.xml             SEO sitemap
├── robots.txt              Search engine directives
├── css/
│   └── style.css           All styles
├── js/
│   ├── main.js             Navigation, animations, FAQ, lightbox
│   └── quote.js            Quote form → Supabase submission
├── assets/
│   └── images/             All images (see placeholders below)
└── admin/
    ├── index.html          Admin login page
    ├── dashboard.html      Admin dashboard (quotes + jobs + users)
    └── setup.sql           Supabase database setup script
```

---

## BEFORE GOING LIVE — Required Steps

### 1. Set Up Supabase (Free)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project (name it "ornate-christmas-lighting")
3. Go to **SQL Editor → New Query** and paste the contents of `site/admin/setup.sql`. Run it.
4. Go to **Storage → New Bucket** → Name: `job-photos` → Public: ✅ Yes
5. Go to **Settings → API** and copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon / public key**
6. Replace `YOUR_SUPABASE_URL_HERE` and `YOUR_SUPABASE_ANON_KEY_HERE` in these 3 files:
   - `site/js/quote.js`
   - `site/admin/index.html`
   - `site/admin/dashboard.html`

### 2. Create Admin User(s)

1. In Supabase → **Authentication → Users → Add User**
2. Add your email and set a password
3. You can now log into `/admin/` with those credentials

### 3. Replace Placeholder Images

All images in `site/assets/images/` are placeholders. Replace with real photos:

| File | Description |
|---|---|
| `logo.png` | Company logo (provided) |
| `hero-bg.jpg` | **HERO IMAGE** — Large CT colonial with soft white roofline Christmas lighting at dusk. Recommended: 2400×1600px minimum |
| `gallery-1.jpg` through `gallery-9.jpg` | Gallery photos — dusk/evening shots of large homes with warm white lighting |
| `why-ornate.jpg` | Team/installer photo or close-up of professional lighting installation |
| `og-image.jpg` | Open Graph social preview image — 1200×630px |
| `favicon.png` | Favicon — 32×32px or 64×64px |

**Photography tips:**
- Shoot at dusk/blue-hour (30 min after sunset) for maximum impact
- Soft warm white lighting only — avoid multicolor
- Large homes with manicured properties
- Portrait (4:5) and landscape (16:9) mix for gallery

### 4. Update Your Domain

When deploying, update these files:
- `sitemap.xml` — replace `ornatechristmaslighting.com` with your actual domain
- `index.html` — update `og:image` URL to full absolute URL

### 5. Deploy

**Recommended: Netlify (Free)**
1. Go to [netlify.com](https://netlify.com) → New Site → Drag & drop the `site/` folder
2. Your site will be live instantly at a `.netlify.app` URL
3. Add your custom domain in Site Settings → Domain Management

**Alternative: Vercel**
1. Go to [vercel.com](https://vercel.com) → New Project → Import `site/` folder

---

## Admin Portal

**URL:** `yoursite.com/admin/`

The admin portal is NOT linked from the public site. Access it directly by URL only.

**Features:**
- **Quote Inbox** — View all incoming quote requests, update status (New → Contacted → Quoted → Accepted → Declined)
- **Job Folders** — Convert accepted quotes into job records. Add price, install/removal dates, notes, and photos
- **Photo Uploads** — Upload job photos (before/after, design reference) stored in Supabase Storage

---

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- GSAP 3 + ScrollTrigger (animations)
- Cormorant Garamond + Inter (Google Fonts)
- Phosphor Icons
- Supabase (database + auth + storage)
- Netlify or Vercel (hosting)

---

## Contact Info (on site)

- **Phone:** (203) 505-5120
- **Email:** ornatechristmaslights@gmail.com
- **Yelp:** https://www.yelp.com/biz/ornate-christmas-lighting-norwalk
- **Instagram:** @ornatechristmaslighting

---

## Preseason Promo

20% off first year for new customers who accept a job before September 1st.
This is shown in the dismissible banner at the top of the homepage.
Update or remove the promo banner in `index.html` → `.promo-banner` section when the offer expires.
