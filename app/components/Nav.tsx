"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/app/data";
import { GithubIcon } from "@/app/components/icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#connect", label: "Connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className="w-full max-w-5xl flex items-center justify-between rounded-full transition-all duration-300"
        style={{
          marginTop: scrolled ? 10 : 20,
          padding: scrolled ? "8px 10px 8px 20px" : "12px 14px 12px 24px",
          background: scrolled ? "color-mix(in srgb, var(--surface) 78%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <Link href="#home" className="font-display text-sm font-semibold tracking-tight shrink-0">
          M<span style={{ color: "var(--accent-cyan)" }}>.</span>Nabeed
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm transition-colors duration-200 hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="#connect"
            className="text-sm font-medium rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-90"
            style={{ background: "var(--text-primary)", color: "var(--bg)" }}
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
          style={{ border: "1px solid var(--border-strong)" }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[76px] left-4 right-4 rounded-2xl p-4 flex flex-col gap-1 glass"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-3 rounded-lg text-sm flex items-center gap-2"
            style={{ color: "var(--text-primary)" }}
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
