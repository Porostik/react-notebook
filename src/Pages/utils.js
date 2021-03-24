import { orderBy } from 'lodash';

export const converCustomerToReply = (customer) => {
  customer.socials = customer.socials || [];
  customer.initials = customer.fullName.surname[0] + customer.fullName.firstname[0];
  return customer;
};

export const converCustomerToFirebase = (customer) => {
  if (customer.socials.length > 0) {
    customer.socials = customer.socials.reduce((acc, item) => (acc[item.uid] = item), {});
  } else {
    delete customer.socials;
  }

  delete customer.inititals;

  return customer;
};

export const removeCustomerAndGetNewCustomersObj = (customers, id) => {
  let newCustomers = { ...customers };
  delete newCustomers[id];
  if (Object.values(newCustomers) < 1) newCustomers = null;
  return newCustomers;
};

const importantFirstFirstFunc = (list, paramValue) => {
  if (!paramValue) return list;
  return orderBy(list, 'isImportant', 'desc');
};

export const paramitersFuctions = {
  importantFirst: importantFirstFirstFunc,
};
