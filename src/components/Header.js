import PropTypes from "prop-types"; //formatter
import Button from "./Button"; // import button from button component
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  // header with title prop and onAdd func as a prop
  return (
    // using title prop inside the h1
    // the button here is settingt he color text and defining onclick to run the onClick func above, now you can make many buttons with different values for those 'attributes' called props
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" ? (
        <Button
          color={showAdd ? "#d0021b" : "#417505"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      ) : (
        ""
      )}
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
