import * as actionTypes from "../actions/actionTypes";

const {
  // LOGIN,
  LOG_OUT,
  SAVE_USER_INFO,
  ON_LOGIN_PAGE,
  OFF_LOGIN_PAGE,
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL
  // AUTHENTICATION_LOGOUT
} = actionTypes;

const initialState = {
  token: null,
  onLoginPage: false,
  // loggedIn: false,
  error: null,
  loading: false,
  // correctUser: false,
  userInfo: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_START:
      return {
        ...state,
        // loggedIn: false,
        loading: true,
        error: null
      };

    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        // loggedIn: true,
        token: action.idToken,
        loading: false,
        error: null
      };

    case AUTHENTICATION_FAIL:
      return {
        ...state,
        // loggedIn: false,
        loading: false,
        error: action.error
      };

    case LOG_OUT:
      return {
        ...state,
        token: null,
        error: null
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };

    case ON_LOGIN_PAGE:
      return {
        ...state,
        onLoginPage: true
      };

    case OFF_LOGIN_PAGE:
      return {
        ...state,
        onLoginPage: false
      };

    default:
      return state;
  }
};

export default loginReducer;
