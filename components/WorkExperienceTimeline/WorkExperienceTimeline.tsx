"use client";

import Image from "next/image";

import { motion } from "motion/react";
import { slideInFromBottom } from "@/utils/motion";

import { MdWorkHistory } from "react-icons/md";

const experiences = [
  {
    id: 1,
    title: "Quality Control",
    company: "Mei Ta Europe",
    date: "July 2021 - June 2025",
    image_url: "/meita_europe.png",
    description:
      "Oversaw quality control and process optimization in automotive parts production, performing chemical composition analysis with specialized software and machinery. Handled data processing, modification, and standardization, including database transfers and backup creation.",
  },
  {
    id: 2,
    title: "Programming Tutor",
    company: "Self Employed",
    date: "May 2024 - Present",
    image_url: "/self_employed.png",
    description:
      "Tutored students in programming fundamentals and advanced topics across multiple languages, including JavaScript, Python, Java, C# and more. Used various learning materials and practical examples to enhance understanding of different topics, and provided hands-on coding sessions.",
  },
  {
    id: 3,
    title: "Help Desk Specialist",
    company: "NCR Voyix",
    date: "June 2025 - Present",
    image_url: "/ncr_voyix.png",
    description:
      "Maintaining and optimizing NCR Aloha POS FOH and BOH systems for Wendy's US and Canada franchise locations. Managing configuration, remote updates, filesystem, and user role administration. Oversee POS peripherals, payment processing systems, networking infrastructure, and kitchen technologies, ensuring stability, synchronization, and peak performance across all operational areas.",
  },
];

const WorkExperienceTimeline = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="flex flex-col items-center justify-center z-20"
      id="work-experience"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20">
        <MdWorkHistory className="mr-2 text-blue-500" />
        Previous work experience
      </div>

      <div className="w-full flex flex-wrap justify-center items-center px-4 lg:px-0 py-10 gap-20 lg:gap-20">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-row flex-shrink-0 flex-grow-0 basis-full max-w-full lg:basis-[40%] lg:max-w-[40%] bg-gradient-to-br from-blue-700 to-black rounded-2xl p-8"
          >
            <div className="flex flex-col items-start justify-start mr-10">
              <Image
                alt={exp.title}
                src={exp.image_url}
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="font-mono text-base text-[#00ff99] mb-2 text-center">
                {exp.company}
              </h4>
              <p className="font-mono text-sm text-gray-300 text-center">
                {exp.date}
              </p>
            </div>

            <div className="flex flex-col items-start justify-start w-2/3">
              <h3 className="font-mono font-bold text-xl lg:text-2xl text-white my-2">
                {exp.title}
              </h3>
              <p className="font-mono text-sm text-gray-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperienceTimeline;
