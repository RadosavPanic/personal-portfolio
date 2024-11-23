import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-around md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Promptopia.png"
          title="AI Prompting Website"
          description="Open-source AI prompting tool for the modern world, empowering users to discover, create, and share imaginative prompts that inspire AI-driven content. Ideal for brainstorming ideas, enhancing projects, or having fun with exploring AI potential."
          demo_link="https://promptopia-nine-lilac.vercel.app/"
          github_link="https://github.com/RadosavPanic/promptopia"
        />

        <ProjectCard
          src="/CrownClothing.png"
          title="E-Commerce Website"
          description="A sleek online store featuring a curated range of mens and womens clothing. Users can browse selections, add items to their cart, and proceed to secure payment with ease. Perfect for fashion enthusiasts looking for variety and convenience in one place."
          demo_link="https://crownclothing-onsite.netlify.app/"
          github_link="https://github.com/RadosavPanic/Crown-Clothing"
        />

        <ProjectCard
          src="/Forkify.png"
          title="Food Search Website"
          description="Explore a vast collection of recipes with a powerful search bar and bookmark favorites for easy access. Adjust servings to calculate ingredient needs, check prep times, and access publisher links. Create and upload your own recipes to share with others."
          demo_link="https://forkify-search-food.netlify.app/"
          github_link="https://github.com/RadosavPanic/forkify"
        />
      </div>
    </div>
  );
};

export default Projects;
