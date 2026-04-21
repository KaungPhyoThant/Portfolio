import { FEATURED_FOCUS, HERO_CONTENT, HERO_STATS, SOCIAL_LINKS } from "../constants";
import ProfilePic from "../assets/profile2.png";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

const container = delay => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
});

const Hero = () => {
    return (
        <div className="border-b border-white/10 pb-14 sm:pb-16 lg:mb-24">
            <div className="flex flex-wrap items-center gap-y-10 pt-4 sm:pt-6 lg:pt-16">
                <div className="w-full lg:w-7/12">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.div
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-center text-xs text-cyan-100 shadow-lg shadow-cyan-950/30 sm:px-4 sm:text-sm"
                        >
                            <Sparkles size={16} className="text-cyan-300" />
                            Available for product-focused full-stack work
                        </motion.div>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-5 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:mt-6 lg:text-left lg:text-7xl"
                        >
                            Building polished web experiences with full-stack depth.
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-gradient bg-clip-text text-center text-sm font-semibold uppercase tracking-[0.22em] text-transparent sm:text-base lg:text-left lg:text-xl"
                        >
                            Kaung Phyo Thant • Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-2xl py-5 text-center text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-left"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={container(1.1)}
                            initial="hidden"
                            animate="visible"
                            className="grid w-full max-w-2xl gap-3 pb-6 sm:grid-cols-3"
                        >
                            {HERO_STATS.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur sm:px-5 sm:text-left"
                                >
                                    <p className="text-xl font-semibold text-white sm:text-2xl">{item.value}</p>
                                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                        >
                            <a
                                href="#projects"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                            >
                                Explore projects
                                <ArrowUpRight size={18} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto"
                            >
                                View GitHub
                                <Download size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-5/12 lg:p-8">
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="flex justify-center"
                            >
                                <motion.img
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                    src={ProfilePic}
                                    alt="Profile Picture"
                                    width={280}
                                    height={280}
                                    className="h-auto w-full max-w-[280px] object-cover"
                                />
                            </motion.div>
                            <div className="mt-6 space-y-4">
                                {FEATURED_FOCUS.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
