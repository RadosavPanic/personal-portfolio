"use client";

import {
  Backend_skills,
  Frameworks,
  Frontend_skills,
  Other_skills,
} from "@/constants/skills";
import React from "react";
import SkillDataProvider from "./skill-data-provider.component";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const SkillsPreview = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden md:pb-10 pb-0 md:py-60 py-40"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 md:scale-90 sm:scale-75 items-center">
        {Frontend_skills.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            skill_name={image.skill_name}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 md:scale-90 sm:scale-75 items-center">
        {Frameworks.map((image, index) => (
          <SkillDataProvider
            key={index}
            index={index}
            skill_name={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 md:scale-90 sm:scale-75 items-center">
        {Backend_skills.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            skill_name={image.skill_name}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row flex-wrap justify-around items-center mt-4 gap-5 md:scale-90 sm:scale-75">
        {Other_skills.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            skill_name={image.skill_name}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
