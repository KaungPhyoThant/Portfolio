"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function NewNav() {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "technologies", "experience", "projects"];
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
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 shadow-lg rounded-full px-4 py-2 hidden sm:flex items-center gap-6 text-sm font-medium z-50 bg-opacity-90"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          opacity: "90%",
        }}
      >
        {["home", "about", "technologies", "experience", "projects"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize px-3 py-1 rounded-full cursor-pointer transition-all ${
              activeSection === section ? "text-gradient" : "text-white"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>
      {/* Sections */}

      <section id="home">
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
      <Contact />
    </div>
  );
}
