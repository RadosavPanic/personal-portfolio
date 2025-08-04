"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { slideInFromLeft, fadeIn } from "@/utils/motion";
import { SkillGroups } from "@/constants/skills";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Modal from "./skills-modal.component";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<Record<string, string>>({});

  const toggleModal = (info?: Record<string, string>) => {
    if (info) setModalInfo(info);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col h-full w-full mb-80">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-10 md:px-20 px-10 mt-[120px] w-full z-[20]"
      >
        <motion.p
          variants={slideInFromLeft}
          className="h-full w-full text-[30px] text-center font-medium text-white"
        >
          My skills in development
        </motion.p>

        <div className="lg:max-w-[60%] w-full flex justify-center">
          <motion.div variants={fadeIn(1)} className="w-full overflow-x-auto">
            <table className="w-full border-collapse border border-gray-700 text-white">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-3 border border-gray-700 text-left">
                    Skill Group
                  </th>
                  <th className="p-3 border border-gray-700 text-left">
                    Skills
                  </th>
                  <th className="p-3 border border-gray-700 text-left">
                    More info
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(SkillGroups).map(([group, { list, info }]) => (
                  <tr key={group} className="hover:bg-gray-800">
                    <motion.td
                      variants={fadeIn(1.5)}
                      className="p-3 border border-gray-700 capitalize"
                    >
                      {group}
                    </motion.td>
                    <motion.td
                      variants={fadeIn(2)}
                      className="p-3 border border-gray-700"
                    >
                      {list.join(", ")}
                    </motion.td>
                    <motion.td
                      variants={fadeIn(2.5)}
                      className="p-3 border border-gray-700"
                    >
                      <div className="flex justify-center items-center">
                        <InformationCircleIcon
                          onClick={() => toggleModal(info)}
                          className="w-7 h-7 cursor-pointer hover:text-blue-500"
                        />
                      </div>
                    </motion.td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.div>

      {isOpen && <Modal info={modalInfo} onClose={() => toggleModal()} />}
    </div>
  );
};

export default Skills;
