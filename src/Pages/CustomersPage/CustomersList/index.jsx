import { FirebaseContext } from 'firebaseApi';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCunstomers } from '../actions';
import CustomersListComponent from './CustomersListComponent';
import { selectCustomers } from '../selectors';

function CustomersList() {
  const firebase = React.useContext(FirebaseContext);
  const [user] = useAuthState(firebase.auth);
  const customers = useSelector(selectCustomers);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    user && dispatch(fetchCunstomers(history));
  }, [user]);

  return <div>{customers && <CustomersListComponent list={customers} />}</div>;
}

export default CustomersList;
