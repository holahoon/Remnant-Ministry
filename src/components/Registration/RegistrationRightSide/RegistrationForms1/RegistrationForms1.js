import React, { Component } from "react";

import RegistrationBasicInfo from "./RegistrationForms1Contents/RegistrationBasicInfo/RegistrationBasicInfo";
import RegistrationFieldInfo from "./RegistrationForms1Contents/RegistrationFieldInfo/RegistrationFieldInfo";
import RegistrationChurchInfo from "./RegistrationForms1Contents/RegistrationChurchInfo/RegistrationChurchInfo";
import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

class RegistrationForms1 extends Component {
  state = {
    basicInfo: {
      formValidation: false,
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
        optional: false
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
        optional: false
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
        optional: false
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
        optional: false
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
        optional: false
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
        optional: false
      }
    },
    fieldInfo: {
      formValidation: false,
      school: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "School",
          placeholder: "School",
          warning: "Please, enter a valid school"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
      },
      grade: {
        elementType: "select",
        elementConfig: {
          label: "Grade",
          warning: "Please, select a valid grade",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "gradeNA",
              displayValue: "Not Applicable"
            },
            {
              value: "grade1",
              displayValue: "1st grade"
            },
            {
              value: "grade2",
              displayValue: "2nd grade"
            },
            {
              value: "grade3",
              displayValue: "3rd grade"
            },
            {
              value: "grade4",
              displayValue: "4th grade"
            },
            {
              value: "grade5",
              displayValue: "5th grade"
            },
            {
              value: "grade6",
              displayValue: "6th grade"
            },
            {
              value: "grade7",
              displayValue: "7th grade"
            },
            {
              value: "grade8",
              displayValue: "8th grade"
            },
            {
              value: "grade9",
              displayValue: "9th grade"
            },
            {
              value: "grade10",
              displayValue: "10th grade"
            },
            {
              value: "grade11",
              displayValue: "11th grade"
            },
            {
              value: "grade12",
              displayValue: "12th grade"
            },
            {
              value: "undergrad",
              displayValue: "College/University (Undergrad)"
            },
            {
              value: "grad",
              displayValue: "University (Grad)"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
      },
      major: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Major",
          placeholder: "Major",
          warning: "Please, enter a valid major"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
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
        optional: false
      },
      company: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Company",
          placeholder: "Company",
          warning: "Please, enter a valid company"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
      },
      companyTitle: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Title (Company)",
          placeholder: "Title",
          warning: "Please, enter a valid title"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
      }
    },
    churchInfo: {
      formValidation: false,
      churchPosition: {
        elementType: "select",
        elementConfig: {
          label: "Select your position in church",
          warning: "Please, select a valid position",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "position-remnant",
              displayValue: "Remnant"
            },
            {
              value: "position-young adult",
              displayValue: "Young adult"
            },
            {
              value: "position-elder",
              displayValue: "Elder"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
      },
      trainingLevel: {
        elementType: "select",
        elementConfig: {
          label: "Select your training level",
          warning: "Please, select a valid training",
          options: [
            {
              value: "",
              displayValue: "Select"
            },
            {
              value: "training-NA",
              displayValue: "Not Applicable"
            },
            {
              value: "training-1st-level-camp",
              displayValue: "1st level camp training"
            },
            {
              value: "traning-2nd-level-camp",
              displayValue: "2nd level camp training"
            },
            {
              value: "training-3rd-level-camp",
              displayValue: "3rd level camp training"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        optional: false
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
        optional: false
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
        optional: true
      }
    },
    form1Valid: false
  };

  componentDidUpdate() {}

  capitalizeInput = input => {
    return input.replace(/^[a-z]/, word => word.toUpperCase());
  };

  onChangeHandler = (event, inputIdentifier, stateElement) => {
    // clone the state of the passed in element
    const stateInfo = { ...this.state[stateElement] };
    // deep clone the specified state
    const deepClonedStateInfo = { ...stateInfo[inputIdentifier] };
    // update the value state (conditionally capitalize the value)
    if (deepClonedStateInfo.elementType === "input") {
      deepClonedStateInfo.value = this.capitalizeInput(event.target.value);
    } else {
      deepClonedStateInfo.value = event.target.value;
    }
    // check the validity and update the valid state
    deepClonedStateInfo.valid = this.checkValidity(
      deepClonedStateInfo.value,
      deepClonedStateInfo.validation
    );
    // update touched state to true because the specific input field has been touched
    deepClonedStateInfo.touched = true;
    // assign the state
    stateInfo[inputIdentifier] = deepClonedStateInfo;
    // check to see if all inputs are valid to set formIsValid to true to proceed
    let form1Valid = true;
    // for (let inputIdentifier in stateElement) {
    //   form1Valid = stateElement[inputIdentifier].valid && form1Valid;
    // }

    // return the state
    return stateInfo;
  };

  updateBasicInfo = (event, inputIdentifier) => {
    let formValidation = true;
    let basicInfo = this.onChangeHandler(event, inputIdentifier, "basicInfo");
    for (let key in basicInfo) {
      if (key === "formValidation") {
        continue;
      }
      formValidation = basicInfo[key].valid && formValidation;
    }
    basicInfo.formValidation = formValidation;
    this.setState({ ...this.state, basicInfo });
  };

  updateFieldInfo = (event, inputIdentifier) => {
    let fieldInfo = this.onChangeHandler(event, inputIdentifier, "fieldInfo");

    this.setState({ ...this.state, fieldInfo });
  };

  updateChurchInfo = (event, inputIdentifier) => {
    let churchInfo = this.onChangeHandler(event, inputIdentifier, "churchInfo");
    // show / hide typeChurch input
    if (churchInfo["selectChurch"].value === "church-not listed") {
      churchInfo["typeChurch"].optional = false;
    } else {
      churchInfo["typeChurch"].optional = true;
    }

    this.setState({ ...this.state, churchInfo });
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    // check to see if value is not an empty string
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    // check for regex
    if (rules.nameRegex) {
      const nameRegex = RegExp(/^[a-zA-Z]+$/);
      isValid = nameRegex.test(value) && isValid;
    }

    // check to see if rules has minLength and maxLength
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  render() {
    console.log("formValidation: ", this.state.basicInfo.formValidation);
    return (
      <div>
        <RegistrationBasicInfo
          basicInfo={this.state.basicInfo}
          onChangeHandler={this.updateBasicInfo}
        />
        <RegistrationFieldInfo
          fieldInfo={this.state.fieldInfo}
          onChangeHandler={this.updateFieldInfo}
        />
        <RegistrationChurchInfo
          churchInfo={this.state.churchInfo}
          onChangeHandler={this.updateChurchInfo}
        />

        <div className={"Registration-button-container margin-left-6"}>
          <Button
            buttonClass={"Registration-blue-button button-1-2--global"}
            disable={!this.state.form1Valid}
          >
            Next
            <ArrowRight16 className={"ArrowIcon-registration-next"} />
          </Button>
        </div>
      </div>
    );
  }
}

export default RegistrationForms1;
