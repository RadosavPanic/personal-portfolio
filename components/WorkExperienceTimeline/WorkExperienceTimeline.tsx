"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { WorkExperience } from "@/utils/supabase";
import { slideInFromBottom } from "@/utils/motion";

import { MdWorkHistory, MdPictureAsPdf } from "react-icons/md";

type ExperienceProps = {
  workExperiences: WorkExperience[];
};

const WorkExperienceTimeline = ({ workExperiences }: ExperienceProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="flex flex-col items-center justify-center px-4"
      id="work-experience"
    >
      <div className="inline-flex items-center justify-center flex-wrap text-center text-2xl md:text-4xl font-extrabold py-20">
        <MdWorkHistory className="inline-block mr-2 text-blue-500" />
        Professional Experience
      </div>

      <div className="w-full max-w-3xl  rounded-lg font-mono">
        <div className="bg-[#0f1117]/60 rounded-lg">
          <div className="flex items-center px-6 pt-4 pb-2">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 mr-4"></span>
            <span className="text-blue-400 font-semibold text-sm">
              work_experience.sh
            </span>
          </div>

          <p className="px-6 text-pink-500 my-3">
            $ <span className="text-green-500">radosav@portfolio</span>:~$
            work_exp
          </p>

          <div className="p-4 sm:p-8">
            {workExperiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="flex items-start gap-6 mb-4 md:mb-6 last:mb-0"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <Image
                    src={exp.image_url!}
                    alt={exp.company}
                    width={48}
                    height={48}
                  />

                  {idx !== workExperiences.length - 1 && (
                    <div className="w-px h-24 sm:h-20 md:h-16 bg-gray-600 mt-2"></div>
                  )}
                </div>
                <div className="-mt-2">
                  <div className="font-bold text-lg text-white">
                    {exp.company}
                  </div>
                  <div className="text-sm text-green-500 mb-1">{exp.title}</div>
                  <div className="text-xs mb-2">{exp.date_range}</div>
                  <div className="text-xs sm:text-sm">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-7 py-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-7 md:gap-10">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_15px_#60a5fa] hover:shadow-[0_0_10px_#60a5fa] transition duration-300 gap-2"
          >
            <MdPictureAsPdf className="w-4 h-4" />
            <span>Download CV</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperienceTimeline;
