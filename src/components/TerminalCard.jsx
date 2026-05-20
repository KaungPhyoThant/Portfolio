import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS } from "../constants";
import { fadeUp } from "../utils/motion";

const COMMAND = "cat profile.json";

const profileFields = [
  { key: "name", value: PROFILE.name },
  { key: "gender", value: PROFILE.gender },
  { key: "dob", value: PROFILE.dob },
  { key: "email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { key: "phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { key: "location", value: PROFILE.location },
  { key: "role", value: PROFILE.role },
  { key: "status", value: PROFILE.status },
  { key: "github", value: PROFILE.github, href: SOCIAL_LINKS.github },
  { key: "linkedin", value: PROFILE.linkedin, href: SOCIAL_LINKS.linkedin },
];

const useTypedText = (text, active, speed = 45) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return undefined;
    }

    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, active, speed]);

  return displayed;
};

const TerminalLine = ({ visible, children, className = "" }) => {
  if (!visible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

TerminalLine.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const TerminalCard = () => {
  const [step, setStep] = useState(0);
  const typedCommand = useTypedText(COMMAND, step === 0);
  const commandDisplay = step > 0 ? COMMAND : typedCommand;
  const commandDone = commandDisplay.length === COMMAND.length;

  useEffect(() => {
    if (step !== 0 || !commandDone) {
      return undefined;
    }

    const timeout = setTimeout(() => setStep(1), 350);
    return () => clearTimeout(timeout);
  }, [step, commandDone]);

  useEffect(() => {
    if (step < 1) {
      return undefined;
    }

    const maxStep = profileFields.length + 2;
    if (step >= maxStep) {
      return undefined;
    }

    const timeout = setTimeout(() => setStep((current) => current + 1), 180);
    return () => clearTimeout(timeout);
  }, [step]);

  const showCursor = step < profileFields.length + 2;

  return (
    <motion.div
      variants={fadeUp(0.2)}
      className="overflow-hidden rounded-2xl border border-violet-500/20 bg-[#0a0814] font-mono text-sm shadow-xl shadow-violet-950/40 glow-ring"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <span className="ml-2 truncate text-xs text-slate-400">
          kaung@portfolio ~ zsh
        </span>
      </div>

      <div className="space-y-1.5 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-emerald-400">➜</span>
          <span className="text-violet-300">~</span>
          <span className="text-slate-200">{commandDisplay}</span>
          {step === 0 && !commandDone && (
            <span className="inline-block h-4 w-2 animate-pulse bg-violet-400" />
          )}
        </div>

        <TerminalLine visible={step >= 1} className="text-slate-500">
          {"{"}
        </TerminalLine>

        {profileFields.map((field, index) => (
          <TerminalLine
            key={field.key}
            visible={step >= index + 2}
            className="pl-4 text-slate-300"
          >
            <span className="text-fuchsia-300">&quot;{field.key}&quot;</span>
            <span className="text-slate-500">: </span>
            {field.href ? (
              <a
                href={field.href}
                target={field.key === "email" || field.key === "phone" ? undefined : "_blank"}
                rel="noreferrer"
                className="text-emerald-300 transition hover:text-emerald-200 hover:underline"
              >
                &quot;{field.value}&quot;
              </a>
            ) : (
              <span className="text-emerald-300">&quot;{field.value}&quot;</span>
            )}
            {index < profileFields.length - 1 && (
              <span className="text-slate-500">,</span>
            )}
          </TerminalLine>
        ))}

        <TerminalLine visible={step >= profileFields.length + 2} className="text-slate-500">
          {"}"}
        </TerminalLine>

        {showCursor && step >= 1 && (
          <span className="mt-1 inline-block h-4 w-2 animate-pulse bg-violet-400" />
        )}
      </div>
    </motion.div>
  );
};

export default TerminalCard;
