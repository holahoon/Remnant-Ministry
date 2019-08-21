import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

const registrationChurchInfo = props => {
  // turn object into an array
  const churchInfoArray = [];
  for (let key in props.churchInfo) {
    churchInfoArray.push({
      id: key,
      config: props.churchInfo[key]
    });
  }

  let registrationChurchInfo = (
    <form className={"Registration-form Regist-form-3"}>
      {churchInfoArray.map(eachEl => (
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
      <h5 className={"Register-h5-title"}>Your church information</h5>

      {registrationChurchInfo}
    </div>
  );
};

export default registrationChurchInfo;

/*
import React from "react";

const registrationChurchInfo = props => {
  const {
    positionInChurchRegistration,
    trainingLevelRegistration,
    selectChurchRegistration,
    typeChurchRegistration
  } = props.stateData.registrationFormValidation;
  return (
    <div>
      <h5 className={"Register-h5-title"}>Your church information</h5>

      <form className={"Registration-form Regist-form-3"}>
        <div className={"Regist-form-item1"}>
          <label>
            Select your position in church
            <select
              className={
                !positionInChurchRegistration.touched
                  ? null
                  : positionInChurchRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                positionInChurchRegistration.touched
                  ? { color: "#282828" }
                  : null
              }
              name="positionInChurchRegistration"
              value={positionInChurchRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="position1">position 1</option>
              <option value="position2">position 2</option>
              <option value="position3">position 3</option>
            </select>
          </label>
        </div>
        <div className={"Regist-form-item2"}>
          <label>
            Select your training level
            <select
              className={
                !trainingLevelRegistration.touched
                  ? null
                  : trainingLevelRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                trainingLevelRegistration.touched ? { color: "#282828" } : null
              }
              name="trainingLevelRegistration"
              value={trainingLevelRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="no-training">none</option>
              <option value="1cha">1 차</option>
              <option value="2cha">2 차 </option>
              <option value="3cha">3 차</option>
            </select>
          </label>
        </div>
        <div className={"Regist-form-item3"}>
          <label>
            Select your church
            <select
              className={
                !selectChurchRegistration.touched
                  ? null
                  : selectChurchRegistration.valid
                  ? null
                  : "InputError"
              }
              style={
                selectChurchRegistration.touched ? { color: "#282828" } : null
              }
              name="selectChurchRegistration"
              value={selectChurchRegistration.value}
              onChange={props.onChangeHandler}
            >
              <option value="">Select</option>
              <option value="church1">church 1</option>
              <option value="church2">church 2</option>
              <option value="church3">church 3</option>
              <option value="church4">church 4</option>
              <option value="church5">church 5</option>
              <option value="church-not-listed">Church not listed</option>
            </select>
          </label>
        </div>
        <div
          className={
            !selectChurchRegistration.showTypeChurchRegistration
              ? "Regist-form-item4 hideInput"
              : "Regist-form-item4 showInput"
          }
        >
          <label>
            Type your church
            <input
              className={
                !selectChurchRegistration.showTypeChurchRegistration
                  ? "Regist-form-item4 hideInput"
                  : "Regist-form-item4 showInput"
              }
              type="text"
              name="typeChurchRegistration"
              value={typeChurchRegistration.value}
              placeholder="Type your church"
              onChange={props.onChangeHandler}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default registrationChurchInfo;
*/
