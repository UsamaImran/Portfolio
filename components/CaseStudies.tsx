"use client";

import Link from "next/link";
import { projects, caseStudies } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "./Projects";

export default function CaseStudies() {
  const titleRef = useReveal();

  // Only projects that have case studies
  const studies = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => caseStudies[project.title]);

  return (
    <section
      id="case-studies"
      className="py-24 md:py-32"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
                DEEP DIVES
              </span>
            </div>
            <h2
              className="font-display font-light"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--ink)",
              }}
            >
              Case Studies
            </h2>
          </div>
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Detailed breakdowns of architecture decisions, challenges, and
            outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {studies.map(({ project, index }, i) => {
            const cs = caseStudies[project.title];
            return (
              <Link
                key={i}
                href={`/projects/${index}`}
                className="group block border p-8 hover:border-[var(--gold)] transition-all duration-300 hover:bg-[rgba(184,146,58,0.03)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--gold)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-xs px-3 py-1 font-mono"
                    style={{
                      color: "var(--gold)",
                      border: "1px solid var(--gold)",
                    }}
                  >
                    CASE STUDY
                  </span>
                </div>

                <h3 className="font-display text-2xl mb-3 group-hover:text-[var(--gold)] transition-colors">
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  {cs?.subtitle || project.description}
                </p>

                <div
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  Read Full Case Study
                  <ArrowUpRight />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
