import React from "react";

import Backdrop from "../UI/Backdrop/Backdrop";

import "./GreetingMessage.css";

const greetingMessage = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} />

      <div
        className={"GreetingMessage"}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <h2>Welcome, remnant {props.userName}!</h2>
      </div>
    </React.Fragment>
  );
};

export default greetingMessage;
