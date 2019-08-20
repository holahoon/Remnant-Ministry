import React, { Component } from "react";

import RegistrationBasicInfo from "./RegistrationForms1Contents/RegistrationBasicInfo/RegistrationBasicInfo";
import RegistrationFieldInfo from "./RegistrationForms1Contents/RegistrationFieldInfo/RegistrationFieldInfo";
// import RegistrationChurchInfo from "./RegistrationForms1Contents/RegistrationChurchInfo/RegistrationChurchInfo";
import Button from "../../../UI/Button/Button";

import ArrowRight16 from "@carbon/icons-react/es/arrow--right/16";

class RegistrationForms1 extends Component {
  state = {
    basicInfo: {
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
          required: true
        },
        valid: false,
        touched: false
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
          required: true
        },
        valid: false,
        touched: false
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
        valid: false,
        touched: false
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
          required: true
        },
        valid: false,
        touched: false
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
        touched: false
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
        touched: false
      }
    },
    fieldInfo: {
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
        touched: false
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
        }
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
        touched: false
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
        }
      },
      company: {
        elementType: "text",
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
        touched: false
      },
      companyTitle: {
        elementType: "text",
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
        touched: false
      }
    }
  };

  /*
  onChangeHandlerBasicInfo = (event, inputIdentifier) => {
    // clone basicInfo
    const basicInfo = { ...this.state.basicInfo };
    // deep clone each basicInfo of the given identifier
    const deepClonedBasicInfo = { ...basicInfo[inputIdentifier] };

    // update value
    deepClonedBasicInfo.value = event.target.value;

    // update valid by checking the validity of the input field
    deepClonedBasicInfo.valid = this.checkValidity(
      deepClonedBasicInfo.value,
      deepClonedBasicInfo.validation.required
    );

    // update touched
    deepClonedBasicInfo.touched = true;

    // update the cloned basicInfo
    basicInfo[inputIdentifier] = deepClonedBasicInfo;

    // check to see if all inputs are valid to set formIsValid to true to proceed
    // let formIsValid = true;
    // for (let inputIdentifier in basicInfo) {
    //   formIsValid = basicInfo[inputIdentifier].valid && formIsValid;
    // }

    return basicInfo;
    // this.setState({ ...this.state, basicInfo });
  };
  */

  // onChangeHandlerFieldInfo = (event, inputIdentifier) => {
  //   const fieldInfo = { ...this.state.fieldInfo };
  //   const deepClonedFieldInfo = { ...fieldInfo[inputIdentifier] };

  //   deepClonedFieldInfo.value = event.target.value;

  //   deepClonedFieldInfo.valid = this.checkValidity(
  //     deepClonedFieldInfo.value,
  //     deepClonedFieldInfo.validation.required
  //   );

  //   deepClonedFieldInfo.touched = true;
  //   fieldInfo[inputIdentifier] = deepClonedFieldInfo;

  //   this.setState({ ...this.state, fieldInfo });
  // };

  onChangeHandler = (event, inputIdentifier, stateElement) => {
    // clone the state of the passed in element
    const stateInfo = { ...this.state[stateElement] };
    // deep clone the specified state
    const deepClonedStateInfo = { ...stateInfo[inputIdentifier] };
    // update the value state
    deepClonedStateInfo.value = event.target.value;
    // check the validity and update the valid state
    deepClonedStateInfo.valid = this.checkValidity(
      deepClonedStateInfo.value,
      deepClonedStateInfo.validation.required
    );
    // update touched state to true because the specific input field has been touched
    deepClonedStateInfo.touched = true;
    // assign the state
    stateInfo[inputIdentifier] = deepClonedStateInfo;
    // check to see if all inputs are valid to set formIsValid to true to proceed
    // let formIsValid = true;
    // for (let inputIdentifier in basicInfo) {
    //   formIsValid = basicInfo[inputIdentifier].valid && formIsValid;
    // }
    // return the state
    return stateInfo;
  };

  updateBasicInfo = (event, inputIdentifier) => {
    let basicInfo = this.onChangeHandler(event, inputIdentifier, "basicInfo");
    this.setState({ ...this.state, basicInfo });
  };
  updateFieldInfo = (event, inputIdentifier) => {
    let fieldInfo = this.onChangeHandler(event, inputIdentifier, "fieldInfo");
    this.setState({ ...this.state, fieldInfo });
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  };

  render() {
    console.log(this.state.basicInfo);
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
        {/*<RegistrationChurchInfo
          onChangeHandler={props.onChangeHandler}
          stateData={props.stateData}
        />*/}

        <div className={"Registration-button-container margin-left-6"}>
          <Button buttonClass={"Registration-blue-button button-1-2--global"}>
            Next
            <ArrowRight16 className={"ArrowIcon-registration-next"} />
          </Button>
        </div>
      </div>
    );
  }
}

export default RegistrationForms1;
