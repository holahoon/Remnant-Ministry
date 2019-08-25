import React from "react";
import MaskedInput from "react-text-mask";

const form = props => {
  let inputElement = null;
  let validationError = null;

  // check to see if props.invalid is true to give dynamic css class to input elements
  if (props.touched && !props.valid) {
    validationError = (
      <p style={{ fontSize: "0.8rem", color: "tomato" }}>
        {props.elementConfig.warning}
      </p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          style={{
            border: `1px solid ${
              props.touched && !props.valid ? "tomato" : "#bebebe"
            }`
          }}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    case "maskedInput":
      inputElement = (
        <MaskedInput
          style={{
            color: `#${props.touched ? "282828" : "BEBEBE"}`,
            border: `1px solid ${
              props.touched && props.value.length < 10 ? "tomato" : "#bebebe"
            }`
          }}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          style={{
            color: `#${props.touched ? "282828" : "BEBEBE"}`,
            border: `1px solid ${
              props.touched && props.value.length <= 0 ? "tomato" : "#bebebe"
            }`
          }}
          value={props.value}
          onChange={props.onChangeHandler}
        >
          {props.elementConfig.options.map(eachOption => (
            <option key={eachOption.value} value={eachOption.value}>
              {eachOption.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          style={{
            border: `1px solid ${
              props.touched && !props.valid ? "red" : "#bebebe"
            }`
          }}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
  }

  return (
    <div style={{ display: `${!props.visible ? "none" : "block"}` }}>
      <label>
        {props.label}
        {inputElement}
        {validationError}
      </label>
    </div>
  );
};

export default form;
