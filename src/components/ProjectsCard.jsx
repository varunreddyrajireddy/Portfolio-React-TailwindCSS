import PropTypes from "prop-types";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function ProjectsCard({ url, img, github, title, text }) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-zinc-800 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank" rel="noreferrer">
            <TbWorldWww className="h-8 w-8 text-zinc-500 hover:text-zinc-800 duration-300" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-zinc-500 hover:text-zinc-800 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}

ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectsCard;
