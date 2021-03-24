import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { FirebaseContext } from 'firebaseApi';
import CustomersListComponent from './CustomersListComponent';
import { deleteCustomerFetch, fetchCunstomers } from '../actions';
import { selectCustomers } from '../selectors';
import CustomersListPlaceholder from './CustomersListPlaceholder';
import useStyles from './styles';

function CustomersList() {
  const firebase = React.useContext(FirebaseContext);
  const [user] = useAuthState(firebase.auth);
  const customers = useSelector(selectCustomers);
  const isLoading = useSelector(({ customers }) => customers.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    user && dispatch(fetchCunstomers(history));
  }, [user]);

  const onDeleteCustomer = (id) => {
    dispatch(deleteCustomerFetch(id, history));
  };

  if (isLoading) {
    return <CircularProgress className={styles.loader} size={50} />;
  }

  return customers.length > 0 ? (
    <CustomersListComponent list={customers} deleteCustomer={onDeleteCustomer} />
  ) : (
    <CustomersListPlaceholder text={'Вы не добавили клиентов'} />
  );
}

export default CustomersList;
