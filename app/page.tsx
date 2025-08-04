import { use } from "react";

import Hero from "@/components/Hero/Hero";
import SkillsPreview from "@/components/SkillsPreview/skills-preview.component";
import Projects from "@/components/Projects/Projects";

import {
  fetchAllProjects,
  fetchAllSocials,
  Social,
  Project,
} from "@/utils/supabase";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline/WorkExperienceTimeline";

const Home = () => {
  const projects: Project[] = use(fetchAllProjects());
  const socials: Social[] = use(fetchAllSocials());

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero projects={projects} socials={socials} />
        <SkillsPreview />
        <WorkExperienceTimeline />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
