import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="pb-10 pt-4 sm:pb-20 sm:pt-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-8 text-center text-3xl font-semibold text-white sm:mb-12 sm:text-4xl"
            >
                Contact Me
            </motion.h2>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:rounded-[2rem] sm:p-8"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                        Let&apos;s build
                    </p>
                    <h3 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                        Looking for a developer who can shape both the interface and the system behind it.
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                        I enjoy working on products that need thoughtful UX, solid engineering decisions, and steady delivery. If you have a feature, MVP, or internal tool in mind, I&apos;d love to hear about it.
                    </p>
                    <a
                        href={`mailto:${CONTACT.email}?subject=Project%20Inquiry&body=Hi%20Kaung,%20I%27d%20like%20to%20talk%20about...`}
                        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                    >
                        Start a conversation
                        <ArrowUpRight size={18} />
                    </a>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 sm:rounded-[2rem] sm:p-8"
                >
                    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <MapPin className="mt-1 text-cyan-300" size={20} />
                        <div>
                            <p className="text-sm text-slate-400">Location</p>
                            <p className="text-white">{CONTACT.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Phone className="mt-1 text-cyan-300" size={20} />
                        <div>
                            <p className="text-sm text-slate-400">Phone</p>
                            <p className="text-white">{CONTACT.phoneNo}</p>
                        </div>
                    </div>
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40"
                    >
                        <Mail className="mt-1 text-cyan-300" size={20} />
                        <div>
                            <p className="text-sm text-slate-400">Email</p>
                            <p className="text-white">{CONTACT.email}</p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
