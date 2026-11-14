# Wahyu Satria Aji — Security Operations Center (SOC) Portfolio

Interactive, fast, and accessible personal portfolio landing page for **Wahyu Satria Aji** (*IT Security Engineer | SOC Analyst | PAM / IAM Specialist*), built with **Next.js (App Router) + React + TypeScript (Strict Mode) + Tailwind CSS + Framer Motion**.

---

## 📁 Folder Structure

```text
resume-projects/
├── app/
│   ├── globals.css             # Tailwind base + SOC theme variables + reduced-motion rules
│   ├── icon.svg                # Shield & checkmark SVG favicon
│   ├── layout.tsx              # Root layout, next/font (Inter + JetBrains Mono), SEO Metadata & JSON-LD Person schema
│   ├── page.tsx                # Single-page SOC portfolio assembling all 9 sections
│   ├── robots.ts               # Static robots.txt generator (force-static)
│   └── sitemap.ts              # Static sitemap.xml generator (force-static)
├── components/
│   ├── Navbar.tsx              # Sticky navbar, smooth scroll, IntersectionObserver active highlight, Dark/Light toggle
│   ├── Hero.tsx                # Hero with typing role cycling, dual CTAs, CSS radar background, SOC posture card
│   ├── About.tsx               # Executive summary + operator status card (Jakarta | Open to Security/SOC/PAM roles)
│   ├── StatsCounter.tsx        # 6 animated counters triggered on scroll into view
│   ├── Skills.tsx              # Domain filter tabs + accessible glow chips + interactive SVG capability radar
│   ├── ExperienceTimeline.tsx  # Vertical timeline with accessible accordion (current role expanded by default)
│   ├── Projects.tsx            # 4 featured security projects + GitHub repositories showcase
│   ├── ProjectModal.tsx        # Keyboard-accessible (ESC + focus management) project detail modal
│   ├── SecurityConsole.tsx     # Signature interactive terminal (whoami, skills, experience, projects, repos, certs, contact, help, clear)
│   ├── AlertFeed.tsx           # Decorative live SIEM/EDR alert stream with pause/resume & RFC 5737 simulated data notice
│   ├── Education.tsx           # Academic degree, certifications & language proficiency cards
│   ├── Contact.tsx             # Direct contact links + client-side validated & sanitized mailto: fallback form
│   └── Footer.tsx              # Copyright, privacy note, social links & back-to-top button
├── data/
│   └── profile.ts              # Single editable source of truth for all profile content, projects, GitHub repos & simulated alerts
├── lib/
│   └── utils.ts                # Class merging (cn), input sanitization, email validation & safe mailto: builder
├── public/
│   ├── cv.pdf                  # Downloadable CV file (replace with your latest PDF resume)
│   └── icon.svg                # Static favicon asset
├── next.config.ts              # Configured with output: 'export' and images: { unoptimized: true }
├── tailwind.config.ts          # Custom SOC navy/slate/amber (#0B1220, #1B2638, #F2A516) palette
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript strict mode configuration
└── package.json                # Scripts and dependencies
```

---

## 🚀 Quick Start (Install, Dev, Build & Static Export)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Typecheck
```bash
npm run typecheck
```

### 4. Production Build & Static Export (`out/`)
Because `next.config.ts` is configured with `output: 'export'`, running `npm run build` automatically compiles and exports the entire site as static HTML/CSS/JS into the `out/` directory:
```bash
npm run build
```

To preview the static `out/` directory locally:
```bash
npx serve@latest out
```

---

## 🌐 Deployment Guide

### Option A: Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework Preset: **Next.js** (Vercel automatically detects `output: 'export'` or standard Next.js build).
4. Optional Environment Variable:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (used for canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt`).
5. Click **Deploy**.

### Option B: Deploy to Netlify / Cloudflare Pages
- **Build command:** `npm run build`
- **Publish directory:** `out`

### Option C: Deploy to cPanel / Shared Hosting / Nginx VPS
1. Run `npm run build` locally.
2. Open the generated `out/` folder.
3. Upload the contents of `out/` directly to your server's `public_html/` (cPanel) or `/var/www/html` (Nginx/Apache).

### ⚠️ Notes on Static Export Mode (`output: 'export'`)
To guarantee 100% compatibility with static hosting (`output: 'export'`):
- `images: { unoptimized: true }` is enabled in `next.config.ts` so images work without a Node.js image optimization server.
- `app/sitemap.ts` and `app/robots.ts` use `export const dynamic = "force-static"`.
- Features that require a Node.js runtime (such as Server Actions, dynamic API routes `/api/*`, or ISR revalidation webhooks) are intentionally omitted. The contact form uses client-side validation + sanitization and opens a pre-filled `mailto:` link.

---

## 🛠️ Where to Edit Content, Colors & CV

1. **Profile Data, Experience, Skills, Projects, GitHub Repos & Simulated Logs:**
   - Edit [`data/profile.ts`](./data/profile.ts). Every section on the page (including the interactive `SecurityConsole` terminal commands) reads directly from this single file.
2. **Colors, Fonts & Theme Tokens:**
   - Edit [`tailwind.config.ts`](./tailwind.config.ts) and [`app/globals.css`](./app/globals.css).
   - Default SOC colors: Background `#0B1220`, Surface `#1B2638`, Accent Amber `#F2A516`, Status Emerald `#10B981`.
3. **Downloadable CV File:**
   - Replace [`public/cv.pdf`](./public/cv.pdf) with your actual PDF resume. All "Download CV" buttons link directly to `/cv.pdf`.

