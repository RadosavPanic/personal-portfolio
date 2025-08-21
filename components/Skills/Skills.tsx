"use client";

import { motion, slideInFromLeft } from "@/utils/motion";
import { SkillsProps } from "@/utils/skills";

import SkillsCard from "./SkillsCard";

import { FaLaptopCode } from "react-icons/fa";

const Skills = ({ techImages }: SkillsProps) => {
  return (
    <section
      id="skills"
      className="w-full mt-20 flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromLeft}
        className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20"
      >
        <FaLaptopCode className="mr-2 text-blue-500" />
        Making apps with modern technologies
      </motion.div>

      <SkillsCard techImages={techImages} />
    </section>
  );
};

export default Skills;
