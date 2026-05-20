import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Typewriter = ({
  words,
  typingSpeed = 75,
  deletingSpeed = 45,
  pause = 2200,
  className = "",
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        const nextLength = isDeleting ? text.length - 1 : text.length + 1;
        setText(currentWord.slice(0, nextLength));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] bg-violet-400"
      />
    </span>
  );
};

Typewriter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  pause: PropTypes.number,
  className: PropTypes.string,
};

export default Typewriter;
