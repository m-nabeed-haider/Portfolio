import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/app/data";

// TODO: replace with your real deployed domain once you have one on Vercel
const siteUrl = "https://your-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — AI Engineer & Machine Learning Engineer`,
  description: profile.summary,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "MLOps",
    "RAG",
    "LLM",
    profile.name,
  ],
  authors: [{ name: profile.name, url: profile.githubProfile }],
  openGraph: {
    title: `${profile.name} — AI Engineer & Machine Learning Engineer`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & Machine Learning Engineer`,
    description: profile.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#121218",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roles[0],
  description: profile.summary,
  url: siteUrl,
  sameAs: [profile.githubProfile, profile.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "FAST National University",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
