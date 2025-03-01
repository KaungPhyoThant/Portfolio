"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function NewNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false); // Close menu after clicking
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
      {/* Floating Navbar (Desktop Only) */}
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
            className={`capitalize px-3 py-1 rounded-full transition-all ${
              activeSection === section ? "text-gradient" : "text-white"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="fixed top-4 right-4 sm:hidden text-white bg-gray-800 p-2 rounded-md shadow-lg z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu (Hidden by Default) */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="mt-10 flex flex-col gap-4">
          {["home", "about", "technologies", "experience", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block text-white py-2 w-full text-left text-lg capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <NavBar />
      <section id="home">
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
