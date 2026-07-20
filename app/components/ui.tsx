"use client";

import { ReactNode, useRef, MouseEvent } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ── Reveal: scroll-triggered fade/slide used across every section ──
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// ── Eyebrow label used above section headings ──
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2"
      style={{ color: "var(--accent-cyan)" }}
    >
      <span className="w-4 h-px" style={{ background: "var(--accent-cyan)" }} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// ── Magnetic button: subtle pull toward the cursor on hover ──
export function MagneticButton({
  href,
  children,
  variant = "primary",
  external,
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  }
  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "primary"
      ? { background: "var(--text-primary)", color: "var(--bg)" }
      : { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" };

  const content = (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={base}
      style={{ ...styles, transition: "transform 0.15s ease-out, background 0.3s, border-color 0.3s" }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      {icon && (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );

  return content;
}

// ── Small tech-stack badge ──
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md"
      style={{
        color: "var(--text-secondary)",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
      }}
    >
      {children}
    </span>
  );
}

// ── Status pill for project cards ──
export function StatusBadge({ status }: { status: string }) {
  const isLive = status === "Production" || status === "Completed";
  return (
    <span
      className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
      style={{
        color: isLive ? "var(--accent-cyan)" : "var(--accent-violet)",
        background: isLive ? "var(--accent-cyan-dim)" : "var(--accent-violet-dim)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: isLive ? "var(--accent-cyan)" : "var(--accent-violet)" }}
      />
      {status}
    </span>
  );
}
