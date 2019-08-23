import React from "react";

const button = props => {
  return (
    <button
      className={props.buttonClass}
      style={{ background: `${!props.disable ? "" : "#CCCCCC"}` }}
      onClick={props.handleButtonClick}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};

export default button;
