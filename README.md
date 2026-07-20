# Muhammad Nabeed Haider — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## File structure (kept intentionally small)

```
app/
  data.ts                 # ALL editable content — name, links, projects, skills, timeline
  layout.tsx               # metadata, OpenGraph, JSON-LD structured data
  page.tsx                  # composes the sections in order
  globals.css                # design tokens (colors, fonts) + base styles
  components/
    ui.tsx                    # shared primitives: Reveal, buttons, badges, section heading
    icons.tsx                  # GitHub / LinkedIn icons
    Nav.tsx                     # sticky navbar
    Hero.tsx                     # hero + waveform signature animation
    Projects.tsx                  # expandable project cards
    Sections.tsx                   # About, Skills, Experience, Connect, Footer
```

## Before you deploy — fill these in

Everything you need to personalize lives in **`app/data.ts`**, marked `// TODO`:

- `profile.email`, `profile.linkedin`, `profile.resumeUrl`
- `githubUrl` on each project in the `projects` array (currently placeholder repo URLs)
- `timeline` — swap the placeholder internship/research/role entries for the real thing as you land them
- each project's `timeline`, `role`, and `lessons` fields

Also update `siteUrl` in `app/layout.tsx` once you have your real Vercel domain (used for OpenGraph/canonical metadata).

To add a resume: drop `resume.pdf` into `/public` (path already wired to `profile.resumeUrl`).

To swap a project thumbnail for a real screenshot: replace the gradient placeholder `div` at the top of each card in `Projects.tsx` with an `<Image>` from `next/image`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel   # or use the Vercel dashboard's "Import Git Repository"
vercel
```

Or push this folder to a GitHub repo and import it directly at vercel.com/new — zero config needed, it's a standard Next.js app.
