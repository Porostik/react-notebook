import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getDefaultCustomer } from 'constants.js';
import CustomerFormComponent from './CustomerFormComponent';
import CustomersFormLoader from './CustomerFormLoader';
import { addCustomer, fetchCunstomer, updateCustomerFetch } from '../actions';

function CustomerForm() {
  const { id } = useParams();
  const { customer, isLoading } = useSelector(({ editCustomer }) => ({
    customer: editCustomer.customer,
    isLoading: editCustomer.isLoading,
  }));
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCunstomer(id, history));
  }, []);

  const onSubmit = (customer) => {
    customer
      ? dispatch(updateCustomerFetch(customer, history))
      : dispatch(addCustomer(customer, history));
  };

  return isLoading ? (
    <CustomersFormLoader />
  ) : (
    <CustomerFormComponent onSubmit={onSubmit} initialValue={customer || getDefaultCustomer()} />
  );
}

export default CustomerForm;
