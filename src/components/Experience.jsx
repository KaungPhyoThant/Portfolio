import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-white/10 pb-16 sm:pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-10 pt-20 text-center text-3xl font-semibold text-white sm:mb-16 sm:pt-24 sm:text-4xl"
            >
                Experience
            </motion.h2>
            <div className="space-y-6">
                {EXPERIENCES.map((experience, index) =>
                    <div
                        key={index}
                        className="flex flex-wrap rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:rounded-[2rem] sm:p-6 lg:items-start lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-2xl lg:w-3/4"
                        >
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
                                {experience.technologies.map((tech, techIndex) =>
                                    <span
                                        key={techIndex}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-100"
                                    >
                                        {tech}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
