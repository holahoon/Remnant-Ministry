import React from "react";

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";
import CheckmarkOutline16 from "@carbon/icons-react/es/checkmark--outline/16";

const step = props => {
  const arrow1 = (
    <ArrowRight20
      className={
        props.stateData.registrationStep1
          ? "ArrowIcon-registration-step"
          : "ArrowIcon-registration-step hide-arrow"
      }
    />
  );
  const arrow2 = (
    <ArrowRight20
      className={
        props.stateData.registrationStep2
          ? "ArrowIcon-registration-step"
          : "ArrowIcon-registration-step hide-arrow"
      }
    />
  );
  const checked = (
    <CheckmarkOutline16 className={"Checkmark-outline-registration-step"} />
  );

  return (
    <div>
      <h3 className={"step-title"}>Step {props.stateData.currentStep} of 2</h3>
      <p
        className={
          props.stateData.registrationStep1
            ? "step-1-title step-selected"
            : "step-1-title"
        }
      >
        {props.stateData.formStep1Valid ? checked : null}
        {props.stateData.formStep1Valid ? null : arrow1}
        General information
      </p>

      <p
        className={
          props.stateData.registrationStep2
            ? "step-2-title step-selected"
            : "step-2-title"
        }
      >
        {props.stateData.registrationStep2Filled ? checked : null}
        {props.stateData.registrationStep2Filled ? null : arrow2}
        RCA options & payment
      </p>

      <div className={"step-divider"} />
    </div>
  );
};

export default step;
