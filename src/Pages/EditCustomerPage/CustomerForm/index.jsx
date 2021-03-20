import React from 'react';
import { FirebaseContext } from 'firebaseApi';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

import { getDefaultCustomer } from 'constants.js';
import CustomerFormComponent from './CustomerFormComponent';
import CustomersFormLoader from './CustomerFormLoader';
import { fetchCunstomer, updateCustomerFetch } from '../actions';

function CustomerForm() {
  const { id } = useParams();
  const { customer, isLoading } = useSelector(({ editCustomer }) => ({
    customer: editCustomer.customer,
    isLoading: editCustomer.isLoading,
  }));
  const history = useHistory();
  const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext);
  const [user] = useAuthState(firebase.auth);

  React.useEffect(() => {
    user && dispatch(fetchCunstomer(id));
  }, [user]);

  const onSubmit = (customer) => {
    dispatch(updateCustomerFetch(customer, history));
  };

  return isLoading || !user ? (
    <CustomersFormLoader color="primary" />
  ) : (
    <CustomerFormComponent onSubmit={onSubmit} initialValue={customer || getDefaultCustomer()} />
  );
}

export default CustomerForm;
