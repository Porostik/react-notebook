import { editCustomerTypes } from 'constants.js';

const initialState = {
  customer: null,
  isLoading: false,
  error: null,
};

const editCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case editCustomerTypes.setEditCustomer:
      return {
        ...state,
        isLoading: false,
        customer: action.payload,
      };
    case editCustomerTypes.startLoading:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case editCustomerTypes.setError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editCustomerReducer;
