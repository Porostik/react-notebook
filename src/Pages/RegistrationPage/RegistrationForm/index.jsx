import React from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from 'firebaseApi';
import RegistraionFormComponent from './RegistraionFormComponent';
import { routesPath } from 'constants.js';

function RegistrationForm() {
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  const registrationUser = async (user) => {
    setIsLoading(true);
    try {
      await firebase.registration(user.email, user.password);
      history.push(routesPath.customersPage);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return <RegistraionFormComponent onSubmit={registrationUser} isLoading={isLoading} />;
}

export default RegistrationForm;
