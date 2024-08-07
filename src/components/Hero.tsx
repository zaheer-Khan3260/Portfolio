"use client";
import React from "react";
import BlurIn from "./magicui/blur-in";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/Typewriter-effect";
import userImage from "@/Image/userImage.png"

export default function Hero() {
  return (
    <AuroraBackground>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex w-full gap-4 items-center justify-center px-4"
      >
      <div className="w-full lg:w-[45%]  h-20 mt-44 pl-20">
      <div className="flex">
      <p className=" text-white font-bold inter-var">
      <BlurIn
      word="I am Zaheer khan"
      className=" font-bold text-black dark:text-white"
    />
      </p>
      <p className="text-base mt-4 text-white font-normal inter-var text-center ml-4">
      <BlurIn
      word={
        <TypewriterEffect
        className="text-5xl font-bold "
        words={["Software Engineer", "Frontend Developer", "Backend Developer"]}
      />
      }
      className=" font-bold text-black dark:text-white"
    />
      </p>
      </div>
      </div>
      <div className="w-[25rem] h-[25rem] mt-20 ml-12 hidden lg:block">
        <Image src={userImage} alt="User Image" layout="responsive" />
      </div>
      </motion.div>
    </AuroraBackground>
  );
}
