import React from "react";

import SignupPage1 from "./SignupStep1/SignupPage1";
import SignupPage2 from "./SignupStep2/SignupPage2";

const signupPageRight = props => {
  const signupPage1 = (
    <div className={"margin-left-1-8 Col-4-8"}>
      <h4 className="Create-an-account">Create an account</h4>
      <SignupPage1
        signupNextStepHandler={props.signupNextStepHandler}
        onChangeHandler={props.onChangeHandler}
        pageState={props.pageState}
      />
    </div>
  );
  const signupPage2 = (
    <div className={"margin-left-1-8 Col-6-8"}>
      <h4 className="Create-an-account">Create an account</h4>
      <SignupPage2
        completeSignupHandler={props.completeSignupHandler}
        // signupPage2={props.signupPage2}
      />
    </div>
  );

  return (
    <React.Fragment>
      {props.pageState.page1 ? signupPage1 : signupPage2}
    </React.Fragment>
  );
};

export default signupPageRight;
