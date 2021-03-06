import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congraluatory message
 * @function
 * {param} {object} props - React props
 * @return {JSX.Element}
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations!</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;

Congrats.propTypes = {
  success: PropTypes.bool
};
