import * as actionTypes from "./actionTypes";

import axios from "axios";

export const authenticationStart = () => {
  return {
    type: actionTypes.AUTHENTICATION_START
  };
};

export const authenticationSuccess = (token, localId) => {
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    idToken: token,
    localId
  };
};

export const authenticationFail = error => {
  return {
    type: actionTypes.AUTHENTICATION_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTHENTICATION_LOGOUT
  };
};

export const authentication = (email, password, isSignup) => {
  return dispatch => {
    // Start user authentication
    dispatch(authenticationStart());

    const authenticationData = {
      email,
      password,
      returnSecureToken: true
    };
    const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    axios
      .post(signupURL, authenticationData)
      .then(response => {
        console.log(response);
        dispatch(
          authenticationSuccess(response.data.idToken, response.data.localId)
        );
      })
      .catch(error => {
        console.log(error);
        dispatch(authenticationFail(error));
      });
  };
};
