import { combineReducers } from 'redux';
import { customersPageReducer, editCustomerReducer } from 'Pages';

export const rootReducer = combineReducers({
  customers: customersPageReducer,
  editCustomer: editCustomerReducer,
});
