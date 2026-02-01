"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";
import { useEffect, useState } from "react";
import useProjectStore from "@/store/project.store";

const WebCard = ({
  src,
  title,
  demo_link,
  github_link,
  name,
  skills,
  description,
  type,
}: WebProjectProps) => {
  const { modalOpen, setModalOpen, setProjectInfo } = useProjectStore();

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div className="relative overflow-hidden lg:max-w-[30%] md:max-w-[43%] sm:max-w-[100%] my-5 p-4 rounded-2xl bg-gradient-to-t from-gray-900 to-black border border-gray-700 shadow-lg hover:shadow-xl transition duration-300 z-20">
      <div>
        <h1 className="text-2xl font-semibold text-center text-white">
          {title}
        </h1>
      </div>

      <div className="mt-4">
        <div className="relative rounded-xl overflow-hidden max-h-[220px] group">
          <Image
            src={src}
            alt={title}
            width={450}
            height={250}
            className="w-full object-cover rounded-xl transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-transparent hover:bg-black/60 transition-colors duration-500 flex items-center justify-center cursor-pointer">
            <button
              onClick={() => {
                setProjectInfo(title, name, description, type);
                setModalOpen(true);
              }}
              className="opacity-0 group-hover:opacity-100 backdrop-blur-sm px-4 py-2 rounded-md bg-white/40 hover:bg-white/50 border border-white  shadow-[0_0_10px_#fff] hover:shadow-[0_0_25px_#fff] transition duration-300 text-white cursor-pointer"
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between mt-8">
        <Link
          href={demo_link}
          target="_blank"
          className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-green-900 to-black border border-green-500 cursor-pointer shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_15px_#22c55e] transition duration-300 gap-2 text-sm"
        >
          <span>Check Live</span>
          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        </Link>

        <Link
          href={github_link}
          target="_blank"
          className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-green-900 to-black border border-green-500 cursor-pointer shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_15px_#22c55e] transition duration-300 gap-2 text-sm"
        >
          <span>Check Code</span>
          <RxGithubLogo className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6">
        {skills?.map((skill, idx) => (
          <Image
            key={idx}
            src={skill}
            alt={`skill-${idx}`}
            width={30}
            height={30}
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default WebCard;
