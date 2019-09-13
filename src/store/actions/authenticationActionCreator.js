import * as actionTypes from "./actionTypes";

import axios from "axios";

export const authenticationStart = () => {
  return {
    type: actionTypes.AUTHENTICATION_START
  };
};

export const authenticationSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTHENTICATION_SUCCESS,
    token,
    userId
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
    // const apiKey = "AIzaSyD5-kMp-wY62P9GorPz-MUQMOkZ7otppic";
    const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        authenticationData
      )
      .then(response => {
        console.log(response);
        dispatch(authenticationSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authenticationFail(error));
      });
  };
};
