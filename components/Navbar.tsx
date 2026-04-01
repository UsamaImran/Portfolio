"use client";

import { githubLink } from "@/lib/data";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
    -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 
    3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
    0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
    1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 
    3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
    5.92.435.375.81 1.096.81 2.22 
    0 1.606-.015 2.896-.015 3.286 
    0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 
    24 5.37 18.63 0 12 0z"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight"
          style={{ color: "var(--ink)" }}
        >
          UI<span style={{ color: "var(--gold)" }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body tracking-wide transition-colors duration-200"
                style={{ color: "var(--muted)", fontWeight: 400 }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* GitHub */}
          <li>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              <GithubIcon />
            </a>
          </li>

          {/* Hire Me */}
          <li>
            <a
              href="mailto:uusamaimran@gmail.com"
              className="px-5 py-2 text-sm font-medium border transition-all duration-200"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: "var(--ink)",
              transform: menuOpen
                ? "rotate(45deg) translate(2px, 2px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: "var(--ink)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: "var(--ink)",
              transform: menuOpen
                ? "rotate(-45deg) translate(2px, -2px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            background: "var(--cream)",
            borderColor: "var(--border)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base"
              style={{ color: "var(--ink)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* GitHub Mobile */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base"
            style={{ color: "var(--ink)" }}
          >
            <GithubIcon />
            GitHub
          </a>

          {/* Hire Me */}
          <a
            href="mailto:uusamaimran@gmail.com"
            className="text-base font-medium mt-2"
            style={{ color: "var(--gold)" }}
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
