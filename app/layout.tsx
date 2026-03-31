import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usama Imran — Senior Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years of experience in MERN Stack, React, Next.js, and cloud-enabled solutions.",
  openGraph: {
    title: "Usama Imran — Senior Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in MERN Stack, React, Next.js, and scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
