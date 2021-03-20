import React from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from 'firebaseApi';
import RegistraionFormComponent from './RegistraionFormComponent';
import { routesPath } from 'constants.js';

function RegistrationForm() {
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();

  const registrationUser = async (user) => {
    try {
      await firebase.registration(user.email, user.password);
      history.push(routesPath.customersPage);
    } catch (e) {
      console.log(e);
    }
  };

  return <RegistraionFormComponent onSubmit={registrationUser} />;
}

export default RegistrationForm;
