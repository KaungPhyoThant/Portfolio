import { FaLaravel, FaPhp } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { SiInertia, SiMysql } from "react-icons/si";
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
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl pt-20"
            >
                Technologies
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
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <RiNextjsFill className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <FaPhp className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <FaLaravel className="text-7xl text-red-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <SiInertia className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-sky-400 p-4"
                >
                    <SiMysql className="text-7xl text-blue-400" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
