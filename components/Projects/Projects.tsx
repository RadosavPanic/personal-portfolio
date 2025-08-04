import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="md:text-5xl text-3xl font-semibold py-20">
        Some of my projects
      </h1>
      <div className="h-full w-full flex flex-col flex-wrap justify-around md:flex-row gap-10 px-10">
        <ProjectsCard
          src="/Trendify.png"
          title="Real-Time Clothing & Sneaker Store"
          description="A modern e-commerce platform offering a wide selection of clothing, including top brands like Jordan, Nike, and New Balance. Users can explore, add items to their cart, and complete secure payments with a sleek designed interface for a smooth shopping experience."
          demo_link="https://trendify-sand.vercel.app/"
          github_link="https://github.com/RadosavPanic/trendify"
        />
        <ProjectsCard
          src="/CarePulse.png"
          title="HealthCare Management System"
          description="A healthcare management system that allows patients to book and manage doctor appointments. Admins can schedule, confirm, and cancel appointments, with automatic SMS notifications as confirmation,  simplifying the process for both patients and providers."
          demo_link="https://care-pulse-tan.vercel.app/"
          github_link="https://github.com/RadosavPanic/CarePulse"
        />
        <ProjectsCard
          src="/Promptopia.png"
          title="Open-Source AI Prompting Tool"
          description="Open-source AI prompting tool for the modern world, empowering users to discover, create, and share imaginative prompts that inspire AI-driven content. Ideal for brainstorming ideas, enhancing projects, or having fun with exploring AI potential."
          demo_link="https://promptopia-nine-lilac.vercel.app/"
          github_link="https://github.com/RadosavPanic/promptopia"
        />

        <ProjectsCard
          src="/CrownClothing.png"
          title="E-Commerce Clothing Store"
          description="A sleek online store featuring a curated range of mens and womens clothing. Users can browse selections, add items to their cart, and proceed to secure payment with ease. Perfect for fashion enthusiasts looking for variety and convenience in one place."
          demo_link="https://crownclothing-onsite.netlify.app/"
          github_link="https://github.com/RadosavPanic/Crown-Clothing"
        />

        <ProjectsCard
          src="/Forkify.png"
          title="Food Recipes Discover App"
          description="Explore a vast collection of recipes with a powerful search bar and bookmark favorites for easy access. Adjust servings to calculate ingredient needs, check prep times, and access publisher links. Create and upload your own recipes to share with others."
          demo_link="https://forkify-search-food.netlify.app/"
          github_link="https://github.com/RadosavPanic/forkify"
        />
      </div>
    </div>
  );
};

export default Projects;
