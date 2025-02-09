"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Projects = () => {
  return (
    <div className="relative flex flex-col h-full w-full mb-[580px]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center md:px-20 px-10 mt-[120px] w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-2 ml-4 justify-center items-start m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium text-start"
          >
            My projects
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
