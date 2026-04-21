import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const NavBar = () => {
  return (
    <nav className="mb-6 flex flex-col gap-4 py-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:py-6">
      <div className="text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          Kaung Phyo Thant
        </p>
        <p className="mt-2 text-sm text-slate-300/80">
          Full-stack developer crafting thoughtful web products.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-slate-200 sm:justify-end">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-300"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:text-cyan-300"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
