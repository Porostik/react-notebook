import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return <Route {...rest} render={() => (isAuth ? <Component /> : <Redirect to="/login" />)} />;
}

export default PrivateRoute;
