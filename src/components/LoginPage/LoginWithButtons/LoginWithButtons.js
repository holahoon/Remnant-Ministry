import React from "react";

import "./LoginWithButtons.css";

const loginWithButtons = props => {
  return (
    <button className={props.styleName}>
      <div className={"LoginDot"} />
      {props.buttonText}
    </button>
  );
};

export default loginWithButtons;
