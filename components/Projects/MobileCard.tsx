import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";

interface ProjectProps {
  src: string;
  title: string;
  github_link: string;
  skills: string[];
  description: string;
}

const MobileCard = ({
  src,
  title,
  github_link,
  skills,
  description,
}: ProjectProps) => {
  return (
    <div className="relative overflow-hidden lg:max-w-[30%] md:max-w-[43%] sm:max-w-[100%] my-5 p-4 rounded-2xl bg-gradient-to-t from-gray-900 to-black border border-gray-700 shadow-lg hover:shadow-xl transition duration-300 z-20">
      <div>
        <h1 className="text-2xl font-semibold text-center text-white">
          {title}
        </h1>
      </div>

      <div className="mt-4 flex justify-center">
        <Image
          src={src}
          alt={title}
          width={600}
          height={600}
          className="object-contain rounded-xl max-h-[400px] w-auto"
        />
      </div>

      <div className="flex flex-row items-center justify-center mt-8 gap-2">
        <Link
          href={github_link}
          target="_blank"
          className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_10px_#60a5fa] hover:shadow-[0_0_15px_#60a5fa] transition duration-300 gap-2 text-xs"
        >
          <span>Check Code</span>
          <RxGithubLogo className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6">
        {skills.map((skill, idx) => (
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

export default MobileCard;
