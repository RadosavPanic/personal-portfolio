"use client";

import { motion } from "motion/react";
import { slideInFromLeft } from "@/utils/motion";

import { Tech_skills } from "@/constants/skills";
import SkillsPreviewCard from "./skills-preview-card.component";

const SkillsPreview = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden md:pb-10 pb-0 md:py-60 py-40 scale-90"
    >
      <motion.div
        variants={slideInFromLeft}
        className="text-4xl font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>

      <SkillsPreviewCard skills={Tech_skills} />
    </section>
  );
};

export default SkillsPreview;
