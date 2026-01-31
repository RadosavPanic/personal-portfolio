import { use } from "react";

import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import JourneyTimeline from "@/components/Journey/JourneyTimeline";
import Projects from "@/components/Projects/Projects";

import {
  fetchAllProjects,
  fetchJourneyExp,
  fetchCVFile,
  fetchTechImages,
} from "@/utils/supabase";

const Home = () => {
  const projects: Project[] = use(fetchAllProjects());
  const journeyExp: JourneyExp[] = use(fetchJourneyExp());
  const cvFileUrl: string = fetchCVFile();
  const techImages = use(fetchTechImages());

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills techImages={techImages} />
        <JourneyTimeline journey={journeyExp} cvFileUrl={cvFileUrl} />
        <Projects projects={projects} />
      </div>
    </main>
  );
};

export default Home;
