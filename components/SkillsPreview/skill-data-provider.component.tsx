"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  skill_name: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Props) => {
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
      <Image src={src} alt={skill_name} width={width} height={height} />
    </motion.div>
  );
};

export default SkillDataProvider;
