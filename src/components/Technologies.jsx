import { FaLaravel, FaPhp } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motion";

const technologies = [
  { icon: RiReactjsLine, label: "React", color: "border-violet-400/60 bg-violet-400/10 text-violet-300", delay: 2.5 },
  { icon: RiNextjsFill, label: "Next.js", color: "border-slate-300/40 bg-white/5 text-white", delay: 3 },
  { icon: FaPhp, label: "PHP", color: "border-indigo-400/50 bg-indigo-400/10 text-indigo-300", delay: 3.5 },
  { icon: FaLaravel, label: "Laravel", color: "border-red-400/50 bg-red-400/10 text-red-300", delay: 2.8 },
  { icon: SiNestjs, label: "Nest JS", color: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200", delay: 3.2 },
  { icon: SiPostgresql, label: "PostgreSQL", color: "border-sky-400/50 bg-sky-400/10 text-sky-300", delay: 3.8 },
];

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [-8, 8],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-white/10 pb-16 sm:pb-20">
      <SectionHeading
        eyebrow="Stack"
        title="Core Stack"
        className="mb-10 pt-20 sm:mb-16 sm:pt-24"
      />
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map(({ icon: Icon, label, color, delay }) => (
          <motion.div
            key={label}
            variants={fadeUp()}
            whileHover={{ scale: 1.08, y: -6 }}
            className={`rounded-2xl border-4 p-4 ${color}`}
          >
            <motion.div
              variants={iconVariants(delay)}
              initial="initial"
              animate="animate"
            >
              <Icon className="text-7xl" aria-label={label} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
