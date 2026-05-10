"use client";

import { useState } from "react";
import { openSource } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function NpmIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
    </svg>
  );
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

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof openSource)[number];
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
        {/* Index + type badge */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono text-xs"
            style={{ color: "var(--gold)", opacity: 0.6 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {"type" in pkg && pkg.type && (
            <span
              className="text-xs px-2.5 py-1 font-mono tracking-widest uppercase"
              style={{
                background: "rgba(184,146,58,0.08)",
                color: "var(--gold)",
                border: "1px solid rgba(184,146,58,0.2)",
              }}
            >
              {pkg.type}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-display font-semibold mb-3 transition-colors duration-200"
          style={{
            fontSize: "1.35rem",
            color: hovered ? "var(--gold)" : "var(--ink)",
            letterSpacing: "-0.01em",
          }}
        >
          {pkg.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--muted)", fontWeight: 300 }}
        >
          {pkg.description}
        </p>

        {/* Highlights */}
        {"highlights" in pkg && pkg.highlights && pkg.highlights.length > 0 && (
          <ul className="mb-6 flex flex-col gap-2">
            {pkg.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 block w-1 h-1 rounded-full shrink-0"
                  style={{ background: "var(--gold)", opacity: 0.7 }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)", fontWeight: 300 }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {"tags" in pkg && pkg.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {pkg.tags.map((tag, i) => (
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
        )}

        {/* Links */}
        <div
          className="flex items-center gap-4 pt-5 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {"githubUrl" in pkg && pkg.githubUrl && (
            <a
              href={pkg.githubUrl}
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
              <GithubIcon /> GitHub <ArrowUpRight />
            </a>
          )}

          {"githubUrl" in pkg &&
            pkg.githubUrl &&
            "npmUrl" in pkg &&
            pkg.npmUrl && (
              <span
                className="block w-px h-3"
                style={{ background: "var(--border)" }}
              />
            )}

          {"npmUrl" in pkg && pkg.npmUrl && (
            <a
              href={pkg.npmUrl}
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
              <NpmIcon /> npm <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OpenSource() {
  const titleRef = useReveal();

  return (
    <section
      id="open-source"
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
                Open Source
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
              Public{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                Packages
              </span>
            </h2>
          </div>

          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            Libraries and tooling built for the community — published on npm and
            open-sourced on GitHub.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {openSource.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
