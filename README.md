
## MemoTag – AI for Dementia Care

![Demo](public/MemoTagvid.gif)

A Tier-1, fully responsive, animated, and conversion-focused one-page website for **MemoTag**, an AI-powered dementia care platform. Built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

---

### 🔗 Live Demo  
[👉 View Live on Vercel](https://memo-tag-umber.vercel.app/)

---

### ✨ Features

- 🧠 **Beautiful Hero Section** with Lottie animation
- 📊 **Problem & Traction Sections** with compelling data and visuals
- 🧩 **Solution Section** with step-based feature highlights
- 📥 **Waitlist Form** integrated with Supabase PostgreSQL
- 🎞️ **Framer Motion Animations** for smooth scrolls and transitions
- 🧭 **Sticky Navbar**, **Animated Partner Logos**, **Back-to-Top Button**
- 💎 **ShadCN UI Components** – Accessible, customizable components styled with Tailwind CSS
- 📱 **Mobile Responsive** – fully optimized for all devices

---

### 🛠️ Tech Stack

| Layer       | Stack                                     |
|------------|--------------------------------------------|
| Frontend    | [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com),[ShadCN UI](https://ui.shadcn.com/),[Framer Motion](https://www.framer.com/motion/), [Lottie](https://lottiefiles.com) |
| Backend     | [Supabase](https://supabase.io) (PostgreSQL + API) |
| Deployment  | [Vercel](https://vercel.com) |

---

### 📂 Folder Structure

```
📁 /sections
  ├─ Hero.tsx
  ├─ ProblemSection.tsx
  ├─ Solution.tsx
  ├─ Traction.tsx
  ├─ CTA.tsx
  ├─ Navbar.tsx
  ├─ Footer.tsx
  └─ BackToTop.tsx

  📁 /componenets
  ├─ /ui          # ShadCN UI components
  ├─ /hero_ani    # hero section animation
  ├─ Navbar.tsx
  └─ Footer.tsx

📁 /lib
  └─ waitlist.ts       # Supabase config

📁 /public
  ├─ STLogo.svg 
  ├─/icons      
  └─ /traction


📁 /app
  └─ page.tsx

📁 /styles
  └─ globals.css
```

---

### 🚀 Getting Started

#### 1. Clone the repo
```bash
git clone https://github.com/PriyaD17/MemoTag.git
cd memotag-site
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Set up Supabase

- Go to [supabase.io](https://supabase.io)
- Create a new project
- Create a table `Waitlist` with a column `email` (type: text)
- Copy your Project URL and Anon Key

#### 4. Configure Supabase

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

#### 5. Run the dev server

```bash
npm run dev
```

---

### 📬 Supabase Table Schema

```sql
create table Waitlist (
  id uuid primary key default uuid_generate_v4(),
  email text not null,
  created_at timestamp with time zone default timezone('utc', now())
);
```

---


### 📤 Deployment

Deploy using **Vercel**:

```bash
npx vercel
```

---
