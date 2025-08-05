import { Project } from "@/utils/supabase";
import ProjectsCard from "./ProjectsCard";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  projects.forEach((project) => console.log(project.name));

  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-semibold py-20">
        Some of my projects
      </h1>
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
    </div>
  );
};

export default Projects;
