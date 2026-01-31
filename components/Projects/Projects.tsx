"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";

import WebCard from "./WebCard";
import MobileCard from "./MobileCard";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import useProjectStore from "@/store/project.store";
import ProjectsSelector from "./ProjectsSelector";
import clsx from "clsx";

const Projects = ({ projects }: { projects: Project[] }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { modalOpen, type } = useProjectStore();
  const filteredProjects = projects.filter((p) => p.type === type);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom(1)}
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      {filteredProjects.length > 0 && (
        <div className="w-full px-10">
          <h2 className="inline-flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-6 w-full text-center">
            <FaGlobe className="mr-2 text-green-400" />
            Projects
          </h2>

          <ProjectsSelector />

          {type === "mobile" && (
            <p className="inline-flex items-center justify-center text-md font-bold text-white w-full text-center">
              <FaRegHandPointDown className="size-5 mr-2 text-green-400" />
              Click on images to see more
            </p>
          )}

          <div
            className={clsx(
              "h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10",
              type === "mobile" ? "md:gap-36" : "",
            )}
          >
            {filteredProjects.map((project) =>
              type === "mobile" ? (
                <MobileCard
                  key={project.id}
                  src={project.image_url!}
                  title={project.title}
                  description={project.description}
                  github_link={project.github_link}
                  skills={project.skills!}
                  name={project.name}
                  type={project.type!}
                />
              ) : (
                <WebCard
                  key={project.id}
                  src={project.image_url!}
                  title={project.title}
                  name={project.name}
                  description={project.description}
                  demo_link={project.demo_link!}
                  github_link={project.github_link}
                  skills={project.skills!}
                  type={project.type!}
                />
              ),
            )}
          </div>
        </div>
      )}

      {modalOpen && <ProjectModal />}
    </motion.section>
  );
};

export default Projects;
