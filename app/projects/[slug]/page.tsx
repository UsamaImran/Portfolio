import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13 8H3M3 8L7 4M3 8L7 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export async function generateStaticParams() {
  return projects.map((_, i) => ({ slug: String(i) }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = parseInt(params.slug, 10);
  const project = projects[index];

  if (!project) notFound();

  const prev = projects[index - 1]
    ? { ...projects[index - 1], index: index - 1 }
    : null;
  const next = projects[index + 1]
    ? { ...projects[index + 1], index: index + 1 }
    : null;

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Navbar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "rgba(245,240,232,0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-mono tracking-wide transition-colors duration-200"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft /> Back to Projects
          </Link>
          <span
            className="font-display text-xl font-semibold"
            style={{ color: "var(--ink)" }}
          >
            UI<span style={{ color: "var(--gold)" }}>.</span>
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="block w-12 h-px"
            style={{ background: "var(--gold)" }}
          />
          <span
            className="text-xs tracking-[0.25em] uppercase font-mono"
            style={{ color: "var(--gold)" }}
          >
            {String(index + 1).padStart(2, "0")} / {project.type}
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

        <h1
          className="font-display font-light mb-6"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.filter(Boolean).map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 font-mono"
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

        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Live Demo <ArrowUpRight />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide border transition-all duration-300"
              style={{
                borderColor: "var(--ink)",
                color: "var(--ink)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <GithubIcon /> Source Code
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        className="max-w-4xl mx-auto px-6 md:px-12"
        style={{ borderTop: "1px solid var(--border)" }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-[1fr_260px] gap-16">
        {/* Left */}
        <div className="space-y-12">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-4"
              style={{ color: "var(--gold)" }}
            >
              Overview
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted)", fontWeight: 300 }}
            >
              {project.description}
            </p>
          </div>

          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-4"
              style={{ color: "var(--gold)" }}
            >
              The Problem
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--muted)", fontWeight: 300 }}
            >
              {project.problem}
            </p>
          </div>

          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-4"
              style={{ color: "var(--gold)" }}
            >
              The Solution
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--muted)", fontWeight: 300 }}
            >
              {project.solution}
            </p>
          </div>

          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-5"
              style={{ color: "var(--gold)" }}
            >
              Key Features
            </p>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <span style={{ color: "var(--muted)", fontWeight: 300 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div
            className="p-6 border sticky top-24"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-mono mb-5 pb-4 border-b"
              style={{ color: "var(--muted)", borderColor: "var(--border)" }}
            >
              Project Info
            </p>
            <div className="space-y-5">
              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  Role
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink)", fontWeight: 300 }}
                >
                  {project.role}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  Year
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink)", fontWeight: 300 }}
                >
                  {project.year}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  Type
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink)", fontWeight: 300 }}
                >
                  {project.type}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-mono mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.filter(Boolean).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 font-mono"
                      style={{
                        background: "rgba(184,146,58,0.07)",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Prev / Next */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.index}`}
              className="py-10 pr-8 border-r flex flex-col gap-2 group"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="text-xs font-mono tracking-widest uppercase flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <ArrowLeft /> Previous
              </span>
              <span
                className="font-display text-lg group-hover:text-[var(--gold)] transition-colors duration-200"
                style={{ color: "var(--ink)" }}
              >
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.index}`}
              className="py-10 pl-8 flex flex-col gap-2 items-end group"
            >
              <span
                className="text-xs font-mono tracking-widests uppercase flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                Next <ArrowUpRight />
              </span>
              <span
                className="font-display text-lg group-hover:text-[var(--gold)] transition-colors duration-200"
                style={{ color: "var(--ink)" }}
              >
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}
