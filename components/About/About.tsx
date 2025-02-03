"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative flex flex-col h-full w-full mb-40">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center md:px-20 px-10 mt-[120px] w-full z-[20]"
      >
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-end items-center md:mb-0 md:mt-0 mb-10"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>

        <div className="h-full w-full flex flex-col gap-2 justify-center items-start m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium text-start"
          >
            A little bit about me
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I attended high school in Železnik &#40;Belgrade&#41;, computer
              electrician course, and graduated with excellent grades
              &#40;average &#62; 4,5&#41;.
            </p>
            <p>
              Relevant technologies I learned are C and C# PLs, and Assembly
              basics.
            </p>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(1.5)}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I then earned my Bachelor's in Computer Science from VISER, new
              computer technologies course. My studies covered many different
              courses and interesting topics.
            </p>

            <p>
              I've learned about many different PLs, RDMBS, DSA, Software
              testing, Wordpress, Art and Animation, Networking and Security,
              Linux architecture, and even developed my own game in Unity Game
              Engine.
            </p>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(2.5)}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              For the past three years, I was studying web technologies on free
              resources such as W3Schools, FreeCodeCamp, Youtube, and other paid
              sources such as Udemy and Zero To Mastery Academy.
            </p>
            <p>
              Both personal and course projects helped me grow a lot. By reading
              documentation and experimenting with different technologies, I've
              developed a strong foundation in programming.
            </p>
          </motion.p>
          <motion.p
            variants={slideInFromLeft(3.5)}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I am currently looking for my first job in IT at a company where I
              can begin my journey, learn, and contribute. While I have prior
              work experience, this will be my first role in IT programming.
            </p>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
