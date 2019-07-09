import React from "react";

import RegistrationBasicInfo from "./RegistrationForms1Contents/RegistrationBasicInfo/RegistrationBasicInfo";
import RegistrationFieldInfo from "./RegistrationForms1Contents/RegistrationFieldInfo/RegistrationFieldInfo";
import RegistrationChurchInfo from "./RegistrationForms1Contents/RegistrationChurchInfo/RegistrationChurchInfo";
import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

const registrationForms1 = props => {
  return (
    <div>
      <RegistrationBasicInfo />
      <RegistrationFieldInfo />
      <RegistrationChurchInfo />
      <div className={"Registration-button-container margin-left-6"}>
        <Button
          buttonClass={"Registration-blue-button button-1-2--global"}
          handleButtonClick={props.nextStepHandler}
        >
          Next
          <ArrowRight16 className={"ArrowIcon-registration-next"} />
        </Button>
      </div>
    </div>
  );
};

export default registrationForms1;
