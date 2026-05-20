import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "../utils/motion";

const Contact = () => {
  return (
    <div className="pb-10 pt-4 sm:pb-20 sm:pt-8">
      <SectionHeading
        eyebrow="Contact"
        title="Contact Me"
        className="mb-8 sm:mb-12"
      />
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div variants={slideInLeft()} className="glass-panel p-5 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
            Let&apos;s build
          </p>
          <h3 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
            Need UI and backend in one place?
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Open to features, MVPs, and internal tools. Say hello.
          </p>
          <motion.a
            href={`mailto:${CONTACT.email}?subject=Project%20Inquiry&body=Hi%20Kaung,%20I%27d%20like%20to%20talk%20about...`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
        <motion.div
          variants={slideInRight()}
          className="space-y-4 glass-panel bg-surface-elevated/60 p-5 sm:p-8"
        >
          {[
            { icon: MapPin, label: "Location", value: CONTACT.address },
            { icon: Phone, label: "Phone", value: CONTACT.phoneNo },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={fadeUp()}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Icon className="mt-1 text-violet-300" size={20} />
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="text-white">{value}</p>
              </div>
            </motion.div>
          ))}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            variants={fadeUp(0.1)}
            whileHover={{ x: 4 }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-300/40"
          >
            <Mail className="mt-1 text-violet-300" size={20} />
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white">{CONTACT.email}</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
