import { use } from "react";

import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline/WorkExperienceTimeline";
import Projects from "@/components/Projects/Projects";

import { fetchAllProjects, Project } from "@/utils/supabase";

const Home = () => {
  const projects: Project[] = use(fetchAllProjects());

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <WorkExperienceTimeline />
        <Projects projects={projects} />
      </div>
    </main>
  );
};

export default Home;
