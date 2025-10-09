"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";

import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import { GoProjectRoadmap } from "react-icons/go";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import useProjectStore from "@/store/project.store";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const { modalOpen } = useProjectStore();

  const webProjects = projects.filter((p) => p.type === "web");
  const mobileProjects = projects.filter((p) => p.type === "mobile");

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

      {webProjects.length > 0 && (
        <div className="w-full px-10">
          <h2 className="inline-flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-6 w-full text-center">
            <FaGlobe className="mr-2 text-blue-400" />
            Web Projects
          </h2>
          <p className="inline-flex items-center justify-center text-md font-bold text-white w-full text-center">
            <FaRegHandPointDown className="size-5 mr-2 text-blue-400" />
            Click on images to see more
          </p>
          <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-around gap-10">
            {webProjects.map((project) => (
              <WebCard
                key={project.id}
                src={project.image_url!}
                title={project.title}
                name={project.name}
                description={project.description}
                demo_link={project.demo_link!}
                github_link={project.github_link}
                skills={project.skills!}
              />
            ))}
          </div>
        </div>
      )}

      {mobileProjects.length > 0 && (
        <div className="w-full px-10 mt-16">
          <h2 className="inline-flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-6 w-full text-center">
            <FaMobileAlt className="mr-2 text-green-400" />
            Mobile Projects
          </h2>
          <p className="inline-flex items-center justify-center text-md font-bold text-white w-full text-center">
            <FaRegHandPointDown className="size-5 mr-2 text-green-400" />
            Click on images to see more
          </p>
          <div className="h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-36">
            {mobileProjects.map((project) => (
              <MobileCard
                key={project.id}
                src={project.image_url!}
                title={project.title}
                description={project.description}
                github_link={project.github_link}
                skills={project.skills!}
                name={project.name}
              />
            ))}
          </div>
        </div>
      )}

      {modalOpen && <ProjectModal />}
    </motion.section>
  );
};

export default Projects;
