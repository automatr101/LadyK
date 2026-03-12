# Affiliate Marketing Funnel: AI Automation Academy

A high-converting, premium landing page and bridge page system built with Next.js, Tailwind CSS, and Supabase. Designed specifically for Pinterest traffic to capture leads before redirecting to the Digistem course platform.

## 🚀 Features

- **Premium UI/UX**: Dark mode aesthetic with Magic UI-inspired spotlight effects and animated gradients.
- **Conversion-Focused**: Optimized lead capture form using shadcn/ui and react-hook-form.
- **Micro-interactions**: Smooth Framer Motion animations and hover effects.
- **Lead Management**: Integrated with Supabase for real-time lead storage.
- **Mobile First**: Fully responsive design optimized for mobile Pinterest traffic.

## 📁 Project Structure

```
project/
├── app/              # Next.js App Router (Landing & Bridge Pages)
├── components/       # Reusable UI components & Spotlight effects
├── lib/              # Supabase client & utilities
├── docs/             # PRD & Database Schemas
├── AGENT.md          # Autonomous agent instructions
└── README.md         # Project overview
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Components**: shadcn/ui, Lucide Icons
- **Animation**: Framer Motion
- **Database**: Supabase
- **Validation**: Zod + React Hook Form

## 🚦 Getting Started

### 1. Database Setup
Run the SQL script found in `docs/supabase-schema.sql` in your Supabase SQL Editor to create the `leads` table and configure Row Level Security.

### 2. Environment Variables
Create a `.env.local` file in the root and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Installation
```bash
npm install
```

### 4. Development
```bash
npm run dev
```

## 📈 Completion Criteria
- [x] Landing page with lead capture form.
- [x] Secured lead storage in Supabase.
- [x] Seamless redirection to the Bridge Page.
- [x] Final redirect to the Digistem affiliate link.

---
Built for conversion. Powered by AI.
