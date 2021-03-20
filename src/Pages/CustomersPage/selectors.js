import { converCustomerToReply } from 'Pages/utils';
import { createSelector } from 'reselect';

const customers = (state) => state.customers.customers;

export const selectCustomers = createSelector([customers], (arr) =>
  Object.values(arr).map((item) => converCustomerToReply(item)),
);
