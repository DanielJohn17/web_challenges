import PropTypes from 'prop-types';

const Button = ({ type, handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className={
        type === 'next' ? `custom__button__next` : `custom__button__back`
      }
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
