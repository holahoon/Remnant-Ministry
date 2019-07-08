import React from "react";

import Step from "./Step/Step";
import Summary from "./Summary/Summary";

import "./RegistrationLeftSide.css";

const registrationLeftSide = props => {
  const summary = <Summary stateData={props.stateData} />;
  return (
    <div className={"Registration-left-side-container Col-4-8 margin-left-2-8"}>
      <Step stateData={props.stateData} />;
      {props.stateData.registrationStep1 ? null : summary}
    </div>
  );
};

export default registrationLeftSide;
