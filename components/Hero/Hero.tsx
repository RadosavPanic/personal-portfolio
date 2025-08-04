"use client";

import { motion } from "motion/react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
} from "@/utils/motion";

import Image from "next/image";
import { Project, Social } from "@/utils/supabase";

import { BsArrowRight, BsIncognito } from "react-icons/bs";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type HeroProps = {
  projects: Project[];
  socials?: Social[];
};

const Hero = ({ projects }: HeroProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-center md:px-20 px-10 mt-10 md:mt-40 z-28"
      id="about-me"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromBottom}
          className="bg-[#0f1117] p-6 rounded-lg w-full max-w-3xl font-mono mt-10 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 mr-4"></span>
            <span className="text-blue-400 font-semibold text-sm">
              welcome.sh
            </span>
          </div>
          <p className="text-green-400 mb-2">
            Welcome! Thanks for taking the time to check out my website.
          </p>

          <p className="text-pink-500">
            $ <span className="text-green-500">radosav@portfolio</span>:~$
            about_me
          </p>
          <ul className="ml-6 text-blue-200 list-disc mt-1">
            <li>My name is Radosav Panic.</li>
            <li>
              I am Software Developer passionate about Web Technologies and
              currently exploring Mobile and Data Science.
            </li>
            <li>I enjoy building things that make a difference.</li>
          </ul>

          <p className="text-pink-500 mt-5">
            $ <span className="text-green-500">radosav@portfolio</span>:~$
            current_strengths
          </p>
          <ul className="ml-6 text-blue-200 list-disc mt-1">
            <li>
              Knowledge across frontend, backend, and DevOps with modern web
              tools
            </li>
            <li>
              From scripting to strongly typed — adaptable across many languages
            </li>
            <li>
              Strong fundamentals in programming, debugging, and problem-solving
            </li>
            <li>
              A growth mindset and willingness to tackle any tech challenge
            </li>
          </ul>

          <p className="mt-6">
            Always looking to connect with fellow tech enthusiasts!
          </p>
        </motion.div>

        <motion.div variants={slideInFromLeft} className="mt-10 py-2">
          <Button className="bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_10px_#60a5fa] hover:shadow-[0_0_20px_#a855f7] transition duration-300">
            Contact me
          </Button>

          <Button className="ml-10 bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_10px_#60a5fa] hover:shadow-[0_0_20px_#a855f7] transition duration-300">
            <span>Explore my work</span>
            <BsArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight}
        className="w-1/3 h-full flex justify-center items-center mx-10 my-20"
      >
        <div className="terminal-ring">
          <Image
            src="/personal_photo.png"
            alt="personal photo"
            className="max-h-[260px] max-w-[260px] md:max-h-[450px] md:max-w-[450px] rounded-full p-5"
            height={400}
            width={400}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
