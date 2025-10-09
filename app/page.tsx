import { use } from "react";

import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline/WorkExperienceTimeline";
import Projects from "@/components/Projects/Projects";

import {
  fetchAllProjects,
  fetchWorkExperiences,
  fetchCVFile,
  fetchTechImages,
} from "@/utils/supabase";

const Home = () => {
  const projects: Project[] = use(fetchAllProjects());
  const workExperiences: WorkExperience[] = use(fetchWorkExperiences());
  const cvFileUrl: string = fetchCVFile();
  const techImages = use(fetchTechImages());

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills techImages={techImages} />
        <WorkExperienceTimeline
          workExperiences={workExperiences}
          cvFileUrl={cvFileUrl}
        />
        <Projects projects={projects} />
      </div>
    </main>
  );
};

export default Home;
