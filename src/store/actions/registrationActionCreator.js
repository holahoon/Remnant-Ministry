import * as actionTypes from "./actionTypes";

export const completeRegistrationPage1 = userInformations => {
  return {
    type: actionTypes.REGISTRATION_PAGE_1,
    userInformations
  };
};

export const completeRegistrationPage2 = () => {
  return {
    type: actionTypes.REGISTRATION_PAGE_2
  };
};

export const completeRegistrationPage3 = () => {
  return {
    type: actionTypes.REGISTRATION_PAGE_3
  };
};
