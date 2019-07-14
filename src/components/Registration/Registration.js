import React, { Component } from "react";
import moment from "moment";

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
        age: "",
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
      },

      positionInChurchRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      trainingLevelRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      selectChurchRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false,
        showTypeChurchRegistration: false
      },
      typeChurchRegistration: {
        value: "",
        required: false,
        valid: true
      }
    },
    registrationFormValidation2: {
      lodgingOptionRegistration: {
        value: "4people",
        price: "",
        required: true,
        valid: false,
        touched: false
      },
      shirtSizeRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      staffVolunteerRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      healthConditionRegistration: {
        value: "",
        required: false,
        valid: true
      },
      prayerTopicRegistration: {
        value: "",
        required: true,
        valid: false
      },
      billingSameAsMyAddress: {
        value: false,
        required: false
      },
      billingFirstNameRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      billingLastNameRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      billingAddressRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      billingOptionalRegistration: {
        value: "",
        required: false,
        valid: true
      },
      billingCityRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      billingStateRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      },
      billingPostalRegistration: {
        value: "",
        required: true,
        valid: false,
        touched: false
      }
    },
    formStep1Valid: true,
    formStep2Valid: false
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

  onChangeHandler = event => {
    const { name, value, checked } = event.target;

    const updatedRegistrationForm = {
      ...this.state.registrationFormValidation
    };
    const deepUpdatedRegistrationForm = { ...updatedRegistrationForm[name] };

    const updatedRegistrationForm2 = {
      ...this.state.registrationFormValidation2
    };
    const deepUpdatedRegistrationForm2 = { ...updatedRegistrationForm2[name] };

    // Check validation
    const nameRegex = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
    const DOBRegex = RegExp(/^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/);
    const postalRegex = RegExp(/^\d{5}([\-]\d{4})?/);

    switch (name) {
      case "firstNameRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = nameRegex.test(value)
          ? true
          : false;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "lastNameRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = nameRegex.test(value)
          ? true
          : false;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "koreanNameRegistration":
        deepUpdatedRegistrationForm.value = value;
        break;
      case "dateOfBirthRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = DOBRegex.test(value) ? true : false;
        deepUpdatedRegistrationForm.value = value;
        deepUpdatedRegistrationForm.age = this.dateOfBirthFormatHandler(value);
        break;
      case "genderRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "preferredLanguageRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "schoolRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "gradeRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "majorRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "specialtyRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "companyRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "companyTitleRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "positionInChurchRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "trainingLevelRegistration":
        deepUpdatedRegistrationForm.touched = true;
        deepUpdatedRegistrationForm.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm.value = value;
        break;
      case "selectChurchRegistration":
        deepUpdatedRegistrationForm.touched = true;
        if (value === "") {
          deepUpdatedRegistrationForm.valid = false;
          deepUpdatedRegistrationForm.showTypeChurchRegistration = false;
        } else if (value === "church-not-listed") {
          deepUpdatedRegistrationForm.valid = true;
          deepUpdatedRegistrationForm.showTypeChurchRegistration = true;
        } else {
          deepUpdatedRegistrationForm.valid = true;
          deepUpdatedRegistrationForm.showTypeChurchRegistration = false;
        }
        deepUpdatedRegistrationForm.value = value;
        break;
      case "typeChurchRegistration":
        deepUpdatedRegistrationForm.value = value;
        break;

      // registration page 2
      case "lodgingOptionRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "shirtSizeRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "staffVolunteerRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "healthConditionRegistration":
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "prayerTopicRegistration":
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingSameAsMyAddress":
        deepUpdatedRegistrationForm2.value = checked;
        break;
      case "billingFirstNameRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = nameRegex.test(value)
          ? true
          : false;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingLastNameRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = nameRegex.test(value)
          ? true
          : false;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingAddressRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingOptionalRegistration":
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingCityRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingStateRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = value === "" ? false : true;
        deepUpdatedRegistrationForm2.value = value;
        break;
      case "billingPostalRegistration":
        deepUpdatedRegistrationForm2.touched = true;
        deepUpdatedRegistrationForm2.valid = postalRegex.test(value)
          ? true
          : false;
        deepUpdatedRegistrationForm2.value = value;
        break;
      default:
        break;
    }

    // Update the input values first in the deep cloned variable and update it into the basicInfo to update the state
    updatedRegistrationForm[name] = deepUpdatedRegistrationForm;
    updatedRegistrationForm2[name] = deepUpdatedRegistrationForm2;

    // Check to see if ALL inputs are valid in order to proceed to next registration
    let formStep1Valid = true;
    for (let name in updatedRegistrationForm) {
      if (updatedRegistrationForm[name].required) {
        formStep1Valid = updatedRegistrationForm[name].valid && formStep1Valid;
      }
    }

    let formStep2Valid = true;
    for (let name in updatedRegistrationForm2) {
      if (updatedRegistrationForm2[name].required) {
        formStep2Valid = updatedRegistrationForm2[name].valid && formStep2Valid;
      }
    }

    this.setState({
      registrationFormValidation: updatedRegistrationForm,
      registrationFormValidation2: updatedRegistrationForm2,
      formStep1Valid,
      formStep2Valid
    });
  };

  dateOfBirthFormatHandler(DOBvalue) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(DOBvalue)) return false;

    const formattedDOB = DOBvalue.split("/").join("-");
    // Check what is being deprecated. This may throw a warning in the console
    const age = moment().diff(formattedDOB, "years");
    return age;
  }

  click = () => {
    this.dateOfBirthFormatHandler(
      this.state.registrationFormValidation.dateOfBirthRegistration.value
    );
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
