import { customersTypes, filterValues, optionTypes } from 'constants.js';
import { removeCustomerAndGetNewCustomersObj } from 'Pages/utils';

const initialState = {
  isLoading: false,
  customers: [],
  error: false,
  nameFilter: { type: filterValues[0].value, value: '' },
  paramiters: {
    importantFirst: false,
  },
  demo: {
    isActive: false,
    openDemoPopup: false,
  },
};

const customersPageReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case optionTypes.setParamiter:
      return {
        ...state,
        paramiters: {
          ...state.paramiters,
          [action.payload.name]: action.payload.value,
        },
      };
    case customersTypes.deleteCustomer:
      const newCustomers = removeCustomerAndGetNewCustomersObj(state.customers, action.payload);
      return {
        ...state,
        customers: newCustomers,
      };
    case customersTypes.setDemo:
      return {
        ...state,
        demo: {
          isActive: true,
          openDemoPopup: true,
        },
      };
    case customersTypes.closeDemoPopup:
      return {
        ...state,
        demo: {
          ...state.demo,
          openDemoPopup: false,
        },
      };
    case customersTypes.setInitialState:
      return initialState;
    default:
      return state;
  }
};

export default customersPageReducer;
