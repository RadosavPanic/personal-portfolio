import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  demo: string;
}

const ProjectCard = ({ src, title, description, demo }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border max-w-[30%] border-[#2A0E61] z-[30]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <div className="Project-box py-2 px-2 button-primary text-white mt-2 cursor-pointer rounded-lg max-w-[200px]">
          <ArrowTopRightOnSquareIcon className=" mr-[3px] h-4 w-4" />
          <Link href={demo} target="_blank">
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
