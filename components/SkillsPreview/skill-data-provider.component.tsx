"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { SkillProps } from "@/constants/skills";

type SkillPropsExtended = SkillProps & {
  index: number;
};

const SkillDataProvider = ({
  name,
  src,
  height,
  width,
  index,
}: SkillPropsExtended) => {
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
      <Image src={src} alt={name} width={width} height={height} />
    </motion.div>
  );
};

export default SkillDataProvider;
