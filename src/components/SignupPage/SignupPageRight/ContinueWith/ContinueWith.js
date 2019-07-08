import React, { Fragment } from "react";

import LoginWithButtons from "../../../LoginPage/LoginWithButtons/LoginWithButtons";

const continueWith = props => {
  return (
    <Fragment>
      <LoginWithButtons
        buttonText={"Continue with Facebook"}
        styleName={"LoginWithFacebook LoginButton"}
      />
      <LoginWithButtons
        buttonText={"Continue with Google"}
        styleName={"LoginWithGoogle LoginButton"}
      />

      <div className={"Or"}>
        <div className={"Or-line"} />
        <span>or</span>
        <div className={"Or-line"} />
      </div>
    </Fragment>
  );
};

export default continueWith;
