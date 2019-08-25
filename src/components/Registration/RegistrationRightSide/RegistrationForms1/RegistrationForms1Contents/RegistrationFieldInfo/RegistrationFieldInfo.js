import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

const registrationFieldInfo = props => {
  // turn object into an array
  const fieldInfoArray = [];
  for (let key in props.fieldInfo) {
    if (key === "formValidation") {
      continue;
    }
    fieldInfoArray.push({
      id: key,
      config: props.fieldInfo[key]
    });
  }

  let registrationFieldInfo = (
    <form className={"Registration-form Regist-form-2"}>
      {fieldInfoArray.map(eachEl => (
        <InputForm
          key={eachEl.id}
          elementType={eachEl.config.elementType}
          elementConfig={eachEl.config.elementConfig}
          label={eachEl.config.elementConfig.label}
          value={eachEl.config.value}
          valid={eachEl.config.valid}
          touched={eachEl.config.touched}
          optional={eachEl.config.optional}
          visible={eachEl.config.visible}
          onChangeHandler={event => props.onChangeHandler(event, eachEl.id)}
        />
      ))}
    </form>
  );

  return (
    <div className={"Basic-form-container"}>
      <h5 className={"Register-h5-title"}>Field information</h5>

      {registrationFieldInfo}
    </div>
  );
};

export default registrationFieldInfo;

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
