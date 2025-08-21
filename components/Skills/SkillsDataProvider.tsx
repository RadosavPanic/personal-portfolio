"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { motion } from "@/utils/motion";
import { TechImage } from "@/utils/skills";

type SkillPropsExtended = TechImage & {
  index: number;
};

const SkillsDataProvider = ({ name, url, index }: SkillPropsExtended) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const imageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const animationDelay = 0.4;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={url}
        alt={name}
        unoptimized
        width={0}
        height={0}
        className="w-auto h-auto"
      />
    </motion.div>
  );
};

export default SkillsDataProvider;
