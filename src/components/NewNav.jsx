"use client";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
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

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

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
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated/80 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-xl"
        >
          Menu
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="sticky top-20 z-40 mb-6 glass-panel p-3 shadow-2xl sm:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <button
                type="button"
                key={section}
                onClick={() => scrollToSection(section)}
                className={`rounded-2xl px-4 py-3 text-sm capitalize transition ${
                  activeSection === section
                    ? "bg-violet-500 text-white"
                    : "bg-white/5 text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <LayoutGroup>
        <nav
          className="fixed left-1/2 top-4 z-50 hidden w-auto max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-surface-elevated/75 px-2 py-2 text-sm font-medium shadow-lg backdrop-blur-xl sm:flex"
          style={{ backdropFilter: "blur(16px) saturate(180%)" }}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative rounded-full px-4 py-2 capitalize transition-colors ${
                activeSection === section
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {activeSection === section && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-full bg-violet-500 shadow-lg shadow-violet-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{section}</span>
            </button>
          ))}
        </nav>
      </LayoutGroup>

      <section id="home" className="pt-14 sm:pt-16">
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
