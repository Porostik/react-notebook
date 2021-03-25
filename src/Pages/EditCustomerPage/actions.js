import { customersTypes, routesPath, editCustomerTypes } from 'constants.js';
import { firebase } from 'firebaseApi';

export const addCustomer = (newCustomer, history) => async (dispatch) => {
  try {
    await firebase.addNewCustomer(newCustomer);
    dispatch(updateCustomer(newCustomer));
    history.push(routesPath.rootRoute + routesPath.customersPage);
  } catch (e) {
    history.push(routesPath.errorPage);
  }
};

export const fetchCunstomer = (id, history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const currentCustomer = await firebase.getCustomer(id);
    dispatch(setEditCustomer(currentCustomer.val()));
  } catch (e) {
    history.push(routesPath.errorPage);
  }
};

export const updateCustomerFetch = (customer, history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    await firebase.updateCstuomer(customer);
    dispatch(updateCustomer(customer));
    history.push(routesPath.rootRoute + routesPath.customersPage);
  } catch (e) {
    history.push(routesPath.errorPage);
  }
};

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
