import * as actionTypes from "../actions/actionTypes";

const { NEXT_STEP, PREV_STEP } = actionTypes;

const initialState = {
  registrationPage: 1
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        registrationPage: state.registrationPage + 1
      };

    case PREV_STEP:
      return {
        ...state,
        registrationPage: state.registrationPage - 1
      };

    default:
      return {
        ...state,
        registrationPage: state.registrationPage
      };
  }
};

export default registrationReducer;
