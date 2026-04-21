"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const sections = ["home", "about", "technologies", "experience", "projects", "contact"];

export default function NewNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= window.innerHeight / 3) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative pb-24 sm:pb-0">
      <div className="sticky top-4 z-50 mb-4 flex items-center justify-end sm:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-xl"
        >
          Menu
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sticky top-20 z-40 mb-6 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl sm:hidden">
          <div className="grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <button
                type="button"
                key={section}
                onClick={() => scrollToSection(section)}
                className={`rounded-2xl px-4 py-3 text-sm capitalize transition ${
                  activeSection === section
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      <nav
        className="fixed left-1/2 top-4 z-50 hidden w-auto max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-slate-950/75 px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-xl sm:flex"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`rounded-full px-4 py-2 capitalize transition-all ${
              activeSection === section
                ? "bg-cyan-400 text-slate-950"
                : "text-white hover:bg-white/8"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>
      <section id="home" className="pt-18 sm:pt-24">
        <NavBar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
