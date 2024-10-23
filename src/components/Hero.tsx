"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import TypingAnimation from "@/components/ui/typing-animation.tsx";
import Loading from "../components/Loading/Loading.jsx";

export default function Hero() {
  const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => setIsLoading(false), 3000); // Simulate loading for 2 seconds
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className="h-[calc(100vh-7rem)] bg-[#000319] flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-screen relative">
          <div className="w-36 bg-[#000319] h-10 absolute bottom-5 right-4"></div>
          <div className=" rounded-xl text-white text-xl w-[23rem] h-[18rem] z-0 absolute top-[10rem] left-1/2 transform translate-x-[18rem] bg-[#22272E] bg-opacity-60">
            <div className="w-full h-12 bg-[#2F343A] flex items-center rounded-t-lg ">
              <div className="h-4 w-4 rounded-full bg-red-500 ml-2"></div>
              <div className="h-4 w-4 rounded-full bg-yellow-500 ml-2"></div>
              <div className="h-4 w-4 rounded-full bg-green-500 ml-2"></div>
              <div className="ml-10 border-r border-l border-t w-40 h-10 mt-1 rounded-t-lg flex items-end gap-1 justify-center">
                <p className="w-7 h-7 text-end bg-blue-400 text-white ml-1 rounded-md pt-2 text-sm pr-1">
                  TS
                </p>
                <p className="text-sm text-mono">helloworld.ts</p>
              </div>
            </div>
            <div className="pt-3 text-stat">
            <TypingAnimation
              className="text-xl text-start pl-5 font-bold text-gray-400"
              text={[
                "Hello, Welcome Sir",
                "Zaheer khan this side",
                "Software Engineer",
                "Software Developer",
              ]}  
            />
            </div>
          </div>
          <Spline scene="https://prod.spline.design/Fg9kkzBIXndVwFbN/scene.splinecode" />
        </div>
      )}
    </div>
  );
}
