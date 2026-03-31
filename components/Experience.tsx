"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b"
      style={{
        borderColor: "var(--border)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Left: Meta */}
      <div>
        <p
          className="text-xs tracking-[0.15em] uppercase font-mono mb-2"
          style={{ color: "var(--gold)" }}
        >
          {job.period.split("–")[0].trim()}
          <br />—{" "}
          {job.period.split("–")[1]?.trim() || "Present"}
        </p>
        <p
          className="text-xs tracking-wider uppercase font-mono"
          style={{ color: "var(--muted)" }}
        >
          {job.location}
        </p>
      </div>

      {/* Right: Content */}
      <div>
        <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
          <h3
            className="font-display font-semibold"
            style={{ fontSize: "1.5rem", color: "var(--ink)" }}
          >
            {job.company}
          </h3>
        </div>
        <p
          className="text-sm tracking-wide mb-5 font-mono"
          style={{ color: "var(--gold)" }}
        >
          {job.role}
        </p>

        <ul className="space-y-2.5">
          {job.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span
                className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              <span style={{ color: "var(--muted)", fontWeight: 300 }}>
                {h}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const titleRef = useReveal();

  return (
    <section
      id="experience"
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
              Career
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
            Work{" "}
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
