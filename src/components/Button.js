import PropTypes from "prop-types"; // importing the prop type formatter used below the button declaration

const Button = ({ text, color, onClick }) => {
  // this is the button component, the props are text, color , and on onclick method
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue", //you can set default prop states here
};

Button.propTypes = {
  // this can be used like a schema to set prop format, when you add in one from button you have to add it here as well
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button; // export button to be used in Header
