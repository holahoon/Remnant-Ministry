import * as actionTypes from "../actions/actionTypes";

const {
  ON_SIGNUP_PAGE,
  OFF_SIGNUP_PAGE,
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
  AUTHENTICATION_LOGOUT
} = actionTypes;

const initialState = {
  onSignupPage: false,
  token: null,
  localId: null,
  error: null
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SIGNUP_PAGE:
      return {
        ...state,
        onSignupPage: true
      };

    case OFF_SIGNUP_PAGE:
      return {
        ...state,
        onSignupPage: false
      };

    case AUTHENTICATION_START:
      return {
        ...state,
        error: null
      };

    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        localId: action.localId,
        error: null
      };

    case AUTHENTICATION_FAIL:
      return {
        ...state,
        error: action.error
      };

    case AUTHENTICATION_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        error: null
      };

    default:
      return state;
  }
};

export default signupReducer;
