import React from "react";
import ProjectsPreviewCard from "./projects-preview-card.component";

const ProjectsPreview = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="md:text-5xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Some of my projects
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-around md:flex-row gap-10 px-10">
        <ProjectsPreviewCard
          src="/Promptopia.png"
          title="AI Prompting Tool"
          description="Open-source AI prompting tool for the modern world, empowering users to discover, create, and share imaginative prompts that inspire AI-driven content. Ideal for brainstorming ideas, enhancing projects, or having fun with exploring AI potential."
          demo_link="https://promptopia-nine-lilac.vercel.app/"
          github_link="https://github.com/RadosavPanic/promptopia"
        />

        <ProjectsPreviewCard
          src="/CrownClothing.png"
          title="E-Commerce Store"
          description="A sleek online store featuring a curated range of mens and womens clothing. Users can browse selections, add items to their cart, and proceed to secure payment with ease. Perfect for fashion enthusiasts looking for variety and convenience in one place."
          demo_link="https://crownclothing-onsite.netlify.app/"
          github_link="https://github.com/RadosavPanic/Crown-Clothing"
        />

        <ProjectsPreviewCard
          src="/Forkify.png"
          title="Food Search App"
          description="Explore a vast collection of recipes with a powerful search bar and bookmark favorites for easy access. Adjust servings to calculate ingredient needs, check prep times, and access publisher links. Create and upload your own recipes to share with others."
          demo_link="https://forkify-search-food.netlify.app/"
          github_link="https://github.com/RadosavPanic/forkify"
        />
      </div>
    </div>
  );
};

export default ProjectsPreview;
