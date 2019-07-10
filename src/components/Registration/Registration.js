import React, { Component } from "react";

import Layout2 from "../../Layout/Layout2";
import RegistrationLeftSide from "./RegistrationLeftSide/RegistrationLeftSide";
import RegistrationRightSide from "./RegistrationRightSide/RegistrationRightSide";

import "./Registration.css";

class registration extends Component {
  state = {
    currentStep: "1",
    registrationStep1: true,
    registrationStep2: false,
    registrationStep1Filled: false,
    registrationStep2Filled: false,
    formValidation: {
      basicInfo: {
        firstNameRegistration: "",
        lastNameRegistration: "",
        koreanNameRegistration: "",
        dateOfBirthRegistration: "",
        genderRegistration: "",
        preferredLanguageRegistration: ""
      }
    }
  };

  completeRegistrationHandler = () => {
    alert("Registration Complete!");
  };

  nextStepHandler = () => {
    const currentStep = { ...this.state };
    this.setState({
      currentStep: "2",
      registrationStep1: !currentStep.registrationStep1,
      registrationStep2: !currentStep.registrationStep2,
      registrationStep1Filled: !currentStep.registrationStep1Filled
    });
  };

  prevStepHandler = () => {
    const currentStep = { ...this.state };
    this.setState({
      currentStep: "1",
      registrationStep1: !currentStep.registrationStep1,
      registrationStep2: !currentStep.registrationStep2,
      registrationStep1Filled: !currentStep.registrationStep1Filled
    });
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    // Deep clone the state object
  };

  render() {
    return (
      <Layout2
        left={<RegistrationLeftSide stateData={this.state} />}
        right={
          <RegistrationRightSide
            completeRegistrationHandler={this.completeRegistrationHandler}
            nextStepHandler={this.nextStepHandler}
            prevStepHandler={this.prevStepHandler}
            stateData={this.state}
          />
        }
      />
    );
  }
}

export default registration;
