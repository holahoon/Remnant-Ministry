import React from "react";

import RegistrationRightSideHeader from "./RegistrationRightSideHeader/RegistrationRightSideHeader";
import RegistrationForms1 from "./RegistrationForms1/RegistrationForms1";
import RegistrationForms2 from "./RegistrationForms2/RegistrationForms2";
import RegistrationForms3 from "./RegistrationForms3/RegistrationForms3";

import "./RegistrationRightSide.css";

const registrationRightSide = props => {
  // const registration1 = <RegistrationForms1 />;
  // const registration2 = <RegistrationForms2 />;
  // const registration3 = <RegistrationForms3 />;

  return (
    <div
      className={"Registration-right-side-container Col-6-8 margin-left-1-8"}
    >
      <RegistrationRightSideHeader />

      {/*props.stateData.registrationStep1 ? registration1 : registration2*/}
      <RegistrationForms1 />
      <RegistrationForms2 />
      <RegistrationForms3 />
    </div>
  );
};

export default registrationRightSide;
