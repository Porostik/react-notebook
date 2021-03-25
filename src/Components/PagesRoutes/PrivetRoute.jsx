import React from 'react';
import { FirebaseContext } from 'firebaseApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Redirect } from 'react-router-dom';
import PagePlaceholder from 'Components/PagePlaceholder';
import { routesPath } from 'constants.js';

function PrivateRoute({ component: Component, ...rest }) {
  const firebase = React.useContext(FirebaseContext);
  const [user, loading] = useAuthState(firebase.auth);

  return loading ? (
    <PagePlaceholder />
  ) : (
    <Route
      {...rest}
      render={() =>
        user ? <Component /> : <Redirect to={routesPath.rootRoute + routesPath.loginPage} />
      }
    />
  );
}

export default PrivateRoute;
