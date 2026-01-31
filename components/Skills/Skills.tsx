"use client";

import { motion, slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { SkillsProps } from "@/utils/skills";

import SkillsCard from "./SkillsCard";

import { FaLaptopCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Skills = ({ techImages }: SkillsProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom(1)}
      animate={inView ? "visible" : "hidden"}
      id="skills"
      className="w-full mt-20 flex flex-col items-center justify-center"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20">
        <FaLaptopCode className="mr-2" />
        Making apps with modern technologies
      </div>

      <SkillsCard techImages={techImages} />
    </motion.section>
  );
};

export default Skills;
