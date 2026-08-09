import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motion";

const Experience = () => {
  return (
    <div className="border-b border-white/10 pb-16 sm:pb-20">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        className="mb-10 pt-20 sm:mb-16 sm:pt-24"
      />

      {/* Timeline Stream Wrapper */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative ml-3 sm:ml-6 py-2"
      >
        {EXPERIENCES.map((experience, index) => {
          const isLast = index === EXPERIENCES.length - 1;
          return (
            <motion.div
              key={`${experience.company}-${experience.year}`}
              variants={fadeUp()}
              className="relative pb-8 last:pb-0"
            >
              {/* Segmented Timeline Line (drawn only to the next node to prevent bottom overflow) */}
              {!isLast && (
                <div className="absolute left-0 top-6 bottom-[-24px] w-[1px] bg-white/[0.08] z-0" />
              )}

              {/* Pulsing Timeline Node Pin */}
              <div className="absolute -left-[8px] top-6 h-4 w-4 rounded-full border border-violet-500 bg-[#06040d] shadow-[0_0_10px_rgba(139,92,246,0.8)] z-10 flex items-center justify-center select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              </div>

              {/* Glassmorphic Experience Card */}
              <div className="group relative ml-6 sm:ml-8 p-6 rounded-[22px] border border-white/[0.06] bg-[#0c0a1a]/40 backdrop-blur-md transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_20px_50px_rgba(139,92,246,0.04)] hover:-translate-y-1">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="space-y-1">
                  <h6 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-200 transition-colors duration-200">
                    {experience.role}
                  </h6>
                  <p className="text-gradient font-bold text-xs sm:text-sm">
                    {experience.company}
                  </p>
                </div>
                
                {/* Year Pill */}
                <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1 text-xs font-semibold text-slate-400 select-none self-start sm:self-center">
                  {experience.year}
                </span>
              </div>

              {/* Job Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400">
                {experience.description}
              </p>

              {/* Technologies Badges */}
              <div className="mt-6 flex flex-wrap gap-1.5 select-none">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold text-violet-200 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
