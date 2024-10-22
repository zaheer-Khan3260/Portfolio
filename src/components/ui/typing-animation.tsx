"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: String[];
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text[textIndex].length) {
        setDisplayedText(text[textIndex].substring(0, i + 1));
        setI(i + 1);
      } else {
        setI(0);
        setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, textIndex]);

  return (
    <h1
      className={cn(
        "font-mono text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text[0]}
    </h1>
  );
}
