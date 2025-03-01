import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/pfp.png";
import { motion } from "framer-motion";

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
        <div className="border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap pt-20">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="font-thin pb-16 text-6xl  tracking-tight lg:mt-16 lg:text-7xl uppercase"
                        >
                            Terry Thant
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-gradient font-bold bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-300"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={ProfilePic}
                            alt="Profile Picture"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
