"use client";

import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import useProjectStore from "@/store/project.store";
import { capitalizeWord } from "@/utils/helpers";
import clsx from "clsx";

const ProjectBadge = ({ title, label, active }: ProjectBadgeProps) => {
  const { setProjectType } = useProjectStore();

  return (
    <button
      onClick={() => setProjectType(title)}
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-sm md:text-base border transition-all focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-200 cursor-pointer z-40",
        active
          ? "bg-green-400 border-green-400 shadow-md scale-105"
          : "text-gray-200 border-gray-700 hover:bg-white/5",
      )}
    >
      <span>{capitalizeWord(label ?? title)}</span>
      {title === "other" && <FaEllipsisH className="ml-2" />}
    </button>
  );
};

export default ProjectBadge;
