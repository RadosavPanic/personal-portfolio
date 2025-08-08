"use client";

import { motion } from "motion/react";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";

import SkillsCard from "./SkillsCard";
import { Tech_skills } from "@/constants/skills";
import { IoCodeWorking } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
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

      <SkillsCard skills={Tech_skills} />
    </section>
  );
};

export default Skills;
