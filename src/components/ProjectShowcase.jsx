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

  const spotlightProject =
    filteredProjects.find((project) => project.liveDemo) ?? filteredProjects[0] ?? PROJECTS[0];

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
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl pt-20 text-center sm:pt-24"
      >
        <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Project Command Center
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          Browse my work by product type, search through the stack, and open a detailed modal to inspect each build.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/50 sm:mt-14 sm:rounded-[2rem]"
      >
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 p-5 sm:p-6 lg:order-1 lg:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              Spotlight
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {spotlightProject?.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {spotlightProject?.category} • {spotlightProject?.status}
            </p>
            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              {spotlightProject?.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {spotlightProject?.highlights?.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {spotlightProject?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              {spotlightProject?.liveDemo && (
                <a
                  href={spotlightProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {spotlightProject?.sourceCode && (
                <a
                  href={spotlightProject.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/40"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="order-1 min-h-[260px] lg:order-2 lg:min-h-full">
            <img
              src={spotlightProject?.image}
              alt={spotlightProject?.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-6 grid gap-6 lg:gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur sm:rounded-[2rem] sm:p-6"
        >
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm text-slate-400">Showing {filteredProjects.length} projects</p>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">Filter the portfolio</h3>
            </div>
            <div className="relative w-full">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search tech, projects, or keywords"
                className="w-full rounded-full border border-white/10 bg-slate-950/60 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {filteredProjects.map((project, index) => (
              <motion.button
                type="button"
                key={project.title}
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                variants={{
                  hover: {
                    y: -8,
                    scale: 1.015,
                    transition: {
                      type: "spring",
                      stiffness: 220,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/45 text-left transition-colors duration-300 hover:border-cyan-300/30 sm:rounded-[1.75rem]"
              >
                <div className="relative h-60 overflow-hidden sm:h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={{
                      hover: {
                        scale: 1.06,
                        y: -4,
                        transition: {
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.status}
                  </div>
                </div>
                <motion.div
                  variants={{
                    hover: {
                      y: -2,
                      transition: {
                        duration: 0.35,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="space-y-4 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <motion.div
                      variants={{
                        hover: {
                          x: 2,
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                    </motion.div>
                    <motion.div
                      variants={{
                        hover: {
                          x: 4,
                          y: -4,
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <ArrowUpRight className="text-slate-400 transition-colors duration-300 group-hover:text-cyan-300" />
                    </motion.div>
                  </div>
                  <p className="line-clamp-3 text-sm leading-6 text-slate-300 sm:leading-7">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </div>

          {!filteredProjects.length && (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-white/15 bg-slate-950/50 p-10 text-center">
              <Filter className="mx-auto text-cyan-300" size={26} />
              <p className="mt-4 text-lg font-medium text-white">No projects match that filter yet.</p>
              <p className="mt-2 text-slate-400">Try another category or a broader search term.</p>
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-3 sm:p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(event) => event.stopPropagation()}
              className="custom-scrollbar relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#08111d] shadow-2xl shadow-black/50 sm:max-h-[90vh] sm:rounded-[2rem]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-black/60"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <div className="relative h-56 overflow-hidden sm:h-80 lg:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111d] via-[#08111d]/25 to-transparent" />
              </div>

              <div className="relative -mt-12 p-4 sm:-mt-20 sm:p-8 lg:p-10">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur sm:rounded-[2rem] sm:p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{selectedProject.status}</p>

                  <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {selectedProject.description}
                  </p>

                  {selectedProject.highlights?.length > 0 && (
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {selectedProject.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    {selectedProject.liveDemo ? (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        <ExternalLink size={18} />
                        Visit Live Demo
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-500"
                      >
                        <ExternalLink size={18} />
                        Demo Unavailable
                      </button>
                    )}

                    {selectedProject.sourceCode ? (
                      <a
                        href={selectedProject.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40"
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-500"
                      >
                        <Github size={18} />
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
