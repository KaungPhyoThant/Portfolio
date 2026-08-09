import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "../utils/motion";

const Contact = () => {
  const contactCards = [
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT.address,
      theme: "hover:border-violet-500/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.06)]",
      iconWrapper: "bg-violet-500/10 border border-violet-500/20 text-violet-400",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT.phoneNo,
      theme: "hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)]",
      iconWrapper: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
      href: `tel:${CONTACT.phoneNo}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      theme: "hover:border-fuchsia-500/30 hover:shadow-[0_8px_30px_rgba(217,70,239,0.06)]",
      iconWrapper: "bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400",
      href: `mailto:${CONTACT.email}`,
    },
  ];

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
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Left CTA / Services Card */}
        <motion.div 
          variants={slideInLeft()} 
          className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0c0a1a]/45 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_20px_50px_rgba(139,92,246,0.04)]"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-violet-400 uppercase select-none">
              Let&apos;s collaborate
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
              Looking for a robust Full Stack Engineer?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              I own projects from visual layout definition to database migration schemes. Feel free to reach out for features, MVPs, or technical consults.
            </p>

            {/* Structured Deliverables Checklist */}
            <div className="mt-8 space-y-3.5 text-slate-300 text-xs sm:text-sm select-none">
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  ✓
                </span>
                <span>Full-Stack Web Architectures (React + Laravel / NestJS)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  ✓
                </span>
                <span>Tactile UI/UX Integration (Tailwind CSS, micro-interactions)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  ✓
                </span>
                <span>REST APIs, Auth Guards & Database Optimization</span>
              </div>
            </div>
          </div>

          <div>
            <motion.a
              href={`mailto:${CONTACT.email}?subject=Project%20Inquiry`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-400 hover:bg-violet-300 px-6 py-3 font-semibold text-slate-950 text-sm mt-8 transition-all duration-200 active:scale-95 shadow-[0_4px_25px_rgba(167,139,250,0.2)]"
            >
              <span>Start a conversation</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Details Grid */}
        <motion.div
          variants={slideInRight()}
          className="flex flex-col gap-4"
        >
          {contactCards.map(({ icon: Icon, label, value, theme, iconWrapper, href }) => {
            const innerContent = (
              <>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 ${iconWrapper}`}>
                  <Icon size={20} />
                </div>
                <div className="space-y-1.5 truncate">
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase select-none">{label}</p>
                  <p className="text-white text-sm sm:text-base font-semibold truncate group-hover:text-violet-200 transition-colors">{value}</p>
                </div>
              </>
            );

            if (href) {
              return (
                <motion.a
                  key={label}
                  href={href}
                  variants={fadeUp()}
                  className={`group flex items-center gap-4 rounded-[22px] border border-white/[0.06] bg-[#0c0a1a]/40 backdrop-blur-md p-5 transition-all duration-300 cursor-pointer ${theme}`}
                >
                  {innerContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={label}
                variants={fadeUp()}
                className={`group flex items-center gap-4 rounded-[22px] border border-white/[0.06] bg-[#0c0a1a]/40 backdrop-blur-md p-5 transition-all duration-300 ${theme}`}
              >
                {innerContent}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
