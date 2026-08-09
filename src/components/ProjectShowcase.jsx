import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Filter,
  Github,
  Search,
  X,
} from "lucide-react";
import { PROJECTS } from "../constants";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "../utils/motion";

const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const haystack = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();
    const matchesQuery = haystack.includes(query.trim().toLowerCase());

    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <div className="border-b border-white/10 pb-20 sm:pb-24">
      {/* Scoped Scrollbar Style for Modal */}
      <style>{`
        .modal-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.2);
          border-radius: 99px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.4);
        }
      `}</style>

      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Search, filter, and explore my full-stack web products."
        className="pt-20 sm:pt-24"
      />

      {/* Modern Unified Search and Filter Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        className="mt-10 p-5 rounded-[24px] border border-white/[0.06] bg-white/[0.01] backdrop-blur-md flex flex-col gap-5 md:flex-row md:items-center md:justify-between sm:mt-14"
      >
        {/* Horizontal Category Tab Pills */}
        <div className="flex flex-wrap gap-2 select-none order-2 md:order-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-violet-400 text-slate-950 shadow-[0_4px_20px_rgba(139,92,246,0.22)]"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Custom Search Box */}
        <div className="relative w-full md:max-w-xs order-1 md:order-2">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search tech or details..."
            className="w-full rounded-full border border-white/10 bg-slate-950/60 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20"
          />
        </div>
      </motion.div>

      {/* Grid of Projects */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#0c0a1a]/40 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] hover:-translate-y-1.5"
          >
            {/* Card Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0b1d] border-b border-white/[0.04]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-contain scale-[0.88] group-hover:scale-[0.96] transition-transform duration-500 ease-out"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur-sm select-none uppercase tracking-wider">
                {project.status}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-[0.2em] text-violet-400 uppercase select-none">
                  {project.category}
                </span>
                
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="text-slate-400 group-hover:text-violet-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5 select-none">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 text-[9px] font-semibold text-slate-300 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2 py-1 text-[9px] font-semibold text-violet-400 tracking-wide">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Fallback */}
      {!filteredProjects.length && (
        <div className="mt-8 rounded-[24px] border border-dashed border-white/10 bg-slate-950/20 p-12 text-center">
          <Filter className="mx-auto text-violet-300 animate-pulse" size={24} />
          <p className="mt-4 text-base font-semibold text-white">No matching projects found.</p>
          <p className="mt-1 text-xs text-slate-500">Try adjusting your filters or search terms.</p>
        </div>
      )}

      {/* Premium Drawer Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[26px] border border-white/10 bg-[#070511] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 text-white hover:bg-black/60 transition active:scale-95"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              {/* Scrollable Container */}
              <div className="max-h-[90vh] overflow-y-auto modal-scroll">
                {/* Large Preview Image */}
                <div className="relative w-full aspect-[16/10] bg-[#0c0a1a] flex items-center justify-center overflow-hidden border-b border-white/[0.06]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-contain p-6 scale-95"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#070511] to-transparent" />
                </div>

                {/* Content Details Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-violet-400 uppercase select-none">
                      {selectedProject.category}
                    </span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 select-none">
                      {selectedProject.status}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  {selectedProject.highlights?.length > 0 && (
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase select-none">
                        Key Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProject.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 text-xs text-slate-300 select-none"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase select-none">
                      Technologies used
                    </span>
                    <div className="flex flex-wrap gap-1.5 select-none">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/[0.06]">
                    {selectedProject.liveDemo ? (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-violet-400 hover:bg-violet-300 px-5 py-3 font-semibold text-slate-950 text-sm transition active:scale-95 shadow-[0_4px_20px_rgba(167,139,250,0.15)]"
                      >
                        <ExternalLink size={16} />
                        Visit Live Site
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-3 font-semibold text-slate-500 text-sm select-none"
                      >
                        <ExternalLink size={16} />
                        Demo Offline
                      </button>
                    )}

                    {selectedProject.sourceCode ? (
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:border-violet-500/30 px-5 py-3 font-semibold text-white text-sm transition active:scale-95"
                      >
                        <Github size={16} />
                        View Source Code
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-3 font-semibold text-slate-500 text-sm select-none"
                      >
                        <Github size={16} />
                        Private Repository
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;
