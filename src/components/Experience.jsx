import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "../utils/motion";

const Experience = () => {
  return (
    <div className="border-b border-white/10 pb-16 sm:pb-20">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        className="mb-10 pt-20 sm:mb-16 sm:pt-24"
      />
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-6"
      >
        {EXPERIENCES.map((experience) => (
          <motion.div
            key={`${experience.company}-${experience.year}`}
            variants={fadeUp()}
            whileHover={{ y: -4 }}
            className="flex flex-wrap glass-panel p-5 sm:p-6 lg:items-start lg:justify-center"
          >
            <motion.div variants={slideInLeft()} className="w-full lg:w-1/4">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-violet-300/80">
                {experience.year}
              </p>
            </motion.div>
            <motion.div variants={slideInRight()} className="w-full max-w-2xl lg:w-3/4">
              <h6 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                {experience.role} -{" "}
                <span className="text-gradient mb-2 font-bold">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
