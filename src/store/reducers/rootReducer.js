const initialState = {
  onLoginPage: false,
  loggedIn: false,
  correctUser: false,
  userInfo: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
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
    case "SAVEUSERINFO":
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        correctUser: false
      };
    case "ONLOGINPAGE":
      return {
        ...state,
        onLoginPage: true
      };
    case "OFFLOGINPAGE":
      return {
        ...state,
        onLoginPage: false
      };
    default:
      return state;
  }
};

export default rootReducer;
