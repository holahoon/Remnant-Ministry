// import * as actionTypes from "./actionTypes";

// import axios from "axios";

// export const loginAuthenticationStart = () => {
//   return {
//     type: actionTypes.AUTHENTICATION_START
//   };
// };

// export const loginAuthenticationSuccess = (token, localId) => {
//   return {
//     type: actionTypes.AUTHENTICATION_SUCCESS,
//     idToken: token,
//     localId
//   };
// };

// export const loginAuthenticationFail = error => {
//   return {
//     type: actionTypes.LOGIN_AUTHENTICATION_FAIL,
//     error
//   };
// };

// export const signupAuthenticationStart = () => {
//   return {
//     type: actionTypes.AUTHENTICATION_START
//   };
// };

// export const signupAuthenticationSuccess = (token, localId) => {
//   return {
//     type: actionTypes.AUTHENTICATION_SUCCESS,
//     idToken: token,
//     localId
//   };
// };

// export const signupAuthenticationFail = error => {
//   return {
//     type: actionTypes.SIGNUP_AUTHENTICATION_FAIL,
//     error
//   };
// };

// export const logout = () => {
//   return {
//     type: actionTypes.AUTHENTICATION_LOGOUT
//   };
// };

// export const authentication = (email, password, authStatus) => {
//   return dispatch => {
//     dispatch(authenticationStart());

//     const authenticationData = {
//       email,
//       password,
//       returnSecureToken: true
//     };
//     const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
//     const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
//     const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

//     if (authStatus === "login") {
//       axios
//         .post(loginURL, authenticationData)
//         .then(response => {
//           console.log(response);
//           dispatch(
//             authenticationSuccess(response.data.idToken, response.data.localId)
//           );
//         })
//         .catch(error => {
//           console.log(error);
//           dispatch(loginAuthenticationFail(error));
//         });
//     } else if (authStatus === "signup") {
//       axios
//         .post(signupURL, authenticationData)
//         .then(response => {
//           console.log(response);
//           dispatch(
//             authenticationSuccess(response.data.idToken, response.data.localId)
//           );
//         })
//         .catch(error => {
//           console.log(error);
//           dispatch(signupAuthenticationFail(error));
//         });
//     }
//   };
// };
