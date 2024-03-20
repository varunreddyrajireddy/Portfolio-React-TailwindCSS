import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";

function Skills() {
  return (
    <section className="py-24 mx-auto w-full px-8 bg-zinc-300" id="skills">
      <span className="text-zinc-800">
        <SectionTitle text="Tech Stack" />
      </span>
      <div className=" py-16 grid grid-gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-t border-zinc-800">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
