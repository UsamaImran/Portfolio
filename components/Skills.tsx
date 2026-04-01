"use client";

import { skills } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export default function Skills() {
  const titleRef = useReveal();

  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ background: "#EFEAD F" }}
    >
      <div
        className="w-full py-24 md:py-32"
        style={{ background: "rgba(26,23,20,0.03)" }}
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
                Expertise
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
              Technical{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                Skills
              </span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, i) => (
              <SkillGroup key={i} group={group} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skills)[number];
  index: number;
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal p-6 border"
      style={{
        borderColor: "var(--border)",
        background: "rgba(245,240,232,0.8)",
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase font-mono mb-5 pb-3 border-b"
        style={{ color: "var(--gold)", borderColor: "var(--border)" }}
      >
        {group.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1.5 font-mono tracking-wide transition-all duration-200"
            style={{
              background: "var(--cream)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
