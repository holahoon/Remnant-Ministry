import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import Layout from "../../Layout/Layout";
// import InputForms from "../UI/InputForm/InputForm";
import LoginForm from "./LoginForm/LoginForm";
import LoginWith from "./LoginWith/LoginWith";
import { RegularButton } from "../UI/Button/Button";
// import axiosInstace from "../../axios-userInfo";
import * as actions from "../../store/actions/indexAction";

import Close20 from "@carbon/icons-react/es/close/20";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./LoginPage.css";
import loginForm from "./LoginForm/LoginForm";

class LoginPage extends Component {
  state = {
    login: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          label: "Email",
          placeholder: "email@rutc.com",
          warning: "Please, enter a valid email"
        },
        value: "",
        validation: {
          required: true,
          emailRegex: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          label: "Password",
          placeholder: "******",
          warning: "Password must be at least 6 characters"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      }
    },

    formIsValid: false,
    rememberMe: false,
    redirectToMainPage: false,
    validUser: false
  };

  componentDidMount() {
    this.props.onLoginPageHandler();
  }

  componentWillUnmount() {
    this.props.offLoginPageHandler();
  }

  handleLogin = event => {
    event.preventDefault();

    const { email, password } = this.state.signupPage1;
    this.props.onAuthentication(email.value, password.value);
  };

  render() {
    return (
      // <form className={"LoginPage-container"} onSubmit={this.handleLogin}>
      // <div className={"Loginpage-container"}>
      <Layout>
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
          loginState={this.state}
          handleSignUp={this.handleSignUp}
          completeSignupHandler={this.completeSignupHandler}
          onChangeHandler={this.onChangeHandler}
        />

        <div className="Next-button-container">
          <RegularButton
            buttonClass={
              this.state.formIsValid
                ? "Signin-button"
                : "Signin-button Signin-button-disabled"
            }
            disable={!this.state.formIsValid}
          >
            Log In <ArrowRight20 className={"Next-arrow"} />
          </RegularButton>
        </div>
      </Layout>
      // </div>
      // </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.globalLogin.loggedIn,
    onLoginPage: state.globalLogin.onLoginPage
  };
};

