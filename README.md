# Muhammad Nabeed Haider — Portfolio

A modern, responsive portfolio website built to showcase my experience, projects, and technical expertise as an AI Engineer and Computer Science undergraduate.

The portfolio is developed using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, with a focus on performance, accessibility, and clean UI design.

---

## ✨ Features

* Modern responsive design
* Smooth animations powered by Framer Motion
* Expandable project showcase
* Interactive experience timeline
* Skills categorized by domain
* SEO-friendly metadata and structured data
* Optimized for desktop, tablet, and mobile devices

---

## 🛠 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion
* **Deployment:** Vercel

---

## 📁 Project Structure

```text
app/
├── data.ts                 # Portfolio content (profile, skills, projects, timeline)
├── layout.tsx              # Metadata, OpenGraph, JSON-LD
├── page.tsx                # Main application page
├── globals.css             # Global styles and design tokens
│
└── components/
    ├── ui.tsx              # Shared UI components
    ├── icons.tsx           # Social media icons
    ├── Nav.tsx             # Navigation bar
    ├── Hero.tsx            # Hero section
    ├── Projects.tsx        # Projects showcase
    └── Sections.tsx        # About, Skills, Experience, Contact, Footer
```

---

## ⚙️ Customization

Most of the portfolio content is centralized inside:

```text
app/data.ts
```

This includes:

* Personal information
* Social links
* Skills
* Experience timeline
* Featured projects
* Contact information

Updating this file is sufficient to personalize the portfolio without modifying the UI components.

---

## 📄 Resume

To include a downloadable resume:

1. Place your resume inside the `public` directory.
2. Name it:

```text
resume.pdf
```

3. Update the resume path in `app/data.ts` if a different filename is used.

---

## 🖼 Project Images

Project cards currently use gradient placeholders.

To display actual project screenshots:

* Add your images to the `public` directory.
* Replace the placeholder container in `Projects.tsx` with Next.js' `Image` component (`next/image`).

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm start
```

---

## ☁️ Deployment

The project is optimized for deployment on **Vercel**.

Using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Alternatively, import the repository directly into the Vercel Dashboard for automatic deployments.

---

## 📌 Future Improvements

* Blog section
* Project search and filtering
* Dark/Light theme toggle
* Analytics integration
* CMS-backed content management
* Internationalization (i18n)

---

## 📬 Contact

**Muhammad Nabeed Haider**

* GitHub: https://github.com/m-nabeed-haider
* LinkedIn: https://linkedin.com/in/muhammad-nabeed-haider-92a371240
* Email: [nabeedtouseeq@gmail.com](mailto:nabeedtouseeq@gmail.com)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.


Or push this folder to a GitHub repo and import it directly at vercel.com/new — zero config needed, it's a standard Next.js app.
