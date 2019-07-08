import React from "react";

import DayPickerInput from "react-day-picker/DayPickerInput";

const registrationBasicInfo = props => {
  return (
    <div>
      <h5 className={"Register-h5-title"}>Basic information</h5>
      <div>
        <form className={"Registration-form"}>
          <div className={"Registration-form-row1"}>
            <label>
              First name
              <input type="text" name="firstName-register" />
            </label>

            <label>
              Last name
              <input type="text" name="lastName-register" />
            </label>

            <label>
              Korean name (optional)
              <input type="text" name="koreanName-register" />
            </label>
          </div>

          <div className={"Registration-form-row2"}>
            <label>
              Date of birth
              <DayPickerInput />
            </label>

            <label>
              Gender
              <select name="genderSelection-register">
                <option value="not-selected">Selected your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label>
              Preferred Language
              <select name="langaugeSelection-register">
                <option value="english">English</option>
                <option value="korean">Korean</option>
                <option value="spanish">Spanish</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default registrationBasicInfo;
