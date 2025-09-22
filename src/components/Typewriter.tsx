import React, { useEffect, useMemo, useState } from "react";

type Props = {
  words: string[];                 // phrases to cycle
  typingSpeed?: number;            // ms per character when typing
  deletingSpeed?: number;          // ms per character when deleting
  delayBetweenWords?: number;      // pause before deleting/after finishing
  loop?: boolean;                  // keep looping
  prefix?: string;                 // text before the changing word
  className?: string;
  cursorClassName?: string;
};

const Typewriter: React.FC<Props> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  delayBetweenWords = 1200,
  loop = true,
  prefix = "",
  className,
  cursorClassName,
}) => {
  const [index, setIndex] = useState(0);    // which word
  const [sub, setSub] = useState("");       // current substring
  const [deleting, setDeleting] = useState(false);

  const word = useMemo(() => words[index] ?? "", [words, index]);

  useEffect(() => {
    if (!word) return;

    // decide current interval
    const speed = deleting ? deletingSpeed : typingSpeed;
    const doneTyping = sub === word;
    const doneDeleting = deleting && sub === "";

    // when done typing, wait then start deleting
    if (!deleting && doneTyping) {
      const t = setTimeout(() => setDeleting(true), delayBetweenWords);
      return () => clearTimeout(t);
    }

    // when done deleting, go to next word
    if (doneDeleting) {
      const next = (index + 1) % words.length;
      const t = setTimeout(() => {
        setIndex(next);
        setDeleting(false);
      }, delayBetweenWords / 4);
      if (!loop && next === 0) return; // optional stop after one pass
      return () => clearTimeout(t);
    }

    // keep typing or deleting
    const tick = setTimeout(() => {
      setSub((s) =>
        deleting ? s.slice(0, -1) : word.slice(0, s.length + 1)
      );
    }, speed);
    return () => clearTimeout(tick);
  }, [sub, deleting, word, index, words.length, typingSpeed, deletingSpeed, delayBetweenWords, loop]);

  return (
    <span className={className}>
      {prefix}
      {sub}
      <span className={`inline-block w-[1ch] animate-blink ${cursorClassName ?? ""}`}>|</span>
    </span>
  );
};

export default Typewriter;
