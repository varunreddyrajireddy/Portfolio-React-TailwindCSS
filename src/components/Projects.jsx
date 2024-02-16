import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section className="py-20 mx-auto w-full px-8 bg-zinc-300" id="projects">
      <SectionTitle text="Projects" />
      <div className="py-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
