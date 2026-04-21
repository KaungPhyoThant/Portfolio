import about from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-white/10 pb-16 sm:pb-20">
            <h2 className="mb-10 pt-20 text-center text-3xl font-semibold text-white sm:mb-16 sm:pt-24 sm:text-4xl">About Me</h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap items-center gap-y-10"
            >
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src={about}
                            alt="about"
                            width={320}
                            height={320}
                            className="w-full max-w-[320px] rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-xl shadow-slate-950/40 sm:rounded-[2rem]"
                        />
                    </div>
                </div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.3 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:rounded-[2rem] sm:p-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                            How I work
                        </p>
                        <p className="my-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                            {ABOUT_TEXT}
                        </p>
                        <div className="grid gap-4 pt-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                <p className="text-sm text-slate-400">Strength</p>
                                <p className="mt-2 font-medium text-white">
                                    Turning messy ideas into clear product flows.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                <p className="text-sm text-slate-400">Focus</p>
                                <p className="mt-2 font-medium text-white">
                                    Fast interfaces, practical backends, and clean handoff.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
