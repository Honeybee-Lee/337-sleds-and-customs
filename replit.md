# 337 Sleds & Customs

## Overview
Professional website for 337 Sleds and Customs, a motorcycle and small engine repair company based in Lafayette, LA. Built with Next.js (App Router).

## Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Frontend**: React 18, Tailwind CSS, Framer Motion, Shadcn UI
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Dark industrial theme with orange primary accent (Oxanium display font, Outfit body font, IBM Plex Mono)

## Project Structure
```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (Navbar, Footer, Providers)
  page.tsx              # Home page
  globals.css           # Global styles + Tailwind
  services/page.tsx     # Services listing with filter/search
  contact/page.tsx      # Contact form + shop info
  parts/page.tsx        # Parts "Coming Soon" placeholder
  not-found.tsx         # 404 page
  api/
    services/route.ts   # GET /api/services (+ seed logic)
    messages/route.ts   # POST /api/messages
components/             # Shared React components
  Navbar.tsx            # Fixed nav with mobile menu
  Footer.tsx            # Site footer
  SectionHeader.tsx     # Reusable section header
  ServiceCard.tsx       # Service display card
  Providers.tsx         # QueryClient provider
  ui/                   # Shadcn UI components
hooks/
  use-toast.ts          # Toast notification hook
  use-mobile.tsx        # Mobile detection hook
lib/
  db.ts                 # Drizzle ORM + PostgreSQL connection
  utils.ts              # cn() utility for Tailwind classes
shared/
  schema.ts             # Database schema (messages, services tables)
drizzle.config.ts       # Drizzle migration config
next.config.mjs         # Next.js configuration
tailwind.config.ts      # Tailwind theme configuration
```

## Database Tables
- **services**: id (serial), title, description, category, image
- **messages**: id (serial), name, email, phone, content, createdAt

## Key Features
- Responsive dark industrial design
- Service listing with category filtering and search
- Contact form with Zod validation
- Auto-seeding of service data on first API call
- Parts shop "Coming Soon" page (extensible for future e-commerce)

## Running
Workflow "Start application" runs `npx next dev -p 5000`
