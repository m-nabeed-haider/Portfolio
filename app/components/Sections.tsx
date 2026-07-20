"use client";

import { Mail, FileDown } from "lucide-react";
import { aboutPoints, profile, skillGroups, timeline } from "@/app/data";
import { Eyebrow, MagneticButton, Reveal, SectionHeading } from "@/app/components/ui";
import { GithubIcon, LinkedinIcon } from "@/app/components/icons";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <SectionHeading
          eyebrow="About"
          title="AI engineering, held to a production standard."
          description={profile.summary}
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {aboutPoints.map((point, i) => (
            <Reveal key={point.label} delay={i * 0.08}>
              <div
                className="rounded-xl p-5 h-full transition-colors duration-300 hover:border-[var(--border-strong)]"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <h3 className="font-display text-base font-semibold" style={{ color: "var(--accent-cyan)" }}>
                  {point.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {point.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-8" style={{ background: "var(--bg-elevated)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Toolset"
          title="What I build with."
          description="Grouped by where it sits in the stack — from model training down to the infrastructure that keeps it running."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div
                className="rounded-xl p-5 h-full"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <h3 className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: "var(--text-tertiary)" }}>
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg"
                      style={{ color: "var(--text-primary)", background: "var(--bg)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Trajectory"
          title="Experience."
          description="Currently in my final year and building toward a research or applied AI role — the entries below mark where that's headed."
        />
        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px" style={{ background: "var(--border-strong)" }} />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title + item.period} delay={i * 0.07}>
                <div className="relative">
                  <span
                    className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full"
                    style={{
                      background: item.placeholder ? "var(--bg-elevated)" : "var(--accent-cyan)",
                      border: `2px solid ${item.placeholder ? "var(--border-strong)" : "var(--accent-cyan)"}`,
                    }}
                  />
                  <p className="font-mono text-xs tracking-wide" style={{ color: "var(--text-tertiary)" }}>
                    {item.period}
                  </p>
                  <h3 className="font-display text-lg font-semibold mt-1.5">
                    {item.title}
                    <span className="font-body font-normal" style={{ color: "var(--text-secondary)" }}>
                      {" "}
                      — {item.org}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Connect() {
  return (
    <section id="connect" className="relative py-28 sm:py-36 px-6 sm:px-8">
      <div
        className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Reveal>
            <Eyebrow>Connect</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 tracking-tight max-w-2xl mx-auto">
              Open to AI engineering, ML, and research roles.
            </h2>
            <p className="mt-5 max-w-lg mx-auto text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you&rsquo;re hiring for AI, ML, MLOps, or research-adjacent work — or want to talk about any of the
              projects above — I&rsquo;m easy to reach.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary" icon={false}>
                <Mail size={15} /> Email me
              </MagneticButton>
              <MagneticButton href={profile.githubProfile} variant="secondary" external icon={false}>
                <GithubIcon size={15} /> GitHub
              </MagneticButton>
              <MagneticButton href={profile.linkedin} variant="secondary" external icon={false}>
                <LinkedinIcon size={15} /> LinkedIn
              </MagneticButton>
              <MagneticButton href={profile.resumeUrl} variant="secondary" external icon={false}>
                <FileDown size={15} /> Resume
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-10">
      <div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm"
        style={{ borderTop: "1px solid var(--border)", color: "var(--text-tertiary)" }}
      >
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
