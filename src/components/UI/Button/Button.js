import React from "react";
import { Link } from "react-router-dom";

export const RegularButton = props => {
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

export const LinkButton = props => {
  return (
    <Link
      to={props.directTo}
      className={props.buttonClass}
      style={{ background: `${!props.disable ? "" : "#CCCCCC"}` }}
      disabled={props.disable}
    >
      {props.children}
    </Link>
  );
};
