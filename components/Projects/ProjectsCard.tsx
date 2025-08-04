import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";

interface ProjectProps {
  src: string;
  title: string;
  description: string;
  demo_link: string;
  github_link: string;
}

const ProjectsCard = ({
  src,
  title,
  description,
  demo_link,
  github_link,
}: ProjectProps) => {
  return (
    <div className="relative overflow-hidden lg:max-w-[30%] md:max-w-[43%] sm:max-w-[100%] z-30 my-5">
      <div>
        <h1 className="text-2xl font-semibold text-center">{title}</h1>
      </div>

      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain mt-5"
      />

      <div className="relative mt-3">
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex flex-row items-center justify-between">
          <Link
            href={demo_link}
            target="_blank"
            className="Project-box py-2 px-2 button-primary text-white mt-2 cursor-pointer rounded-lg max-w-[200px]"
          >
            <ArrowTopRightOnSquareIcon className="mr-[3px] h-4 w-4" />
            Live Demo
          </Link>

          <Link
            href={github_link}
            target="_blank"
            className="Project-box button-primary py-2 px-2 mt-2 ml-2 text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <RxGithubLogo className="mr-[3px] h-4 w-4" />
            Check Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
