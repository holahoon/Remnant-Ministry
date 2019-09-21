import * as actionTypes from "../actions/actionTypes";

const {
  // LOGIN,
  // LOG_OUT,
  SAVE_USER_INFO,
  ON_LOGIN_PAGE,
  OFF_LOGIN_PAGE,
  LOGIN_AUTHENTICATION_START,
  LOGIN_AUTHENTICATION_SUCCESS,
  LOGIN_AUTHENTICATION_FAIL,
  AUTHENTICATION_LOGOUT
} = actionTypes;

const initialState = {
  onLoginPage: false,
  token: null,
  localId: null,
  loginError: null,
  loading: false
  // loggedIn: false,
  // userInfo: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_PAGE:
      return {
        ...state,
        onLoginPage: true
      };

    case OFF_LOGIN_PAGE:
      return {
        ...state,
        loginError: null,
        onLoginPage: false
      };

    case LOGIN_AUTHENTICATION_START:
      return {
        ...state,
        // loggedIn: false,
        loading: true,
        loginError: null
      };

    case LOGIN_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        // loggedIn: true,
        token: action.idToken,
        localId: action.localId,
        loading: false,
        loginError: null
      };

    case LOGIN_AUTHENTICATION_FAIL:
      return {
        ...state,
        // loggedIn: false,
        localId: null,
        loading: false,
        loginError: action.error
      };

    case AUTHENTICATION_LOGOUT:
      return {
        ...state,
        token: null,
        localId: null,
        error: null
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };

    default:
      return state;
  }
};

export default loginReducer;
