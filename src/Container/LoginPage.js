import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import LoginForm from "../components/LoginPage/LoginForm/LoginForm";
import LoginWith from "../components/LoginPage/LoginWith/LoginWith";
import Button from "../components/UI/Button/Button";
import GreetingMessage from "../components/GreetingMessage/GreetingMessage";
import axiosInstace from "../axios-userInfo";

import Close20 from "@carbon/icons-react/es/close/20";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    fetchedUserData: {},
    chosenUser: "",
    userEmail: {
      loginEmail: "",
      validEmail: false,
      fieldTouched: false,
      errorMessage: "Invalid Email"
    },
    userPassword: {
      loginPassword: "",
      validPassword: false,
      fieldTouched: false,
      errorMessage: "Invalid Password"
    },
    formIsValid: false,
    rememberMe: false,
    redirectToMainPage: false,
    showGreetingMessage: false,
    validUser: false
  };

  componentDidMount() {
    this.props.onLoginPageHandler();

    // ** Temporary **
    // check if the temp userEmail and userPassword matches with the user login inputs
    axiosInstace
      .get("/userInfo.json")
      .then(response => {
        this.setState({ fetchedUserData: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    // ** Temporary **
    // When form is valid && login successful, display greeting message then redirect to the main page
    if (this.state.formIsValid && this.state.validUser) {
      this.redirectTime = setTimeout(
        () =>
          this.setState({
            ...this.state,
            redirectToMainPage: true,
            showGreetingMessage: false
          }),
        3000
      );
    }
  }

  // ** Temporary **
  componentWillUnmount() {
    this.props.offLoginPageHandler();
    clearTimeout(this.redirectTime);
  }

  // ** Temporary **
  showLoginMessage(showGreetingMessage, validUser, userName) {
    this.setState({
      ...this.state,
      showGreetingMessage,
      validUser,
      chosenUser: userName
    });
  }

  rememberMeHandler = name => event => {
    const { checked } = event.target;
    this.setState({ ...this.state, [name]: checked });
  };

  loginInputHandler = event => {
    const { name, value } = event.target;
    const copiedUserEmail = { ...this.state.userEmail };
    const copiedUserPassword = { ...this.state.userPassword };

    copiedUserEmail[name] = value;
    copiedUserPassword[name] = value;

    this.setState(
      {
        userEmail: copiedUserEmail,
        userPassword: copiedUserPassword
      },
      () => this.validateField(name, value)
    );
  };

  validateField(name, value) {
    const userEmail = { ...this.state.userEmail };
    const userPassword = { ...this.state.userPassword };

    switch (name) {
      case "loginEmail":
        userEmail.validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          value
        );
        userEmail.fieldTouched = true;
        break;
      case "loginPassword":
        userPassword.validPassword = value.length > 6;
        userPassword.fieldTouched = true;
        break;
      default:
        break;
    }

    this.setState({ userEmail, userPassword }, this.validateForm);
  }

  validateForm() {
    const copiedUserEmail = { ...this.state.userEmail };
    const copiedUserPassword = { ...this.state.userPassword };

    this.setState({
      formIsValid:
        copiedUserEmail.validEmail && copiedUserPassword.validPassword
    });
  }

  submitHandler = event => {
    event.preventDefault();

    // ** Temporary **
    let showGreetingMessage = this.state.showGreetingMessage;
    let validUser = this.state.validUser;
    let userName = this.state.chosenUser;

    let userInfoArray = Object.keys(this.state.fetchedUserData).map(user => {
      if (
        this.state.userEmail.loginEmail ===
          this.state.fetchedUserData[user].userEmail &&
        this.state.userPassword.loginPassword ===
          this.state.fetchedUserData[user].userPassword
      ) {
        showGreetingMessage = true;
        validUser = true;
        userName = this.state.fetchedUserData[user].userName;

        this.props.saveUserInfoHandler(this.state.fetchedUserData[user]);
        this.showLoginMessage(showGreetingMessage, validUser, userName);
        this.props.loginHandler(this.state.formIsValid, validUser);
      } else if (
        this.state.userEmail.loginEmail !==
          this.state.fetchedUserData[user].userEmail &&
        this.state.userPassword.loginPassword ===
          this.state.fetchedUserData[user].userPassword
      ) {
      }
    });
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
    return this.state.redirectToMainPage ? (
      <Redirect to="/" exact />
    ) : (
      <React.Fragment>
        <GreetingMessage
          show={this.state.showGreetingMessage}
          userName={this.state.chosenUser}
        />

        <form className={"LoginPage-container"} onSubmit={this.submitHandler}>
          <div className={"LoginPage Col-4 margin-left-4"}>
            <Link to="/">
              <Close20 className={"Close-icon"} />
            </Link>
            <h3>Log in</h3>
            <LoginWith
              title={"Log in"}
              buttonText={"Continue"}
              stateData={this.state.loggedInFB}
              componentClicked={this.componentClicked}
              responseFacebook={this.responseFacebook}
            />

            <LoginForm
              stateData={this.state}
              loginHandler={this.loginInputHandler}
              rememberMeHandler={this.rememberMeHandler}
            />

            <div className="Next-button-container">
              <Button
                buttonClass={
                  this.state.formIsValid
                    ? "Signin-button"
                    : "Signin-button Signin-button-disabled"
                }
                disable={!this.state.formIsValid}
              >
                Log In <ArrowRight20 className={"Next-arrow"} />
              </Button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

// Redux--

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    onLoginPage: state.onLoginPage,
    correctUser: state.correctUser
  };
};

const mapDispatchToProsp = dispatch => {
  return {
    loginHandler: (formIsValid, validUser) =>
      dispatch({
        type: "LOGIN",
        payload: { formIsValid, validUser }
      }),
    onLoginPageHandler: () => dispatch({ type: "ONLOGINPAGE" }),
    offLoginPageHandler: () => dispatch({ type: "OFFLOGINPAGE" }),
    saveUserInfoHandler: user =>
      dispatch({ type: "SAVEUSERINFO", payload: { userInfo: user } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(LoginPage);
