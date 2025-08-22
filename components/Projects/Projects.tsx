"use client";

import { motion } from "motion/react";
import { slideInFromBottom } from "@/utils/motion";
import { Project } from "@/utils/supabase";

import ProjectsCard from "./ProjectsCard";
import { GoProjectRoadmap } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { SkillsProps } from "@/utils/skills";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom(1)}
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20">
        <GoProjectRoadmap className="mr-2 text-red-500" />
        Selection of Projects
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
