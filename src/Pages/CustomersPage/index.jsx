import React from 'react';
import { GuestWarWningPopup } from 'Components';
import CustomersList from './CustomersList';
import ModalsRoutes from 'Components/PagesRoutes/ModalsRoutes';
import { Grid } from '@material-ui/core';
import Options from './Options';

function CustomersPage() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={5}>
        <CustomersList />
      </Grid>
      <Grid item xs={6}>
        <Options />
      </Grid>
      <GuestWarWningPopup />
      <ModalsRoutes />
    </Grid>
  );
}

export default CustomersPage;
