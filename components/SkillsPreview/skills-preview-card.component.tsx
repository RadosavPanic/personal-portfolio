import SkillDataProvider from "./skill-data-provider.component";
import { SkillProps } from "@/constants/skills";

type SkillsPreviewCardProps = {
  skills: SkillProps[];
};

const SkillsPreviewCard = ({ skills }: SkillsPreviewCardProps) => {
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
            className="flex flex-row justify-around flex-wrap mt-4 gap-5 md:scale-90 sm:scale-75 items-center"
          >
            {skillGroup.map((skill, index) => (
              <SkillDataProvider
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

export default SkillsPreviewCard;
