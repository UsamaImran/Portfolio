import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import OpenSource from "@/components/OpenSource";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OpenSource />
      <Projects />
      <CaseStudies />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
