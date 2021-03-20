import { customersTypes, filterValues, optionTypes } from 'constants.js';

const initialState = {
  guestWarning: {
    active: false,
  },
  isLoading: false,
  customers: [],
  error: false,
  nameFilter: { type: filterValues[0].value, value: null },
  paramiters: {
    importantFirst: false,
  },
};

const customersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case customersTypes.openGusetWarning:
      return {
        ...state,
        guestWarning: {
          active: true,
        },
      };
    case customersTypes.closeGusetWarning:
      return {
        ...state,
        guestWarning: {
          active: false,
        },
      };
    case customersTypes.custmersLoadingStart:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case customersTypes.custmersLoadingError:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case customersTypes.custmersLoadingSuccess:
      return {
        ...state,
        isLoading: false,
        customers: action.payload,
      };
    case customersTypes.updateCustomer:
      return {
        ...state,
        customers: { ...state.customers, [action.payload.uid]: action.payload },
      };
    case optionTypes.setNameFilter:
      return {
        ...state,
        nameFilter: action.payload,
      };
    case optionTypes.setParamiter: {
      return {
        ...state,
        paramiters: {
          ...state.paramiters,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    default:
      return state;
  }
};

export default customersPageReducer;
