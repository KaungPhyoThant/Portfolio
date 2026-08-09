import { motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, Clock, Github, Sparkles } from "lucide-react";
import Typewriter from "./Typewriter";
import TerminalCard from "./TerminalCard";
import {
  HERO_CONTENT,
  HERO_STATS,
  SOCIAL_LINKS,
  TYPEWRITER_PHRASES,
} from "../constants";
import {
  fadeUp,
  slideInRight,
  staggerContainer,
} from "../utils/motion";

const statIcons = [Clock, Award, CheckCircle2];

const Hero = () => {
  return (
    <div className="border-b border-white/10 pb-14 sm:pb-16 lg:mb-24">
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
        className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10"
      >
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={fadeUp()}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/10 px-3.5 py-1.5 text-center text-xs font-medium text-violet-200 backdrop-blur-md sm:px-4 sm:text-sm"
            >
              <Sparkles size={15} className="text-violet-400" />
              <span>Open to full-stack work</span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              className="pb-3 pt-2 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:pt-0 lg:text-left lg:text-7xl"
            >
              I build{" "}
              <span className="text-gradient">polished web products</span>{" "}
              end to end.
            </motion.h1>

            <motion.div
              variants={fadeUp(0.15)}
              className="flex min-h-[2.5rem] items-center justify-center text-lg font-medium sm:text-xl lg:justify-start lg:text-2xl"
            >
              <span className="mr-2 text-slate-400">I&apos;m a</span>
              <Typewriter
                words={TYPEWRITER_PHRASES}
                className="text-gradient font-semibold"
              />
            </motion.div>

            <motion.p
              variants={fadeUp(0.2)}
              className="my-1 max-w-xl py-4 text-center text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeUp(0.25)}
              className="grid w-full max-w-2xl gap-3.5 pb-6 sm:grid-cols-3"
            >
              {HERO_STATS.map((item, index) => {
                const IconComponent = statIcons[index] || Award;
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp(0.3 + index * 0.05)}
                    whileHover={{ y: -3 }}
                    className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-200 hover:border-violet-500/30 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-400">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp(0.35)}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 shadow-md shadow-violet-950/40 w-full sm:w-auto"
              >
                <span>Explore projects</span>
                <ArrowUpRight size={18} />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/10 w-full sm:w-auto"
              >
                <Github size={17} />
                <span>View GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 lg:pl-4">
          <motion.div
            variants={slideInRight(0.3)}
            className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
