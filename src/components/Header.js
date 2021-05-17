import PropTypes from "prop-types"; //formatter
import Button from "./Button"; // import button from button component

const Header = ({ title }) => {
  // header with title prop
  const onClick = () => {
    console.log("click");
  };

  return (
    // using title prop inside the h1
    // the button here is settingt he color text and defining onclick to run the onClick func above, now you can make many buttons with different values for those 'attributes' called props
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
}; // set default text  of task tracker to title

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
