import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routesPath } from 'constants.js';
import { CustomersPage, LoginPage, RegistrationPage, ErrorPage } from 'Pages';
import PrivateRoute from './PrivetRoute';
import AuthRoute from './AuthRoute';

function PagesRoutes() {
  return (
    <Switch>
      <AuthRoute
        exact
        path={routesPath.rootRoute + routesPath.registrationPage}
        component={RegistrationPage}
        redirectUrl={routesPath.rootRoute + routesPath.customersPage}
      />
      <AuthRoute
        exact
        path={routesPath.rootRoute + routesPath.loginPage}
        component={LoginPage}
        redirectUrl={routesPath.rootRoute + routesPath.customersPage}
      />
      <Route exact path={routesPath.errorPage} component={ErrorPage} />
      <PrivateRoute
        path={routesPath.rootRoute + routesPath.customersPage}
        component={CustomersPage}
      />
      <PrivateRoute path="*" component={CustomersPage} />
    </Switch>
  );
}

export default PagesRoutes;
