# Anvia — Corporate Website

A premium Japanese technology company website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: DM Serif Display + Noto Sans JP (Google Fonts — free)
- **Deployment**: Vercel (free tier ready)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
/
├── app/
│   ├── layout.tsx           # Root layout with Navbar + Footer
│   ├── page.tsx             # Home page (all sections)
│   ├── globals.css          # Global styles + Tailwind
│   ├── privacy-policy/      # プライバシーポリシー
│   ├── terms-of-service/    # 利用規約
│   └── cookie-policy/       # Cookieポリシー
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── VisionSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── HowWeBuildSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── CompanySection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── AnimatedSection.tsx
├── lib/
│   └── animations.ts        # Framer Motion variants
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy!

## Design Tokens

| Token | Value |
|---|---|
| Background | `#FFFFFF` |
| Surface | `#F5F5F7` |
| Primary text | `#111111` |
| Secondary text | `#444444` |
| Accent / Navy | `#0F172A` |

## Features

- Fully responsive (mobile, tablet, desktop)
- Smooth Framer Motion animations (fade-up + stagger)
- Mobile hamburger menu with animated overlay
- Contact form with client-side success state
- 3 legal pages (Privacy Policy, Terms of Service, Cookie Policy)
- Japanese corporate-grade legal text
- SEO metadata on all pages
- Accessible (semantic HTML, proper ARIA labels)
- Production-ready for Vercel free tier
