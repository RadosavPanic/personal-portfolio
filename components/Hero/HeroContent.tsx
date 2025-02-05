"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center md:px-20 px-10 mt-[200px] md:mt-20 lg:mt-[80px] xl:mt-60 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ml-2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] lg:mt-20"
        >
          <CodeBracketIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Full Stack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 md:text-6xl text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Your future is created by what
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              you do today{" "}
            </span>
            - not tommorow
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <p>
            I&apos;m Radosav, a Full Stack Developer with passion for Web and
            App Development.
          </p>
          <p>
            From the childhood, I always wanted to explore and learn what&apos;s
            behind things. That led me to fall in love with tech.
          </p>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg lg:max-w-[250px] md:max-w-md  max-w-full"
          href="/about-me"
        >
          Learn More About Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center md:mt-10 mt-[-30px] mb-20"
      >
        <Image
          src="/personal_photo.png"
          alt="personal photo"
          className="md:max-h-[450px] md:max-w-[450px] max-h-[360px] max-w-[360px] rounded-lg"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
