"use client";

import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Building scalable full-stack applications.",
  "Crafting seamless user experiences.",
  "Turning ideas into real-time products.",
  "Writing clean, maintainable code.",
];

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex.current];

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      timeout = setTimeout(
        () => {
          const newText = isDeleting
            ? text.slice(0, -1)
            : currentPhrase.slice(0, text.length + 1);
          setText(newText);
        },
        isDeleting ? 20 : 45
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <p className="text-base sm:text-lg text-muted-foreground mt-2 h-[1.5em] max-w-xl mx-auto">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-pulse align-text-bottom" />
    </p>
  );
};

export default TypingAnimation;
