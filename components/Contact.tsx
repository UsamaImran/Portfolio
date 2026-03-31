"use client";

import { useEffect, useRef } from "react";
import { personal } from "@/lib/data";

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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "✉",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    icon: "✆",
  },
  {
    label: "Location",
    value: personal.location,
    href: "#",
    icon: "◎",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: personal.linkedin,
    icon: "↗",
  },
];

export default function Contact() {
  const titleRef = useReveal();
  const contentRef = useReveal();

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "var(--ink)" }}
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
              {`Let's Connect`}
            </span>
          </div>
          <h2
            className="font-display font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--cream)",
              letterSpacing: "-0.02em",
            }}
          >
            Get In{" "}
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>Touch</span>
          </h2>
          <p
            className="mt-4 text-base max-w-lg leading-relaxed"
            style={{ color: "rgba(245,240,232,0.5)", fontWeight: 300 }}
          >
            {`I'm open to new opportunities, collaborations, and interesting
            conversations. Feel free to reach out through any of the channels
            below.`}
          </p>
        </div>

        {/* Contact grid */}
        <div
          ref={contentRef}
          className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px border"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {contactItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                item.label === "LinkedIn" ? "noopener noreferrer" : undefined
              }
              className="block p-8 transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.03)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(184,146,58,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <span
                className="block text-2xl mb-4 font-mono transition-colors duration-300"
                style={{ color: "var(--gold)" }}
              >
                {item.icon}
              </span>
              <p
                className="text-xs tracking-[0.2em] uppercase font-mono mb-2"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm transition-colors duration-300"
                style={{ color: "var(--cream)", fontWeight: 300 }}
              >
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs font-mono tracking-wide"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            © {new Date().getFullYear()} Usama Imran — All rights reserved.
          </p>
          <p
            className="text-xs font-mono tracking-wide"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Senior Software Engineer · MERN Stack · Lahore, PK
          </p>
        </div>
      </div>
    </section>
  );
}
