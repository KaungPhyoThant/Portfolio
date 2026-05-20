import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";
import { fadeUp } from "../utils/motion";

const NavBar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeUp()}
      className="mb-4 flex flex-col gap-4 py-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:py-3"
    >
      <div className="text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300/80">
          Kaung Phyo Thant
        </p>
        <p className="mt-1 text-sm text-slate-300/80">
          Full-stack developer building web products.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-slate-200 sm:justify-end">
        <motion.a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-violet-400/40 hover:text-violet-300"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-violet-400/40 hover:text-violet-300"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
