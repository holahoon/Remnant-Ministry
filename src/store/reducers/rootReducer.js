const initialState = {
  onLoginPage: false,
  loggedIn: false,
  correctUser: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      if (!action.payload.formValidity) {
        return {
          ...state,
          loggedIn: false,
          correctUser: false
        };
      }
      return {
        ...state,
        loggedIn: true,
        correctUser: true
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
