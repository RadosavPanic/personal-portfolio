"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const About = () => {
  return (
    <div className="relative flex flex-col h-full w-full mb-40">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center md:px-20 px-10 mt-[120px] w-full z-[20]"
      >
        <motion.div
          variants={slideInFromRight}
          className="w-full h-full flex justify-center items-center mb-10"
        >
          <Image
            src="/personal_photo.png"
            alt="personal photo"
            className="rounded-lg lg:max-h-[400px] lg:max-w-[400px] md:max-h-[400px] md:max-w-[400px] max-h-[360px] max-w-[360px]"
            height={650}
            width={650}
          />
        </motion.div>

        <div className="h-full w-full flex flex-col gap-2 ml-4 justify-center items-start m-auto text-start">
          <motion.div
            variants={slideInFromLeft}
            className="text-[30px] text-white font-medium text-start"
          >
            A little bit about me
          </motion.div>

          <motion.div
            variants={slideInFromLeft}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I attended high school in Železnik &#40;Belgrade&#41;, computer
              electrician course, and graduated with excellent grades
              &#40;average &#62; 4,5&#41;.
            </p>
            <p>
              I received an award for the best database and graduation thesis,
              developed using MS Access.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromLeft}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I then earned my Bachelor's degree in Computer Science from VISER,
              new computer technologies course.
            </p>

            <p>
              My studies covered various programming languages, SQL and NoSQL
              databases, data structures and algorithms, software testing,
              WordPress, networking and security, Linux architecture and more.
            </p>

            <p>
              For my graduation thesis, I explored advanced concepts of Next.js
              and developed a web application to demonstrate them in practice.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromLeft}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              Over the past three years, I've been continuously expanding my
              knowledge of web technologies through free and paid resources,
              such as W3Schools, FreeCodeCamp, YouTube, Udemy, and Zero To
              Mastery Academy.
            </p>
            <p>
              By reading documentation, experimenting, and building various
              projects, I have developed a strong foundation in programming.
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromLeft}
            className="text-lg text-gray-400 my-3 max-w-[650px]"
          >
            <p>
              I am currently looking for my first job in IT at a company where I
              can begin my journey, learn, and contribute. While I have previous
              work experience, this will be my first role in IT industry as a
              software developer.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
