# Usama Imran — Portfolio

A clean, elegant portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Deploy to Vercel (3 steps)

### Option A — Vercel CLI (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
vercel
```

Follow the prompts — it auto-detects Next.js. Your site will be live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repo → Vercel auto-detects Next.js settings
4. Click **Deploy** ✓

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles & design tokens
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Fixed navigation
│   ├── Hero.tsx          # Landing + stats
│   ├── Experience.tsx    # Work history timeline
│   ├── Skills.tsx        # Skill categories grid
│   ├── Education.tsx     # Academic background
│   └── Contact.tsx       # Contact + footer
├── lib/
│   └── data.ts           # ← Edit your info here
└── ...config files
```

## ✏️ Customization

All your personal info lives in **`lib/data.ts`**. Edit that file to update:
- Name, title, contact details
- Work experience
- Skills
- Education

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll animations)
- **Google Fonts** — Cormorant Garamond + DM Sans
