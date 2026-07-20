"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileDown } from "lucide-react";
import { profile } from "@/app/data";
import { MagneticButton } from "@/app/components/ui";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";

// Cycles through role titles with a typewriter effect.
function useTypedRoles(roles: string[]) {
  const prefersReduced = useReducedMotion();
  const [text, setText] = useState(prefersReduced ? roles[0] : "");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const current = roles[roleIndex];
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          timeout = setTimeout(() => {
            deleting = true;
            tick();
          }, 1600);
          return;
        }
        timeout = setTimeout(tick, 45);
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          setRoleIndex((i) => (i + 1) % roles.length);
          return;
        }
        timeout = setTimeout(tick, 25);
      }
    };

    timeout = setTimeout(tick, 200);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIndex, prefersReduced]);

  return text;
}

// Signature element: an audio-waveform line — a nod to the signal-processing
// work (FakeLess) at the center of the featured project work.
// Animated with plain CSS (not framer-motion): framer writes animated
// inline styles after mount, which never matches the server-rendered
// markup exactly and trips a hydration warning. CSS keyframes render
// identically on server and client, so there's nothing to reconcile.
function Waveform() {
  const bars = 64;
  const seed = Array.from({ length: bars }, (_, i) => {
    const wave = Math.sin(i * 0.35) * 0.5 + Math.sin(i * 0.12) * 0.5;
    return Math.round((0.15 + Math.abs(wave) * 0.85) * 1000) / 1000;
  });

  return (
    <div
      className="absolute inset-x-0 bottom-0 h-40 sm:h-56 flex items-end justify-center gap-[3px] sm:gap-1 px-4 opacity-70"
      aria-hidden="true"
    >
      {seed.map((h, i) => (
        <span
          key={i}
          className="w-[3px] sm:w-1 rounded-full waveform-bar"
          style={
            {
              background: "linear-gradient(to top, var(--accent-violet), var(--accent-cyan))",
              height: `${h * 100}%`,
              animationDuration: `${3.2 + (i % 7) * 0.35}s`,
              animationDelay: `${(i % 12) * 0.08}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 grid-fade" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--accent-violet), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wide px-3 py-1.5 rounded-full mb-8"
          style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-cyan)" }} />
          {profile.status} · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 h-9 flex items-center justify-center"
        >
          <p className="font-mono text-lg sm:text-xl gradient-text">
            {typed}
            <span className="inline-block w-[2px] h-5 ml-1 align-middle animate-pulse" style={{ background: "var(--accent-cyan)" }} />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#projects" variant="primary">
            View projects
          </MagneticButton>
          <MagneticButton href={profile.resumeUrl} variant="secondary" external icon={false}>
            <FileDown size={15} /> Resume
          </MagneticButton>
          <MagneticButton href={profile.githubProfile} variant="secondary" external icon={false}>
            <GithubIcon size={15} /> GitHub
          </MagneticButton>
          <MagneticButton href={profile.linkedin} variant="secondary" external icon={false}>
            <LinkedinIcon size={15} /> LinkedIn
          </MagneticButton>
        </motion.div>
      </div>

      <div className="relative h-40 sm:h-56 mt-16">
        <Waveform />
      </div>
    </section>
  );
}
