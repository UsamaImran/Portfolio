"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H4M12 2V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="reveal flex flex-col border transition-all duration-300"
      style={{
        borderColor: hovered ? "var(--gold)" : "var(--border)",
        background: hovered ? "rgba(184,146,58,0.03)" : "transparent",
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top bar accent */}
      <div
        className="h-px w-full transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(90deg, var(--gold), transparent)"
            : "transparent",
        }}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Index + featured badge */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono text-xs"
            style={{ color: "var(--gold)", opacity: 0.6 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span
              className="text-xs px-2.5 py-1 font-mono tracking-widest uppercase"
              style={{
                background: "rgba(184,146,58,0.1)",
                color: "var(--gold)",
                border: "1px solid rgba(184,146,58,0.25)",
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/projects/${index}`}>
          <h3
            className="font-display font-semibold mb-3 transition-colors duration-200 cursor-pointer"
            style={{
              fontSize: "1.35rem",
              color: hovered ? "var(--gold)" : "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--muted)", fontWeight: 300 }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 font-mono"
              style={{
                background: "rgba(26,23,20,0.05)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-4 pt-5 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase font-mono transition-colors duration-200"
            style={{ color: "var(--ink)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink)")
            }
          >
            Live Demo <ArrowUpRight />
          </a>

          <span
            className="block w-px h-3"
            style={{ background: "var(--border)" }}
          />

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase font-mono transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
            }
          >
            <GithubIcon /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useReveal();

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          ref={titleRef}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="block w-12 h-px"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="text-xs tracking-[0.25em] uppercase font-mono"
                style={{ color: "var(--gold)" }}
              >
                Work
              </span>
            </div>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Selected{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                Projects
              </span>
            </h2>
          </div>

          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            A curated selection of projects built across product, client, and
            personal work.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
