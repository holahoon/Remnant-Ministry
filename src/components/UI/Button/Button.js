import React from "react";

const button = props => {
  return (
    <button className={props.buttonClass} onClick={props.handleButtonClick}>
      {props.children}
    </button>
  );
};

export default button;
