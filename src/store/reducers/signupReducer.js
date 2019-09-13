import * as actionTypes from "../actions/actionTypes";

const {
  ON_SIGNUP_PAGE,
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
  AUTHENTICATION_LOGOUT
} = actionTypes;

const initialState = {
  onSignupPage: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SIGNUP_PAGE:
      return {
        ...state,
        onSignupPage: true
      };

    default:
      return state;
  }
};

export default signupReducer;
