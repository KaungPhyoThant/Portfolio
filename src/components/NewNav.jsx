"use client";
import { useEffect, useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { SOCIAL_LINKS } from "../constants";

const sections = ["home", "about", "technologies", "experience", "projects", "contact"];

export default function NewNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
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
    <div className="relative">
      {/* Floating Glassmorphic Top Navbar Dock */}
      <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl select-none">
        <div className="rounded-2xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">

          {/* Logo / Branding */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            <span className="text-gradient font-display text-sm sm:text-base font-bold tracking-widest transition group-hover:opacity-85">
              KAUNG PHYO THANT
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-1">
            <LayoutGroup>
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative rounded-xl px-3.5 py-1.5 text-xs sm:text-sm capitalize font-medium transition-colors ${
                    activeSection === section
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeSection === section && (
                    <motion.span
                      layoutId="activeHeaderPill"
                      className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{section}</span>
                </button>
              ))}
            </LayoutGroup>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center gap-3 text-slate-400">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:text-white transition-all duration-200"
              aria-label="GitHub profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:text-white transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={16} />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-slate-300 hover:text-white p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] active:scale-95 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Floating Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="sm:hidden mt-2 rounded-2xl border border-white/[0.08] bg-[#070512]/55 backdrop-blur-2xl p-4 space-y-1 shadow-2xl"
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left rounded-xl px-4 py-3 capitalize text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-violet-500/15 text-violet-300 border border-violet-500/25"
                      : "text-slate-400 hover:bg-white/[0.02] hover:text-slate-200"
                  }`}
                >
                  {section}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06] px-4 justify-start text-xs font-semibold select-none">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  GITHUB
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  LINKEDIN
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Sections (added top padding spacer for floating nav) */}
      <section id="home" className="pt-24 sm:pt-28">
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
