import * as actionTypes from "../actions/actionTypes";

const {
  ON_SIGNUP_PAGE,
  OFF_SIGNUP_PAGE,
  SIGNUP_AUTHENTICATION_START,
  SIGNUP_AUTHENTICATION_SUCCESS,
  SIGNUP_AUTHENTICATION_FAIL
} = actionTypes;

const initialState = {
  onSignupPage: false,
  token: null,
  localId: null,
  signupError: null,
  loading: false,
  signupPage2: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SIGNUP_PAGE:
      return {
        ...state,
        onSignupPage: true,
        signupPage2: false
      };

    case OFF_SIGNUP_PAGE:
      return {
        ...state,
        signupError: null,
        onSignupPage: false,
        signupPage2: false
      };

    case SIGNUP_AUTHENTICATION_START:
      return {
        ...state,
        signupError: null,
        loading: true,
        signupPage2: false
      };

    case SIGNUP_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        localId: action.localId,
        signupError: null,
        loading: false,
        signupPage2: true
      };

    case SIGNUP_AUTHENTICATION_FAIL:
      return {
        ...state,
        signupError: action.error,
        loading: false,
        signupPage2: false
      };

    default:
      return state;
  }
};

export default signupReducer;
