import React from 'react';
import { Route } from 'react-router-dom';

import { routesPath } from 'constants.js';
import { EditCustomerPage } from 'Pages';
import { Dialog } from '@material-ui/core';

function ModalsRoutes() {
  return (
    <>
      <Route
        exact
        path={`${routesPath.editCustomerPage}/:id`}
        children={({ match }) => (
          <Dialog scroll="body" open={Boolean(match)}>
            <EditCustomerPage />
          </Dialog>
        )}
      />
      <Route
        exact
        path={`${routesPath.addCustomerPage}`}
        children={({ match }) => (
          <Dialog scroll="body" open={Boolean(match)}>
            <EditCustomerPage />
          </Dialog>
        )}
      />
    </>
  );
}

export default ModalsRoutes;
