import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Skills() {

    const slugs = [
        "python",
        "typescript",
        "javascript",
        "java",
        "react",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "amazonaws",
        "postgresql",
        "firebase",
        "vercel",
        "cypress",
        "docker",
        "git",
        "github",
        "gitlab",
        "visualstudiocode",
        "figma",
        "mongodb",
        "netlify",
      ];

    const projects = [
        {
            title: "TypeScript",
        },
        {
            title: "JavaScript",
        },
        {
            title: "Python",
        },
        {
            title: "Java",
        },
        {
            title: "React",
        },
        {
            title: "HTML5",
        },
        {
            title: "CSS3",
        },
        {
            title: "Node.js",
        },
        {
            title: "Postman"
        },
        {
        title: "Express.js",
        },
        {
            title: "Next.js",
        },
        {
            title: "AWS",
        },
        {
            title: "PostgreSQL",
        },
        {
            title: "Firebase",
        },
        {
            title: "Vercel",
        },
        {
            title: "Cypress",
        },
        {
            title: "Docker",
        },
        {
            title: "Git",
        },
        {
            title: "GitHub",
        },
        {
            title: "GitLab",
        },
        {
            title: "Visual Studio Code",
        },
        {
            title: "Figma",
        },
        {
            title: "MongoDB",
        },
        {
            title: "Netlify",
        },
        
    ]
  return (
    <div className='bg-slate-950 w-full text-center'>
        <div className='text-5xl mb-6'>Skills</div>
    <div className=' flex mx-auto w-full justify-center'>
      <div className='h-[60vh] w-1/3'>
      <HoverEffect items={projects} />

      </div>
      <div className='h-[60vh] w-1/3'>
      <div className="relative flex h-full w-full max-w-[45rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
      </div>
      
    </div>
    </div>
  )
}
  

