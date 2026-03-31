"use client";

import { useEffect, useState } from "react";
import { personal, stats } from "@/lib/data";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, var(--gold) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, var(--gold) 0%, transparent 70%)",
        }}
      />

      {/* Vertical text accent */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        style={{ color: "var(--border)" }}
      >
        <span
          className="text-xs tracking-[0.3em] font-mono"
          style={{
            writingMode: "vertical-rl",
            color: "var(--muted)",
            opacity: 0.5,
          }}
        >
          SENIOR SOFTWARE ENGINEER
        </span>
        <span
          className="block w-px"
          style={{ height: "80px", background: "var(--border)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="block w-12 h-px"
              style={{ background: "var(--gold)" }}
            />
            <span
              className="text-xs tracking-[0.25em] uppercase font-mono"
              style={{ color: "var(--gold)" }}
            >
              Full-Stack Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-light leading-none mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Usama
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
                fontWeight: 300,
              }}
            >
              Imran
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            {personal.summary.split(".")[0]}.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#experience"
              className="px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                background: "var(--ink)",
                color: "var(--cream)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--ink)";
              }}
            >
              View Experience
            </a>
            <a
              href="mailto:uusamaimran@gmail.com"
              className="px-8 py-3.5 text-sm font-medium tracking-wide border transition-all duration-300"
              style={{
                borderColor: "var(--ink)",
                color: "var(--ink)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--ink)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats row */}
          <div
            className="border-t pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ borderColor: "var(--border)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${0.3 + i * 0.1}s`,
                }}
              >
                <p
                  className="font-display font-light"
                  style={{
                    fontSize: "2.5rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-wider uppercase mt-1 font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
