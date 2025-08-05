"use client";

import { motion } from "motion/react";
import { slideInFromLeft } from "@/utils/motion";

import { Tech_skills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-full flex flex-col items-center justify-center py-10 md:py-36 gap-2 px-10"
    >
      <motion.div
        variants={slideInFromLeft}
        className="text-2xl md:text-4xl font-medium text-center"
      >
        Making apps with modern technologies
      </motion.div>

      <SkillsCard skills={Tech_skills} />
    </section>
  );
};

export default Skills;
