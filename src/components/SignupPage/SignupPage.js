import React, { Component } from "react";

import SignupPageRight from "./SignupPageRight/SignupPageRight";
import SignupPageLeft from "./SignupPageLeft/SignupPageLeft";
import Layout2 from "../../Layout/Layout2";

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

import "./SignupPage.css";

// const textFieldState = {
//   value: "",
//   valid: true,
//   typeMismatch: false,
//   errorMessage: "warning~!"
// };

class SignupPage extends Component {
  state = {
    page1: true,
    page2: false,
    signupComplete: false,
    signupEmail: "",
    signupPassword: "",
    signupPasswordConfirmation: ""
    // email: {
    //   ...textFieldState,
    //   fieldName: "signupEmail",
    //   required: true,
    //   requiredText: "Email is required",
    //   formatErrorText: "Incorrect email format"
    // },
    // password: {
    //   ...textFieldState,
    //   fieldName: "signupPassword",
    //   required: true,
    //   requiredText: "Password is required"
    // },
    // confirmPassword: {
    //   ...textFieldState,
    //   fieldName: "signupPasswordConfirmation",
    //   required: true,
    //   requiredText: "Confirm password"
    // }
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

    console.log(name, value);
  };

  render() {
    return (
      <React.Fragment>
        <Layout2
          left={<SignupPageLeft />}
          right={
            <SignupPageRight
              stateData={this.state}
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
