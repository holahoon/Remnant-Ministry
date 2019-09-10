import React, { Component } from "react";

import SignupPageRight from "./SignupPageRight/SignupPageRight";
import SignupPageLeft from "./SignupPageLeft/SignupPageLeft";
import Layout2 from "../../Layout/Layout2";

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

import "./SignupPage.css";

class SignupPage extends Component {
  state = {
    page1: true,
    page2: false,
    // signupComplete: false,
    // signupEmail: "",
    // signupPassword: "",
    // signupPasswordConfirmation: ""
    signupPage1: {
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
          required: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Password",
          placeholder: "******",
          warning: "Please, enter a valid password"
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
      },
      passwordConfirm: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Confirm password",
          placeholder: "******",
          warning: "Please, match the password"
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
    signupPage2: {}
  };

  signupNextStepHandler = () => {
    const currentState = { ...this.state };
    this.setState({
      ...currentState,
      page1: !currentState.page1,
      page2: !currentState.page2,
      signupComplete: !currentState.signupComplete
    });
  };

  completeSignupHandler = () => {
    const currentSignupComplete = this.state.signupComplete;
    this.setState({ signupComplete: !currentSignupComplete });

    alert("You are signed up!");
  };

  onChangeHandler = event => {
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

  render() {
    return (
      <React.Fragment>
        <Layout2
          left={<SignupPageLeft />}
          right={
            <SignupPageRight
              signupPage1={this.state.singupPage1}
              signupPage2={this.state.signupPage2}
              page={this.state}
              signupNextStepHandler={this.signupNextStepHandler}
              completeSignupHandler={this.completeSignupHandler}
              onChangeHandler={this.onChangeHandler}
            />
          }
        />
      </React.Fragment>
    );
  }
}

export default SignupPage;
