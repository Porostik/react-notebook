import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routesPath } from 'constants.js';
import { CustomersPage, LoginPage, RegistrationPage } from 'Pages';
import PrivateRoute from './PrivetRoute';
import AuthRoute from './AuthRoute';

function PagesRoutes() {
  return (
    <Switch>
      <AuthRoute
        path={routesPath.loginPage}
        component={LoginPage}
        redirectUrl={routesPath.customersPage}
      />
      <AuthRoute
        path={routesPath.registrationPage}
        component={RegistrationPage}
        redirectUrl={routesPath.customersPage}
      />
      <PrivateRoute path={routesPath.customersPage} component={CustomersPage} />
    </Switch>
  );
}

export default PagesRoutes;