const mapDispatchToProsp = dispatch => {
  return {
    onAuthentication: (email, password) =>
      dispatch(actions.authentication(email, password)),
    onLoginPageHandler: () => dispatch(actions.onLoginPage()),
    offLoginPageHandler: () => dispatch(actions.offLoginPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(LoginPage);

/*
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import FacebookLogin from "react-facebook-login";
// import GoogleLogin from "react-google-login";

import LoginForm from "./LoginForm/LoginForm";
import LoginWith from "./LoginWith/LoginWith";
import { RegularButton } from "../UI/Button/Button";
import GreetingMessage from "../GreetingMessage/GreetingMessage";
// import axiosInstace from "../../axios-userInfo";
import * as actions from "../../store/actions/indexAction";

import Close20 from "@carbon/icons-react/es/close/20";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";

import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    login: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          label: "Email",
          placeholder: "email@rutc.com",
          warning: "Please, enter a valid email"
        },
        value: "",
        validation: {
          required: true,
          emailRegex: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          label: "Password",
          placeholder: "******",
          warning: "Password must be at least 6 characters"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      }
    },

    fetchedUserData: {},
    chosenUser: "",
    userEmail: {
      loginEmail: "",
      validEmail: false,
      fieldTouched: false,
      emailError: false
    },
    userPassword: {
      loginPassword: "",
      validPassword: false,
      fieldTouched: false,
      passwordError: false
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
    // axiosInstace
    //   .get("/userInfo.json")
    //   .then(response => {
    //     this.setState({ fetchedUserData: response.data });
    //   })
    //   .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.props.offLoginPageHandler();
    // clearTimeout(this.redirectTime);
  }

  // rememberMeHandler = name => event => {
  //   const { checked } = event.target;
  //   this.setState({ ...this.state, [name]: checked });
  // };

  // loginInputHandler = event => {
  //   const { name, value } = event.target;
  //   const copiedUserEmail = { ...this.state.userEmail };
  //   const copiedUserPassword = { ...this.state.userPassword };

  //   copiedUserEmail[name] = value;
  //   copiedUserEmail.emailError = false;
  //   copiedUserPassword[name] = value;
  //   copiedUserPassword.passwordError = false;

  //   this.setState(
  //     {
  //       userEmail: copiedUserEmail,
  //       userPassword: copiedUserPassword
  //     },
  //     () => this.validateField(name, value)
  //   );
  // };

  // validateField(name, value) {
  //   const userEmail = { ...this.state.userEmail };
  //   const userPassword = { ...this.state.userPassword };

  //   switch (name) {
  //     case "loginEmail":
  //       userEmail.validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
  //         value
  //       );
  //       userEmail.fieldTouched = true;
  //       break;
  //     case "loginPassword":
  //       userPassword.validPassword = value.length > 6;
  //       userPassword.fieldTouched = true;
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ userEmail, userPassword }, this.validateForm);
  // }

  // validateForm() {
  //   const copiedUserEmail = { ...this.state.userEmail };
  //   const copiedUserPassword = { ...this.state.userPassword };

  //   this.setState({
  //     formIsValid:
  //       copiedUserEmail.validEmail && copiedUserPassword.validPassword
  //   });
  // }

  // submitHandler = event => {
  //   event.preventDefault();

  //   let showGreetingMessage = this.state.showGreetingMessage;
  //   let validUser = this.state.validUser;
  //   let userName = this.state.chosenUser;

  //   Object.keys(this.state.fetchedUserData).map(user => {
  //     const userEmail = { ...this.state.userEmail };
  //     const userPassword = { ...this.state.userPassword };
  //     if (
  //       this.state.userEmail.loginEmail ===
  //         this.state.fetchedUserData[user].userEmail &&
  //       this.state.userPassword.loginPassword ===
  //         this.state.fetchedUserData[user].userPassword
  //     ) {
  //       showGreetingMessage = true;
  //       validUser = true;
  //       userName = this.state.fetchedUserData[user].userName;

  //       this.props.saveUserInfoHandler(this.state.fetchedUserData[user]);
  //       this.showLoginMessage(showGreetingMessage, validUser, userName);
  //       this.props.loginHandler(this.state.formIsValid, validUser);
  //     } else if (
  //       this.state.userEmail.loginEmail !==
  //         this.state.fetchedUserData[user].userEmail &&
  //       this.state.userPassword.loginPassword ===
  //         this.state.fetchedUserData[user].userPassword
  //     ) {
  //       userPassword.loginPassword = "";
  //       userEmail.loginEmail = "";
  //       userEmail.emailError = true;

  //       this.setState({ userEmail, userPassword });
  //     } else if (
  //       this.state.userEmail.loginEmail ===
  //         this.state.fetchedUserData[user].userEmail &&
  //       this.state.userPassword.loginPassword !==
  //         this.state.fetchedUserData[user].userPassword
  //     ) {
  //       userPassword.loginPassword = "";
  //       userPassword.passwordError = true;

  //       this.setState({ userPassword });
  //     } else {
  //       userEmail.loginEmail = "";
  //       userEmail.emailError = true;
  //       userPassword.loginPassword = "";
  //       userPassword.passwordError = true;
  //     }
  //   });
  // };

  // Facebook log in button function
  // responseFacebook = response => {
  //   console.log(response);
  //   this.setState({
  //     loggedInFB: true,
  //     userIdFB: response.userID,
  //     emailFB: response.email,
  //     nameFB: response.name
  //   });
  // };

  // Facebook log in button function
  // componentClicked = () => {
  //   console.log("clicked");
  // };

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
          <div className={"LoginPage Col-4"}>
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
              <RegularButton
                buttonClass={
                  this.state.formIsValid
                    ? "Signin-button"
                    : "Signin-button Signin-button-disabled"
                }
                disable={!this.state.formIsValid}
              >
                Log In <ArrowRight20 className={"Next-arrow"} />
              </RegularButton>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.globalLogin.loggedIn,
    onLoginPage: state.globalLogin.onLoginPage
    // correctUser: state.globalLogin.correctUser
  };
};

const mapDispatchToProsp = dispatch => {
  return {
    onAuthentication: (email, password) =>
      dispatch(actions.authentication(email, password)),
    // loginHandler: (formIsValid, validUser) =>
    //   dispatch({
    //     type: actionTypes.LOGIN,
    //     payload: { formIsValid, validUser }
    //   }),
    onLoginPageHandler: () => dispatch(actions.onLoginPage()),
    offLoginPageHandler: () => dispatch(actions.offLoginPage())
    // saveUserInfoHandler: user =>
    //   dispatch({ type: "SAVEUSERINFO", payload: { userInfo: user } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(LoginPage);
*/
