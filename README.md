# VirtuSol Modern Website

A production-grade, AI-first marketing website for VirtuSol, built with Next.js 14+ (App Router) and Tailwind CSS v4.

## 🧱 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **UI Utils**: `clsx`, `tailwind-merge`
- **Icons**: `lucide-react`
- **Typogaphy**: Inter (Headings), Source Sans 3 (Body), Space Mono (Data)

## 📁 Project Structure

```
/src
  /app              # App Router Pages (Home, etc.)
  /components
    /layout         # Header, Footer
    /sections       # Page-specific sections (Hero, etc.)
    /ui             # Reusable primitives (Buttons, etc.)
  /lib              # Utilities (cn, etc.)
```

## 🎨 Brand System

Configured in `src/app/globals.css` via CSS variables:
- **Primary**: Deep Navy (`#0B1B2B`)
- **Accent**: Electric Blue (`#2F80ED`)
- **Secondary**: Emerald (`#2ECC71`)

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## ✅ Status

- **Core Architecture**: Ready
- **Design System**: Implemented (Colors, Fonts, Tailwind)
- **Layout**: Header (Sticky) & Footer (Full) implemented
- **Home Page**: Hero, Value Blocks, CTA Band implemented
