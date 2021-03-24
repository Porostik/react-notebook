import { createSelector } from 'reselect';
import { converCustomerToReply, paramitersFuctions } from 'Pages/utils';

const customers = (state) => state.customers.customers;
const paramiters = (state) => state.customers.paramiters;
const searchFilter = (state) => state.customers.nameFilter;

const selectWithSearchFilter = createSelector([customers, searchFilter], (list, filter) => {
  if (!list) return [];
  const customers = Object.values(list);
  const filterValue = filter.value.trim();
  if (!filterValue) return list;
  return customers.filter((item) => item.fullName[filter.type].startsWith(filterValue));
});

const selectCustomersWithParamiters = createSelector(
  [selectWithSearchFilter, paramiters],
  (list, params) => {
    let resultList = list;
    Object.keys(params).forEach((item) => {
      resultList = paramitersFuctions[item](resultList, params[item]);
    });
    return resultList;
  },
);

export const selectCustomers = createSelector([selectCustomersWithParamiters], (arr) => {
  if (!arr) return arr;
  return Object.values(arr).map((item) => converCustomerToReply(item));
});
