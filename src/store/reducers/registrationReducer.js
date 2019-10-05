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
  page3Complete: false,
  userInformations: null,
  // firstName: "",
  // lastName: "",
  // koreanName: "",
  // dateOfBirth: "",
  // gender: "",
  // preferredLanguage: ""
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
        // registrationPage: 1,
        page1Complete: true,
        userInformations: {
          firstName: action.userInformations.firstName,
          lastName: action.userInformations.lastName,
          koreanName: action.userInformations.koreanName,
          dateOfBirth: action.userInformations.dateOfBirth,
          gender: action.userInformations.gender,
          preferredLanguage: action.userInformations.preferredLanguage
        }
      };

    case REGISTRATION_PAGE_2:
      return {
        ...state,
        // registrationPage: 2,
        page2Complete: true
      };

    case REGISTRATION_PAGE_3:
      return {
        ...state,
        // registrationPage: 3,
        page3Complete: true
      };

    default:
      return {
        ...state
      };
  }
};

export default registrationReducer;
