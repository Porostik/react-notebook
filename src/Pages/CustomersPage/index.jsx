import React from 'react';
import { Grid } from '@material-ui/core';

import CustomersList from './CustomersList';
import ModalsRoutes from 'Components/PagesRoutes/ModalsRoutes';
import Options from './Options';
import DemoWarning from './DemoWarning';

function CustomersPage() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={5}>
        <CustomersList />
      </Grid>
      <Grid item xs={6}>
        <Options />
      </Grid>
      <ModalsRoutes />
      <DemoWarning />
    </Grid>
  );
}

export default CustomersPage;
