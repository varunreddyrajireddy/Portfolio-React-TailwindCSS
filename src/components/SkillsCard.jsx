import PropTypes from "prop-types";

function SkillsCard({ title, icon }) {
  return (
    <div className="mb-20 text-center content-center flex flex-wrap justify-around">
      <article>
        <span>{icon}</span>
        <h4 className="mt-2 font-bold text-zinc-300">{title}</h4>
      </article>
    </div>
  );
}

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default SkillsCard;
