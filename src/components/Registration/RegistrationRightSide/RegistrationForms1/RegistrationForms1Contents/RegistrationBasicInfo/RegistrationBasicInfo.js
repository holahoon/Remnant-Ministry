import React from "react";
// import MaskedInput from "react-text-mask";

import InputForm from "../../../../../UI/InputForm/InputForm";

const registrationBasicInfo = props => {
  // turn object into an array
  const basicInfoArray = [];
  for (let key in props.basicInfo) {
    basicInfoArray.push({
      id: key,
      config: props.basicInfo[key]
    });
  }

  let registrationBasicInfo = (
    <form className={"Registration-form Regist-form-1"}>
      {basicInfoArray.map(eachEl => (
        <InputForm
          key={eachEl.id}
          elementType={eachEl.config.elementType}
          elementConfig={eachEl.config.elementConfig}
          label={eachEl.config.elementConfig.label}
          value={eachEl.config.value}
          valid={eachEl.config.valid}
          touched={eachEl.config.touched}
          optional={eachEl.config.optional}
          onChangeHandler={event => props.onChangeHandler(event, eachEl.id)}
        />
      ))}
    </form>
  );

  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Register-h5-title"}>Basic information</h5>

      {registrationBasicInfo}
    </div>
  );
};

export default registrationBasicInfo;

/*
import React, { Component } from "react";
import MaskedInput from "react-text-mask";

import Form from "../../../../../UI/Form/Form";

class RegistrationBasicInfo extends Component {
  // console.log("basic: ", props.formElementsArray);

  // let basicForm = (
  //   <form className={"Registration-form Regist-form-1"}>
  //     {props.formElementsArray.map(eachEl => (
  //       <Input
  //         key={eachEl.id}
  //         elementType={eachEl.config.elementType}
  //         elementConfig={eachEl.config.elementConfig}
  //         label={eachEl.config.elementConfig.placeholder}
  //         value={eachEl.config.value}
  //         onChangeHandler={event => props.onChangeHandler(event, eachEl.id)}
  //       />
  //     ))}
  //   </form>
  // );

  render() {
    const {
      firstNameRegistration,
      lastNameRegistration,
      koreanNameRegistration,
      dateOfBirthRegistration,
      genderRegistration,
      preferredLanguageRegistration
    } = props.stateData.registrationFormValidation;
    return (
      <div className={"Basic-form-container"}>
        <h5 className={"Register-h5-title"}>Basic information</h5>

        <form className={"Registration-form Regist-form-1"}>
          <div>
            <label>
              First name
              <input
                className={
                  !firstNameRegistration.touched
                    ? null
                    : firstNameRegistration.valid
                    ? null
                    : "InputError"
                }
                type="text"
                name="firstNameRegistration"
                value={firstNameRegistration.value}
                placeholder="First Name"
                onChange={props.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Last name
              <input
                className={
                  !lastNameRegistration.touched
                    ? null
                    : lastNameRegistration.valid
                    ? null
                    : "InputError"
                }
                type="text"
                name="lastNameRegistration"
                value={lastNameRegistration.value}
                placeholder="Last Name"
                onChange={props.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Korean name (optional)
              <input
                type="text"
                name="koreanNameRegistration"
                value={koreanNameRegistration.value}
                placeholder="Korean Name"
                onChange={props.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Date of birth
              <MaskedInput
                className={
                  !dateOfBirthRegistration.touched
                    ? null
                    : dateOfBirthRegistration.valid
                    ? null
                    : "InputError"
                }
                mask={[
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
                ]}
                placeholder="MM/DD/YYYY"
                name="dateOfBirthRegistration"
                value={dateOfBirthRegistration.value}
                guide={false}
                onChange={props.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>
              Gender
              <select
                className={
                  !genderRegistration.touched
                    ? null
                    : genderRegistration.valid
                    ? null
                    : "InputError"
                }
                style={genderRegistration.touched ? { color: "#282828" } : null}
                name="genderRegistration"
                value={genderRegistration.value}
                onChange={props.onChangeHandler}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Preferred Language
              <select
                className={
                  !preferredLanguageRegistration.touched
                    ? null
                    : preferredLanguageRegistration.valid
                    ? null
                    : "InputError"
                }
                style={
                  preferredLanguageRegistration.touched
                    ? { color: "#282828" }
                    : null
                }
                name="preferredLanguageRegistration"
                value={preferredLanguageRegistration.value}
                onChange={props.onChangeHandler}
              >
                <option value="">Select</option>
                <option value="english">English</option>
                <option value="korean">Korean</option>
                <option value="spanish">Spanish</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationBasicInfo;
*/
