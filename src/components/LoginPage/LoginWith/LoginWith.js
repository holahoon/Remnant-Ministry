import React from "react";

import LoginWithButtons from "../LoginWithButtons/LoginWithButtons";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import "./LoginWith.css";

const loginWith = props => {
  // const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
  // const facebookAppId = "340687620162835";
  // let fbContent = null;
  // if (!props.stateData.loggedInFB) {
  //   fbContent = (
  //     <FacebookLogin
  //       appId={facebookAppId}
  //       autoLoad={true}
  //       fields="name,email"
  //       onClick={props.componentClicked}
  //       callback={props.responseFacebook}
  //     />
  //   );
  // }

  return (
    <React.Fragment>
      {/*{fbContent}*/}
      <LoginWithButtons
        styleName={"LoginWithFacebook LoginButton"}
        buttonText={"Login with Facebook"}
      />
      <LoginWithButtons
        styleName={"LoginWithGoogle LoginButton"}
        buttonText={"Login with Google"}
      />

      <div className={"Or"}>
        <div className={"Or-line"} />
        <span>or</span>
        <div className={"Or-line"} />
      </div>
    </React.Fragment>
  );
};

export default loginWith;
