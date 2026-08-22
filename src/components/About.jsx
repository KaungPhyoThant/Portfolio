import about from "../assets/profile.png";
import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";
import {
  ABOUT_APPROACH,
  ABOUT_JOURNEY,
  ABOUT_PILLARS,
  PROFILE,
} from "../constants";
import { motion } from "framer-motion";
import {
  Briefcase,
  Layers,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "../utils/motion";

const pillarIcons = [Lightbulb, Layers, Rocket, Users];

const LOOP_DURATION = 4;
const loopTimes = [0, 0.75, 0.82, 0.85, 1];

const loopTransition = {
  duration: LOOP_DURATION,
  repeat: Infinity,
  ease: "linear",
  times: loopTimes,
};

const dotVerticalMotion = {
  top: ["0%", "100%", "100%", "0%", "0%"],
  opacity: [1, 1, 1, 0, 1],
};

const dotHorizontalMotion = {
  left: ["0%", "100%", "100%", "0%", "0%"],
  opacity: [1, 1, 1, 0, 1],
};

const fillVerticalMotion = {
  height: ["0%", "100%", "100%", "0%", "0%"],
  opacity: [1, 1, 1, 0, 1],
};

const fillHorizontalMotion = {
  width: ["0%", "100%", "100%", "0%", "0%"],
  opacity: [1, 1, 1, 0, 1],
};

const dimBorder = "rgba(167, 139, 250, 0.4)";
const glowBorder = "rgba(216, 180, 254, 1)";
const noGlow = "0 0 0 rgba(139, 92, 246, 0)";
const activeGlow = "0 0 22px rgba(139, 92, 246, 0.85)";

const stepBadgeGlow = [
  {
    scale: [1.22, 1, 1, 1, 1],
    boxShadow: [activeGlow, noGlow, noGlow, noGlow, noGlow],
    borderColor: [glowBorder, dimBorder, dimBorder, dimBorder, dimBorder],
    times: [0, 0.06, 0.75, 0.85, 1],
  },
  {
    scale: [1, 1, 1.22, 1, 1, 1],
    boxShadow: [noGlow, noGlow, activeGlow, noGlow, noGlow, noGlow],
    borderColor: [dimBorder, dimBorder, glowBorder, dimBorder, dimBorder, dimBorder],
    times: [0, 0.34, 0.4, 0.46, 0.75, 1],
  },
  {
    scale: [1, 1, 1, 1.22, 1, 1],
    boxShadow: [noGlow, noGlow, noGlow, activeGlow, noGlow, noGlow],
    borderColor: [dimBorder, dimBorder, dimBorder, glowBorder, dimBorder, dimBorder],
    times: [0, 0.68, 0.72, 0.75, 0.85, 1],
  },
];

const StepBadge = ({ step, glow, times }) => (
  <motion.span
    animate={glow}
    transition={{ ...loopTransition, times }}
    className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-surface text-[10px] font-semibold text-violet-200"
  >
    {step}
  </motion.span>
);

StepBadge.propTypes = {
  step: PropTypes.string.isRequired,
  glow: PropTypes.object.isRequired,
  times: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const HowIWork = () => {
  const mobileTrackRef = useRef(null);
  const firstBadgeRef = useRef(null);
  const lastBadgeRef = useRef(null);
  const [mobileTrack, setMobileTrack] = useState(null);

  useLayoutEffect(() => {
    const measureTrack = () => {
      const container = mobileTrackRef.current;
      const first = firstBadgeRef.current;
      const last = lastBadgeRef.current;

      if (!container || !first || !last) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const top = firstRect.top - containerRect.top + firstRect.height / 2;
      const height =
        lastRect.top - containerRect.top + lastRect.height / 2 - top;

      setMobileTrack({ top, height: Math.max(height, 0) });
    };

    measureTrack();

    const container = mobileTrackRef.current;
    const observer =
      typeof ResizeObserver !== "undefined" && container
        ? new ResizeObserver(measureTrack)
        : null;

    observer?.observe(container);
    window.addEventListener("resize", measureTrack);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, []);

  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto mt-10 max-w-5xl border-t border-white/10 pt-8"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
        How I work
      </p>

      {/* Mobile: vertical timeline with traveling progress */}
      <div ref={mobileTrackRef} className="relative mt-8 sm:hidden">
        {mobileTrack && mobileTrack.height > 0 && (
          <div
            className="pointer-events-none absolute left-[13px] w-px overflow-visible"
            style={{ top: mobileTrack.top, height: mobileTrack.height }}
          >
            <div className="h-full w-px bg-violet-500/25" />
            <motion.div
              className="absolute inset-x-0 top-0 w-px origin-top bg-linear-to-b from-violet-400 via-fuchsia-400 to-indigo-400"
              animate={fillVerticalMotion}
              transition={loopTransition}
            />
            <motion.div
              className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.8)]"
              animate={dotVerticalMotion}
              transition={loopTransition}
            />
          </div>
        )}

        <div className="space-y-5">
          {ABOUT_APPROACH.map((item, index) => {
            const { times, ...glow } = stepBadgeGlow[index];
            const isFirst = index === 0;
            const isLast = index === ABOUT_APPROACH.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="relative pl-10"
              >
                <div
                  ref={
                    isFirst
                      ? firstBadgeRef
                      : isLast
                        ? lastBadgeRef
                        : undefined
                  }
                  className="absolute left-0 top-0 z-10 w-7"
                >
                  <StepBadge step={item.step} glow={glow} times={times} />
                </div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop: horizontal flow */}
      <div className="relative mt-10 hidden sm:block">
        <div className="absolute inset-x-[16.666%] top-3.5 h-0.5">
          <div className="h-full rounded-full bg-white/10" />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400"
            animate={fillHorizontalMotion}
            transition={loopTransition}
          />
          <motion.div
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.8)]"
            animate={dotHorizontalMotion}
            transition={loopTransition}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {ABOUT_APPROACH.map((item, index) => {
            const { times, ...glow } = stepBadgeGlow[index];

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                className="relative px-2 text-center"
              >
                <div className="mx-auto mb-5 flex w-fit justify-center">
                  <StepBadge step={item.step} glow={glow} times={times} />
                </div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="border-b border-white/10 pb-16 sm:pb-20">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description="Developer, problem-solver, and builder of products people actually use."
        className="mb-10 pt-20 sm:mb-16 sm:pt-24"
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start lg:gap-10"
      >
        <motion.div variants={slideInLeft()}>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-elevated/60 p-3 glow-ring">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                src={about}
                alt="Kaung Phyo Thant"
                width={320}
                height={320}
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  <MapPin size={12} className="text-violet-300" />
                  {PROFILE.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-200 backdrop-blur-md">
                  <Sparkles size={12} />
                  {PROFILE.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideInRight()} className="lg:mt-2">
          <motion.div
            variants={staggerContainer(0.08, 0.15)}
            className="space-y-5"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
              Journey
            </p>
            {ABOUT_JOURNEY.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeUp()}
                className="relative pl-6"
              >
                {index !== ABOUT_JOURNEY.length - 1 && (
                  <span className="absolute left-[7px] top-6 h-[calc(100%+0.75rem)] w-px bg-violet-500/30" />
                )}
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-violet-400 bg-surface" />
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300/70">
                  {item.year}
                </p>
                <p className="mt-1 font-medium text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <HowIWork />

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ABOUT_PILLARS.map((pillar, index) => {
          const Icon = pillarIcons[index] ?? Briefcase;

          return (
            <motion.div
              key={pillar.title}
              variants={fadeUp()}
              whileHover={{ y: -4 }}
              className="glass-panel p-5"
            >
              <div className="mb-4 inline-flex rounded-xl border border-violet-400/20 bg-violet-500/10 p-2.5">
                <Icon className="text-violet-300" size={20} />
              </div>
              <p className="font-medium text-white">{pillar.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;
