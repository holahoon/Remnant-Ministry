import React, { Component } from "react";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import LoginForm from "./LoginForm/LoginForm";
import LoginWith from "./LoginWith/LoginWith";
import Button from "../UI/Button/Button";

import Close20 from "@carbon/icons-react/es/close/20";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./LoginPage.css";

class loginPage extends Component {
  state = {
    loggedInFB: false,
    userIdFB: "",
    emailFB: "",
    nameFB: "",
    loginEmail: "",
    loginPassword: "",
    correctId: false,
    correctPassword: false,
    loggedIn: false,
    rememberMe: true
  };

  loginHandler = event => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  loginButtonHandler = event => {
    event.preventDefault();
    if (this.state.correctId && this.state.correctPassword) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  // Facebook log in button function
  responseFacebook = response => {
    console.log(response);
    this.setState({
      loggedInFB: true,
      userIdFB: response.userID,
      emailFB: response.email,
      nameFB: response.name
    });
  };

  // Facebook log in button function
  componentClicked = () => {
    console.log("clicked");
  };

  render() {
    // const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
    // const facebookAppId = "340687620162835";
    // let fbContent = null;
    // if (!this.state.loggedInFB) {
    //   fbContent = (
    //     <FacebookLogin
    //       appId={facebookAppId}
    //       autoLoad={true}
    //       fields="name,email"
    //       onClick={this.componentClicked}
    //       callback={this.responseFacebook}
    //     />
    //   );
    // }

    return (
      <div className={"LoginPage-container"}>
        <div className={"LoginPage Col-4 margin-left-4"}>
          <Close20 className={"Close-icon"} />
          <h3>Log in</h3>
          {/*{fbContent}*/}
          {/*<FacebookLogin
            appId=""
            fields="name,email,picture"
            callback={responseFacebook}
          />
          <GoogleLogin
            clientId=""
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          */}
          <LoginWith
            title={"Log in"}
            buttonText={"Continue"}
            stateData={this.state.loggedInFB}
            componentClicked={this.componentClicked}
            responseFacebook={this.responseFacebook}
          />

          <LoginForm stateData={this.state} loginHandler={this.loginHandler} />

          <div className="Next-button-container">
            {/*<button className={"Next-button"} onClick={this.loginButtonHandler}>
              Next <ArrowRight20 className={"Next-arrow"} />
        </button>*/}
            <Button
              buttonClass={"Next-button"}
              handleButtonClick={this.loginButtonHandler}
            >
              Next <ArrowRight20 className={"Next-arrow"} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// <Close20 className={"Close-icon"} />
//         <h3>Log in</h3>

//         <LoginWithButtons
//           styleName={"LoginWithFacebook LoginButton"}
//           buttonText={"Login with Facebook"}
//         />
//         <LoginWithButtons
//           styleName={"LoginWithGoogle LoginButton"}
//           buttonText={"Login with Google"}
//         />

//         <div className={"Or"}>
//           <div className={"Or-line"} />
//           <span>or</span>
//           <div className={"Or-line"} />
//         </div>

export default loginPage;
