"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center">
      

        <motion.div
          className="flex flex-row gap-6 mt-6 justify-center text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          See Projects 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Of Our{" "}
            </span>
            students
            </span>
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px]  xl:mx-96 px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text  text-[13px]">
↓🤍          مشاريع عملي يتم تطبيقها اضغط هنا لكي تتمكن من رؤيتها


          </h1>
        </motion.div>
        <motion.a 
          href="https://roadmap--black.vercel.app/"// added href
          variants={slideInFromLeft(1)}
          className="py-2 button-primary mx-20 lg:mx-48 text-center xl:mx-96 text-white cursor-pointer rounded-lg max-w-[200px]"
        >See projects 
       </motion.a>
       <motion.a 
          href="https://roadmap--black.vercel.app/"// added href
          variants={slideInFromLeft(1)}
          className="py-2 button-primary mx-20 text-center xl:mx-96 text-white cursor-pointer rounded-lg max-w-[200px]"
        >Our Students  
       </motion.a>
      </div>

   
    </motion.div>
  );
};

export default HeroContent;