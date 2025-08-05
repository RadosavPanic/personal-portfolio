"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

import {
  MdOutgoingMail,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";

import LinuxStyleTerminal from "./LinuxStyleTerminal";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col-reverse xl:flex-row items-center justify-center md:px-20 px-10 mt-10 md:mt-40 z-30"
      id="about-me"
    >
      <div className="flex flex-col items-center justify-center -mt-10 md:mt-0">
        <LinuxStyleTerminal />

        <motion.div
          variants={slideInFromLeft}
          className="w-full mt-7 py-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-7 md:gap-10"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_15px_#60a5fa] hover:shadow-[0_0_10px_#60a5fa] transition duration-300 gap-2"
          >
            <span>Explore my work</span>
            <MdOutlineKeyboardDoubleArrowDown className="w-4 h-4" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_15px_#60a5fa] hover:shadow-[0_0_20px_#60a5fa] transition duration-300 gap-2"
          >
            <span>Contact me</span>
            <MdOutgoingMail className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight}
        className="w-1/3 h-full flex justify-center items-center my-20"
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
