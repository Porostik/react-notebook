import { customersTypes, optionTypes } from 'constants.js';
import { firebase } from 'firebaseApi';

export const deleteCustomerFetch = (id, history) => async (dispatch) => {
  try {
    await firebase.deleteCustomer(id);
    dispatch(deleteCustomer(id));
  } catch (e) {
    history.push('/errorPage');
  }
};

export const fetchCunstomers = (history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const customers = await firebase.getCustomers();
    dispatch(successLoading(customers.val()));
  } catch (e) {
    dispatch(errorLoading());
    history.push('/errorPage');
  }
};

export const setNameFilter = (type, value) => ({
  type: optionTypes.setNameFilter,
  payload: { type, value },
});

export const setParamiter = (name, value) => ({
  type: optionTypes.setParamiter,
  payload: { name, value },
});

const deleteCustomer = (id) => ({
  type: customersTypes.deleteCustomer,
  payload: id,
});

const startLoading = () => ({
  type: customersTypes.custmersLoadingStart,
});

const errorLoading = () => ({
  type: customersTypes.custmersLoadingError,
});

const successLoading = (customers) => ({
  type: customersTypes.custmersLoadingSuccess,
  payload: customers,
});
