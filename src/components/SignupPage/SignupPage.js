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
          type: "password",
          label: "Password",
          placeholder: "******",
          warning: "Password must be at least 6 characters, 1 capitalized"
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
          type: "password",
          label: "Confirm password",
          placeholder: "******",
          warning: "Password does not match"
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

  // onChangeHandler = event => {
  //   const { name, value, type, checked } = event.target;
  //   if (type === "checkbox") {
  //     this.setState({
  //       [name]: checked
  //     });
  //   } else {
  //     this.setState({
  //       [name]: value
  //     });
  //   }
  // };

  checkValidity = state => {
    let isValid = true;

    // check to see if state.value is not an empty string
    if (state.validation.required) {
      isValid = state.value.trim() !== "" && isValid;
    }

    // check to see if state.validation has minLength and maxLength
    if (state.validation.minLength) {
      isValid = state.value.length >= state.validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, inputIdentifier, stateElement) => {
    // clone the state of the passed in element
    const stateInfo = { ...this.state[stateElement] };
    // deep clone the specified state
    const deepClonedStateInfo = { ...stateInfo[inputIdentifier] };
    // update the input value
    deepClonedStateInfo.value = event.target.value;

    // check the validity and update the valid state
    deepClonedStateInfo.valid = this.checkValidity(deepClonedStateInfo);
    // update touched state to true because the specific input field has been touched
    deepClonedStateInfo.touched = true;
    // assign the state
    stateInfo[inputIdentifier] = deepClonedStateInfo;

    // check to see if formValidation in basic, field, churchInfo are true to proceed to next step
    // let formValidation = true;
    // for (let key in stateInfo) {
    //   if (key === "formValidation") {
    //     continue;
    //   }

    //   formValidation = stateInfo[key].valid && formValidation;
    // }
    // stateInfo.formValidation = formValidation;

    // return the state
    // return stateInfo;
    this.setState({ ...this.state, [stateElement]: stateInfo });
  };

  signup1Handler = (event, inputIdentifier) => {
    let signupPage1 = this.onChangeHandler(
      event,
      inputIdentifier,
      "signupPage1"
    );

    this.setState({ ...this.state, signupPage1 });
  };

  render() {
    return (
      <React.Fragment>
        <Layout2
          left={<SignupPageLeft />}
          right={
            <SignupPageRight
              signupPage1={this.state.signupPage1}
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
