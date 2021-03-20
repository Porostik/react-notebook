import { customersTypes, optionTypes } from 'constants.js';
import { firebase } from 'firebaseApi';

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
