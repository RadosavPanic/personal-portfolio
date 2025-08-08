import SkillsDataProvider from "./SkillsDataProvider";
import { SkillProps } from "@/constants/skills";

type SkillsCardProps = {
  skills: SkillProps[];
};

const SkillsCard = ({ skills }: SkillsCardProps) => {
  return (
    <>
      {skills
        .reduce((acc: SkillProps[][], skill, index) => {
          if (
            index %
              Math.ceil(
                skills.length / Math.round(Math.sqrt(skills.length))
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
                src={skill.src}
                name={skill.name}
                key={index}
                width={skill.width}
                height={skill.height}
                index={index}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export default SkillsCard;
