import * as actionTypes from "./actionTypes";

import axios from "axios";

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

export const logout = () => {
  return {
    type: actionTypes.AUTHENTICATION_LOGOUT
  };
};

export const loginAuthenticationStart = () => {
  return {
    type: actionTypes.LOGIN_AUTHENTICATION_START
  };
};

export const loginAuthenticationSuccess = (token, localId) => {
  return {
    type: actionTypes.LOGIN_AUTHENTICATION_SUCCESS,
    idToken: token,
    localId
  };
};

export const loginAuthenticationFail = error => {
  return {
    type: actionTypes.LOGIN_AUTHENTICATION_FAIL,
    error
  };
};

// Start login authentication
export const loginAuthentication = (email, password) => {
  return dispatch => {
    // Start user authentication
    dispatch(loginAuthenticationStart());

    const authenticationData = {
      email,
      password,
      returnSecureToken: true
    };
    const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
    // Signup URL
    const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    axios
      .post(loginURL, authenticationData)
      .then(response => {
        // console.log(response);
        dispatch(
          loginAuthenticationSuccess(
            response.data.idToken,
            response.data.localId
          )
        );
      })
      .catch(error => {
        // console.log(error);
        dispatch(loginAuthenticationFail(error));
      });
  };
};
