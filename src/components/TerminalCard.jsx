import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS, ABOUT_TEXT, CONTACT } from "../constants";
import { fadeUp } from "../utils/motion";

const TerminalCard = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "input", text: "cat profile.json" },
    {
      type: "output",
      lines: [
        { text: "{" },
        { text: `  "name": "${PROFILE.name}",` },
        { text: `  "role": "Full Stack Engineer (React & Laravel/Nest)",` },
        { text: `  "status": "${PROFILE.status}",` },
        { text: `  "location": "${PROFILE.location}",` },
        { text: `  "github": "${PROFILE.github}",`, href: SOCIAL_LINKS.github, isLink: true },
        { text: `  "linkedin": "${PROFILE.linkedin}"`, href: SOCIAL_LINKS.linkedin, isLink: true },
        { text: "}" }
      ]
    }
  ]);
  const [commandHistory, setCommandHistory] = useState(["cat profile.json"]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Focus the input when clicking anywhere on the card
  const handleCardClick = () => {
    inputRef.current?.focus();
  };

  // Auto scroll to the bottom on new commands/outputs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (trimmed === "") return;

    const args = trimmed.split(/\s+/);
    const cmd = args[0].toLowerCase();

    // Append entered command to visual logs
    const newHistory = [...history, { type: "input", text: trimmed }];
    let response = [];

    switch (cmd) {
      case "help":
        response = [
          { text: "Available commands:", color: "text-violet-300 font-bold" },
          { text: "  about        - Short developer bio" },
          { text: "  skills       - Core stack & technologies" },
          { text: "  projects     - List of shipped web products" },
          { text: "  experience   - Professional career timeline" },
          { text: "  git log      - View latest repository commits" },
          { text: "  contact      - Get contact details" },
          { text: "  clear        - Clear the terminal screen" },
          { text: "  cat profile.json - View raw profile metadata" }
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      case "about":
        response = [
          { text: ABOUT_TEXT },
          { text: "I specialize in building full-stack web applications using React, Laravel, NestJS, and Tailwind CSS, managed with pnpm.", color: "text-slate-400 mt-1" }
        ];
        break;
      case "skills":
        response = [
          { text: "Full Stack Tech Stack & Skills:", color: "text-fuchsia-300 font-bold" },
          { text: "  • Frontend:    React, Tailwind CSS (Flexbox/Grid), JavaScript/TypeScript" },
          { text: "  • Backend:     Laravel (PHP), NestJS (TypeScript Node.js)" },
          { text: "  • Databases:   MySQL, PostgreSQL" },
          { text: "  • Tools/PM:    pnpm workspaces, Vite, Git, Vitest" }
        ];
        break;
      case "projects":
        response = [
          { text: "Featured Projects (React, Laravel, Nest, Tailwind Stack):", color: "text-emerald-300 font-bold" },
          { text: "  - English Daily Academy (LMS built with Laravel API & React/Next frontend)" },
          { text: "  - Satuditha (Map discovery PWA with React MapBox wrapper)" },
          { text: "  - Aspectra (Interactive print studio canvas styled with Tailwind CSS)" },
          { text: "  - Gold Shop POS (Jewelry shop inventory admin dashboard in React & Nest)" },
          { text: "Scroll down to check them out in the Projects grid below!", color: "text-slate-400 mt-1" }
        ];
        break;
      case "experience":
        response = [
          { text: "Career Timeline (Full Stack):", color: "text-violet-300 font-bold" },
          { text: "  - Mid Level Full-Stack Developer @ App.com.mm (2026 - Present)" },
          { text: "    Engineered Laravel API services, NestJS user modules, and React/Tailwind screens.", color: "text-slate-400 pl-4" },
          { text: "  - Full-Stack Developer @ Ultimate Solutions (2025 - 2026)" },
          { text: "    Developed responsive React SPAs, structured database tables, and built Laravel routes.", color: "text-slate-400 pl-4" }
        ];
        break;
      case "contact":
        response = [
          { text: `Address:  ${CONTACT.address}` },
          { text: `Email:    ${CONTACT.email}`, href: `mailto:${CONTACT.email}`, isLink: true },
          { text: `Phone:    ${CONTACT.phoneNo}`, href: `tel:${CONTACT.phoneNo}`, isLink: true }
        ];
        break;
      case "git":
        if (args[1] === "log") {
          response = [
            { text: "commit a8f2c3d (HEAD -> main, origin/main)", color: "text-yellow-400" },
            { text: "Author: Kaung Phyo Thant <terrythedev@gmail.com>", color: "text-slate-400" },
            { text: "Date:   Mon Aug 10 00:08:59 2026 +0630", color: "text-slate-400" },
            { text: "    feat(nest): create user session guards and decorators", color: "text-slate-200 pl-4" },
            { text: "commit f4b2d1c", color: "text-yellow-500" },
            { text: "    feat(laravel): secure POS admin panel with RBAC middlewares", color: "text-slate-200 pl-4" },
            { text: "commit c7e5b9a", color: "text-yellow-500" },
            { text: "    style(tailwind): import custom fonts and grid layouts", color: "text-slate-200 pl-4" }
          ];
        } else {
          response = [{ text: "Usage: git log" }];
        }
        break;
      case "cat":
        if (args[1] === "profile.json") {
          response = [
            { text: "{" },
            { text: `  "name": "${PROFILE.name}",` },
            { text: `  "role": "Full Stack Engineer (React & Laravel/Nest)",` },
            { text: `  "status": "${PROFILE.status}",` },
            { text: `  "location": "${PROFILE.location}",` },
            { text: `  "github": "${PROFILE.github}",`, href: SOCIAL_LINKS.github, isLink: true },
            { text: `  "linkedin": "${PROFILE.linkedin}"`, href: SOCIAL_LINKS.linkedin, isLink: true },
            { text: "}" }
          ];
        } else {
          response = [{ text: "Usage: cat profile.json" }];
        }
        break;
      default:
        response = [{ text: `zsh: command not found: ${cmd}`, color: "text-red-400" }];
    }

    setHistory([...newHistory, { type: "output", lines: response }]);
  };

  const handleAutocomplete = (val) => {
    const trimmed = val.trim();
    if (trimmed === "") return val;

    const parts = trimmed.split(/\s+/);
    const firstWord = parts[0].toLowerCase();
    const COMMAND_LIST = ["about", "skills", "projects", "experience", "git", "contact", "clear", "cat", "help"];

    if (parts.length === 1) {
      const match = COMMAND_LIST.find((cmd) => cmd.startsWith(firstWord));
      if (match) {
        return (match === "cat" || match === "git") ? match + " " : match;
      }
    }

    if (parts.length > 1) {
      const remainingArgs = parts.slice(1).join(" ").toLowerCase();
      if (firstWord === "cat") {
        if ("profile.json".startsWith(remainingArgs)) {
          return "cat profile.json";
        }
      } else if (firstWord === "git") {
        if ("log".startsWith(remainingArgs)) {
          return "git log";
        }
      }
    }

    return val;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
      if (inputVal.trim() !== "") {
        setCommandHistory((prev) => [...prev, inputVal]);
      }
      setInputVal("");
      setHistoryIndex(-1);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const autocompleted = handleAutocomplete(inputVal);
      if (autocompleted !== inputVal) {
        setInputVal(autocompleted);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  const handleRestart = () => {
    setHistory([]);
    setInputVal("");
  };

  return (
    <motion.div
      ref={containerRef}
      onClick={handleCardClick}
      variants={fadeUp(0.2)}
      className={`overflow-hidden rounded-2xl border bg-[#06040d]/90 font-mono text-sm shadow-2xl transition-all duration-300 backdrop-blur-2xl cursor-text select-none ${
        isFocused
          ? "border-violet-500/40 shadow-[0_20px_50px_rgba(139,92,246,0.18)]"
          : "border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Inline styles for custom scrollbar */}
      <style>{`
        .terminal-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.18);
          border-radius: 99px;
          transition: background 0.2s ease;
        }
        .terminal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.35);
        }
      `}</style>

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-3 select-none">
        <div className="flex items-center gap-2">
          {/* macOS controls with icons revealed on hover */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRestart();
            }}
            title="Clear screen"
            className="group relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5f56] active:scale-90 transition"
          >
            <span className="absolute text-[8px] font-bold text-[#4c0002] opacity-0 group-hover:opacity-100 transition-opacity">×</span>
          </button>

          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="group relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ffbd2e] active:scale-90 transition"
          >
            <span className="absolute text-[8px] font-bold text-[#5c3e00] opacity-0 group-hover:opacity-100 transition-opacity">−</span>
          </button>

          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="group relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#27c93f] active:scale-90 transition"
          >
            <span className="absolute text-[8px] font-bold text-[#006505] opacity-0 group-hover:opacity-100 transition-opacity">+</span>
          </button>

          <span className="ml-2.5 truncate text-[11px] font-medium tracking-wide text-slate-400">
            kaung@portfolio:~
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>zsh</span>
        </div>
      </div>

      {/* Terminal logs body */}
      <div className="p-4 sm:p-5 h-[340px] flex flex-col justify-between">
        {/* Scrollable history logs */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-3 pr-1 terminal-scroll scroll-smooth select-text"
        >
          {history.map((item, index) => {
            if (item.type === "info") {
              return (
                <div key={index} className="text-slate-500 text-xs">
                  {item.text}
                </div>
              );
            }
            if (item.type === "input") {
              return (
                <div key={index} className="flex items-center gap-x-2 text-slate-100 text-xs">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-violet-400">~</span>
                  <span className="font-semibold">{item.text}</span>
                </div>
              );
            }
            if (item.type === "output") {
              return (
                <div key={index} className="space-y-1.5 pl-4">
                  {item.lines.map((line, lIdx) => {
                    // Profile JSON formatter
                    if (item.lines[0].text === "{" && line.text.includes(":")) {
                      const match = line.text.match(/^(\s*)("[^"]+")(\s*:\s*)(.*)$/);
                      if (match) {
                        const [, indent, key, colon, value] = match;
                        const isComma = value.endsWith(",");
                        const cleanVal = isComma ? value.slice(0, -1) : value;

                        return (
                          <div key={lIdx} className="text-xs font-mono">
                            <span className="text-slate-500">{indent}</span>
                            <span className="text-fuchsia-400">{key}</span>
                            <span className="text-slate-500">{colon}</span>
                            {line.isLink ? (
                              <a
                                href={line.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-400 hover:text-emerald-300 hover:underline transition"
                              >
                                {cleanVal}
                              </a>
                            ) : (
                              <span className="text-emerald-400">{cleanVal}</span>
                            )}
                            {isComma && <span className="text-slate-500">,</span>}
                          </div>
                        );
                      }
                    }

                    // Vitest PASS suite indicator formatter
                    if (line.type === "test-pass" && line.suite === "PASS") {
                      return (
                        <div key={lIdx} className="flex max-w-lg justify-between gap-4 text-xs">
                          <span>
                            <span className="bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 font-bold px-1.5 py-0.5 rounded-[4px] text-[9px] mr-2 tracking-wide uppercase">
                              PASS
                            </span>
                            <span className="text-slate-300 font-medium">{line.name}</span>
                          </span>
                          <span className="text-slate-500 text-[11px]">
                            <span className="text-emerald-400/90 font-medium mr-2">{line.tests}</span>
                            <span>({line.time})</span>
                          </span>
                        </div>
                      );
                    }

                    // git log colors formatter
                    let styledLine = <span className={line.color || ""}>{line.text}</span>;
                    if (line.text.startsWith("commit")) {
                      const hashPart = line.text.replace("commit ", "");
                      styledLine = (
                        <span>
                          <span className="text-yellow-500 font-semibold mr-1.5">commit</span>
                          <span className="text-yellow-400">{hashPart}</span>
                        </span>
                      );
                    }

                    return (
                      <div key={lIdx} className={`text-slate-300 text-xs font-mono leading-relaxed ${line.color || ""}`}>
                        {line.isLink ? (
                          <a
                            href={line.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 hover:underline transition"
                          >
                            {line.text}
                          </a>
                        ) : (
                          styledLine
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Input prompt line */}
        <div className="flex items-center gap-x-2 pt-2 border-t border-white/[0.04] bg-transparent mt-2 select-none">
          <span className="text-emerald-400">➜</span>
          <span className="text-violet-400">~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="bg-transparent border-none outline-none text-slate-200 font-mono text-xs sm:text-sm flex-1 caret-violet-400 focus:ring-0 focus:border-none py-1 px-0"
            placeholder="Type a command (try 'help')..."
            autoFocus
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalCard;
