import SkillsDataProvider from "./SkillsDataProvider";
import { SkillsProps, TechImage } from "@/utils/skills";

const SkillsCard = ({ techImages }: SkillsProps) => {
  return (
    <>
      {techImages
        .reduce((acc: TechImage[][], skill, index) => {
          if (
            index %
              Math.ceil(
                techImages.length / Math.round(Math.sqrt(techImages.length))
              ) ===
            0
          )
            acc.push([]);

          acc[acc.length - 1].push(skill);

          return acc;
        }, [])
        .map((skillGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-row items-center justify-around flex-wrap gap-5 md:gap-20 mt-10 md:mt-20 px-4"
          >
            {skillGroup.map((skill, index) => (
              <SkillsDataProvider
                url={skill.url}
                name={skill.name}
                key={skill.name}
                index={index}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export default SkillsCard;
