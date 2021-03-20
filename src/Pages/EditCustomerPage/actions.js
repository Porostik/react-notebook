import { customersTypes, routesPath, editCustomerTypes } from 'constants.js';
import { firebase } from 'firebaseApi';

export const fetchCunstomer = (id) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const currentCustomer = await firebase.getCustomer(id);
    dispatch(setEditCustomer(currentCustomer.val()));
  } catch (e) {
    dispatch(errorLoading('Error'));
    console.log(e);
  }
};

export const updateCustomerFetch = (customer, history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    await firebase.updateCstuomer(customer);
    dispatch(updateCustomer(customer));
    history.push(routesPath.customersPage);
  } catch (e) {
    dispatch(errorLoading());
    console.log(e);
  }
};

const errorLoading = (error) => ({
  type: editCustomerTypes.setError,
  payload: error,
});

const startLoading = () => ({
  type: editCustomerTypes.startLoading,
});

export const setEditCustomer = (customer) => ({
  type: editCustomerTypes.setEditCustomer,
  payload: customer,
});

const updateCustomer = (customer) => ({
  type: customersTypes.updateCustomer,
  payload: customer,
});
