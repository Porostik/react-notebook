import React from 'react';
import { Grid, Button } from '@material-ui/core';

import Search from './Search';
import { routesPath } from 'constants.js';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import Paramiters from './Paramiters';

function Options() {
  const history = useHistory();
  const styles = useStyles();

  return (
    <Grid className={styles.root} container item spacing={6} justify="flex-end">
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Paramiters />
      <Grid item container justify="center">
        <Button className={styles.button} onClick={() => history.push(routesPath.addCustomerPage)}>
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
}

export default Options;
