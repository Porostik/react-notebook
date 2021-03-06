import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

function CustomerFormLoader() {
  const styles = useStyles();

  return (
    <Box className={styles.loaderRoot}>
      <CircularProgress className={styles.loader} size={80} />
    </Box>
  );
}

export default CustomerFormLoader;
