"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { projects, type Project } from "@/app/data";
import { Badge, Reveal, SectionHeading, StatusBadge } from "@/app/components/ui";
import { GithubIcon } from "@/app/components/icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={index * 0.06}>
      <div
        className="rounded-2xl overflow-hidden transition-colors duration-300"
        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        {/* slim accent header — replaces the old full-height thumbnail that
            just repeated the title and ate a lot of vertical space */}
        <div
          className="h-1.5 w-full"
          style={{ background: "linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))" }}
          aria-hidden="true"
        />

        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-xs tracking-wide" style={{ color: "var(--accent-cyan)" }}>
              {project.tag}
            </p>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold mt-2 tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-2 transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
            >
              <GithubIcon size={14} /> Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-2 transition-colors duration-200"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-sm font-medium ml-auto transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
            >
              {expanded ? "Less detail" : "Full breakdown"}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={15} />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="mt-6 pt-6 grid sm:grid-cols-2 gap-6"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div className="flex gap-8 sm:col-span-2 font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
                    <span>
                      TIMELINE <span style={{ color: "var(--text-secondary)" }}>{project.timeline}</span>
                    </span>
                    <span>
                      ROLE <span style={{ color: "var(--text-secondary)" }}>{project.role}</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-semibold" style={{ color: "var(--accent-violet)" }}>
                      Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold" style={{ color: "var(--accent-cyan)" }}>
                      Solution
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-semibold">Architecture</h4>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.architecture}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold">Key features</h4>
                    <ul className="mt-2 space-y-1.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="text-sm flex items-start gap-2" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent-cyan)" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2">
                    <h4 className="font-display text-sm font-semibold">Lessons learned</h4>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.lessons}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Featured work"
          title="Systems, not scripts."
          description="Each of these went past a notebook: adversarial ML, retrieval pipelines, and agent orchestration, built with the deployment and evaluation layer that makes them usable outside a demo."
        />
        <div className="mt-14 grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
