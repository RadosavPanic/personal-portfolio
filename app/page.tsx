import Hero from "@/components/Hero/Hero";
import ProjectsPreview from "@/components/ProjectsPreview/projects-preview.component";
import SkillsPreview from "@/components/SkillsPreview/skills-preview.component";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <SkillsPreview />
        <ProjectsPreview />
      </div>
    </main>
  );
};

export default Home;
