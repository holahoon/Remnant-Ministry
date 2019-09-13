import React, { Component } from "react";
import { connect } from "react-redux";

import SignupPageRight from "./SignupPageRight/SignupPageRight";
import SignupPageLeft from "./SignupPageLeft/SignupPageLeft";
import Layout2 from "../../Layout/Layout2";
import * as actions from "../../store/actions/indexAction";

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

import "./SignupPage.css";

class SignupPage extends Component {
  state = {
    page1: true,
    page2: false,
    page1Valid: false,
    page2Valid: false,
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
          minLength: 6,
          matchPassword: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      }
    },
    signupPage2: {}
  };

  componentDidMount() {
    this.props.onSignupPageHandler();
  }

  signupNextStepHandler = () => {
    if (this.state.page1Valid) {
      this.setState({
        ...this.state,
        page1: !this.state.page1,
        page2: !this.state.page2
      });
    }
  };

  // completeSignupHandler = () => {
  //   const currentSignupComplete = this.state.signupComplete;
  //   this.setState({ signupComplete: !currentSignupComplete });

  //   alert("You are signed up!");
  // };

  handleSignUp = event => {
    event.preventDefault();

    const { email, password } = this.state.signupPage1;
    this.props.onAuthentication(email.value, password.value);
  };

  checkValidity = state => {
    let isValid = true;

    // check to see if state.value is not an empty string
    if (state.validation.required) {
      isValid = state.value.trim() !== "" && isValid;
    }

    // check for regex
    if (state.validation.emailRegex) {
      const regex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      isValid = regex.test(state.value) && isValid;
    }

    // check to see if state.validation has minLength
    if (state.validation.minLength) {
      isValid = state.value.length >= state.validation.minLength && isValid;
    }

    // check to see if passwords match
    if (state.validation.matchPassword) {
      isValid =
        state.value === this.state.signupPage1.password.value && isValid;
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

    // check if signup page 1 values are valid to proceed
    let page1Valid = true;
    for (let inputIdentifier in stateInfo) {
      page1Valid =
        stateInfo[inputIdentifier].valid &&
        page1Valid &&
        stateInfo["password"].value === stateInfo["passwordConfirm"].value;
    }

    this.setState({ ...this.state, [stateElement]: stateInfo, page1Valid });
  };

  // signup1Handler = (event, inputIdentifier) => {
  //   let signupPage1 = this.onChangeHandler(
  //     event,
  //     inputIdentifier,
  //     "signupPage1"
  //   );

  //   this.setState({ ...this.state, signupPage1 });
  // };

  render() {
    return (
      <React.Fragment>
        <Layout2
          left={<SignupPageLeft />}
          right={
            <SignupPageRight
              pageState={this.state}
              // signupNextStepHandler={this.signupNextStepHandler}
              handleSignUp={this.handleSignUp}
              completeSignupHandler={this.completeSignupHandler}
              onChangeHandler={this.onChangeHandler}
            />
          }
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    onSignupPage: state.globalSignup.onSignupPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthentication: (email, password) =>
      dispatch(actions.authentication(email, password)),
    onSignupPageHandler: () => dispatch(actions.onSignupPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
