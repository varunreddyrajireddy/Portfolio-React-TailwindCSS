import PropTypes from "prop-types";

function SectionTitle({ text }) {
  return (
    <div className="pb-5 border-b border-zinc-800">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
