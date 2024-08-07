"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  texts,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Move to the next text after a delay
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }, 1000); // 1 second delay before moving to the next text
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [charIndex, duration, textIndex, texts]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}
