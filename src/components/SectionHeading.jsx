import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../utils/motion";

const SectionHeading = ({ eyebrow, title, description, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp()}
      className={`mx-auto max-w-3xl text-center ${className}`}
    >
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
};

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default SectionHeading;
