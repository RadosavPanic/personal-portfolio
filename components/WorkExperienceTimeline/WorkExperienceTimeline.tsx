"use client";

import { slideInFromBottom } from "@/utils/motion";
import { motion } from "motion/react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Quality Control",
    company: "Mei Ta Europe",
    date: "July 2021 - June 2025",
    image_url: "/meita_europe.png",
  },
  {
    id: 2,
    title: "Programming Tutor",
    company: "Self Employed",
    date: "May 2024 - Present",
    image_url: "/self_employed.png",
  },
  {
    id: 3,
    title: "Help Desk Specialist",
    company: "NCR Voyix",
    date: "June 2025 - Present",
    image_url: "/ncr_voyix.png",
  },
];

const WorkExperienceTimeline = () => {
  return (
    <section className="md:my-32">
      <motion.div
        variants={slideInFromBottom}
        className="text-4xl font-medium my-4 text-center"
      >
        Previous work experience
      </motion.div>

      <div className="w-full py-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-32"
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative z-10 p-4 sm:p-6 mt-0 bg-[#0f1117] text-center rounded-lg transition duration-300 w-[90%] max-w-[300px] shadow-none hover:shadow-lg hover:shadow-blue-500 cursor-pointer ${
                index % 2 !== 0 && "lg:mt-32"
              }`}
            >
              <Image
                alt={exp.title}
                src={exp.image_url}
                width={60}
                height={60}
                className="mx-auto mb-3"
              />
              <h3 className="font-semibold text-sm sm:text-base my-2 text-green-500">
                {exp.title}
              </h3>
              <h4 className="text-xs md:text-sm my-2">{exp.company}</h4>
              <p className="text-[11px] md:text-xs italic">{exp.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;
