import * as actionTypes from "../actions/actionTypes";

const {
  NEXT_STEP,
  PREV_STEP,
  REGISTRATION_PAGE_1,
  REGISTRATION_PAGE_2,
  REGISTRATION_PAGE_3
} = actionTypes;

const initialState = {
  registrationPage: 1,
  page1Complete: false,
  page2Complete: false,
  page3Complete: false
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

    case REGISTRATION_PAGE_1:
      return {
        ...state,
        registrationPage: 1,
        page1Complete: true
      };

    case REGISTRATION_PAGE_2:
      return {
        ...state,
        registrationPage: 2,
        page2Complete: true
      };

    case REGISTRATION_PAGE_3:
      return {
        ...state,
        registrationPage: 3,
        page3Complete: true
      };

    default:
      return {
        ...state,
        registrationPage: state.registrationPage,
        page1Complete: false,
        page2Complete: false,
        page3Complete: false
      };
  }
};

export default registrationReducer;
