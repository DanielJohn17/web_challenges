import PropTypes from 'prop-types';
const StepHeader = ({ title, description }) => {
  return (
    <div className="step__header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default StepHeader;

StepHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
