"use client";

import { motion } from "motion/react";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { Project } from "@/utils/supabase";

import ProjectsCard from "./ProjectsCard";
import { GoProjectRoadmap } from "react-icons/go";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20">
        <GoProjectRoadmap className="mr-2 text-blue-500" />A small selection of
        my projects
      </div>

      <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-around gap-10 px-10">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            src={project.image_url!}
            title={project.title}
            description={project.description}
            demo_link={project.demo_link!}
            github_link={project.github_link}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
