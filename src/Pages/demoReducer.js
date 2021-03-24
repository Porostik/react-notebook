import { demoModeTypes } from 'constants.js';

const initialState = {
  isLoading: false,
  error: null,
  demoMode: {
    isActive: false,
    popup: {
      isActive: false,
      text: '',
    },
  },
};

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case demoModeTypes.setDemoMode:
      return {
        ...state,
        demoMode: {
          ...state.demoMode,
          isActive: true,
        },
      };
    case demoModeTypes.openDemoPopup:
      return {
        ...state,
        demoMode: {
          ...state.demoMode,
          popup: {
            isActive: true,
            text: action.payload,
          },
        },
      };
    case demoModeTypes.closeDemoPopup:
      return {
        ...state,
        demoMode: {
          ...state.demoMode,
          popup: {
            isActive: false,
            text: '',
          },
        },
      };
    case demoModeTypes.disableDemoMode:
      return {
        ...state,
        demoMode: {
          ...state.demoMode,
          isActive: false,
          popup: {
            isActive: false,
            text: '',
          },
        },
      };
    default:
      return state;
  }
};

export default loginPageReducer;
