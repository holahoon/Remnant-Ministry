import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

const registrationChurchInfo = props => {
  // turn object into an array
  const churchInfoArray = [];
  for (let key in props.churchInfo) {
    if (key === "formValidation") {
      continue;
    }
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
          visible={eachEl.config.visible}
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
