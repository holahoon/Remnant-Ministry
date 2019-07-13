import React, { Component } from "react";

import Layout2 from "../../Layout/Layout2";
import RegistrationLeftSide from "./RegistrationLeftSide/RegistrationLeftSide";
import RegistrationRightSide from "./RegistrationRightSide/RegistrationRightSide";

import "./Registration.css";

class Registration extends Component {
  state = {
    currentStep: "1",
    registrationStep1: true,
    registrationStep2: false,
    // registrationStep1Filled: false,
    // registrationStep2Filled: false,
    // basicInfo: {
    //   firstNameRegistration: {
    //     elementType: "input",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "First Name",
    //       error: "please, enter a valid name"
    //     },
    //     value: "",
    //     validation: {
    //       required: true
    //     },
    //     touched: false
    //   },
    //   lastNameRegistration: {
    //     elementType: "input",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "Last Name",
    //       error: "please, enter a valid name"
    //     },
    //     value: "",
    //     validation: {
    //       required: true
    //     },
    //     touched: false
    //   },
    //   koreanNameRegistration: {
    //     elementType: "input",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "Korean Name",
    //       error: ""
    //     },
    //     value: "",
    //     validation: {
    //       required: false
    //     },
    //     touched: false
    //   },
    //   dateOfBirthRegistration: {
    //     elementType: "input",
    //     elementConfig: {
    //       type: "text",
    //       placeholder: "MM/DD/YYYY",
    //       error: "please, enter a valid date"
    //     },
    //     value: "",
    //     validation: {
    //       required: true
    //     },
    //     touched: false
    //   },
    //   genderRegistration: {
    //     elementType: "select",
    //     elementConfig: {
    //       placeholder: "Select your gender",
    //       error: "please, select gender",
    //       options: [
    //         {
    //           value: "",
    //           displayValue: "Select gender"
    //         },
    //         {
    //           value: "male",
    //           displayValue: "Male"
    //         },
    //         {
    //           value: "female",
    //           displayValue: "Female"
    //         }
    //       ]
    //     },
    //     value: "",
    //     validation: {
    //       required: true
    //     },
    //     touched: false
    //   },
    //   preferredLanguageRegistration: {
    //     elementType: "select",
    //     elementConfig: {
    //       placeholder: "Preferred Language",
    //       error: "please, select preferred language",
    //       options: [
    //         {
    //           value: "",
    //           displayValue: "Select preferred language"
    //         },
    //         {
    //           value: "english",
    //           displayValue: "English"
    //         },
    //         {
    //           value: "korean",
    //           displayValue: "Korean"
    //         }
    //       ]
    //     },
    //     value: "",
    //     validation: {
    //       required: true
    //     },
    //     touched: false
    //   }
    // }

    registrationFormValidation: {
      firstNameRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      lastNameRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      koreanNameRegistration: {
        value: "",
        required: false,
        valid: true
      },
      dateOfBirthRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      genderRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      preferredLanguageRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },

      schoolRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      gradeRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      majorRegistration: {
        value: "",
        required: true,
        valid: true,
        touched: false
      },
      specialtyRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      companyRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      companyTitleRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      }
    },
    formStep1Valid: false
  };

  completeRegistrationHandler = () => {
    alert("Registration Complete!");
  };

  nextStepHandler = () => {
    const currentStep = { ...this.state };

    this.setState({
      currentStep: "2",
      registrationStep1: !currentStep.registrationStep1,
      registrationStep2: !currentStep.registrationStep2
      // basicInfoIsValid: !currentStep.basicInfoIsValid,
      // fieldInfoIsValid: !currentStep.fieldInfoIsValid
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

  /*
  onChangeHandler = (event, inputIdentifier) => {
    const { value } = event.target;
    // Deep clone the state object
    const updatedBasicInfo = { ...this.state.basicInfo };
    // To deep clone (because spread operator does NOT deeply clone an object)
    const deepUpdatedBasicInfo = { ...updatedBasicInfo[inputIdentifier] };
    // Update value
    deepUpdatedBasicInfo.value = value;
    // Update valid
    deepUpdatedBasicInfo.valid = this.checkValidity(
      deepUpdatedBasicInfo.value,
      deepUpdatedBasicInfo.validation
    );
    // Update touched
    deepUpdatedBasicInfo.touched = true;
    updatedBasicInfo[inputIdentifier] = deepUpdatedBasicInfo;
    // Check to see if ALL inputs are valid in order to set registrationStep1Filled to true to proceed
    let registrationStep1IsValid = true;
    for (let inputIdentifier in updatedBasicInfo) {
      registrationStep1IsValid =
        updatedBasicInfo[inputIdentifier].valid && registrationStep1IsValid;
    }

    this.setState({
      basicInfo: updatedBasicInfo,
      registrationStep1Filled: registrationStep1IsValid
    });
  };
  

  checkValidity(value, rules) {
    let isValid = true;
    // .trim() - to remove any whtie spaces
    // isValid updates to true / false depending on value.trim() is not equal to an empty string
    // if value.trim() is not an empty string, then isValid is TRUE
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    // check if rules has .minLength, if it does,
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    // check if rules has .maxLength, if it does,
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
  }
  */

  onChangeHandler = event => {
    const { name, value } = event.target;
    const updatedRegistrationForm = {
      ...this.state.registrationFormValidation
    };
    const deepUpdatedRegistrationForm = { ...updatedRegistrationForm[name] };
    // const basicInfo = { ...this.state.basicInfo };
    // const deepBasicInfo = { ...basicInfo[name] };

    // const fieldInfo = { ...this.state.fieldInfo };
    // const deepFieldInfo = { ...fieldInfo };

    const nameRegex = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
    const DOBRegex = RegExp(/^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/);

    switch (name) {
      case "firstNameRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = nameRegex.test(value)
          ? true
          : false;
        break;
      case "lastNameRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = nameRegex.test(value)
          ? true
          : false;
        break;
      case "dateOfBirthRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = DOBRegex.test(value) ? true : false;
        break;
      case "genderRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "preferredLanguageRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "schoolRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "gradeRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "majorRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "specialtyRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "companyRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      case "companyTitleRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        break;
      default:
        break;
    }

    // Update the input values first in the deep cloned variable and update it into the basicInfo to update the state.basicInfo
    deepUpdatedRegistrationForm.value = value;
    updatedRegistrationForm[name] = deepUpdatedRegistrationForm;

    // Check to see if ALL inputs are valid in order to proceed to next registration
    let formStep1Valid = true;
    for (let name in updatedRegistrationForm) {
      formStep1Valid = updatedRegistrationForm[name].valid && formStep1Valid;
    }
    // for (let name in basicInfo && fieldInfo) {
    //   formStep1Valid =
    //     basicInfo[name].valid && fieldInfo[name].valid && formStep1Valid;
    // }

    // for (let name in basicInfo) {
    //   formStep1Valid = basicInfo[name].valid && formStep1Valid;
    // }

    this.setState({
      registrationFormValidation: updatedRegistrationForm,
      formStep1Valid
    });
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
            onChangeHandler={this.onChangeHandler}
            stateData={this.state}
          />
        }
      />
    );
  }
}

export default Registration;
