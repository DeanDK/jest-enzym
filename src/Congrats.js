import React from "react";

/**
 * Functional react component for congraluatory message
 * @function
 * {param} {object} props - React props
 * @return {JSX.Element}
 */

export default props => {
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