import React, { Component } from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

class RegistrationFieldInfo extends Component {
  state = {
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

  render() {
    return (
      <div>
        <h5 className={"Register-h5-title"}>Field information</h5>

        <form className={"Registration-form Regist-form-2"} />
      </div>
    );
  }
}

export default RegistrationFieldInfo;

/*
import React from "react";

const registrationFieldInfo = props => {
  const {
    schoolRegistration,
    gradeRegistration,
    majorRegistration,
    specialtyRegistration,
    companyRegistration,
    companyTitleRegistration
  } = props.stateData.registrationFormValidation;

  return (
    <div>
      <h5 className={"Register-h5-title"}>Field information</h5>

      <form className={"Registration-form Regist-form-2"}>
        <div>
          <label>
            School
            <input
              className={
                !schoolRegistration.touched
                  ? null
                  : schoolRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="schoolRegistration"
              value={schoolRegistration.value}
              placeholder="School"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Grade
            <select
              className={
                !gradeRegistration.touched
                  ? null
                  : gradeRegistration.valid
                  ? null
                  : "InputError"
              }
              style={gradeRegistration.touched ? { color: "#282828" } : null}
              name="gradeRegistration"
              value={gradeRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="1st-grade">1st grade</option>
              <option value="2nd-grade">2nd grade</option>
              <option value="3rd-grade">3rd grade</option>
              <option value="4th-grade">4th grade</option>
              <option value="5th-grade">5th grade</option>
              <option value="6th-grade">6th grade</option>
              <option value="7th-grade">7th grade</option>
              <option value="8th-grade">8th grade</option>
              <option value="college">college / University</option>
              <option value="not-applicable">Not applicable</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Major
            <input
              className={
                !majorRegistration.touched
                  ? null
                  : majorRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="majorRegistration"
              placeholder="Major"
              value={majorRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Areas of interest / Specialty
            <select
              className={
                !specialtyRegistration.touched
                  ? null
                  : specialtyRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                specialtyRegistration.touched ? { color: "#282828" } : null
              }
              name="specialtyRegistration"
              value={specialtyRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="specialty1">interest 1</option>
              <option value="specialty2">interest 2</option>
              <option value="specialty3">interest 3</option>
              <option value="specialty4">interest 4</option>
              <option value="specialty5">interest 5</option>
              <option value="not-applicable">Not applicable</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Company
            <input
              className={
                !companyRegistration.touched
                  ? null
                  : companyRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="companyRegistration"
              placeholder="Company"
              value={companyRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Title (Company)
            <input
              className={
                !companyTitleRegistration.touched
                  ? null
                  : companyTitleRegistration.valid
                  ? null
                  : "InputError"
              }
              type="text"
              name="companyTitleRegistration"
              placeholder="Title"
              value={companyTitleRegistration.value}
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default registrationFieldInfo;
*/
