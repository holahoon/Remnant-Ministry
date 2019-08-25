import React from "react";

import RegistrationRightSideHeader from "./RegistrationRightSideHeader/RegistrationRightSideHeader";
import RegistrationForms1 from "./RegistrationForms1/RegistrationForms1";
import RegistrationForms2 from "./RegistrationForms2/RegistrationForms2";

import "./RegistrationRightSide.css";

const registrationRightSide = props => {
  const registration1 = <RegistrationForms1 />;
  const registration2 = <RegistrationForms2 />;

  return (
    <div
      className={"Registration-right-side-container Col-6-8 margin-left-1-8"}
    >
      <RegistrationRightSideHeader />

      {/*props.stateData.registrationStep1 ? registration1 : registration2*/}
      {/*registration1*/}
      {registration2}
    </div>
  );
};

export default registrationRightSide;

/*
import React from "react";

import RegistrationRightSideHeader from "./RegistrationRightSideHeader/RegistrationRightSideHeader";
import RegistrationForms1 from "./RegistrationForms1/RegistrationForms1";
import RegistrationForms2 from "./RegistrationForms2/RegistrationForms2";

import "./RegistrationRightSide.css";

const registrationRightSide = props => {
  const registration1 = (
    <RegistrationForms1
      nextStepHandler={props.nextStepHandler}
      onChangeHandler={props.onChangeHandler}
      stateData={props.stateData}
    />
  );
  const registration2 = (
    <RegistrationForms2
      prevStepHandler={props.prevStepHandler}
      completeRegistrationHandler={props.completeRegistrationHandler}
      onChangeHandler={props.onChangeHandler}
      stateData={props.stateData}
    />
  );

  return (
    <div
      className={"Registration-right-side-container Col-6-8 margin-left-1-8"}
    >
      <RegistrationRightSideHeader />

      {props.stateData.registrationStep1 ? registration1 : registration2}
    </div>
  );
};

export default registrationRightSide;
*/
