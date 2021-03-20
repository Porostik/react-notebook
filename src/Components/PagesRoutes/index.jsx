import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routesPath } from 'constants.js';
import { CustomersPage, LoginPage, RegistrationPage } from 'Pages';
import PrivateRoute from './PrivetRoute';

function index() {
  return (
    <Switch>
      <PrivateRoute path="/" isAuth={true} component={CustomersPage} />
      <Route exact path={routesPath.loginPage} component={LoginPage} />
      <Route exact path={routesPath.registrationPage} component={RegistrationPage} />
    </Switch>
  );
}

export default index;
