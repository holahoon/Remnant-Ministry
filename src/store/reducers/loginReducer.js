import * as actionTypes from "../actions/actionTypes";

const {
  LOGIN,
  LOGOUT,
  SAVE_USER_INFO,
  ON_LOGIN_PAGE,
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
  AUTHENTICATION_LOGOUT
} = actionTypes;

const initialState = {
  token: null,
  onLoginPage: false,
  loggedIn: false,
  correctUser: false,
  userInfo: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    // case AUTHENTICATION_START:
    //   return {

    //   }

    case LOGIN:
      if (action.payload.formIsValid && action.payload.validUser) {
        return {
          ...state,
          loggedIn: true,
          correctUser: true
        };
      }
      return {
        ...state,
        loggedIn: false,
        correctUser: false
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };

    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        correctUser: false
      };

    case ON_LOGIN_PAGE:
      return {
        ...state,
        onLoginPage: !state.onLoginPage
      };

    default:
      return state;
  }
};

export default loginReducer;
