import React from "react";

const input = props => {
  let inputElement = null;
  let validationError = null;

  // check to see if props.invalid is true to give dynamic css class to input elements
  //   if (props.invalid && props.shouldValidate && props.touched) {
  //     inputClasses.push(classes.Invalid);
  //     validationError = <p>{props.errormessage}</p>;
  //   }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    case "select":
      inputElement = (
        <select value={props.value} onChange={props.onChangeHandler}>
          {props.elementConfig.options.map(eachOption => (
            <option key={eachOption.value} value={eachOption.value}>
              {eachOption.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
  }

  return (
    <div>
      <label>
        {props.label}
        {validationError}
        {inputElement}
      </label>
    </div>
  );
};

export default input;
