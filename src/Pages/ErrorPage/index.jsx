import React from 'react';
import { useHistory } from 'react-router';

import { routesPath } from 'constants.js';
import ErrorPageComponent from './ErrorPageComponent';

function ErrorPage() {
  const history = useHistory();

  const returnToMainPage = () => {
    history.push(routesPath.rootRoute + routesPath.customersPage);
  };

  return <ErrorPageComponent buttonOnClick={returnToMainPage} />;
}

export default ErrorPage;
