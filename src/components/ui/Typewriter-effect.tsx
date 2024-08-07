"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const handleTyping = () => {
        const currentWord = words[currentWordIndex];
        if (isDeleting) {
          if (currentCharIndex > 0) {
            setCurrentCharIndex(currentCharIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        } else {
          if (currentCharIndex < currentWord.length) {
            setCurrentCharIndex(currentCharIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
          }
        }
      };

      const typingInterval = setInterval(handleTyping, isDeleting ? 50 : 100); // Speed up deleting
      return () => clearInterval(typingInterval);
    }
  }, [isInView, currentCharIndex, isDeleting, currentWordIndex, words]);

  const renderWord = () => {
    const word = words[currentWordIndex];
    const textToShow = isDeleting
      ? word.substring(0, currentCharIndex)
      : word.substring(0, currentCharIndex);

    return (
      <motion.div ref={scope} className="inline">
        {textToShow.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            className={cn(`bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text
        tracking-tighter text-transparent`)}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWord()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        if (currentCharIndex < currentWord.length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? 50 : 100); // Speed up deleting
    return () => clearInterval(typingInterval);
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);

  const renderWord = () => {
    const word = words[currentWordIndex];
    const textToShow = isDeleting
      ? word.substring(0, currentCharIndex)
      : word.substring(0, currentCharIndex);

    return (
      <div>
        {textToShow.split("").map((char, index) => (
          <span
            key={`char-${index}`}
            className={cn(`dark:text-white text-black`)}
          >
            {char}
          </span>
        ))}
        &nbsp;
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWord()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
