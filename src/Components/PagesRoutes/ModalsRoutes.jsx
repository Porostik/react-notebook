import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { routesPath } from 'constants.js';
import { EditCustomerPage } from 'Pages';
import { Dialog } from '@material-ui/core';

function ModalsRoutes() {
  const history = useHistory();

  const closeModal = () => {
    history.push(routesPath.rootRoute + routesPath.customersPage);
  };
  return (
    <>
      <Route
        exact
        path={
          routesPath.rootRoute + routesPath.customersPage + `${routesPath.editCustomerPage}/:id`
        }
        children={({ match }) => (
          <Dialog scroll="body" onClose={closeModal} open={Boolean(match)}>
            <EditCustomerPage />
          </Dialog>
        )}
      />
      <Route
        exact
        path={routesPath.rootRoute + routesPath.customersPage + `${routesPath.addCustomerPage}`}
        children={({ match }) => (
          <Dialog scroll="body" onClose={closeModal} open={Boolean(match)}>
            <EditCustomerPage />
          </Dialog>
        )}
      />
    </>
  );
}

export default ModalsRoutes;
