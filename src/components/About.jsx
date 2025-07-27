import about from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4h-screen">
            <h2 className="my-20 text-center text-4xl pt-30">About Me</h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap"
            >
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex item-center justify-center">
                        <img
                            src={about}
                            alt="about"
                            width={250}
                            height={250}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.3 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-300">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
