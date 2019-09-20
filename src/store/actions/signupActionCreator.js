import * as actionTypes from "./actionTypes";

import axios from "axios";

export const onSignupPage = () => {
  return {
    type: actionTypes.ON_SIGNUP_PAGE
  };
};

export const offSignupPage = () => {
  return {
    type: actionTypes.OFF_SIGNUP_PAGE
  };
};

export const signupAuthenticationStart = () => {
  return {
    type: actionTypes.SIGNUP_AUTHENTICATION_START
  };
};

export const signupAuthenticationSuccess = (token, localId) => {
  return {
    type: actionTypes.SIGNUP_AUTHENTICATION_SUCCESS,
    idToken: token,
    localId
  };
};

export const signupAuthenticationFail = error => {
  return {
    type: actionTypes.SIGNUP_AUTHENTICATION_FAIL,
    error
  };
};

export const signupAuthentication = (email, password) => {
  return dispatch => {
    // Start user authentication
    dispatch(signupAuthenticationStart());

    const authenticationData = {
      email,
      password,
      returnSecureToken: true
    };
    const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

    axios
      .post(signupURL, authenticationData)
      .then(response => {
        // console.log(response);
        dispatch(
          signupAuthenticationSuccess(
            response.data.idToken,
            response.data.localId
          )
        );
      })
      .catch(error => {
        // console.log(error);
        dispatch(signupAuthenticationFail(error));
      });
  };
};
