import React from "react";

import InputForm from "../../../../../UI/InputForm/InputForm";

const registrationBasicInfo = props => {
  // turn object into an array
  const basicInfoArray = [];
  for (let key in props.basicInfo) {
    if (key === "formValidation") {
      continue;
    }
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
          visible={eachEl.config.visible}
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
