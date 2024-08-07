"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function Aboutme() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
         className=" w-[65rem] bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-2xl"
        >
         I'm a skilled Full Stack Developer with 2+ years of experience in developing websites and web applications using
         modern technologies like python, javaScript, React, Next.js, Tailwind CSS, etc. I'm also familiar with backend technologies 
         like Node.js, Express.js, MongoDB, etc. I'm a quick learner and a team player. I Completed my
         BCA in Computer Application from Indraprastha Institute of Technology and managment, Delhi, India.
         Let's work together and build something awesome!
        </motion.div>
    </LampContainer>
  );
}
