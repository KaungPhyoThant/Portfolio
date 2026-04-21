import { FaLaravel, FaPhp } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = duration => ({
    initial: { y: -10 },
    animate: {
        y: [20, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-white/10 pb-16 sm:pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-10 pt-20 text-center text-3xl font-semibold text-white sm:mb-16 sm:pt-24 sm:text-4xl"
            >
                Core Stack
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5, delay: 0 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-cyan-400/60 bg-cyan-400/10 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-slate-300/40 bg-white/5 p-4"
                >
                    <RiNextjsFill className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-blue-400/50 bg-blue-400/10 p-4"
                >
                    <FaPhp className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-red-400/50 bg-red-400/10 p-4"
                >
                    <FaLaravel className="text-7xl text-red-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-emerald-400/40 bg-emerald-400/10 p-4"
                >
                    <SiExpress className="text-7xl text-emerald-200" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400/50 bg-sky-400/10 p-4"
                >
                    <SiMysql className="text-7xl text-sky-300" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
