import * as actionTypes from "./actionTypes";

export const onLoginPage = () => {
  return {
    type: actionTypes.ON_LOGIN_PAGE
  };
};

export const offLoginPage = () => {
  return {
    type: actionTypes.OFF_LOGIN_PAGE
  };
};
