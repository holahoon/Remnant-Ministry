import React, { Component } from "react";
import { connect } from "react-redux";

import SignupPageRight from "./SignupPageRight/SignupPageRight";
import SignupPageLeft from "./SignupPageLeft/SignupPageLeft";
import Layout2 from "../../Layout/Layout2";
import * as actions from "../../store/actions/indexAction";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

import "./SignupPage.css";

class SignupPage extends Component {
  state = {
    page1: true,
    page2: false,
    // page1Valid: false,
    // page2Valid: false,
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

    signupPage2: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "First name",
          placeholder: "First name",
          warning: "Please, enter a valid name"
        },
        value: "",
        validation: {
          required: true,
          nameRegex: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Last name",
          placeholder: "Last name",
          warning: "Please, enter a valid name"
        },
        value: "",
        validation: {
          required: true,
          nameRegex: true
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      koreanName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "한국이름 Korean name (optional)",
          placeholder: "Korean name",
          warning: "Please, enter a valid name"
        },
        value: "",
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        optional: false,
        visible: true
      },
      dateOfBirth: {
        elementType: "maskedInput",
        elementConfig: {
          type: "text",
          label: "Date of birth",
          placeholder: "MM/DD/YYYY",
          warning: "Please, enter a valid date",
          mask: [
            /[0-1]/,
            /\d/,
            "/",
            /[0-3]/,
            /\d/,
            "/",
            /[1-2]/,
            /\d/,
            /\d/,
            /\d/
          ],
          guide: false
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      gender: {
        elementType: "select",
        elementConfig: {
          label: "Gender",
          warning: "Please, select a valid gender",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "male",
              displayValue: "Male"
            },
            {
              value: "female",
              displayValue: "Female"
            }
          ]
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
      language: {
        elementType: "select",
        elementConfig: {
          label: "Preferred language",
          warning: "Please, select a valid language",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "english",
              displayValue: "English"
            },
            {
              value: "korean",
              displayValue: "Korean"
            },
            {
              value: "spanish",
              displayValue: "Spanish"
            },
            {
              value: "none",
              displayValue: "None"
            }
          ]
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
      phoneNumber: {
        elementType: "maskedInput",
        elementConfig: {
          type: "text",
          label: "Phone number",
          placeholder: "000-000-0000",
          warning: "Please, enter a valid number",
          mask: [
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ],
          guide: false
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
          maxLength: 10
        },
        valid: false,
        touched: false,
        optional: false,
        visible: true
      },
      interest: {
        elementType: "select",
        elementConfig: {
          label: "Area of interest / specialty",
          warning: "Please, select a valid interest",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "interest-NA",
              displayValue: "Not Applicable"
            },
            {
              value: "interest-cccounting",
              displayValue: "Account"
            },
            {
              value: "interest-business",
              displayValue: "Business"
            },
            {
              value: "interest-chemistry",
              displayValue: "Chemistry"
            }
          ]
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
      selectChurch: {
        elementType: "select",
        elementConfig: {
          label: "Select your church",
          warning: "Please, select a valid church",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "church-Immanuel church of Austin",
              displayValue: "Immanuel church of Austin"
            },
            {
              value: "church-1",
              displayValue: "Church 1"
            },
            {
              value: "church-2",
              displayValue: "Church 2"
            },
            {
              value: "church-not listed",
              displayValue: "Not listed"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: true,
        visible: true
      },
      typeChurch: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Type your church",
          placeholder: "Name of the church",
          warning: "Please, enter a valid name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        optional: true,
        visible: false
      }
    }
  };

  componentDidMount() {
    this.props.onSignupPageHandler();
  }

  componentWillUnmount() {
    this.props.offSignupPageHandler();
  }

  signupNextStepHandler = () => {
    // if (this.props.authenticationToken) {
    //   this.setState({
    //     ...this.state,
    //     page1: !this.state.page1,
    //     page2: !this.state.page2
    //   });
    // }
    // if (this.state.page1Valid) {
    //   this.setState({
    //     ...this.state,
    //     page1: !this.state.page1,
    //     page2: !this.state.page2
    //   });
    // }
  };

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

  render() {
    return (
      <React.Fragment>
        <LoadingSpinner loading={this.props.loading} />
        <Layout2
          left={<SignupPageLeft />}
          right={
            <SignupPageRight
              pageState={this.state}
              authenticationError={this.props.authenticationError}
              goToSignupPage2={this.props.goToSignupPage2}
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
    onSignupPage: state.globalSignup.onSignupPage,
    authenticationToken: state.globalSignup.token !== null,
    authenticationError: state.globalSignup.signupError !== null,
    loading: state.globalSignup.loading,
    goToSignupPage2: state.globalSignup.signupPage2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthentication: (email, password) =>
      dispatch(actions.signupAuthentication(email, password)),
    onSignupPageHandler: () => dispatch(actions.onSignupPage()),
    offSignupPageHandler: () => dispatch(actions.offSignupPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
