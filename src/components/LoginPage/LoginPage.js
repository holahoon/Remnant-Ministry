import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import LoginForm from "./LoginForm/LoginForm";
import LoginWith from "./LoginWith/LoginWith";
import Button from "../UI/Button/Button";
import GreetingMessage from "../GreetingMessage/GreetingMessage";

import Close20 from "@carbon/icons-react/es/close/20";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./LoginPage.css";

class LoginPage extends Component {
  state = {
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
    showGreetingMessage: false
  };

  componentDidMount() {
    this.props.onLoginPageHandler();
  }

  componentDidUpdate() {
    // When form is valid && login successful, display greeting message then redirect to the main page
    if (this.state.formIsValid && this.props.loggedIn) {
      console.log("componentDidUpdate");
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

  componentWillUnmount() {
    this.props.offLoginPageHandler();
    clearTimeout(this.redirectTime);
  }

  showLoginMessage() {
    this.setState({ ...this.state, showGreetingMessage: true });
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
    if (this.state.formIsValid && this.props.correctUser) {
      this.setState({ ...this.state, showGreetingMessage: true });
    }
    this.props.loginHandler(this.state.formIsValid);
  };

  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

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
          userName={"David"}
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
                // handleButtonClick={() =>
                //   this.props.loginHandler(this.state.formIsValid)
                // }
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
    loginHandler: state =>
      dispatch({
        type: "LOGIN",
        payload: { formValidity: state }
      }),
    onLoginPageHandler: () => dispatch({ type: "ONLOGINPAGE" }),
    offLoginPageHandler: () => dispatch({ type: "OFFLOGINPAGE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(LoginPage);
