import React from 'react';
import { Grid, IconButton, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';

import { routesPath } from 'constants.js';
import useStyles from './styles';
import CustomerForm from './CustomerForm';

function EditCustomerPage() {
  const history = useHistory();
  const styles = useStyles();

  return (
    <Paper className={styles.root}>
      <Grid container justify="flex-end">
        <IconButton onClick={() => history.push(routesPath.rootRoute + routesPath.customersPage)}>
          <CloseIcon />
        </IconButton>
      </Grid>
      <CustomerForm />
    </Paper>
  );
}

export default React.forwardRef(EditCustomerPage);
