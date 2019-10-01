import React from "react";

import Step from "./Step/Step";
import Summary from "./Summary/Summary";

import "./RegistrationLeftSide.css";

const registrationLeftSide = props => {
  // const summary = <Summary stateData={props.stateData} />;
  return (
    <div className={"Registration-left-side-container Col-4-8 margin-left-2-8"}>
      <Step
        pageNumber={props.pageNumber}
        page1Complete={props.page1Complete}
        page2Complete={props.page2Complete}
        page3Complete={props.page3Complete}
      />
      {/*props.stateData.registrationStep1 ? null : summary*/}
    </div>
  );
};

export default registrationLeftSide;
