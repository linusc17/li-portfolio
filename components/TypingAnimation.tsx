"use client";

import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText =
    "Passionate about creating responsive and user-friendly web applications.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && text === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        timeout = setTimeout(() => setIsDeleting(false), 250);
      } else {
        timeout = setTimeout(
          () => {
            const newText = isDeleting
              ? text.slice(0, -1)
              : fullText.slice(0, text.length + 1);
            setText(newText);
          },
          isDeleting ? 25 : 50
        );
      }
    };

    handleTyping();

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return <p className="text-lg text-muted-foreground mt-2 h-[1.5em]">{text}</p>;
};

export default TypingAnimation;
