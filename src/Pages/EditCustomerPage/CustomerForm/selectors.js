import { createSelector } from 'reselect';
import { getDefaultCustomer } from 'constants.js';

const customers = (state) => state.customers;

export const selectCustomer = (id) =>
  createSelector([customers], (customersList) => customersList[id] || getDefaultCustomer());
