import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginFormComponent from './LoginFormComponent';
import { FirebaseContext } from 'firebaseApi';
import { routesPath } from 'constants.js';

function LoginForm() {
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();

  const singIn = async (user, setError) => {
    setError(false);
    try {
      await firebase.login(user.email, user.password);
      history.push(routesPath.customersPage);
    } catch (e) {
      setError('Неверный лоигин или пароль');
    }
  };

  return <LoginFormComponent onSubmit={singIn} />;
}

export default LoginForm;
