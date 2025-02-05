"use client";

import { motion } from "framer-motion";
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
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>

      <SkillsPreviewCard skills={Tech_skills} />

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
