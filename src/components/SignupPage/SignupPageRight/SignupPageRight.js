import React from "react";

import SignupPage1 from "./SignupStep1/SignupPage1";
import SignupPage2 from "./SignupStep2/SignupPage2";

const signupPageRight = props => {
  const signupPage1 = (
    <div className={"margin-left-1-8 Col-4-8"}>
      <h4 className="Create-an-account">Create an account</h4>
      <SignupPage1
        // signupNextStepHandler={props.signupNextStepHandler}
        handleSignUp={props.handleSignUp}
        onChangeHandler={props.onChangeHandler}
        pageState={props.pageState}
        authenticationError={props.authenticationError}
      />
    </div>
  );
  const signupPage2 = (
    <div className={"margin-left-1-8 Col-6-8"}>
      <h4 className="Create-an-account">Create an account</h4>
      <SignupPage2
        pageState={props.pageState}
        onChangeHandler={props.onChangeHandler}
        completeSignupHandler={props.completeSignupHandler}
      />
    </div>
  );

  return (
    <React.Fragment>
      {/*signupPage2*/}
      {props.goToSignupPage2 ? signupPage2 : signupPage1}
    </React.Fragment>
  );
};

export default signupPageRight;
