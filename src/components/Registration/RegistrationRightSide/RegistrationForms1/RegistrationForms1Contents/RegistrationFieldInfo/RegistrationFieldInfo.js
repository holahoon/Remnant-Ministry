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
