"use client";

import { education } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export default function Education() {
  const titleRef = useReveal();
  const cardRef = useReveal();

  return (
    <section
      id="education"
      className="py-24 md:py-32"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div ref={titleRef} className="reveal mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="block w-12 h-px"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="text-xs tracking-[0.25em] uppercase font-mono"
              style={{ color: "var(--gold)" }}
            >
              Academic
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
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              Education
            </span>
          </h2>
        </div>

        {/* Education card */}
        <div
          ref={cardRef}
          className="reveal grid md:grid-cols-[1fr_1.2fr] gap-0 border"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Left */}
          <div
            className="p-8 md:p-12 border-b md:border-b-0 md:border-r"
            style={{
              borderColor: "var(--border)",
              background: "rgba(184,146,58,0.04)",
            }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-6"
              style={{ color: "var(--gold)" }}
            >
              {education.year}
            </p>
            <h3
              className="font-display font-semibold mb-2"
              style={{ fontSize: "1.75rem", color: "var(--ink)" }}
            >
              {education.institution}
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--muted)", fontWeight: 300 }}
            >
              {education.location}
            </p>
            <span
              className="block w-8 h-px mb-4"
              style={{ background: "var(--gold)" }}
            />
            <p
              className="text-base font-medium"
              style={{ color: "var(--ink)" }}
            >
              {education.degree}
            </p>
          </div>

          {/* Right: Courses */}
          <div className="p-8 md:p-12">
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-6"
              style={{ color: "var(--muted)" }}
            >
              Relevant Coursework
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {education.courses.map((course, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-1 h-1 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--muted)", fontWeight: 300 }}
                  >
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
