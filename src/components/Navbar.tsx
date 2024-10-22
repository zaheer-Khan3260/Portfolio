"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomShape from "@/components/helper/CutomShape.jsx";
import arc from "@/Image/arc.png";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky z-50 top-0 w-full h-14">
      <CustomShape>
        <div className="w-full h-full relative">
          <div className="w-28 h-28 left-[calc(50%-3.5rem)] right-1/2 animate-spin absolute">
            <Image src={arc} alt="image" className="w-28 h-28" />
          </div>
          <div className="w-full h-full flex gap-24">
            <div className="w-1/2 flex justify-end items-center gap-14 text-xl text-black font-semibold">
              <p className="p-2 hover:bg-slate-400 hover:bg-opacity-50 hover:transition-all hover:duration-500 cursor-pointer rounded-xl">
                Home
              </p>
              <p className="p-2 hover:bg-slate-400 hover:bg-opacity-50 hover:transition-all hover:duration-500 cursor-pointer rounded-xl">
                Projects
              </p>
            </div>
            <div className="w-1/2 flex justify-start items-center gap-14 text-xl text-black font-semibold">
              <p className="p-2 hover:bg-slate-400 hover:bg-opacity-50 hover:transition-all hover:duration-500 cursor-pointer rounded-xl">
                Resume
              </p>
              <p className="p-2 hover:bg-slate-400 hover:bg-opacity-50 hover:transition-all hover:duration-500 cursor-pointer rounded-xl">
                Contact
              </p>
            </div>
          </div>
        </div>
      </CustomShape>

      <div className="relative w-24 h-[calc(100vh-10rem)]">
        <div className=" absolute left-0 top-1/3 text-gray-500 cursor-pointer">
        <Link href={'https://www.linkedin.com/in/zaheer-khan-926487272/'}>
          <div className="border w-14 p-1 flex gap-4 items-center overflow-hidden rounded-lg mb-3 group hover:animate-width">
            <p className="text-xl font-semibold group-hover:block hidden">
              LinkedIn
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          </Link>
          <Link href={'https://github.com/zaheer-Khan3260'}>
          <div className="border w-14 p-1 flex gap-4 items-center overflow-hidden rounded-lg group hover:animate-width mb-3">
            <p className="text-xl font-semibold group-hover:block hidden">
              Githube
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          </Link>
          <Link href={'https://leetcode.com/u/Zaheer_khan/'}>
          <div className="border w-14 p-1 flex gap-4 items-center overflow-hidden rounded-lg group hover:animate-width">
            <p className="text-xl font-semibold group-hover:block hidden">
              LeetCode
            </p>
            <SiLeetcode className="w-10 h-10"/>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
